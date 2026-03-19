// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail extends $dara.Model {
  createDate?: string;
  expireDate?: string;
  extraData?: string;
  originFrom?: string;
  permType?: string;
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
  alias?: string;
  columnName?: string;
  dbId?: string;
  dbType?: string;
  dsType?: string;
  envType?: string;
  host?: string;
  instanceId?: string;
  logic?: boolean;
  permDetails?: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails;
  port?: number;
  schemaName?: string;
  searchName?: string;
  tableId?: string;
  tableName?: string;
  userId?: string;
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

