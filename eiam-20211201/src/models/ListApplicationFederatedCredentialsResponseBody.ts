// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationFederatedCredentialsResponseBodyApplicationFederatedCredentials extends $dara.Model {
  /**
   * @remarks
   * 应用联邦凭证ID
   * 
   * @example
   * afc_adsa1sdaxxxxx
   */
  applicationFederatedCredentialId?: string;
  /**
   * @remarks
   * 应用联邦凭证名称
   * 
   * @example
   * test
   */
  applicationFederatedCredentialName?: string;
  /**
   * @remarks
   * 应用联邦凭证类型
   * 
   * @example
   * oidc
   */
  applicationFederatedCredentialType?: string;
  /**
   * @remarks
   * 应用ID
   * 
   * @example
   * app_xxxasda1
   */
  applicationId?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1758785994982
   */
  createTime?: number;
  /**
   * @remarks
   * 应用联邦凭证描述
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * 应用联邦凭证提供者ID
   * 
   * @example
   * fcp_das1asda1xxxx
   */
  federatedCredentialProviderId?: string;
  /**
   * @remarks
   * EAIM 实例ID
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 最近使用时间
   * 
   * @example
   * 1758785994982
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * 应用联邦凭证状态
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 1758785994982
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationFederatedCredentialId: 'ApplicationFederatedCredentialId',
      applicationFederatedCredentialName: 'ApplicationFederatedCredentialName',
      applicationFederatedCredentialType: 'ApplicationFederatedCredentialType',
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      description: 'Description',
      federatedCredentialProviderId: 'FederatedCredentialProviderId',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationFederatedCredentialId: 'string',
      applicationFederatedCredentialName: 'string',
      applicationFederatedCredentialType: 'string',
      applicationId: 'string',
      createTime: 'number',
      description: 'string',
      federatedCredentialProviderId: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationFederatedCredentialsResponseBody extends $dara.Model {
  applicationFederatedCredentials?: ListApplicationFederatedCredentialsResponseBodyApplicationFederatedCredentials[];
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
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于上一次翻页查询。
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
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
      applicationFederatedCredentials: 'ApplicationFederatedCredentials',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationFederatedCredentials: { 'type': 'array', 'itemType': ListApplicationFederatedCredentialsResponseBodyApplicationFederatedCredentials },
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationFederatedCredentials)) {
      $dara.Model.validateArray(this.applicationFederatedCredentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

