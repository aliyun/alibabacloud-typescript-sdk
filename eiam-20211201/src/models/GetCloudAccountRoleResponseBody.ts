// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAccountRoleResponseBodyCloudAccountRoleCloudAccountRoleHealthCheckResultErrorReason extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * AuthenticationFail.NoPermission
   */
  errorCode?: string;
  /**
   * @remarks
   * The error description.
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
   * The error reason. This field is returned when the health check status is unhealthy.
   */
  errorReason?: GetCloudAccountRoleResponseBodyCloudAccountRoleCloudAccountRoleHealthCheckResultErrorReason;
  /**
   * @remarks
   * The time of the last health check. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  lastCheckTime?: number;
  /**
   * @remarks
   * The cloud role health check result. Valid values:
   * 
   * - success: succeeded.
   * 
   * - failed: failed.
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
   * The cloud account ID.
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The cloud role identifier.
   * 
   * @example
   * acs:ram::xxx:role/role-test
   */
  cloudAccountRoleExternalId?: string;
  /**
   * @remarks
   * The cloud role health status. Valid values:
   * - healthy: healthy.
   * - unhealthy: unhealthy.
   * - unknown: unknown.
   * 
   * @example
   * healthy
   */
  cloudAccountRoleHealth?: string;
  /**
   * @remarks
   * The cloud role health check result.
   */
  cloudAccountRoleHealthCheckResult?: GetCloudAccountRoleResponseBodyCloudAccountRoleCloudAccountRoleHealthCheckResult;
  /**
   * @remarks
   * The cloud role ID.
   * 
   * @example
   * carole_01kmek49aqxxxx
   */
  cloudAccountRoleId?: string;
  /**
   * @remarks
   * The cloud role name.
   * 
   * @example
   * role-test
   */
  cloudAccountRoleName?: string;
  /**
   * @remarks
   * The cloud role type. The specific format depends on the cloud account type. Valid values:
   * 
   * - role: applicable to Alibaba Cloud accounts.
   * 
   * @example
   * role
   */
  cloudAccountRoleType?: string;
  /**
   * @remarks
   * The cloud role usage type. Valid values:
   * - system: system.
   * - user: user.
   * 
   * @example
   * system
   */
  cloudAccountRoleUsageType?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1719320115000
   */
  createTime?: number;
  /**
   * @remarks
   * The cloud role description.
   * 
   * @example
   * cloud_account_role_description
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The cloud role status. Valid values:
   * - enabled: enabled.
   * - disable: disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The last update time. The value is a UNIX timestamp in milliseconds.
   * 
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
  /**
   * @remarks
   * The cloud role details.
   */
  cloudAccountRole?: GetCloudAccountRoleResponseBodyCloudAccountRole;
  /**
   * @remarks
   * The request ID.
   * 
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

