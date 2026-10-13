// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataOidcOpenIdConfiguration extends $dara.Model {
  /**
   * @remarks
   * The OAuth2 authorization endpoint.
   * 
   * @example
   * https://demo.com/oauth2/default/v1/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The OIDC issuer information.
   * 
   * @example
   * https://demo.com/fe974231-3454-4b70-9326-70fb71e41bce/v2.0/
   */
  issuer?: string;
  /**
   * @remarks
   * The OIDC JWKS URI.
   * 
   * @example
   * https://demo.com/oauth2/v1/keys
   */
  jwksUri?: string;
  /**
   * @remarks
   * The OAuth2 token endpoint.
   * 
   * @example
   * https://demo.com/api/bff/v1.2/developer/oidc/token
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * The OIDC UserInfo endpoint.
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

export class ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataSamlMetadataConfigurationCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIE+zCCA0egAwIBAgIJAJZY0ZY0ZY0Z -----END CERTIFICATE-----
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataSamlMetadataConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of IdP certificates.
   */
  certificates?: ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataSamlMetadataConfigurationCertificates[];
  /**
   * @remarks
   * The entity ID of the IdP.
   * 
   * @example
   * http://dc.test.com/adfs/services/trust
   */
  idPEntityId?: string;
  /**
   * @remarks
   * The single sign-on URL of the IdP.
   * 
   * @example
   * https://dc.test.com/adfs/ls/
   */
  idPSsoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      idPEntityId: 'IdPEntityId',
      idPSsoUrl: 'IdPSsoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataSamlMetadataConfigurationCertificates },
      idPEntityId: 'string',
      idPSsoUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadata extends $dara.Model {
  /**
   * @remarks
   * The metadata of the OIDC IdP.
   */
  oidcOpenIdConfiguration?: ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataOidcOpenIdConfiguration;
  /**
   * @remarks
   * The metadata of the SAML IdP.
   */
  samlMetadataConfiguration?: ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataSamlMetadataConfiguration;
  static names(): { [key: string]: string } {
    return {
      oidcOpenIdConfiguration: 'OidcOpenIdConfiguration',
      samlMetadataConfiguration: 'SamlMetadataConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oidcOpenIdConfiguration: ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataOidcOpenIdConfiguration,
      samlMetadataConfiguration: ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadataSamlMetadataConfiguration,
    };
  }

  validate() {
    if(this.oidcOpenIdConfiguration && typeof (this.oidcOpenIdConfiguration as any).validate === 'function') {
      (this.oidcOpenIdConfiguration as any).validate();
    }
    if(this.samlMetadataConfiguration && typeof (this.samlMetadataConfiguration as any).validate === 'function') {
      (this.samlMetadataConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecIdentityProviderMetadataUrlResolutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of the identity provider.
   */
  identityProviderMetadata?: ExecIdentityProviderMetadataUrlResolutionResponseBodyIdentityProviderMetadata;
  /**
   * @remarks
   * The request ID.
   * 
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

