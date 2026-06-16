// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersForNetworkAccessEndpointResponseBodyIdentityProvidersForNetworkAccessEndpoint extends $dara.Model {
  /**
   * @remarks
   * The ID of the IdP.
   * 
   * @example
   * idp_nbq7i4ylodmm64iy6t5muxxxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * The name of the IdP.
   * 
   * @example
   * OIDC Provider
   */
  identityProviderName?: string;
  /**
   * @remarks
   * The instance ID.
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
  /**
   * @remarks
   * The collection of IdPs for the network endpoint.
   */
  identityProvidersForNetworkAccessEndpoint?: ListIdentityProvidersForNetworkAccessEndpointResponseBodyIdentityProvidersForNetworkAccessEndpoint[];
  /**
   * @remarks
   * The token that is returned from the call.
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
   * The total number of entries.
   * 
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

