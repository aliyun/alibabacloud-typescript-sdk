// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersCloudIdPProviderConfig extends $dara.Model {
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

export class ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersOidcProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of audiences for the OIDC credential.
   */
  audiences?: string[];
  /**
   * @remarks
   * The dynamically obtained JWKS.
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
  dynamicJwks?: string;
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
   * The time when the JWKS was last obtained.
   * 
   * @example
   * 1729061324000
   */
  jwksLastObtainedTime?: number;
  /**
   * @remarks
   * The JWKS source.
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

export class ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfigCertificatesCertificateMetadata extends $dara.Model {
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
   * The effective period of the certificate.
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

export class ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfigCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate metadata.
   */
  certificateMetadata?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfigCertificatesCertificateMetadata;
  /**
   * @remarks
   * The certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIE+zCCA0egAwIBAgIJAJZY0ZY0ZY0Z
   * -----END CERTIFICATE-----
   */
  content?: string;
  /**
   * @remarks
   * The certificate fingerprint.
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
      certificateMetadata: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfigCertificatesCertificateMetadata,
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

export class ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of PKCS7 certificates.
   */
  certificates?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfigCertificates[];
  /**
   * @remarks
   * The CMS verification mode.
   * 
   * @example
   * cert
   */
  cmsVerificationMode?: string;
  /**
   * @remarks
   * The signature effective time.
   * 
   * @example
   * 3600
   */
  signatureEffectiveTime?: number;
  /**
   * @remarks
   * The expression used to retrieve the signing time.
   * 
   * @example
   * pkcs7.payload.jsonData.audience.signingTime
   */
  signingTimeValueExpression?: string;
  /**
   * @remarks
   * The certificate trust anchor source.
   * 
   * @example
   * alibaba_cloud
   */
  trustAnchorSource?: string;
  /**
   * @remarks
   * The trust condition.
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
      certificates: { 'type': 'array', 'itemType': ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfigCertificates },
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

export class ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfigCertificatesCertificateMetadata extends $dara.Model {
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
   * The effective period of the certificate.
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

export class ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfigCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate metadata.
   */
  certificateMetadata?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfigCertificatesCertificateMetadata;
  /**
   * @remarks
   * The root certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIE+zCCA0egAwIBAgIJAJZY0ZY0ZY0Z
   * -----END CERTIFICATE-----
   */
  content?: string;
  /**
   * @remarks
   * The root certificate fingerprint.
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
      certificateMetadata: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfigCertificatesCertificateMetadata,
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

export class ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The root certificates.
   */
  certificates?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfigCertificates[];
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
   * The trust condition.
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
      certificates: { 'type': 'array', 'itemType': ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfigCertificates },
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

export class ListFederatedCredentialProvidersResponseBodyFederatedCredentialProviders extends $dara.Model {
  cloudIdPProviderConfig?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersCloudIdPProviderConfig;
  /**
   * @remarks
   * The creation time.
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
   * The federated trust source ID.
   * 
   * @example
   * fcp_asda123XXX
   */
  federatedCredentialProviderId?: string;
  /**
   * @remarks
   * The name of the federated trust source.
   * 
   * @example
   * pkcs7test
   */
  federatedCredentialProviderName?: string;
  /**
   * @remarks
   * The type of the federated trust source.
   * 
   * @example
   * pkcs7
   */
  federatedCredentialProviderType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_dd4n3rnknybjjxuu5gq6ovqxXXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The network access endpoint ID.
   * 
   * @example
   * inae_public
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The OIDC configuration.
   */
  oidcProviderConfig?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersOidcProviderConfig;
  /**
   * @remarks
   * The PKCS7 configuration.
   */
  pkcs7ProviderConfig?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfig;
  /**
   * @remarks
   * The private CA configuration.
   */
  privateCaProviderConfig?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfig;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The update time.
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
      cloudIdPProviderConfig: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersCloudIdPProviderConfig,
      createTime: 'number',
      description: 'string',
      federatedCredentialProviderId: 'string',
      federatedCredentialProviderName: 'string',
      federatedCredentialProviderType: 'string',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      oidcProviderConfig: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersOidcProviderConfig,
      pkcs7ProviderConfig: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfig,
      privateCaProviderConfig: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfig,
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

export class ListFederatedCredentialProvidersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of federated trust sources.
   */
  federatedCredentialProviders?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProviders[];
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned by this call.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The pagination token returned by this call.
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
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
   * The total number of entries in the list.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      federatedCredentialProviders: 'FederatedCredentialProviders',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      federatedCredentialProviders: { 'type': 'array', 'itemType': ListFederatedCredentialProvidersResponseBodyFederatedCredentialProviders },
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.federatedCredentialProviders)) {
      $dara.Model.validateArray(this.federatedCredentialProviders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

