// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoleResponseBodyRoleLatestDeletionTask extends $dara.Model {
  /**
   * @remarks
   * The time when the deletion task was created. The time is in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2018-10-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the deletion task.
   * 
   * @example
   * task/acs-service-role/sas.aliyuncs.com/AliyunServiceRoleForSas/20843430-bb43-44fe-a7ff-02ab09183436
   */
  deletionTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      deletionTaskId: 'DeletionTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      deletionTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseBodyRole extends $dara.Model {
  /**
   * @remarks
   * Indicates whether console logon is allowed for the RAM role.
   * 
   * @example
   * true
   */
  allowConsoleLogin?: boolean;
  /**
   * @remarks
   * The resource descriptor of the role.
   * 
   * @example
   * acs:ram::123456789012****:role/ECSAdmin
   */
  arn?: string;
  /**
   * @remarks
   * The access policy that specifies the permission to assume the role.
   * 
   * @example
   * { "Statement": [ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::123456789012****:root" } } ], "Version": "1" }
   */
  assumeRolePolicyDocument?: string;
  /**
   * @remarks
   * The time when the role was created. The time is in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the role.
   * 
   * @example
   * ECS management role
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the role is a service-linked role.
   * 
   * @example
   * true
   */
  isServiceLinkedRole?: boolean;
  /**
   * @remarks
   * The information about the most recent deletion task.
   */
  latestDeletionTask?: GetRoleResponseBodyRoleLatestDeletionTask;
  /**
   * @remarks
   * The maximum session duration of the role.
   * 
   * @example
   * 3600
   */
  maxSessionDuration?: number;
  /**
   * @remarks
   * The ID of the role.
   * 
   * @example
   * 901234567890****
   */
  roleId?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  /**
   * @remarks
   * The name of the role with the domain name suffix.
   * 
   * @example
   * ECSAdmin@role.123456.onaliyunservice.com
   */
  rolePrincipalName?: string;
  /**
   * @remarks
   * The time when the role was last updated. The time is in UTC in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      allowConsoleLogin: 'AllowConsoleLogin',
      arn: 'Arn',
      assumeRolePolicyDocument: 'AssumeRolePolicyDocument',
      createDate: 'CreateDate',
      description: 'Description',
      isServiceLinkedRole: 'IsServiceLinkedRole',
      latestDeletionTask: 'LatestDeletionTask',
      maxSessionDuration: 'MaxSessionDuration',
      roleId: 'RoleId',
      roleName: 'RoleName',
      rolePrincipalName: 'RolePrincipalName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowConsoleLogin: 'boolean',
      arn: 'string',
      assumeRolePolicyDocument: 'string',
      createDate: 'string',
      description: 'string',
      isServiceLinkedRole: 'boolean',
      latestDeletionTask: GetRoleResponseBodyRoleLatestDeletionTask,
      maxSessionDuration: 'number',
      roleId: 'string',
      roleName: 'string',
      rolePrincipalName: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    if(this.latestDeletionTask && typeof (this.latestDeletionTask as any).validate === 'function') {
      (this.latestDeletionTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The role information.
   */
  role?: GetRoleResponseBodyRole;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: GetRoleResponseBodyRole,
    };
  }

  validate() {
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

