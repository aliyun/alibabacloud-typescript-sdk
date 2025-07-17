// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the permissions were granted.
   * 
   * @example
   * 2019-12-12 00:00:00
   */
  createDate?: string;
  /**
   * @remarks
   * The time when the permissions expire.
   * 
   * @example
   * 2020-12-12 00:00:00
   */
  expireDate?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * xxx
   */
  extraData?: string;
  /**
   * @remarks
   * The user who grants the permissions.
   * 
   * @example
   * xxx authorization
   */
  originFrom?: string;
  /**
   * @remarks
   * The type of the permissions. Valid values:
   * 
   * *   QUERY: the query permissions
   * *   EXPORT: the export permissions
   * *   CORRECT: the change permissions
   * 
   * @example
   * QUERY
   */
  permType?: string;
  /**
   * @remarks
   * The ID of the authorization record.
   * 
   * @example
   * 758****
   */
  userAccessId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      expireDate: 'ExpireDate',
      extraData: 'ExtraData',
      originFrom: 'OriginFrom',
      permType: 'PermType',
      userAccessId: 'UserAccessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      expireDate: 'string',
      extraData: 'string',
      originFrom: 'string',
      permType: 'string',
      userAccessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails extends $dara.Model {
  permDetail?: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail[];
  static names(): { [key: string]: string } {
    return {
      permDetail: 'PermDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permDetail: { 'type': 'array', 'itemType': ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail },
    };
  }

  validate() {
    if(Array.isArray(this.permDetail)) {
      $dara.Model.validateArray(this.permDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsResponseBodyUserPermissionsUserPermission extends $dara.Model {
  /**
   * @remarks
   * The alias of the instance.
   * 
   * @example
   * instance_alias
   */
  alias?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * column_name
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 1860****
   */
  dbId?: string;
  /**
   * @remarks
   * The type of the database. For more information about the valid values of this parameter, see [DbType parameter](https://www.alibabacloud.com/help/en/data-management-service/latest/dbtype-parameter).
   * 
   * @example
   * polardb
   */
  dbType?: string;
  /**
   * @remarks
   * The permissions on a specific type of objects that are granted to the user. Valid values: 
   * 
   * - DATABASE: permissions on physical databases
   * - LOGIC_DATABASE: permissions on logical databases
   * - TABLE: permissions on physical tables
   * - LOGIC_TABLE: permissions on logical tables
   * 
   * @example
   * DATABASE
   */
  dsType?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs. Valid values:
   * 
   * - product: production environment
   * - dev: development environment
   * - pre: staging environment
   * - test: test environment
   * - sit: SIT environment
   * - uat: UAT environment
   * - pet: stress testing environment
   * - stag: STAG environment
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * The endpoint that is used to connect the database.
   * 
   * @example
   * rm-bp144d5ky4l4r****
   */
  host?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 174****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   true: The database is a logical database.
   * *   false: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The details of permissions.
   */
  permDetails?: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails;
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
   * The name of the database.
   * 
   * @example
   * test_db
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test_db@xxx:3306
   */
  searchName?: string;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 13434
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 51****
   */
  userId?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * nick_name
   */
  userNickName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      columnName: 'ColumnName',
      dbId: 'DbId',
      dbType: 'DbType',
      dsType: 'DsType',
      envType: 'EnvType',
      host: 'Host',
      instanceId: 'InstanceId',
      logic: 'Logic',
      permDetails: 'PermDetails',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      tableId: 'TableId',
      tableName: 'TableName',
      userId: 'UserId',
      userNickName: 'UserNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      columnName: 'string',
      dbId: 'string',
      dbType: 'string',
      dsType: 'string',
      envType: 'string',
      host: 'string',
      instanceId: 'string',
      logic: 'boolean',
      permDetails: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails,
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      tableId: 'string',
      tableName: 'string',
      userId: 'string',
      userNickName: 'string',
    };
  }

  validate() {
    if(this.permDetails && typeof (this.permDetails as any).validate === 'function') {
      (this.permDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsResponseBodyUserPermissions extends $dara.Model {
  userPermission?: ListUserPermissionsResponseBodyUserPermissionsUserPermission[];
  static names(): { [key: string]: string } {
    return {
      userPermission: 'UserPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPermission: { 'type': 'array', 'itemType': ListUserPermissionsResponseBodyUserPermissionsUserPermission },
    };
  }

  validate() {
    if(Array.isArray(this.userPermission)) {
      $dara.Model.validateArray(this.userPermission);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPermissionsResponseBody extends $dara.Model {
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
   * C51420E3-144A-4A94-B473-8662FCF4AD10
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The details of the permissions that the user has.
   */
  userPermissions?: ListUserPermissionsResponseBodyUserPermissions;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      userPermissions: 'UserPermissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      userPermissions: ListUserPermissionsResponseBodyUserPermissions,
    };
  }

  validate() {
    if(this.userPermissions && typeof (this.userPermissions as any).validate === 'function') {
      (this.userPermissions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

