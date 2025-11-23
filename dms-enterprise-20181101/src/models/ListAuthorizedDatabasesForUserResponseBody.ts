// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedDatabasesForUserResponseBodyDatabasesPermissionDetail extends $dara.Model {
  /**
   * @remarks
   * The type of object on which the operation is performed.
   * 
   * @example
   * DATABASE
   */
  dsType?: string;
  /**
   * @remarks
   * The time when the permissions expire.
   * 
   * @example
   * 2024-12-06 10:00:00
   */
  expireDate?: string;
  /**
   * @remarks
   * If the permission source is a permission policy, the value of this parameter includes the policy name and the operations that are allowed for the user.
   */
  message?: string;
  /**
   * @remarks
   * The type of the permission. Valid values:
   * 
   * *   **QUERY**: the query permission
   * *   **EXPORT**: the data export permission
   * *   **CORRECT**: the data change permission
   * 
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
   * @remarks
   * The database ID.
   * 
   * @example
   * 254****
   */
  dbId?: string;
  /**
   * @remarks
   * The engine of the database.
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment in which the database instance is deployed.
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
   * 235****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true.**: The database is a logical database
   * *   **false**: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The details of permissions. The format of the permission details varies with the permission source. For example, if the permission source is a normal permission, the following parameters are returned.
   */
  permissionDetail?: ListAuthorizedDatabasesForUserResponseBodyDatabasesPermissionDetail;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * poc_testdb
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * poc
   */
  searchName?: string;
  /**
   * @remarks
   * The user IDs.
   * 
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
  /**
   * @remarks
   * The names of the databases on which the user has permissions.
   */
  databases?: ListAuthorizedDatabasesForUserResponseBodyDatabases[];
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
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

