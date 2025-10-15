// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFederatedCredentialProviderRequestOidcProviderConfig extends $dara.Model {
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
   * https://example.com/jwks
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
   *       "n": "qrsfFfSZngqKOxVE29ZIR4SXkwKq029B3HLDAZui_Pwaxwn8FssR9QdwsljZS06BTDp10vhPgqMB7s7TmHulL3I4WuSB-l4uXXXXX"
   *     }
   *   ]
   * }
   */
  staticJwks?: string;
  /**
   * @remarks
   * 信任条件
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
   * Root证书内容
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
   * pkcs7证书列表
   */
  certificates?: CreateFederatedCredentialProviderRequestPkcs7ProviderConfigCertificates[];
  /**
   * @remarks
   * CMS验证模式
   * 
   * @example
   * cert_chain
   */
  cmsVerificationMode?: string;
  /**
   * @remarks
   * 签名有效期, 单位秒，1200
   * 
   * @example
   * 1200
   */
  signatureEffectiveTime?: number;
  /**
   * @remarks
   * 获取签名时间的表达式
   * 
   * @example
   * pkcs7.signingTime
   */
  signingTimeValueExpression?: string;
  /**
   * @remarks
   * 证书信任锚点来源
   * 
   * @example
   * custom
   */
  trustAnchorSource?: string;
  /**
   * @remarks
   * 信任条件
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
   * Root证书内容
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
   * Root证书列表
   */
  certificates?: CreateFederatedCredentialProviderRequestPrivateCaProviderConfigCertificates[];
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
   * Root证书的信任条件
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
  /**
   * @remarks
   * 联邦凭证提供方描述
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * 联邦凭证提供方名称
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  federatedCredentialProviderName?: string;
  /**
   * @remarks
   * 联邦凭证提供方类型
   * 
   * This parameter is required.
   * 
   * @example
   * pkcs7
   */
  federatedCredentialProviderType?: string;
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
   * @remarks
   * 网络端点ID
   * 
   * @example
   * nae_example_id
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * OIDC配置
   */
  oidcProviderConfig?: CreateFederatedCredentialProviderRequestOidcProviderConfig;
  /**
   * @remarks
   * PKCS7配置
   */
  pkcs7ProviderConfig?: CreateFederatedCredentialProviderRequestPkcs7ProviderConfig;
  /**
   * @remarks
   * 私有CA配置
   */
  privateCaProviderConfig?: CreateFederatedCredentialProviderRequestPrivateCaProviderConfig;
  static names(): { [key: string]: string } {
    return {
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

