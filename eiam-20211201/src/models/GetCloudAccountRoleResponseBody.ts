// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAccountRoleResponseBodyCloudAccountRoleCloudAccountRoleHealthCheckResultErrorReason extends $dara.Model {
  /**
   * @remarks
   * 错误码
   * 
   * @example
   * AuthenticationFail.NoPermission
   */
  errorCode?: string;
  /**
   * @remarks
   * 错误信息
   * 
   * @example
   * There is no permission.
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAccountRoleResponseBodyCloudAccountRoleCloudAccountRoleHealthCheckResult extends $dara.Model {
  /**
   * @remarks
   * 错误原因
   */
  errorReason?: GetCloudAccountRoleResponseBodyCloudAccountRoleCloudAccountRoleHealthCheckResultErrorReason;
  /**
   * @remarks
   * 检测时间
   * 
   * @example
   * 1649830226000
   */
  lastCheckTime?: number;
  /**
   * @remarks
   * 结果
   * 
   * @example
   * success
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      errorReason: 'ErrorReason',
      lastCheckTime: 'LastCheckTime',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorReason: GetCloudAccountRoleResponseBodyCloudAccountRoleCloudAccountRoleHealthCheckResultErrorReason,
      lastCheckTime: 'number',
      result: 'string',
    };
  }

  validate() {
    if(this.errorReason && typeof (this.errorReason as any).validate === 'function') {
      (this.errorReason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAccountRoleResponseBodyCloudAccountRole extends $dara.Model {
  /**
   * @remarks
   * 云账号ID
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * 云账号角色外部唯一ID
   * 
   * @example
   * acs:ram::xxx:role/role-test
   */
  cloudAccountRoleExternalId?: string;
  /**
   * @remarks
   * 云账号角色可用性
   * 
   * @example
   * healthy
   */
  cloudAccountRoleHealth?: string;
  /**
   * @remarks
   * 云账号角色验证结果
   */
  cloudAccountRoleHealthCheckResult?: GetCloudAccountRoleResponseBodyCloudAccountRoleCloudAccountRoleHealthCheckResult;
  /**
   * @remarks
   * 云账号角色ID
   * 
   * @example
   * carole_01kmek49aqxxxx
   */
  cloudAccountRoleId?: string;
  /**
   * @remarks
   * 云账号名称
   * 
   * @example
   * role-test
   */
  cloudAccountRoleName?: string;
  /**
   * @remarks
   * 云账号角色用途
   * 
   * @example
   * role
   */
  cloudAccountRoleType?: string;
  /**
   * @remarks
   * 云账号角色类型
   * 
   * @example
   * system
   */
  cloudAccountRoleUsageType?: string;
  /**
   * @example
   * 1719320115000
   */
  createTime?: number;
  /**
   * @example
   * cloud_account_role_description
   */
  description?: string;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 云账号角色状态
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * 1649830227000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAccountId: 'CloudAccountId',
      cloudAccountRoleExternalId: 'CloudAccountRoleExternalId',
      cloudAccountRoleHealth: 'CloudAccountRoleHealth',
      cloudAccountRoleHealthCheckResult: 'CloudAccountRoleHealthCheckResult',
      cloudAccountRoleId: 'CloudAccountRoleId',
      cloudAccountRoleName: 'CloudAccountRoleName',
      cloudAccountRoleType: 'CloudAccountRoleType',
      cloudAccountRoleUsageType: 'CloudAccountRoleUsageType',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountId: 'string',
      cloudAccountRoleExternalId: 'string',
      cloudAccountRoleHealth: 'string',
      cloudAccountRoleHealthCheckResult: GetCloudAccountRoleResponseBodyCloudAccountRoleCloudAccountRoleHealthCheckResult,
      cloudAccountRoleId: 'string',
      cloudAccountRoleName: 'string',
      cloudAccountRoleType: 'string',
      cloudAccountRoleUsageType: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.cloudAccountRoleHealthCheckResult && typeof (this.cloudAccountRoleHealthCheckResult as any).validate === 'function') {
      (this.cloudAccountRoleHealthCheckResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudAccountRoleResponseBody extends $dara.Model {
  cloudAccountRole?: GetCloudAccountRoleResponseBodyCloudAccountRole;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAccountRole: 'CloudAccountRole',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountRole: GetCloudAccountRoleResponseBodyCloudAccountRole,
      requestId: 'string',
    };
  }

  validate() {
    if(this.cloudAccountRole && typeof (this.cloudAccountRole as any).validate === 'function') {
      (this.cloudAccountRole as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

