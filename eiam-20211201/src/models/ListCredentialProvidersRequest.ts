// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialProvidersRequestFilter extends $dara.Model {
  /**
   * @example
   * CredentialProviderName
   */
  name?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCredentialProvidersRequest extends $dara.Model {
  /**
   * @remarks
   * 认证令牌提供商ID列表。
   */
  credentialProviderIds?: string[];
  /**
   * @remarks
   * 认证令牌提供商类型列表。
   */
  credentialProviderTypes?: string[];
  filter?: ListCredentialProvidersRequestFilter[];
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 分页查询时每页行数。默认值为20，最大值为100。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * 认证令牌提供商状态列表。
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      credentialProviderIds: 'CredentialProviderIds',
      credentialProviderTypes: 'CredentialProviderTypes',
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialProviderIds: { 'type': 'array', 'itemType': 'string' },
      credentialProviderTypes: { 'type': 'array', 'itemType': 'string' },
      filter: { 'type': 'array', 'itemType': ListCredentialProvidersRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.credentialProviderIds)) {
      $dara.Model.validateArray(this.credentialProviderIds);
    }
    if(Array.isArray(this.credentialProviderTypes)) {
      $dara.Model.validateArray(this.credentialProviderTypes);
    }
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

