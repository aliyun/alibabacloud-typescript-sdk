// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersOidcProviderConfig extends $dara.Model {
  /**
   * @remarks
   * oidc凭证的受众列表
   */
  audiences?: string[];
  /**
   * @remarks
   * 动态获取的jwks
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
   * @example
   * 1729061324000
   */
  jwksLastObtainedTime?: number;
  /**
   * @remarks
   * Jwks来源
   * 
   * @example
   * static
   */
  jwksSource?: string;
  /**
   * @remarks
   * JWKS 端点
   * 
   * @example
   * https://example.com
   */
  jwksUri?: string;
  /**
   * @remarks
   * 静态获取的jwks
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
   * 默认条件
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
   * 证书过期时间
   * 
   * @example
   * 1729061324000
   */
  notAfter?: number;
  /**
   * @remarks
   * 证书生效时间
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
   * 证书元数据
   */
  certificateMetadata?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfigCertificatesCertificateMetadata;
  /**
   * @remarks
   * Root证书内容
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIE+zCCA0egAwIBAgIJAJZY0ZY0ZY0Z
   * -----END CERTIFICATE-----
   */
  content?: string;
  /**
   * @remarks
   * Root证书指纹
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
   * pkcs7证书列表
   */
  certificates?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfigCertificates[];
  /**
   * @remarks
   * CMS验证模式
   * 
   * @example
   * cert
   */
  cmsVerificationMode?: string;
  /**
   * @remarks
   * 签名有效时间
   * 
   * @example
   * 3600
   */
  signatureEffectiveTime?: number;
  /**
   * @remarks
   * 签名时间
   * 
   * @example
   * pkcs7.payload.jsonData.audience.signingTime
   */
  signingTimeValueExpression?: string;
  /**
   * @remarks
   * 证书信任锚点来源
   * 
   * @example
   * alibaba_cloud
   */
  trustAnchorSource?: string;
  /**
   * @remarks
   * 信任条件
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
   * 证书过期时间
   * 
   * @example
   * 1729061324000
   */
  notAfter?: number;
  /**
   * @remarks
   * 证书生效时间
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
   * 证书元数据
   */
  certificateMetadata?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfigCertificatesCertificateMetadata;
  /**
   * @remarks
   * Root证书内容
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIE+zCCA0egAwIBAgIJAJZY0ZY0ZY0Z
   * -----END CERTIFICATE-----
   */
  content?: string;
  /**
   * @remarks
   * Root证书指纹
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
   * Root证书
   */
  certificates?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfigCertificates[];
  /**
   * @remarks
   * Root证书获取方式
   * 
   * @example
   * custom
   */
  trustAnchorSource?: string;
  /**
   * @remarks
   * Root证书的默认条件
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
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1729061324000
   */
  createTime?: number;
  /**
   * @remarks
   * 描述
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Federated Credential Provider ID
   * 
   * @example
   * fcp_asda123XXX
   */
  federatedCredentialProviderId?: string;
  /**
   * @remarks
   * 联邦凭证提供方名称
   * 
   * @example
   * pkcs7test
   */
  federatedCredentialProviderName?: string;
  /**
   * @remarks
   * 联邦凭证提供方类型
   * 
   * @example
   * pkcs7
   */
  federatedCredentialProviderType?: string;
  /**
   * @remarks
   * EIAM 实例ID
   * 
   * @example
   * idaas_dd4n3rnknybjjxuu5gq6ovqxXXX
   */
  instanceId?: string;
  /**
   * @remarks
   * 网络访问端点ID
   * 
   * @example
   * inae_public
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * OIDC配置
   */
  oidcProviderConfig?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersOidcProviderConfig;
  /**
   * @remarks
   * PKCS7配置
   */
  pkcs7ProviderConfig?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPkcs7ProviderConfig;
  /**
   * @remarks
   * 私有CA配置
   */
  privateCaProviderConfig?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProvidersPrivateCaProviderConfig;
  /**
   * @remarks
   * 状态
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 1729061324000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
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
  federatedCredentialProviders?: ListFederatedCredentialProvidersResponseBodyFederatedCredentialProviders[];
  /**
   * @remarks
   * 分页查询时每页行数。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于上一次翻页查询。
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
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

