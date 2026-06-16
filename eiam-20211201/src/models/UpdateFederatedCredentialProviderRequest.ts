// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFederatedCredentialProviderRequestOidcProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of audiences.
   */
  audiences?: string[];
  /**
   * @remarks
   * The source of the JSON Web Key Set (JWKS).
   * 
   * This parameter is required.
   * 
   * @example
   * static
   */
  jwksSource?: string;
  /**
   * @remarks
   * JWKS endpoint
   * 
   * @example
   * https://example.com/jwks
   */
  jwksUri?: string;
  /**
   * @remarks
   * The statically obtained JWKS.
   * 
   * @example
   * {
   *   "keys": [
   *     {
   *       "kty": "RSA",
   *       "e": "AQAB",
   *       "use": "sig",
   *       "kid": "KEY2RzsjRrimRASiAhCjBo18YwDoxpYHnHtv",
   *       "n": "qrsfFfSZngqKOxVE29ZIR4SXkwKq029B3HLDAZui_Pwaxwn8FssR9QdwsljZS06BTDp10vhPgqMB7s7TmHulL3I4WuSB-l4uXTXXXX"
   *     }
   *   ]
   * }
   */
  staticJwks?: string;
  /**
   * @remarks
   * The trust condition.
   * 
   * @example
   * IsNullOrEmpty("jwt.issuer")
   */
  trustCondition?: string;
  static names(): { [key: string]: string } {
    return {
      audiences: 'Audiences',
      jwksSource: 'JwksSource',
      jwksUri: 'JwksUri',
      staticJwks: 'StaticJwks',
      trustCondition: 'TrustCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audiences: { 'type': 'array', 'itemType': 'string' },
      jwksSource: 'string',
      jwksUri: 'string',
      staticJwks: 'string',
      trustCondition: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.audiences)) {
      $dara.Model.validateArray(this.audiences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFederatedCredentialProviderRequestPkcs7ProviderConfigCertificates extends $dara.Model {
  /**
   * @remarks
   * The content of the root certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIE+zCCA0egAwIBAgIJAJZY0ZY0ZY0Z
   * -----END CERTIFICATE-----
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

export class UpdateFederatedCredentialProviderRequestPkcs7ProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of PKCS7 certificates.
   */
  certificates?: UpdateFederatedCredentialProviderRequestPkcs7ProviderConfigCertificates[];
  /**
   * @remarks
   * The Cryptographic Message Syntax (CMS) verification mode.
   * 
   * @example
   * cert
   */
  cmsVerificationMode?: string;
  /**
   * @remarks
   * The validity period of the signature.
   * 
   * @example
   * 1200
   */
  signatureEffectiveTime?: number;
  /**
   * @remarks
   * The expression to obtain the signing time.
   * 
   * @example
   * pkcs7.signingTime
   */
  signingTimeValueExpression?: string;
  /**
   * @remarks
   * The source of the certificate trust anchor.
   * 
   * This parameter is required.
   * 
   * @example
   * custom
   */
  trustAnchorSource?: string;
  /**
   * @remarks
   * The trust condition.
   * 
   * @example
   * IsNullOrEmpty("jwt.issuer")
   */
  trustCondition?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      cmsVerificationMode: 'CmsVerificationMode',
      signatureEffectiveTime: 'SignatureEffectiveTime',
      signingTimeValueExpression: 'SigningTimeValueExpression',
      trustAnchorSource: 'TrustAnchorSource',
      trustCondition: 'TrustCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': UpdateFederatedCredentialProviderRequestPkcs7ProviderConfigCertificates },
      cmsVerificationMode: 'string',
      signatureEffectiveTime: 'number',
      signingTimeValueExpression: 'string',
      trustAnchorSource: 'string',
      trustCondition: 'string',
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

export class UpdateFederatedCredentialProviderRequestPrivateCaProviderConfigCertificates extends $dara.Model {
  /**
   * @remarks
   * The content of the root certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIE+zCCA0egAwIBAgIJAJZY0ZY0ZY0Z
   * -----END CERTIFICATE-----
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

export class UpdateFederatedCredentialProviderRequestPrivateCaProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of root certificates.
   */
  certificates?: UpdateFederatedCredentialProviderRequestPrivateCaProviderConfigCertificates[];
  /**
   * @remarks
   * The method to obtain the root certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * custom
   */
  trustAnchorSource?: string;
  /**
   * @remarks
   * The trust condition for the root certificate.
   * 
   * @example
   * IsNullOrEmpty("jwt.issuer")
   */
  trustCondition?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      trustAnchorSource: 'TrustAnchorSource',
      trustCondition: 'TrustCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': UpdateFederatedCredentialProviderRequestPrivateCaProviderConfigCertificates },
      trustAnchorSource: 'string',
      trustCondition: 'string',
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

export class UpdateFederatedCredentialProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the federated credential provider.
   * 
   * This parameter is required.
   * 
   * @example
   * fcp_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  federatedCredentialProviderId?: string;
  /**
   * @remarks
   * The name of the federated credential provider.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  federatedCredentialProviderName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network access endpoint.
   * 
   * @example
   * nae_public
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The OpenID Connect (OIDC) configuration.
   */
  oidcProviderConfig?: UpdateFederatedCredentialProviderRequestOidcProviderConfig;
  /**
   * @remarks
   * The PKCS7 configuration.
   */
  pkcs7ProviderConfig?: UpdateFederatedCredentialProviderRequestPkcs7ProviderConfig;
  /**
   * @remarks
   * The configuration of the private certificate authority (CA).
   */
  privateCaProviderConfig?: UpdateFederatedCredentialProviderRequestPrivateCaProviderConfig;
  static names(): { [key: string]: string } {
    return {
      federatedCredentialProviderId: 'FederatedCredentialProviderId',
      federatedCredentialProviderName: 'FederatedCredentialProviderName',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      oidcProviderConfig: 'OidcProviderConfig',
      pkcs7ProviderConfig: 'Pkcs7ProviderConfig',
      privateCaProviderConfig: 'PrivateCaProviderConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      federatedCredentialProviderId: 'string',
      federatedCredentialProviderName: 'string',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      oidcProviderConfig: UpdateFederatedCredentialProviderRequestOidcProviderConfig,
      pkcs7ProviderConfig: UpdateFederatedCredentialProviderRequestPkcs7ProviderConfig,
      privateCaProviderConfig: UpdateFederatedCredentialProviderRequestPrivateCaProviderConfig,
    };
  }

  validate() {
    if(this.oidcProviderConfig && typeof (this.oidcProviderConfig as any).validate === 'function') {
      (this.oidcProviderConfig as any).validate();
    }
    if(this.pkcs7ProviderConfig && typeof (this.pkcs7ProviderConfig as any).validate === 'function') {
      (this.pkcs7ProviderConfig as any).validate();
    }
    if(this.privateCaProviderConfig && typeof (this.privateCaProviderConfig as any).validate === 'function') {
      (this.privateCaProviderConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

