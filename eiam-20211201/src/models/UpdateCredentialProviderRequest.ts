// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig extends $dara.Model {
  /**
   * @remarks
   * A list of allowed JWT issuers.
   * 
   * > The list must contain no more than 200 items.
   * 
   * >Notice: 
   * 
   * To clear the issuer list, pass an empty array or an empty string.
   */
  allowedTokenIssuers?: string[];
  /**
   * @remarks
   * Whether to enable derived short tokens for JWTs.
   * 
   * @example
   * false
   */
  derivedShortTokenEnabled?: boolean;
  /**
   * @remarks
   * The validity period of the JWT, in seconds.
   * 
   * @example
   * 900
   */
  expiration?: number;
  /**
   * @remarks
   * Whether to enable JWT expiration cleanup.
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
   * The client secret defined in the OAuth protocol.
   * 
   * > The value must be no longer than 1024 characters.
   * 
   * @example
   * client_secret_example_xxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The scope defined in the OAuth protocol.
   * 
   * > If you do not specify the scope parameter when calling the DeveloperAPI to get an OAuth access token, the scope configured for the credential provider is used as the default.
   * 
   * >Notice: 
   * 
   * Separate multiple scope values with spaces. To clear the scope configuration, pass an empty string.
   * 
   * 
   * 
   * Rules for a single scope value:
   * 
   * 1. Allowed characters: lowercase letters, digits, and special characters `|/:_-.`
   * 
   * 2. Must contain at least one lowercase letter or digit.
   * 
   * 3. Must start with a special character `.`, a lowercase letter, or a digit.
   * 
   * 4. Must be no longer than 1024 characters.
   * 
   * @example
   * example:test_01 example:test_02
   */
  scope?: string;
  /**
   * @remarks
   * The token endpoint defined in the OAuth protocol.
   * 
   * > The value must start with `http://` or `https://`. It must be no longer than 1024 characters.
   * 
   * @example
   * https://example.com/token
   */
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      clientSecret: 'ClientSecret',
      scope: 'Scope',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientSecret: 'string',
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
   * The configuration for a JWT credential provider.
   */
  jwtProviderConfig?: UpdateCredentialProviderRequestCredentialProviderConfigJwtProviderConfig;
  /**
   * @remarks
   * The configuration for an OAuth credential provider.
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
   * An idempotency token that ensures request idempotence.
   * 
   * Generate a unique value on your client for each request. ClientToken supports only ASCII characters and must be no longer than 64 characters. For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
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
   * The ID of the credential provider.
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
   * > The name must be no longer than 64 characters.
   * 
   * @example
   * test_example_name
   */
  credentialProviderName?: string;
  /**
   * @remarks
   * The ID of the instance.
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

