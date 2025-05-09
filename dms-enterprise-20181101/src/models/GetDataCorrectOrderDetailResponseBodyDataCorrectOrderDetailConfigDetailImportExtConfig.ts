// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailImportExtConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the first row of the CSV file contains field names. Valid values:
   * 
   * *   **true**: The first row in the CSV file contains field names.
   * *   **false**: The first row in the CSV file contains data.
   * 
   * >  This parameter is valid if the value of **FileType** is **CSV** or **EXCEL**.
   * 
   * @example
   * true
   */
  csvFirstRowIsColumnDef?: boolean;
  /**
   * @remarks
   * Indicates whether an error that occurs is ignored. Valid values:
   * 
   * *   **true**: If an error occurs when SQL statements are being executed, DMS skips the current SQL statement and continues to execute subsequent SQL statements.
   * *   **false**: If an error occurs when SQL statements are being executed, DMS stops executing subsequent SQL statements.
   * 
   * @example
   * false
   */
  ignoreError?: boolean;
  /**
   * @remarks
   * The import mode. Valid values:
   * 
   * *   **FAST_MODE**: fast mode. In the Execute step, the uploaded file is read and SQL statements are executed to import data to the specified destination database. Compared with the security mode, this mode can be used to import data in a less secure but more efficient manner.
   * *   **SAFE_MODE**: security mode. In the Precheck step, the uploaded file is parsed, and SQL statements or CSV file data is cached. In the Execute step, the cached SQL statements are read and executed to import data, or the cached CSV file data is read and imported to the specified destination database. Compared with the fast mode, this mode can be used to import data in a more secure but less efficient manner.
   * 
   * @example
   * FAST_MODE
   */
  importMode?: string;
  /**
   * @remarks
   * The mode in which data is to be imported to the destination table. Valid values:
   * 
   * *   **INSERT**: The database checks the primary key during data insertion. If the primary key is duplicated, an error is reported.
   * *   **INSERT_IGNORE**: If the imported data contains data records that are the same as those in the destination table, the new data records are ignored.
   * *   **REPLACE_INTO**: If the imported data contains a row that has the same value for the primary key or unique index as an existing row in the destination table, the system deletes the existing row and inserts the new row into the destination table.
   * 
   * >  This parameter is valid if the value of FileType is CSV or EXCEL.
   * 
   * @example
   * INSERT
   */
  insertType?: string;
  static names(): { [key: string]: string } {
    return {
      csvFirstRowIsColumnDef: 'CsvFirstRowIsColumnDef',
      ignoreError: 'IgnoreError',
      importMode: 'ImportMode',
      insertType: 'InsertType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csvFirstRowIsColumnDef: 'boolean',
      ignoreError: 'boolean',
      importMode: 'string',
      insertType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

