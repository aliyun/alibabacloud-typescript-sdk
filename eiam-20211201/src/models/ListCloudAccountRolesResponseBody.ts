// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAccountRolesResponseBodyCloudAccountRolesCloudAccountRoleHealthCheckResultErrorReason extends $dara.Model {
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
   * The error message.
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

export class ListCloudAccountRolesResponseBodyCloudAccountRolesCloudAccountRoleHealthCheckResult extends $dara.Model {
  /**
   * @remarks
   * The error reason. This field is returned when the health check status is unhealthy.
   */
  errorReason?: ListCloudAccountRolesResponseBodyCloudAccountRolesCloudAccountRoleHealthCheckResultErrorReason;
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
   * The health check result of the cloud role. Valid values:
   * - success: Success.
   * - failed: Failed.
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
      errorReason: ListCloudAccountRolesResponseBodyCloudAccountRolesCloudAccountRoleHealthCheckResultErrorReason,
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

export class ListCloudAccountRolesResponseBodyCloudAccountRoles extends $dara.Model {
  /**
   * @remarks
   * The cloud account ID.
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  cloudAccountRoleCreationType?: string;
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
   * The health status of the cloud role. Valid values:
   * - healthy: Healthy.
   * - unhealthy: Unhealthy.
   * - unknown: Unknown.
   * 
   * @example
   * healthy
   */
  cloudAccountRoleHealth?: string;
  /**
   * @remarks
   * The health check result of the cloud role.
   */
  cloudAccountRoleHealthCheckResult?: ListCloudAccountRolesResponseBodyCloudAccountRolesCloudAccountRoleHealthCheckResult;
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
   * The usage type of the cloud role. Valid values:
   * - system: system.
   * - user: user.
   * 
   * @example
   * system
   */
  cloudAccountRoleUsageType?: string;
  /**
   * @remarks
   * The time when the cloud role was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1719320115000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the cloud role.
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
   * The status of the cloud role. Valid values:
   * - enabled: Enabled.
   * - disable: Disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the cloud role was last updated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1719320117000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAccountId: 'CloudAccountId',
      cloudAccountRoleCreationType: 'CloudAccountRoleCreationType',
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
      cloudAccountRoleCreationType: 'string',
      cloudAccountRoleExternalId: 'string',
      cloudAccountRoleHealth: 'string',
      cloudAccountRoleHealthCheckResult: ListCloudAccountRolesResponseBodyCloudAccountRolesCloudAccountRoleHealthCheckResult,
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

export class ListCloudAccountRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cloud roles.
   */
  cloudAccountRoles?: ListCloudAccountRolesResponseBodyCloudAccountRoles[];
  /**
   * @remarks
   * The maximum number of rows per page in a paging query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token returned for the current request.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAccountRoles: 'CloudAccountRoles',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountRoles: { 'type': 'array', 'itemType': ListCloudAccountRolesResponseBodyCloudAccountRoles },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAccountRoles)) {
      $dara.Model.validateArray(this.cloudAccountRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

