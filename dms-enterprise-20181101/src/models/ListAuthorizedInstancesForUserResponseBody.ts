// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedInstancesForUserResponseBodyInstancesPermissionDetail extends $dara.Model {
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
   * The time when the permission expires.
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

export class ListAuthorizedInstancesForUserResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The database engine that the instance runs.
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database instance belongs.
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * The endpoint that is used to connect to the instance.
   * 
   * @example
   * rm-2zex9lrc0gz0****.mysql.rds.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The alias of the instance.
   * 
   * @example
   * DMS_TEST
   */
  instanceAlias?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 21****
   */
  instanceId?: string;
  /**
   * @remarks
   * The details of permissions. The format of the permission details varies with the permission source. For example, if the permission source is a normal permission, the following parameters are returned.
   */
  permissionDetail?: ListAuthorizedInstancesForUserResponseBodyInstancesPermissionDetail;
  /**
   * @remarks
   * The port number that is used to connect to the instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The user IDs.
   * 
   * @example
   * 51****
   */
  userId?: string;
  /**
   * @remarks
   * The user name.
   * 
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
  /**
   * @remarks
   * The list of instances on which the user has permissions.
   */
  instances?: ListAuthorizedInstancesForUserResponseBodyInstances[];
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
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

