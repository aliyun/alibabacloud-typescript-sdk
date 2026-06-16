// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderCloudIdPProviderConfig extends $dara.Model {
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

export class GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderOidcProviderConfig extends $dara.Model {
  /**
   * @remarks
   * A list of audiences for the OIDC credential.
   */
  audiences?: string[];
  /**
   * @remarks
   * The dynamically obtained JWKS.
   * 
   * @example
   * https://example.com
   */
  dynamicJwks?: string;
  /**
   * @remarks
   * The issuer of the OIDC credential.
   * 
   * @example
   * http://test.idaas.com/v2/oauth
   */
  issuer?: string;
  /**
   * @remarks
   * The time of the last JWKS retrieval.
   * 
   * @example
   * 1729061324000
   */
  jwksLastObtainedTime?: number;
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
   * The JWKS endpoint.
   * 
   * @example
   * https://example.com
   */
  jwksUri?: string;
  /**
   * @remarks
   * The static JWKS content.
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
   * The trust condition for the OIDC provider.
   * 
   * @example
   * IsNullOrEmpty("jwt.issuer")
   */
  trustCondition?: string;
  static names(): { [key: string]: string } {
    return {
      audiences: 'Audiences',
      dynamicJwks: 'DynamicJwks',
      issuer: 'Issuer',
      jwksLastObtainedTime: 'JwksLastObtainedTime',
      jwksSource: 'JwksSource',
      jwksUri: 'JwksUri',
      staticJwks: 'StaticJwks',
      trustCondition: 'TrustCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audiences: { 'type': 'array', 'itemType': 'string' },
      dynamicJwks: 'string',
      issuer: 'string',
      jwksLastObtainedTime: 'number',
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

export class GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPkcs7ProviderConfigCertificatesCertificateMetadata extends $dara.Model {
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 1729061324000
   */
  notAfter?: number;
  /**
   * @remarks
   * The time when the certificate becomes valid.
   * 
   * @example
   * 1729061324000
   */
  notBefore?: number;
  static names(): { [key: string]: string } {
    return {
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notAfter: 'number',
      notBefore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPkcs7ProviderConfigCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate metadata.
   */
  certificateMetadata?: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPkcs7ProviderConfigCertificatesCertificateMetadata;
  /**
   * @remarks
   * The content of the certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIE+zCCA0egAwIBAgIJAJZY0ZY0ZY0Z
   * -----END CERTIFICATE-----
   */
  content?: string;
  /**
   * @remarks
   * The fingerprint of the certificate.
   * 
   * @example
   * 2b18947a6a9fc7764fd8b5fb18a863b0c6daxxx
   */
  fingerprint?: string;
  static names(): { [key: string]: string } {
    return {
      certificateMetadata: 'CertificateMetadata',
      content: 'Content',
      fingerprint: 'Fingerprint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateMetadata: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPkcs7ProviderConfigCertificatesCertificateMetadata,
      content: 'string',
      fingerprint: 'string',
    };
  }

  validate() {
    if(this.certificateMetadata && typeof (this.certificateMetadata as any).validate === 'function') {
      (this.certificateMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPkcs7ProviderConfig extends $dara.Model {
  /**
   * @remarks
   * A list of PKCS#7 certificates.
   */
  certificates?: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPkcs7ProviderConfigCertificates[];
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
   * The validity period of the signature, in seconds.
   * 
   * @example
   * 3600
   */
  signatureEffectiveTime?: number;
  /**
   * @remarks
   * An expression that specifies the signing time.
   * 
   * @example
   * pkcs7.payload.jsonData.audience.signingTime
   */
  signingTimeValueExpression?: string;
  /**
   * @remarks
   * The source of the certificate trust anchor.
   * 
   * @example
   * alibaba_cloud
   */
  trustAnchorSource?: string;
  /**
   * @remarks
   * The trust condition for the PKCS#7 provider.
   * 
   * @example
   * IsNullOrEmpty("certNo")
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
      certificates: { 'type': 'array', 'itemType': GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPkcs7ProviderConfigCertificates },
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

export class GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPrivateCaProviderConfigCertificatesCertificateMetadata extends $dara.Model {
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 1729061324000
   */
  notAfter?: number;
  /**
   * @remarks
   * The time when the certificate becomes valid.
   * 
   * @example
   * 1729061324000
   */
  notBefore?: number;
  static names(): { [key: string]: string } {
    return {
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notAfter: 'number',
      notBefore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPrivateCaProviderConfigCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate metadata.
   */
  certificateMetadata?: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPrivateCaProviderConfigCertificatesCertificateMetadata;
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
  /**
   * @remarks
   * The fingerprint of the root certificate.
   * 
   * @example
   * 2b18947a6a9fc7764fd8b5fb18a863b0c6daxxx
   */
  fingerprint?: string;
  static names(): { [key: string]: string } {
    return {
      certificateMetadata: 'CertificateMetadata',
      content: 'Content',
      fingerprint: 'Fingerprint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateMetadata: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPrivateCaProviderConfigCertificatesCertificateMetadata,
      content: 'string',
      fingerprint: 'string',
    };
  }

  validate() {
    if(this.certificateMetadata && typeof (this.certificateMetadata as any).validate === 'function') {
      (this.certificateMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPrivateCaProviderConfig extends $dara.Model {
  /**
   * @remarks
   * A list of root certificates.
   */
  certificates?: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPrivateCaProviderConfigCertificates[];
  /**
   * @remarks
   * The method for obtaining the root certificate.
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
   * IsNullOrEmpty("certNo")
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
      certificates: { 'type': 'array', 'itemType': GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPrivateCaProviderConfigCertificates },
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

export class GetFederatedCredentialProviderResponseBodyFederatedCredentialProvider extends $dara.Model {
  cloudIdPProviderConfig?: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderCloudIdPProviderConfig;
  /**
   * @remarks
   * The time when the provider was created.
   * 
   * @example
   * 1729061324000
   */
  createTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the federated credential provider.
   * 
   * @example
   * fcp_asd123XXX
   */
  federatedCredentialProviderId?: string;
  /**
   * @remarks
   * The name of the federated credential provider.
   * 
   * @example
   * test
   */
  federatedCredentialProviderName?: string;
  /**
   * @remarks
   * The type of the federated credential provider.
   * 
   * @example
   * pkcs7
   */
  federatedCredentialProviderType?: string;
  /**
   * @remarks
   * The ID of the EIAM instance.
   * 
   * @example
   * idaas_qlbbighyxbu42xl7eninojXXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network access endpoint.
   * 
   * @example
   * inae_public
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The OpenID Connect (OIDC) configuration.
   */
  oidcProviderConfig?: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderOidcProviderConfig;
  /**
   * @remarks
   * The PKCS#7 configuration.
   */
  pkcs7ProviderConfig?: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPkcs7ProviderConfig;
  /**
   * @remarks
   * The private certificate authority (CA) configuration.
   */
  privateCaProviderConfig?: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPrivateCaProviderConfig;
  /**
   * @remarks
   * The status of the federated credential provider.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the provider was last updated.
   * 
   * @example
   * 1729061324000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      cloudIdPProviderConfig: 'CloudIdPProviderConfig',
      createTime: 'CreateTime',
      description: 'Description',
      federatedCredentialProviderId: 'FederatedCredentialProviderId',
      federatedCredentialProviderName: 'FederatedCredentialProviderName',
      federatedCredentialProviderType: 'FederatedCredentialProviderType',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      oidcProviderConfig: 'OidcProviderConfig',
      pkcs7ProviderConfig: 'Pkcs7ProviderConfig',
      privateCaProviderConfig: 'PrivateCaProviderConfig',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudIdPProviderConfig: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderCloudIdPProviderConfig,
      createTime: 'number',
      description: 'string',
      federatedCredentialProviderId: 'string',
      federatedCredentialProviderName: 'string',
      federatedCredentialProviderType: 'string',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      oidcProviderConfig: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderOidcProviderConfig,
      pkcs7ProviderConfig: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPkcs7ProviderConfig,
      privateCaProviderConfig: GetFederatedCredentialProviderResponseBodyFederatedCredentialProviderPrivateCaProviderConfig,
      status: 'string',
      updateTime: 'number',
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

export class GetFederatedCredentialProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The federated credential provider.
   */
  federatedCredentialProvider?: GetFederatedCredentialProviderResponseBodyFederatedCredentialProvider;
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
      federatedCredentialProvider: 'FederatedCredentialProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      federatedCredentialProvider: GetFederatedCredentialProviderResponseBodyFederatedCredentialProvider,
      requestId: 'string',
    };
  }

  validate() {
    if(this.federatedCredentialProvider && typeof (this.federatedCredentialProvider as any).validate === 'function') {
      (this.federatedCredentialProvider as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

