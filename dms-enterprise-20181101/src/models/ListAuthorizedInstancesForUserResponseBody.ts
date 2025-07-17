// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedInstancesForUserResponseBodyInstancesPermissionDetail extends $dara.Model {
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

export class ListAuthorizedInstancesForUserResponseBody extends $dara.Model {
  instances?: ListAuthorizedInstancesForUserResponseBodyInstances[];
  /**
   * @example
   * B7DB89CC-017D-5503-8953-38FFE241A618
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListAuthorizedInstancesForUserResponseBodyInstances },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

