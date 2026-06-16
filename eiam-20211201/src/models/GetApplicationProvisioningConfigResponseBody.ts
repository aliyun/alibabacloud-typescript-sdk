// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * The destination address where the application receives IDaaS event callbacks.
   * 
   * @example
   * https://example.com/event/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The symmetric key for encrypting and decrypting IDaaS event callbacks. This key uses the AES-256 algorithm and is in hexadecimal format.
   * 
   * @example
   * 1adfdfdfd******111
   */
  encryptKey?: string;
  /**
   * @remarks
   * Indicates whether to encrypt IDaaS event callback messages. Valid values:
   * 
   * - true: The messages are encrypted.
   * 
   * - false: The messages are not encrypted and are transmitted in plaintext.
   * 
   * @example
   * true
   */
  encryptRequired?: boolean;
  /**
   * @remarks
   * The list of message types for the IDaaS event callback listener.
   */
  listenEventScopes?: string[];
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      encryptKey: 'EncryptKey',
      encryptRequired: 'EncryptRequired',
      listenEventScopes: 'ListenEventScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      encryptKey: 'string',
      encryptRequired: 'boolean',
      listenEventScopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.listenEventScopes)) {
      $dara.Model.validateArray(this.listenEventScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfigurationAuthnParam extends $dara.Model {
  /**
   * @remarks
   * The access token. This parameter is required when GrantType is set to bearer_token.
   * 
   * @example
   * k52x2ru63rlkflina5utgkxxxx
   */
  accessToken?: string;
  /**
   * @remarks
   * The authentication mode for the SCIM protocol. Valid values:
   * 
   * - client_secret_basic: The key is passed in the request header.
   * 
   * - client_secret_post: The key is passed in the request body.
   * 
   * @example
   * client_secret_basic
   */
  authnMethod?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret of the application.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The token endpoint.
   * 
   * @example
   * https://www.example.com/oauth/token
   */
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      authnMethod: 'AuthnMethod',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      authnMethod: 'string',
      clientId: 'string',
      clientSecret: 'string',
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

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfiguration extends $dara.Model {
  /**
   * @remarks
   * The authorization mode for the SCIM protocol interface. Valid values:
   * 
   * - oauth2: OAuth2 mode.
   * 
   * @example
   * oauth2
   */
  authnMode?: string;
  /**
   * @remarks
   * The authorization configuration parameters. Usage:
   * 
   * - If GrantType is set to client_credentials, you must specify ClientId, ClientSecret, and AuthnMethod.
   * 
   * - If GrantType is set to bearer_token, you must specify AccessToken.
   */
  authnParam?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfigurationAuthnParam;
  /**
   * @remarks
   * The authorization mode for the SCIM protocol. Valid values:
   * 
   * - client_credentials: client credentials mode.
   * 
   * - bearer_token: bearer token mode.
   * 
   * @example
   * bearer_token
   */
  grantType?: string;
  static names(): { [key: string]: string } {
    return {
      authnMode: 'AuthnMode',
      authnParam: 'AuthnParam',
      grantType: 'GrantType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnMode: 'string',
      authnParam: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfigurationAuthnParam,
      grantType: 'string',
    };
  }

  validate() {
    if(this.authnParam && typeof (this.authnParam as any).validate === 'function') {
      (this.authnParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters for SCIM protocol synchronization.
   */
  authnConfiguration?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfiguration;
  /**
   * @remarks
   * The scope of a full push for the SCIM protocol. Valid values:
   * 
   * - urn:alibaba:idaas:app:scim:User:PUSH: performs a full synchronization of users.
   */
  fullPushScopes?: string[];
  /**
   * @remarks
   * The operations on the target resource for the SCIM protocol. Valid values:
   * 
   * - urn:alibaba:idaas:app:scim:User:CREATE: creates an account.
   * 
   * - urn:alibaba:idaas:app:scim:User:UPDATE: updates an account.
   * 
   * - urn:alibaba:idaas:app:scim:User:DELETE: deletes an account.
   */
  provisioningActions?: string[];
  /**
   * @remarks
   * The base URL where the application receives IDaaS SCIM protocol synchronization.
   * 
   * @example
   * https://example.com/scim
   */
  scimBaseUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authnConfiguration: 'AuthnConfiguration',
      fullPushScopes: 'FullPushScopes',
      provisioningActions: 'ProvisioningActions',
      scimBaseUrl: 'ScimBaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnConfiguration: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfiguration,
      fullPushScopes: { 'type': 'array', 'itemType': 'string' },
      provisioningActions: { 'type': 'array', 'itemType': 'string' },
      scimBaseUrl: 'string',
    };
  }

  validate() {
    if(this.authnConfiguration && typeof (this.authnConfiguration as any).validate === 'function') {
      (this.authnConfiguration as any).validate();
    }
    if(Array.isArray(this.fullPushScopes)) {
      $dara.Model.validateArray(this.fullPushScopes);
    }
    if(Array.isArray(this.provisioningActions)) {
      $dara.Model.validateArray(this.provisioningActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The configuration parameters for the custom event callback protocol of IDaaS.
   */
  callbackProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig;
  /**
   * @remarks
   * The rendering mode of the account synchronization page. Valid values:
   * 
   * - standard: standard mode.
   * 
   * - template: template mode.
   * 
   * @example
   * standard
   */
  configOperateMode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The network endpoint ID.
   * 
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The public key endpoint for signature verification of application synchronization callback messages.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk267xxxxx/app_mkv7rgt4d7i4u7zqtzev2mxxxx/provisioning/jwks
   */
  provisionJwksEndpoint?: string;
  /**
   * @remarks
   * Indicates whether to synchronize passwords in IDaaS user event callbacks. Valid values:
   * 
   * - true: Passwords are synchronized.
   * 
   * - false: Passwords are not synchronized.
   * 
   * @example
   * true
   */
  provisionPassword?: boolean;
  /**
   * @remarks
   * The protocol type for application synchronization. Valid values:
   * 
   * - idaas_callback: the custom event callback protocol of IDaaS.
   * 
   * - scim2: the System for Cross-domain Identity Management (SCIM) protocol.
   * 
   * @example
   * idaas_callback
   */
  provisionProtocolType?: string;
  /**
   * @remarks
   * The configuration parameters for IDaaS SCIM protocol synchronization.
   */
  scimProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfig;
  /**
   * @remarks
   * The status of the IDaaS account synchronization feature. Valid values:
   * 
   * - enabled: The feature is enabled.
   * 
   * - disabled: The feature is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      callbackProvisioningConfig: 'CallbackProvisioningConfig',
      configOperateMode: 'ConfigOperateMode',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      provisionJwksEndpoint: 'ProvisionJwksEndpoint',
      provisionPassword: 'ProvisionPassword',
      provisionProtocolType: 'ProvisionProtocolType',
      scimProvisioningConfig: 'ScimProvisioningConfig',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      callbackProvisioningConfig: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig,
      configOperateMode: 'string',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      provisionJwksEndpoint: 'string',
      provisionPassword: 'boolean',
      provisionProtocolType: 'string',
      scimProvisioningConfig: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfig,
      status: 'string',
    };
  }

  validate() {
    if(this.callbackProvisioningConfig && typeof (this.callbackProvisioningConfig as any).validate === 'function') {
      (this.callbackProvisioningConfig as any).validate();
    }
    if(this.scimProvisioningConfig && typeof (this.scimProvisioningConfig as any).validate === 'function') {
      (this.scimProvisioningConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The account synchronization configuration of the application.
   */
  applicationProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfig;
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
      applicationProvisioningConfig: 'ApplicationProvisioningConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationProvisioningConfig: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationProvisioningConfig && typeof (this.applicationProvisioningConfig as any).validate === 'function') {
      (this.applicationProvisioningConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

