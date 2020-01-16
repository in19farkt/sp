export function calculateName(name: string) {
  return name.replace(/"/g, '');
}

export function calculateDescription(desc: string) {
  const maxDescriptionLength = 2500;
  return desc.replace(/\//g, '\\').slice(0, maxDescriptionLength);
}

export function calculateFeatures(value: string, filterLineRegExp?: RegExp, separator?: string) {
  return (
    value &&
    value
      .split(separator || '\n')
      .map(item => calculateDescription(item.trim()))
      .filter(item => !!item && !filterLineRegExp?.test(item))
      .join('; ')
  );
}
