// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAuthorizedInstancesForUserResponseBodyInstancesPermissionDetail } from "./ListAuthorizedInstancesForUserResponseBodyInstancesPermissionDetail";


export class ListAuthorizedInstancesForUserResponseBodyInstances extends $dara.Model {
  /**
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @example
   * product
   */
  envType?: string;
  /**
   * @example
   * rm-2zex9lrc0gz0****.mysql.rds.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * DMS_TEST
   */
  instanceAlias?: string;
  /**
   * @example
   * 21****
   */
  instanceId?: string;
  permissionDetail?: ListAuthorizedInstancesForUserResponseBodyInstancesPermissionDetail;
  /**
   * @example
   * 3306
   */
  port?: string;
  /**
   * @example
   * 51****
   */
  userId?: string;
  /**
   * @example
   * user_test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      host: 'Host',
      instanceAlias: 'InstanceAlias',
      instanceId: 'InstanceId',
      permissionDetail: 'PermissionDetail',
      port: 'Port',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      envType: 'string',
      host: 'string',
      instanceAlias: 'string',
      instanceId: 'string',
      permissionDetail: ListAuthorizedInstancesForUserResponseBodyInstancesPermissionDetail,
      port: 'string',
      userId: 'string',
      userName: 'string',
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

