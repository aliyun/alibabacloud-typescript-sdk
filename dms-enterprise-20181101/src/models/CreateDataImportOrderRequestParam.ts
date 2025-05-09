// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataImportOrderRequestParamDbItemList } from "./CreateDataImportOrderRequestParamDbItemList";


export class CreateDataImportOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * The key of the attachment that contains the SQL statements used to import data. You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to the attachment key from the value of the AttachmentKey parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * order_text
   */
  attachmentName?: string;
  /**
   * @remarks
   * The reason for the data import.
   * 
   * @example
   * test
   */
  classify?: string;
  /**
   * @remarks
   * The type of the CSV file. Valid values:
   * 
   * *   **true**: The first row in the CSV file contains field names.
   * *   **false**: The first row in the CSV file contains data.
   * 
   * >  This parameter is required if you set the **FileType** parameter to **CSV**.
   * 
   * @example
   * true
   */
  csvFirstRowIsColumnDef?: boolean;
  /**
   * @remarks
   * The database to which you want to import data. You can specify only one database.
   * 
   * This parameter is required.
   */
  dbItemList?: CreateDataImportOrderRequestParamDbItemList[];
  execMode?: string;
  /**
   * @remarks
   * The encoding algorithm to be used by the destination database. Valid values:
   * 
   * *   **AUTO**: automatic identification
   * *   **UTF-8**: UTF-8 encoding
   * *   **GBK**: GBK encoding
   * *   **ISO-8859-1**: ISO-8859-1 encoding
   * 
   * @example
   * AUTO
   */
  fileEncoding?: string;
  /**
   * @remarks
   * The format of the file for the data import. Valid values:
   * 
   * *   **SQL**: an SQL file
   * *   **CSV**: a CSV file
   * 
   * This parameter is required.
   * 
   * @example
   * CSV
   */
  fileType?: string;
  /**
   * @remarks
   * Specifies whether to skip an error that occurs. Valid values:
   * 
   * *   **true**: skips the error and continues to execute SQL statements.
   * *   **false**: stops executing SQL statements.
   * 
   * @example
   * false
   */
  ignoreError?: boolean;
  /**
   * @remarks
   * The import mode. Valid values:
   * 
   * *   **FAST_MODE**: In the Execute step, the uploaded file is read and SQL statements are executed to import data to the specified destination database. Compared with the security mode, this mode can be used to import data in a less secure but more efficient manner.
   * *   **SAFE_MODE**: In the Precheck step, the uploaded file is parsed, and SQL statements or CSV file data is cached. In the Execute step, the cached SQL statements are read and executed to import data, or the cached CSV file data is read and imported to the specified destination database. This mode can be used to import data in a more secure but less efficient manner.
   * 
   * @example
   * FAST_MODE
   */
  importMode?: string;
  /**
   * @remarks
   * The mode in which the data in the CSV format is to be written to the destination table. Valid values:
   * 
   * *   **INSERT**: The database checks the primary key when data is written. If a duplicate primary key value exists, an error message is returned.
   * *   **INSERT_IGNORE**: If the imported data contains data records that are the same as those in the destination table, the new data records are ignored.
   * *   **REPLACE_INTO**: If the imported data contains a row that has the same value for the primary key or unique index as one row in the destination table, the database deletes the existing row and inserts the new row into the destination table.
   * 
   * >  This parameter is required if you set the **FileType** parameter to **CSV**.
   * 
   * @example
   * INSERT
   */
  insertType?: string;
  /**
   * @remarks
   * The key of the attachment that contains the SQL statements used to roll back the data import. You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to obtain the attachment key from the value of the AttachmentKey parameter.
   * 
   * >  This parameter is required if you set the **RollbackSqlType** parameter to **ATTACHMENT**.
   * 
   * @example
   * rollback.sql
   */
  rollbackAttachmentName?: string;
  /**
   * @remarks
   * The SQL statements used to roll back the data import.
   * 
   * >  This parameter is required if you set the **RollbackSqlType** parameter to **TEXT**.
   * 
   * @example
   * empty
   */
  rollbackSQL?: string;
  /**
   * @remarks
   * The format of the SQL statements used to roll back the data import. Valid values:
   * 
   * *   **TEXT**: text
   * *   **ATTACHMENT**: attachment
   * 
   * @example
   * TEXT
   */
  rollbackSqlType?: string;
  /**
   * @remarks
   * The destination table to which you want to import the data in the CSV format.
   * 
   * >  This parameter is required if you set the **FileType** parameter to **CSV**.
   * 
   * @example
   * Table_text
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentName: 'AttachmentName',
      classify: 'Classify',
      csvFirstRowIsColumnDef: 'CsvFirstRowIsColumnDef',
      dbItemList: 'DbItemList',
      execMode: 'ExecMode',
      fileEncoding: 'FileEncoding',
      fileType: 'FileType',
      ignoreError: 'IgnoreError',
      importMode: 'ImportMode',
      insertType: 'InsertType',
      rollbackAttachmentName: 'RollbackAttachmentName',
      rollbackSQL: 'RollbackSQL',
      rollbackSqlType: 'RollbackSqlType',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentName: 'string',
      classify: 'string',
      csvFirstRowIsColumnDef: 'boolean',
      dbItemList: { 'type': 'array', 'itemType': CreateDataImportOrderRequestParamDbItemList },
      execMode: 'string',
      fileEncoding: 'string',
      fileType: 'string',
      ignoreError: 'boolean',
      importMode: 'string',
      insertType: 'string',
      rollbackAttachmentName: 'string',
      rollbackSQL: 'string',
      rollbackSqlType: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dbItemList)) {
      $dara.Model.validateArray(this.dbItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

