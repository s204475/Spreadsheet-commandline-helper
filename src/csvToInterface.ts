export function csvToInterface<T>(csv: string): string {
  const [headerRow, dataRow] = csv.trim().split('\n');
  const headers = headerRow.split(',');

  const data = dataRow.split(',');

  let interfaceStr = 'interface MyInterface {\n';

  for (let i = 0; i < headers.length; i++) {
    const header = headers[i].trim();
    const field = header.replace(/ /g, '');
    const value = Number(data[i]) || `"${data[i].trim()}"`;

    interfaceStr += `\t${field}: ${typeof value};\n`;
  }

  interfaceStr += '}';

  return interfaceStr;
}