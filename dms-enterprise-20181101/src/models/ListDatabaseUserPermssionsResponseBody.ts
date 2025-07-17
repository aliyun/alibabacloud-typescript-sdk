// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the permission was created.
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
   * The extra information. This parameter is reserved.
   * 
   * @example
   * DEFAULT
   */
  extraData?: string;
  /**
   * @remarks
   * The description of the entity that authorizes the permission.
   * 
   * @example
   * xxx grant
   */
  originFrom?: string;
  /**
   * @remarks
   * The type of the permission. Valid values:
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
   * 13434
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

export class ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails extends $dara.Model {
  permDetail?: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail[];
  static names(): { [key: string]: string } {
    return {
      permDetail: 'PermDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permDetail: { 'type': 'array', 'itemType': ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail },
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

export class ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermission extends $dara.Model {
  /**
   * @remarks
   * The alias of the database instance.
   * 
   * @example
   * instance_alias
   */
  alias?: string;
  /**
   * @remarks
   * The name of a column.
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
   * 1234
   */
  dbId?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The type of resources on which the user has permissions.
   * 
   * @example
   * DATABASE
   */
  dsType?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 1443
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The details of user permissions.
   */
  permDetails?: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * xxx@xxxx:3306
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * xxx
   */
  searchName?: string;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 42345
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 14324
   */
  userId?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * user_nick_name
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
      instanceId: 'InstanceId',
      logic: 'Logic',
      permDetails: 'PermDetails',
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
      instanceId: 'string',
      logic: 'boolean',
      permDetails: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails,
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

export class ListDatabaseUserPermssionsResponseBodyUserPermissions extends $dara.Model {
  userPermission?: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermission[];
  static names(): { [key: string]: string } {
    return {
      userPermission: 'UserPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPermission: { 'type': 'array', 'itemType': ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermission },
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

export class ListDatabaseUserPermssionsResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 68075D06-7406-4887-83A7-F558A4D28C13
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The details of user permissions.
   */
  userPermissions?: ListDatabaseUserPermssionsResponseBodyUserPermissions;
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
      userPermissions: ListDatabaseUserPermssionsResponseBodyUserPermissions,
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

