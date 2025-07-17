// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the source database.
   * 
   * @example
   * 432532
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database instance belongs. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is not a logical database
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      searchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo extends $dara.Model {
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * e179bbb8163dcdcfacda24858bedb4d8006ae2b8
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList extends $dara.Model {
  /**
   * @remarks
   * The name of the table whose schema you want to synchronize.
   * 
   * @example
   * test_tbl
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The name of the table to which you want to synchronize the schema of a table.
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

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination database.
   * 
   * @example
   * 432543
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database instance belongs. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is not a logical database
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      searchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo extends $dara.Model {
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * e179bbb8163dcdcfacda24858bedb4d8006ae2b8
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to skip errors. Valid values:
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
   * The information about the source database.
   */
  sourceDatabaseInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo;
  /**
   * @remarks
   * The schema version of the source database. Valid values:
   * 
   * *   **DATASOURCE**: the default latest version of the system
   * *   **VERSION**: a previous schema version that you manually specify
   * 
   * @example
   * VERSION
   */
  sourceType?: string;
  /**
   * @remarks
   * The version information about the source instance.
   * 
   * > This parameter is displayed only when the value of the **SourceType** parameter is **VERSION**.
   */
  sourceVersionInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo;
  /**
   * @remarks
   * The information about the table whose schema you want to synchronize.
   */
  tableInfoList?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList[];
  /**
   * @remarks
   * The information about the destination database.
   */
  targetDatabaseInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo;
  /**
   * @remarks
   * The schema version of the destination database. Valid values:
   * 
   * *   **DATASOURCE**: the default latest version of the system
   * *   **VERSION**: a previous schema version that you manually specify
   * 
   * @example
   * DATASOURCE
   */
  targetType?: string;
  /**
   * @remarks
   * The version information about the destination instance.
   * 
   * > This parameter is displayed only when the value of the **SourceType** parameter is **VERSION**.
   */
  targetVersionInfo?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo;
  static names(): { [key: string]: string } {
    return {
      ignoreError: 'IgnoreError',
      sourceDatabaseInfo: 'SourceDatabaseInfo',
      sourceType: 'SourceType',
      sourceVersionInfo: 'SourceVersionInfo',
      tableInfoList: 'TableInfoList',
      targetDatabaseInfo: 'TargetDatabaseInfo',
      targetType: 'TargetType',
      targetVersionInfo: 'TargetVersionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreError: 'boolean',
      sourceDatabaseInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceDatabaseInfo,
      sourceType: 'string',
      sourceVersionInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailSourceVersionInfo,
      tableInfoList: { 'type': 'array', 'itemType': GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTableInfoList },
      targetDatabaseInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetDatabaseInfo,
      targetType: 'string',
      targetVersionInfo: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetailTargetVersionInfo,
    };
  }

  validate() {
    if(this.sourceDatabaseInfo && typeof (this.sourceDatabaseInfo as any).validate === 'function') {
      (this.sourceDatabaseInfo as any).validate();
    }
    if(this.sourceVersionInfo && typeof (this.sourceVersionInfo as any).validate === 'function') {
      (this.sourceVersionInfo as any).validate();
    }
    if(Array.isArray(this.tableInfoList)) {
      $dara.Model.validateArray(this.tableInfoList);
    }
    if(this.targetDatabaseInfo && typeof (this.targetDatabaseInfo as any).validate === 'function') {
      (this.targetDatabaseInfo as any).validate();
    }
    if(this.targetVersionInfo && typeof (this.targetVersionInfo as any).validate === 'function') {
      (this.targetVersionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E1D2B4D-3E53-4ABC-999D-1D2520B3471A
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the schema synchronization ticket.
   */
  structSyncOrderDetail?: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      structSyncOrderDetail: 'StructSyncOrderDetail',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      structSyncOrderDetail: GetStructSyncOrderDetailResponseBodyStructSyncOrderDetail,
      success: 'boolean',
    };
  }

  validate() {
    if(this.structSyncOrderDetail && typeof (this.structSyncOrderDetail as any).validate === 'function') {
      (this.structSyncOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

