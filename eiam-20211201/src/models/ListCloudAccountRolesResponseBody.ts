// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAccountRolesResponseBodyCloudAccountRolesCloudAccountRoleHealthCheckResultErrorReason extends $dara.Model {
  /**
   * @example
   * AuthenticationFail.NoPermission
   */
  errorCode?: string;
  /**
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
  errorReason?: ListCloudAccountRolesResponseBodyCloudAccountRolesCloudAccountRoleHealthCheckResultErrorReason;
  /**
   * @example
   * 1649830226000
   */
  lastCheckTime?: number;
  /**
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
  cloudAccountRoleHealthCheckResult?: ListCloudAccountRolesResponseBodyCloudAccountRolesCloudAccountRoleHealthCheckResult;
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
   * 云账号角色类别
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
   * @remarks
   * 云账号描述
   * 
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
   * 1719320117000
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
  cloudAccountRoles?: ListCloudAccountRolesResponseBodyCloudAccountRoles[];
  /**
   * @remarks
   * 分页查询时每页行数。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
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

