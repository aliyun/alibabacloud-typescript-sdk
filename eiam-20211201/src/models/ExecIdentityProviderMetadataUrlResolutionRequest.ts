// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecIdentityProviderMetadataUrlResolutionRequest extends $dara.Model {
  /**
   * @example
   * idp_mwpcwnhrimlr2horxXXXX
   */
  identityProviderId?: string;
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
   * @example
   * inae_public
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * OIDC Issuer地址。
   * 
   * @example
   * https://login.example.com/.well-known/openid-configuration
   */
  oidcIssuer?: string;
  /**
   * @example
   * https://dc.test.com/FederationMetadata/2007-06/FederationMetadata.xml
   */
  samlMetadataUrl?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      oidcIssuer: 'OidcIssuer',
      samlMetadataUrl: 'SamlMetadataUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      oidcIssuer: 'string',
      samlMetadataUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

