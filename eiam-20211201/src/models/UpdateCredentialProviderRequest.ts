// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The list of allowed JWT issuers.
   * 
   * > The list can contain up to 200 issuers.
   * 
   * >Notice: To clear the issuer list, pass an empty list or an empty string when you call the operation.</notice>
   */
  allowedTokenIssuers?: string[];
  /**
   * @remarks
   * Specifies whether to enable the JWT derived short token capability.
   * 
   * @example
   * false
   */
  derivedShortTokenEnabled?: boolean;
  /**
   * @remarks
   * The validity period of the JWT. Unit: seconds.
   * 
   * @example
   * 900
   */
  expiration?: number;
  /**
   * @remarks
   * Specifies whether to enable JWT expiration cleanup.
   * 
   * @example
   * true
   */
  expirationCleanupEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowedTokenIssuers: 'AllowedTokenIssuers',
      derivedShortTokenEnabled: 'DerivedShortTokenEnabled',
      expiration: 'Expiration',
      expirationCleanupEnabled: 'ExpirationCleanupEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedTokenIssuers: { 'type': 'array', 'itemType': 'string' },
      derivedShortTokenEnabled: 'boolean',
      expiration: 'number',
      expirationCleanupEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.allowedTokenIssuers)) {
      $dara.Model.validateArray(this.allowedTokenIssuers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialProviderRequestCredentialProviderConfigOAuthProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The authorization endpoint.
   * 
   * @example
   * https://example.com/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth authorization flow type. Valid values:
   * - m2m: machine-to-machine.
   * - user_federation: user federation.
   * 
   * @example
   * m2m
   */
  authorizationFlow?: string;
  /**
   * @remarks
   * The client secret in the OAuth protocol.
   * 
   * > The client secret can be up to 1,024 characters in length.
   * 
   * @example
   * client_secret_example_xxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The URL of the discovery document.
   * 
   * @example
   * https://example.com/.well-known/openid-configuration
   */
  discoveryUrl?: string;
  /**
   * @remarks
   * The URL of the authorization server identifier.
   * 
   * @example
   * https://example.com/issuer
   */
  issuer?: string;
  /**
   * @remarks
   * The PKCE challenge method. Valid values:
   * - S256.
   * - plain.
   * 
   * @example
   * S256
   */
  pkceChallengeMethod?: string;
  /**
   * @remarks
   * Specifies whether to enable Proof Key for Code Exchange (PKCE).
   * 
   * @example
   * true
   */
  pkceEnabled?: boolean;
  /**
   * @remarks
   * The vendor type. Valid values:
   * - custom: custom.
   * - dingtalk: DingTalk.
   * - feishu: Lark.
   * - github: GitHub.
   * - microsoft: Microsoft.
   * - google: Google.
   * 
   * @example
   * custom
   */
  providerVendor?: string;
  /**
   * @remarks
   * The scope in the OAuth protocol.
   * 
   * > The scope configuration of the OAuth credential provider serves as a fallback value. If the scope parameter is not specified when you call the Developer API to obtain an OAuth access token, the access token is issued based on the scope configuration of the credential provider.
   * 
   * >Notice: Separate multiple scope values with spaces. To clear the scope configuration, enter an empty string.</notice>
   * 
   * The limits on a single scope value are as follows:
   * 1. Allowed characters: lowercase letters, digits, and the following special characters: `|/:_-.`
   * 2. The value must contain at least one lowercase letter or digit.
   * 3. The value must start with a period (`.`), a lowercase letter, or a digit.
   * 4. The value can be up to 1,024 characters in length.
   * 
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  /**
   * @remarks
   * The token endpoint of the OAuth protocol.
   * 
   * > The endpoint must start with `http://` or `https://` and can be up to 1,024 characters in length.
   * 
   * @example
   * https://example.com/token
   */
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      authorizationFlow: 'AuthorizationFlow',
      clientSecret: 'ClientSecret',
      discoveryUrl: 'DiscoveryUrl',
      issuer: 'Issuer',
      pkceChallengeMethod: 'PkceChallengeMethod',
      pkceEnabled: 'PkceEnabled',
      providerVendor: 'ProviderVendor',
      scope: 'Scope',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      authorizationFlow: 'string',
      clientSecret: 'string',
      discoveryUrl: 'string',
      issuer: 'string',
      pkceChallengeMethod: 'string',
      pkceEnabled: 'boolean',
      providerVendor: 'string',
      scope: 'string',
      tokenEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialProviderRequestCredentialProviderConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of the JSON Web Token (JWT) credential provider.
   */
  jwtProviderConfig?: UpdateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig;
  /**
   * @remarks
   * The configuration of the OAuth credential provider.
   */
  OAuthProviderConfig?: UpdateCredentialProviderRequestCredentialProviderConfigOAuthProviderConfig;
  static names(): { [key: string]: string } {
    return {
      jwtProviderConfig: 'JwtProviderConfig',
      OAuthProviderConfig: 'OAuthProviderConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtProviderConfig: UpdateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig,
      OAuthProviderConfig: UpdateCredentialProviderRequestCredentialProviderConfigOAuthProviderConfig,
    };
  }

  validate() {
    if(this.jwtProviderConfig && typeof (this.jwtProviderConfig as any).validate === 'function') {
      (this.jwtProviderConfig as any).validate();
    }
    if(this.OAuthProviderConfig && typeof (this.OAuthProviderConfig as any).validate === 'function') {
      (this.OAuthProviderConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCredentialProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length. For more information, see References: [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration of the credential provider.
   */
  credentialProviderConfig?: UpdateCredentialProviderRequestCredentialProviderConfig;
  /**
   * @remarks
   * The credential provider ID.
   * 
   * This parameter is required.
   * 
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @remarks
   * The name of the credential provider.
   * 
   * > The name can be up to 64 characters in length.
   * 
   * @example
   * test_example_name
   */
  credentialProviderName?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      credentialProviderConfig: 'CredentialProviderConfig',
      credentialProviderId: 'CredentialProviderId',
      credentialProviderName: 'CredentialProviderName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      credentialProviderConfig: UpdateCredentialProviderRequestCredentialProviderConfig,
      credentialProviderId: 'string',
      credentialProviderName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(this.credentialProviderConfig && typeof (this.credentialProviderConfig as any).validate === 'function') {
      (this.credentialProviderConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

