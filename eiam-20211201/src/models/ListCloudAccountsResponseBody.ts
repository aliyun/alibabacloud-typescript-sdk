// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAccountsResponseBodyCloudAccountsCloudAccountHealthCheckResultErrorReason extends $dara.Model {
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

export class ListCloudAccountsResponseBodyCloudAccountsCloudAccountHealthCheckResult extends $dara.Model {
  errorReason?: ListCloudAccountsResponseBodyCloudAccountsCloudAccountHealthCheckResultErrorReason;
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
      errorReason: ListCloudAccountsResponseBodyCloudAccountsCloudAccountHealthCheckResultErrorReason,
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

export class ListCloudAccountsResponseBodyCloudAccounts extends $dara.Model {
  /**
   * @remarks
   * 云账号外部唯一ID
   * 
   * @example
   * 1234567
   */
  cloudAccountExternalId?: string;
  /**
   * @remarks
   * 云账号可用性
   * 
   * @example
   * healthy
   */
  cloudAccountHealth?: string;
  cloudAccountHealthCheckResult?: ListCloudAccountsResponseBodyCloudAccountsCloudAccountHealthCheckResult;
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
   * 云账号名称
   * 
   * @example
   * cloud_accout_xxxx
   */
  cloudAccountName?: string;
  /**
   * @remarks
   * 云账号提供商名称
   * 
   * @example
   * idaas-eiam-oidc-provider
   */
  cloudAccountProviderName?: string;
  /**
   * @remarks
   * 云账号类别
   * 
   * @example
   * alibaba_cloud
   */
  cloudAccountVendorType?: string;
  /**
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * 云账号描述
   * 
   * @example
   * cloud_accout_description
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
   * @example
   * 1649830227000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAccountExternalId: 'CloudAccountExternalId',
      cloudAccountHealth: 'CloudAccountHealth',
      cloudAccountHealthCheckResult: 'CloudAccountHealthCheckResult',
      cloudAccountId: 'CloudAccountId',
      cloudAccountName: 'CloudAccountName',
      cloudAccountProviderName: 'CloudAccountProviderName',
      cloudAccountVendorType: 'CloudAccountVendorType',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountExternalId: 'string',
      cloudAccountHealth: 'string',
      cloudAccountHealthCheckResult: ListCloudAccountsResponseBodyCloudAccountsCloudAccountHealthCheckResult,
      cloudAccountId: 'string',
      cloudAccountName: 'string',
      cloudAccountProviderName: 'string',
      cloudAccountVendorType: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.cloudAccountHealthCheckResult && typeof (this.cloudAccountHealthCheckResult as any).validate === 'function') {
      (this.cloudAccountHealthCheckResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudAccountsResponseBody extends $dara.Model {
  cloudAccounts?: ListCloudAccountsResponseBodyCloudAccounts[];
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
      cloudAccounts: 'CloudAccounts',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccounts: { 'type': 'array', 'itemType': ListCloudAccountsResponseBodyCloudAccounts },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAccounts)) {
      $dara.Model.validateArray(this.cloudAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

