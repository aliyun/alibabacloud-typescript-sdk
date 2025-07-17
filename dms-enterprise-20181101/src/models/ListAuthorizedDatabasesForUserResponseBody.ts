// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedDatabasesForUserResponseBodyDatabasesPermissionDetail extends $dara.Model {
  /**
   * @example
   * DATABASE
   */
  dsType?: string;
  /**
   * @example
   * 2024-12-06 10:00:00
   */
  expireDate?: string;
  message?: string;
  /**
   * @example
   * CORRECT
   */
  permType?: string;
  static names(): { [key: string]: string } {
    return {
      dsType: 'DsType',
      expireDate: 'ExpireDate',
      message: 'Message',
      permType: 'PermType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsType: 'string',
      expireDate: 'string',
      message: 'string',
      permType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedDatabasesForUserResponseBodyDatabases extends $dara.Model {
  /**
   * @example
   * 254****
   */
  dbId?: string;
  /**
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @example
   * product
   */
  envType?: string;
  /**
   * @example
   * 235****
   */
  instanceId?: string;
  /**
   * @example
   * false
   */
  logic?: boolean;
  permissionDetail?: ListAuthorizedDatabasesForUserResponseBodyDatabasesPermissionDetail;
  /**
   * @example
   * poc_testdb
   */
  schemaName?: string;
  /**
   * @example
   * poc
   */
  searchName?: string;
  /**
   * @example
   * 51****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      instanceId: 'InstanceId',
      logic: 'Logic',
      permissionDetail: 'PermissionDetail',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      dbType: 'string',
      envType: 'string',
      instanceId: 'string',
      logic: 'boolean',
      permissionDetail: ListAuthorizedDatabasesForUserResponseBodyDatabasesPermissionDetail,
      schemaName: 'string',
      searchName: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.permissionDetail && typeof (this.permissionDetail as any).validate === 'function') {
      (this.permissionDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedDatabasesForUserResponseBody extends $dara.Model {
  databases?: ListAuthorizedDatabasesForUserResponseBodyDatabases[];
  /**
   * @example
   * 012AE0B5-4B52-532F-BD7C-1EE9F182089B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListAuthorizedDatabasesForUserResponseBodyDatabases },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

