// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFederatedCredentialProviderRequestOidcProviderConfig extends $dara.Model {
  audiences?: string[];
  /**
   * @remarks
   * Jwks来源
   * 
   * This parameter is required.
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
   *       "n": "qrsfFfSZngqKOxVE29ZIR4SXkwKq029B3HLDAZui_Pwaxwn8FssR9QdwsljZS06BTDp10vhPgqMB7s7TmHulL3I4WuSB-l4uXTXXXX"
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

export class UpdateFederatedCredentialProviderRequestPkcs7ProviderConfig extends $dara.Model {
  /**
   * @remarks
   * pkcs7证书列表
   */
  certificates?: UpdateFederatedCredentialProviderRequestPkcs7ProviderConfigCertificates[];
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
   * 签名有效期, 单位秒，1200
   * 
   * @example
   * 1200
   */
  signatureEffectiveTime?: number;
  /**
   * @example
   * pkcs7.signingTime
   */
  signingTimeValueExpression?: string;
  /**
   * @remarks
   * 证书信任锚点来源
   * 
   * This parameter is required.
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

export class UpdateFederatedCredentialProviderRequestPrivateCaProviderConfig extends $dara.Model {
  /**
   * @remarks
   * Root证书列表
   */
  certificates?: UpdateFederatedCredentialProviderRequestPrivateCaProviderConfigCertificates[];
  /**
   * @remarks
   * Root证书获取方式
   * 
   * This parameter is required.
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
   * 联邦凭证提供方ID
   * 
   * This parameter is required.
   * 
   * @example
   * fcp_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  federatedCredentialProviderId?: string;
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
   * nae_public
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * OIDC配置
   */
  oidcProviderConfig?: UpdateFederatedCredentialProviderRequestOidcProviderConfig;
  /**
   * @remarks
   * PKCS7配置
   */
  pkcs7ProviderConfig?: UpdateFederatedCredentialProviderRequestPkcs7ProviderConfig;
  /**
   * @remarks
   * 私有CA配置
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

