// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataOidcOpenIdConfiguration extends $dara.Model {
  /**
   * @remarks
   * oAuth2 授权端点。
   * 
   * @example
   * https://demo.com/oauth2/default/v1/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * OIDC issuer信息。
   * 
   * @example
   * https://demo.com/fe974231-3454-4b70-9326-70fb71e41bce/v2.0/
   */
  issuer?: string;
  /**
   * @remarks
   * OIDC jwks地址。
   * 
   * @example
   * https://demo.com/oauth2/v1/keys
   */
  jwksUri?: string;
  /**
   * @remarks
   * oAuth2 Token端点。
   * 
   * @example
   * https://demo.com/api/bff/v1.2/developer/oidc/token
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * OIDC 用户信息端点。
   * 
   * @example
   * https://demo.com/api/bff/v1.2/developer/oidc/userinfo
   */
  userinfoEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      issuer: 'Issuer',
      jwksUri: 'JwksUri',
      tokenEndpoint: 'TokenEndpoint',
      userinfoEndpoint: 'UserinfoEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      issuer: 'string',
      jwksUri: 'string',
      tokenEndpoint: 'string',
      userinfoEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadata extends $dara.Model {
  /**
   * @remarks
   * OIDC IdP的Meta信息。
   */
  oidcOpenIdConfiguration?: ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataOidcOpenIdConfiguration;
  static names(): { [key: string]: string } {
    return {
      oidcOpenIdConfiguration: 'OidcOpenIdConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oidcOpenIdConfiguration: ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataOidcOpenIdConfiguration,
    };
  }

  validate() {
    if(this.oidcOpenIdConfiguration && typeof (this.oidcOpenIdConfiguration as any).validate === 'function') {
      (this.oidcOpenIdConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecIdentityProviderMetadataUrlResolutionResponseBody extends $dara.Model {
  identityProviderMetadata?: ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadata;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderMetadata: 'IdentityProviderMetadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderMetadata: ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadata,
      requestId: 'string',
    };
  }

  validate() {
    if(this.identityProviderMetadata && typeof (this.identityProviderMetadata as any).validate === 'function') {
      (this.identityProviderMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

