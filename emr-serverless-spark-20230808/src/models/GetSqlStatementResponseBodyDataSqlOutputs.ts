// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlStatementResponseBodyDataSqlOutputs extends $dara.Model {
  /**
   * @remarks
   * The queried data, which is a string in the JSON format.
   * 
   * @example
   * [{\\"values\\":[\\"test_db\\",\\"test_table\\",false]}
   */
  rows?: string;
  rowsFilePath?: string;
  /**
   * @remarks
   * The information about the schema, which is a string in the JSON format.
   * 
   * @example
   * {\\"type\\":\\"struct\\",\\"fields\\":[{\\"name\\":\\"namespace\\",\\"type\\":\\"string\\",\\"nullable\\":false,\\"metadata\\":{}},{\\"name\\":\\"tableName\\",\\"type\\":\\"string\\",\\"nullable\\":false,\\"metadata\\":{}},{\\"name\\":\\"isTemporary\\",\\"type\\":\\"boolean\\",\\"nullable\\":false,\\"metadata\\":{}}]}
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      rows: 'rows',
      rowsFilePath: 'rowsFilePath',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rows: 'string',
      rowsFilePath: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

