import * as React from 'react';
import XLSX from 'xlsx';

import { Grid, Typography } from 'components';
import {
  readFile,
  calculateName,
  calculateDescription,
  savePriceAsCSV,
  calculateFeatures,
} from 'utils/price';

type Palto = {
  Артикул: string;
  'Все характеристики': string;
  Изображение: string;
  Наименование: string;
  Описание?: string;
  РАЗМЕР: string | number;
  СОСТАВ: string;
  Ссылка: string;
  'Название раздела': string;
  ЦВЕТ: string;
  'Цена, руб.': number;
};

enum Column {
  VendorCode,
  Name,
  Price,
  Category,
  Sizes,
  Color,
  Features,
  Description,
  Images,
}

type ResultPalto = Record<Column, string | number>;

const featuresFilterRegExp = /^(размер:|цвет:).+$/i;

export function PaltoPenza() {
  const [price, setPrice] = React.useState<File | null>(null);

  const handleFileSelect = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setPrice(file);
  }, []);

  React.useEffect(() => {
    (async () => {
      if (!price) {
        return;
      }

      const wb = await readFile(price);
      const json = XLSX.utils.sheet_to_json<Palto>(wb.Sheets.Sheet1);

      const resultJson = json.map<ResultPalto>(item => ({
        [Column.VendorCode]: item['Артикул'],
        [Column.Name]: calculateName(item['Наименование']),
        [Column.Price]: Math.ceil(item['Цена, руб.']),
        [Column.Category]: item['Название раздела'],
        [Column.Sizes]: calculateSizes(item['РАЗМЕР']),
        [Column.Color]: item['ЦВЕТ'],
        [Column.Features]: calculateFeatures(item['Все характеристики'], featuresFilterRegExp),
        [Column.Description]: calculateDescription(item['Описание'] || ''),
        [Column.Images]: item['Изображение'],
      }));

      const resultSheet = XLSX.utils.json_to_sheet(resultJson, { skipHeader: true });
      const resultWb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(resultWb, resultSheet, 'Sheet1');

      savePriceAsCSV(resultWb, 'Пальто Пенза');
    })();
  }, [price]);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography>Выгрузка Turbo.Parser (.csv):</Typography>
      </Grid>
      <Grid item>
        <input type="file" onChange={handleFileSelect} accept=".csv" />
      </Grid>
      <Grid item />
    </Grid>
  );
}

function calculateSizes(sizes: string | number) {
  return String(sizes)
    .replace(/\//g, '-')
    .replace(/;/g, '/');
}
