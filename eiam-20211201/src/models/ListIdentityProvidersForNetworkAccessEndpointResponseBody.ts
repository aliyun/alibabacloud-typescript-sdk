// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersForNetworkAccessEndpointResponseBodyIdentityProvidersForNetworkAccessEndpoint extends $dara.Model {
  /**
   * @remarks
   * IdP的ID。
   * 
   * @example
   * idp_nbq7i4ylodmm64iy6t5muxxxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * IdP名称。
   * 
   * @example
   * OIDC Provider
   */
  identityProviderName?: string;
  /**
   * @remarks
   * IDaaS EIAM 实例ID
   * 
   * @example
   * idaas_elk5evwagodqlmwpfehasxxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      identityProviderName: 'IdentityProviderName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      identityProviderName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProvidersForNetworkAccessEndpointResponseBody extends $dara.Model {
  identityProvidersForNetworkAccessEndpoint?: ListIdentityProvidersForNetworkAccessEndpointResponseBodyIdentityProvidersForNetworkAccessEndpoint[];
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
      identityProvidersForNetworkAccessEndpoint: 'IdentityProvidersForNetworkAccessEndpoint',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProvidersForNetworkAccessEndpoint: { 'type': 'array', 'itemType': ListIdentityProvidersForNetworkAccessEndpointResponseBodyIdentityProvidersForNetworkAccessEndpoint },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.identityProvidersForNetworkAccessEndpoint)) {
      $dara.Model.validateArray(this.identityProvidersForNetworkAccessEndpoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

