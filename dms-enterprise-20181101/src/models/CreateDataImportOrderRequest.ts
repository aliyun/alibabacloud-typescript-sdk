// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataImportOrderRequestParamDbItemList extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. The database can be a physical database or a logical database.
   * 
   * *   To obtain the ID of a physical database, call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * *   To obtain the ID of a logical database, call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1860****
   */
  dbId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is a physical database.
   * 
   * >  If you set this parameter to **true**, the database that you specify must be a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CreateDataImportOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the attachment that provides more instructions for the ticket. You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to obtain the attachment key from the value of the AttachmentKey parameter.
   * 
   * @example
   * order_attachment.txt
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The purpose or objective of the data import. This parameter is used to help reduce unnecessary communication.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The parameters of the ticket.
   * 
   * This parameter is required.
   */
  param?: CreateDataImportOrderRequestParam;
  realLoginUserUid?: string;
  /**
   * @remarks
   * The stakeholders of the data import. All stakeholders can view the ticket details and assist in the approval process. Irrelevant users other than DMS administrators and database administrators (DBAs) are not allowed to view the ticket details.
   */
  relatedUserList?: number[];
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      param: 'Param',
      realLoginUserUid: 'RealLoginUserUid',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      param: CreateDataImportOrderRequestParam,
      realLoginUserUid: 'string',
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      tid: 'number',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    if(Array.isArray(this.relatedUserList)) {
      $dara.Model.validateArray(this.relatedUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

