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
   * The list of audiences.
   */
  audiences?: string[];
  /**
   * @remarks
   * Issuer
   * 
   * @example
   * https://example.com
   */
  issuer?: string;
  /**
   * @remarks
   * The source of the JWKS.
   * 
   * @example
   * static
   */
  jwksSource?: string;
  /**
   * @remarks
   * The JWKS endpoint.
   * 
   * @example
   * https://example.com/jwks
   */
  jwksUri?: string;
  /**
   * @remarks
   * The statically retrieved JWKS.
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
   * The trust condition.
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

export class CreateFederatedCredentialProviderRequestPkcs7ProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of PKCS7 certificates.
   */
  certificates?: CreateFederatedCredentialProviderRequestPkcs7ProviderConfigCertificates[];
  /**
   * @remarks
   * The CMS verification mode.
   * 
   * @example
   * cert_chain
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
   * The expression used to retrieve the signing time.
   * 
   * @example
   * pkcs7.signingTime
   */
  signingTimeValueExpression?: string;
  /**
   * @remarks
   * The source of the certificate trust anchor.
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

export class CreateFederatedCredentialProviderRequestPrivateCaProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of root certificates.
   */
  certificates?: CreateFederatedCredentialProviderRequestPrivateCaProviderConfigCertificates[];
  /**
   * @remarks
   * The method used to retrieve the root certificate.
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
   * The description of the federated trust source.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the federated trust source.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  federatedCredentialProviderName?: string;
  /**
   * @remarks
   * The type of the federated trust source.
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
   * The ID of the network access endpoint.
   * 
   * @example
   * nae_example_id
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The OIDC configuration.
   */
  oidcProviderConfig?: CreateFederatedCredentialProviderRequestOidcProviderConfig;
  /**
   * @remarks
   * The PKCS7 configuration.
   */
  pkcs7ProviderConfig?: CreateFederatedCredentialProviderRequestPkcs7ProviderConfig;
  /**
   * @remarks
   * The private CA configuration.
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

