// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStructSyncOrderRequestParamSource extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabases](https://help.aliyun.com/document_detail/141876.html) operation to query the ID of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 4324532
   */
  dbId?: number;
  /**
   * @remarks
   * The name that is used to search for the database. You can call the [SearchDatabases](https://help.aliyun.com/document_detail/141876.html) operation to query the name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbSearchName?: string;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is not a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The version number of the schema. The default value is the latest schema version number. For more information, see [Manage schema versions](https://help.aliyun.com/document_detail/202275.html).
   * 
   * @example
   * e179bbb8163dcdcfacda24858bedb4d8006ae2b8
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbSearchName: 'DbSearchName',
      logic: 'Logic',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbSearchName: 'string',
      logic: 'boolean',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderRequestParamTableInfoList extends $dara.Model {
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * test_tbl
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The name of the destination table.
   * 
   * @example
   * test_tbl
   */
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceTableName: 'string',
      targetTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderRequestParamTarget extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabases](https://help.aliyun.com/document_detail/141876.html) operation to query the ID of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 432432
   */
  dbId?: number;
  /**
   * @remarks
   * The name that is used to search for the database. You can call the [SearchDatabases](https://help.aliyun.com/document_detail/141876.html) operation to query the name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbSearchName?: string;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is not a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The version number. By default, this parameter is left empty.
   * 
   * >  If you specify the schema version number of the destination database, Data Management (DMS) only compares the schemas of the two databases.
   * 
   * @example
   * e179bbb8163dcdcfacda24858bedb4d8006ae2b8
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbSearchName: 'DbSearchName',
      logic: 'Logic',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbSearchName: 'string',
      logic: 'boolean',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip an error that occurs in executing an SQL statement. Valid values:
   * 
   * *   **true**: continues to execute subsequent SQL statements if an error occurs in executing an SQL statement.
   * *   **false**: stops executing subsequent SQL statements if an error occurs in executing an SQL statement.
   * 
   * @example
   * false
   */
  ignoreError?: boolean;
  /**
   * @remarks
   * The information about the base database.
   * 
   * This parameter is required.
   */
  source?: CreateStructSyncOrderRequestParamSource;
  /**
   * @remarks
   * The information about the table of which you want to synchronize the schema.
   */
  tableInfoList?: CreateStructSyncOrderRequestParamTableInfoList[];
  /**
   * @remarks
   * The information about the database to which you want to synchronize the schema of a table.
   * 
   * This parameter is required.
   */
  target?: CreateStructSyncOrderRequestParamTarget;
  static names(): { [key: string]: string } {
    return {
      ignoreError: 'IgnoreError',
      source: 'Source',
      tableInfoList: 'TableInfoList',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreError: 'boolean',
      source: CreateStructSyncOrderRequestParamSource,
      tableInfoList: { 'type': 'array', 'itemType': CreateStructSyncOrderRequestParamTableInfoList },
      target: CreateStructSyncOrderRequestParamTarget,
    };
  }

  validate() {
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(Array.isArray(this.tableInfoList)) {
      $dara.Model.validateArray(this.tableInfoList);
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStructSyncOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The key of an attachment that is returned after the attachment is uploaded. You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to query the key of the attachment.
   * 
   * @example
   * upload_3c7edea3-e4c3-4403-857d-737043036f69_test.sql
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The remarks of the ticket.
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
  param?: CreateStructSyncOrderRequestParam;
  /**
   * @remarks
   * The IDs of the stakeholders.
   */
  relatedUserList?: number[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the DMS console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      param: 'Param',
      relatedUserList: 'RelatedUserList',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      param: CreateStructSyncOrderRequestParam,
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

