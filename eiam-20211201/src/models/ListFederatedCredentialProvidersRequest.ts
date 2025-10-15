// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFederatedCredentialProvidersRequest extends $dara.Model {
  /**
   * @remarks
   * 联邦凭证提供方名称
   * 
   * @example
   * test
   */
  federatedCredentialProviderName?: string;
  /**
   * @remarks
   * 联邦凭证提供方类型
   * 
   * @example
   * pkcs7
   */
  federatedCredentialProviderType?: string;
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
   * 查询上一页凭证（Token），取值为上一次API调用返回的previousToken参数值。
   * 
   * @example
   * PTxxxxxexample
   */
  previousToken?: string;
  static names(): { [key: string]: string } {
    return {
      federatedCredentialProviderName: 'FederatedCredentialProviderName',
      federatedCredentialProviderType: 'FederatedCredentialProviderType',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      federatedCredentialProviderName: 'string',
      federatedCredentialProviderType: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

