import * as React from 'react';
import XLSX from 'xlsx';
import { uniqWith } from 'ramda';

import { Grid, Typography } from 'components';
import {
  readFile,
  calculateName,
  calculateDescription,
  savePriceAsCSV,
  calculateFeatures,
} from 'utils/price';

type Product = {
  Ссылка: string;
  Наименование: string;
  'Цена, руб.': number;
  'Название раздела': string;
  ЦВЕТ?: string | number;
  Описание?: string;
  'Все характеристики'?: string;
  Изображение: string;
};

enum Column {
  VendorCode,
  Name,
  Price,
  Category,
  Color,
  Description,
  Features,
  Images,
  RowCount,
}

type ResultProduct = Record<Column, string | number>;

export function OptoLider() {
  const [all, setAll] = React.useState<File | null>(null);

  const handleAllSelect = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setAll(file);
  }, []);

  React.useEffect(() => {
    (async () => {
      if (!all) {
        return;
      }

      const allWb = await readFile(all);

      let allResultJson = uniqWith(
        (a, b) => a[Column.VendorCode] === b[Column.VendorCode],
        calcResultJson(allWb),
      );

      allResultJson = allResultJson.filter(product => !!product[Column.Price]);
      const { withRow, withoutRow } = separateWithRowProducts(allResultJson);

      const withRowResultSheet = XLSX.utils.json_to_sheet(withRow, { skipHeader: true });
      const withoutRowResultSheet = XLSX.utils.json_to_sheet(withoutRow, { skipHeader: true });

      const withRowResultWb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(withRowResultWb, withRowResultSheet, 'Sheet1');

      const withoutRowResultWb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(withoutRowResultWb, withoutRowResultSheet, 'Sheet1');

      savePriceAsCSV(withRowResultWb, 'ОптоЛидер Ряды');
      savePriceAsCSV(withoutRowResultWb, 'ОптоЛидер');
    })();
  }, [all]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography>Выгрузка всех товаров (один файл .xls):</Typography>
      </Grid>
      <Grid item xs={8}>
        <input type="file" onChange={handleAllSelect} accept=".xls" />
      </Grid>
    </Grid>
  );
}

const featuresFilterRegExp = /^(Дропшиппинг|от \d+? шт).+$/i;
const featuresFilterRowCountRegExp = /^(Заказ от: \d+? шт).*$/i;

function calcResultJson(wb: XLSX.WorkBook) {
  const json = XLSX.utils.sheet_to_json<Product>(wb.Sheets[wb.SheetNames[0]]);

  const resultJson = json.map<ResultProduct>(item => ({
    [Column.VendorCode]: calculateVendorCode(item['Ссылка']),
    [Column.Name]: calculateName(item['Наименование']),
    [Column.Price]: Math.ceil(item['Цена, руб.']),
    [Column.Category]: item['Название раздела'],
    [Column.Color]: calculateColor(item['ЦВЕТ'] || ''),
    [Column.Description]: calculateDescription(item['Описание'] || ''),
    [Column.Features]: calculateFeatures(item['Все характеристики'] || '', featuresFilterRegExp),
    [Column.Images]: item['Изображение'],
    [Column.RowCount]: '',
  }));

  return resultJson;
}

function separateWithRowProducts(
  allProducts: ResultProduct[],
): { withRow: ResultProduct[]; withoutRow: ResultProduct[] } {
  const withoutRow = allProducts
    .filter(
      product =>
        !/Заказ от: \d+? шт/.test(product[Column.Features].toString()) ||
        product[Column.Features].toString().includes('Заказ от: 1 шт'),
    )
    .map(product => ({
      ...product,
      [Column.Features]: calculateFeatures(
        product[Column.Features].toString(),
        featuresFilterRowCountRegExp,
        '; ',
      ),
    }));

  const withRow = allProducts
    .filter(
      product =>
        /Заказ от: \d+? шт/.test(product[Column.Features].toString()) &&
        !product[Column.Features].toString().includes('Заказ от: 1 шт'),
    )
    .map(product => ({
      ...product,
      [Column.RowCount]: product[Column.Features]
        .toString()
        .replace(/^.*?Заказ от: (\d+?) шт.*?$/, '$1'),
      [Column.Features]: calculateFeatures(
        product[Column.Features].toString(),
        featuresFilterRowCountRegExp,
        '; ',
      ),
    }));

  return { withRow, withoutRow };
}

function calculateVendorCode(link: string) {
  return link.replace(/^.+?\/product\/(.+?)\//, '$1');
}

function calculateColor(color: string | number) {
  return String(color).replace(/,/g, '/');
}
