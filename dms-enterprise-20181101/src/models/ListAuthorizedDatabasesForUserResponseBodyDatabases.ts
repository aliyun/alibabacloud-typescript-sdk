// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAuthorizedDatabasesForUserResponseBodyDatabasesPermissionDetail } from "./ListAuthorizedDatabasesForUserResponseBodyDatabasesPermissionDetail";


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

