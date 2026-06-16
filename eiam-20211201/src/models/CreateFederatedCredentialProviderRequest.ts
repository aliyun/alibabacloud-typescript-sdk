// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFederatedCredentialProviderRequestCloudIdPProviderConfig extends $dara.Model {
  /**
   * @example
   * idp_m7hk2hbnew5ir3ycfabug6xxxx
   */
  identityProviderId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFederatedCredentialProviderRequestOidcProviderConfig extends $dara.Model {
  /**
   * @remarks
   * A list of audiences. The `aud` claim in the OIDC token must match a value from this list.
   */
  audiences?: string[];
  /**
   * @remarks
   * The issuer identifier for the OIDC provider. This value must match the `iss` claim in the token.
   * 
   * @example
   * https://example.com
   */
  issuer?: string;
  /**
   * @remarks
   * The source of the JSON Web Key Set (JWKS).
   * 
   * @example
   * static
   */
  jwksSource?: string;
  /**
   * @remarks
   * The URI of the JWKS endpoint.
   * 
   * @example
   * https://example.com/jwks
   */
  jwksUri?: string;
  /**
   * @remarks
   * The static JWKS content in JSON format.
   * 
   * @example
   * {
   *   "keys": [
   *     {
   *       "kty": "RSA",
   *       "e": "AQAB",
   *       "use": "sig",
   *       "kid": "KEY2RzsjRrimRASiAhCjBo18YwDoxpYHnHtv",
   *       "n": "qrsfFfSZngqKOxVE29ZIR4SXkwKq029B3HLDAZui_Pwaxwn8FssR9QdwsljZS06BTDp10vhPgqMB7s7TmHulL3I4WuSB-l4uXXXXX"
   *     }
   *   ]
   * }
   */
  staticJwks?: string;
  /**
   * @remarks
   * The condition the OIDC token must meet to be trusted.
   * 
   * @example
   * IsNullOrEmpty("jwt.issuer")
   */
  trustCondition?: string;
  static names(): { [key: string]: string } {
    return {
      audiences: 'Audiences',
      issuer: 'Issuer',
      jwksSource: 'JwksSource',
      jwksUri: 'JwksUri',
      staticJwks: 'StaticJwks',
      trustCondition: 'TrustCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audiences: { 'type': 'array', 'itemType': 'string' },
      issuer: 'string',
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

export class CreateFederatedCredentialProviderRequestPkcs7ProviderConfigCertificates extends $dara.Model {
  /**
   * @remarks
   * The content of the PEM-encoded certificate.
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

export class CreateFederatedCredentialProviderRequestPkcs7ProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The certificates for verifying the PKCS7 signature.
   */
  certificates?: CreateFederatedCredentialProviderRequestPkcs7ProviderConfigCertificates[];
  /**
   * @remarks
   * The Cryptographic Message Syntax (CMS) verification mode.
   * 
   * @example
   * cert_chain
   */
  cmsVerificationMode?: string;
  /**
   * @remarks
   * The validity period of the signature, in seconds.
   * 
   * @example
   * 1200
   */
  signatureEffectiveTime?: number;
  /**
   * @remarks
   * The expression to extract the signing time from the signature.
   * 
   * @example
   * pkcs7.signingTime
   */
  signingTimeValueExpression?: string;
  /**
   * @remarks
   * The source of the trust anchor.
   * 
   * @example
   * custom
   */
  trustAnchorSource?: string;
  /**
   * @remarks
   * The condition that the signature data must meet to be trusted.
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
      certificates: { 'type': 'array', 'itemType': CreateFederatedCredentialProviderRequestPkcs7ProviderConfigCertificates },
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

export class CreateFederatedCredentialProviderRequestPrivateCaProviderConfigCertificates extends $dara.Model {
  /**
   * @remarks
   * The content of the PEM-encoded certificate.
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

export class CreateFederatedCredentialProviderRequestPrivateCaProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The root certificates that form the trust anchor.
   */
  certificates?: CreateFederatedCredentialProviderRequestPrivateCaProviderConfigCertificates[];
  /**
   * @remarks
   * The source of the trust anchor.
   * 
   * @example
   * custom
   */
  trustAnchorSource?: string;
  /**
   * @remarks
   * The condition for trusting the root certificate.
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
      certificates: { 'type': 'array', 'itemType': CreateFederatedCredentialProviderRequestPrivateCaProviderConfigCertificates },
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

export class CreateFederatedCredentialProviderRequest extends $dara.Model {
  cloudIdPProviderConfig?: CreateFederatedCredentialProviderRequestCloudIdPProviderConfig;
  /**
   * @remarks
   * The description of the federated credential provider.
   * 
   * @example
   * test
   */
  description?: string;
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
   * The type of the federated credential provider.
   * 
   * This parameter is required.
   * 
   * @example
   * pkcs7
   */
  federatedCredentialProviderType?: string;
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
   * The network access endpoint ID.
   * 
   * @example
   * nae_example_id
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The configuration for an OIDC-based provider.
   */
  oidcProviderConfig?: CreateFederatedCredentialProviderRequestOidcProviderConfig;
  /**
   * @remarks
   * The configuration for a PKCS7-based provider.
   */
  pkcs7ProviderConfig?: CreateFederatedCredentialProviderRequestPkcs7ProviderConfig;
  /**
   * @remarks
   * The configuration for a private CA-based provider.
   */
  privateCaProviderConfig?: CreateFederatedCredentialProviderRequestPrivateCaProviderConfig;
  static names(): { [key: string]: string } {
    return {
      cloudIdPProviderConfig: 'CloudIdPProviderConfig',
      description: 'Description',
      federatedCredentialProviderName: 'FederatedCredentialProviderName',
      federatedCredentialProviderType: 'FederatedCredentialProviderType',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      oidcProviderConfig: 'OidcProviderConfig',
      pkcs7ProviderConfig: 'Pkcs7ProviderConfig',
      privateCaProviderConfig: 'PrivateCaProviderConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudIdPProviderConfig: CreateFederatedCredentialProviderRequestCloudIdPProviderConfig,
      description: 'string',
      federatedCredentialProviderName: 'string',
      federatedCredentialProviderType: 'string',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      oidcProviderConfig: CreateFederatedCredentialProviderRequestOidcProviderConfig,
      pkcs7ProviderConfig: CreateFederatedCredentialProviderRequestPkcs7ProviderConfig,
      privateCaProviderConfig: CreateFederatedCredentialProviderRequestPrivateCaProviderConfig,
    };
  }

  validate() {
    if(this.cloudIdPProviderConfig && typeof (this.cloudIdPProviderConfig as any).validate === 'function') {
      (this.cloudIdPProviderConfig as any).validate();
    }
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

