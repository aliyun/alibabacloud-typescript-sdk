// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * test_col
   */
  columnName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_tb
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo extends $dara.Model {
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 12345
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
   * The type of the environment to which the instance belongs. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The IDs of the owners of the database.
   */
  ownerIds?: number[];
  /**
   * @remarks
   * The nicknames of the owners of the database.
   */
  ownerNickNames?: string[];
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test@xxxx:3306【test】
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      ownerIds: 'OwnerIds',
      ownerNickNames: 'OwnerNickNames',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickNames: { 'type': 'array', 'itemType': 'string' },
      searchName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    if(Array.isArray(this.ownerNickNames)) {
      $dara.Model.validateArray(this.ownerNickNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo extends $dara.Model {
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
   * The ID of the database administrator (DBA) of the instance.
   * 
   * @example
   * 12345
   */
  dbaId?: number;
  /**
   * @remarks
   * The nickname of the DBA of the instance.
   * 
   * @example
   * test_dba
   */
  dbaNickName?: string;
  /**
   * @remarks
   * The type of the environment to which the instance belongs. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * xxxx
   */
  host?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 12345
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the owners of the instance.
   */
  ownerIds?: number[];
  /**
   * @remarks
   * The nicknames of the owners of the instance.
   */
  ownerNickName?: string[];
  /**
   * @remarks
   * The port that is used to connect to the instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The name that is used to search for the instance.
   * 
   * @example
   * xxxx:3306
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      dbaId: 'DbaId',
      dbaNickName: 'DbaNickName',
      envType: 'EnvType',
      host: 'Host',
      instanceId: 'InstanceId',
      ownerIds: 'OwnerIds',
      ownerNickName: 'OwnerNickName',
      port: 'Port',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      dbaId: 'number',
      dbaNickName: 'string',
      envType: 'string',
      host: 'string',
      instanceId: 'string',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNickName: { 'type': 'array', 'itemType': 'string' },
      port: 'number',
      searchName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    if(Array.isArray(this.ownerNickName)) {
      $dara.Model.validateArray(this.ownerNickName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_tb
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources extends $dara.Model {
  /**
   * @remarks
   * The information about the column.
   */
  columnInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo;
  /**
   * @remarks
   * The information about the database.
   */
  databaseInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo;
  /**
   * @remarks
   * The information about the instance.
   */
  instanceInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo;
  /**
   * @remarks
   * The information about the table.
   */
  tableInfo?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo;
  static names(): { [key: string]: string } {
    return {
      columnInfo: 'ColumnInfo',
      databaseInfo: 'DatabaseInfo',
      instanceInfo: 'InstanceInfo',
      tableInfo: 'TableInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesColumnInfo,
      databaseInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesDatabaseInfo,
      instanceInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesInstanceInfo,
      tableInfo: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResourcesTableInfo,
    };
  }

  validate() {
    if(this.columnInfo && typeof (this.columnInfo as any).validate === 'function') {
      (this.columnInfo as any).validate();
    }
    if(this.databaseInfo && typeof (this.databaseInfo as any).validate === 'function') {
      (this.databaseInfo as any).validate();
    }
    if(this.instanceInfo && typeof (this.instanceInfo as any).validate === 'function') {
      (this.instanceInfo as any).validate();
    }
    if(this.tableInfo && typeof (this.tableInfo as any).validate === 'function') {
      (this.tableInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The type of objects on which you apply for permissions. Valid values:
   * 
   * *   **DB**: database
   * *   **TAB**: table
   * *   **COL**: column
   * *   **INSTANT**: instance
   * 
   * @example
   * DB
   */
  applyType?: string;
  /**
   * @remarks
   * The type of the permissions that you apply for. Valid values:
   * 
   * *   **1**: the permissions to query information.
   * *   **2**: the permissions to export information.
   * *   **3**: the permissions to query and export information.
   * *   **4**: the permissions to modify information.
   * *   **5**: the permissions to query and modify information.
   * *   **6**: the permissions to export and modify information.
   * *   **7**: the permissions to query, export, and modify information.
   * *   **8**: the permissions to log on to the database.
   * 
   * @example
   * 7
   */
  permType?: number;
  /**
   * @remarks
   * The list of resources.
   */
  resources?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources[];
  /**
   * @remarks
   * The validity duration of the permissions. Unit: seconds.
   * 
   * @example
   * 3600
   */
  seconds?: number;
  static names(): { [key: string]: string } {
    return {
      applyType: 'ApplyType',
      permType: 'PermType',
      resources: 'Resources',
      seconds: 'Seconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyType: 'string',
      permType: 'number',
      resources: { 'type': 'array', 'itemType': GetPermApplyOrderDetailResponseBodyPermApplyOrderDetailResources },
      seconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermApplyOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of the permission application ticket.
   */
  permApplyOrderDetail?: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * A4C4499E-5AC2-4318-9FCF-03E426781A04
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      permApplyOrderDetail: 'PermApplyOrderDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      permApplyOrderDetail: GetPermApplyOrderDetailResponseBodyPermApplyOrderDetail,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.permApplyOrderDetail && typeof (this.permApplyOrderDetail as any).validate === 'function') {
      (this.permApplyOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

