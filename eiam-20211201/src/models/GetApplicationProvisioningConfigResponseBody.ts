// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * The URL that the application uses to receive IDaaS event callbacks.
   * 
   * @example
   * https://example.com/event/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The symmetric key for IDaaS event callbacks. The key is an AES-256 encryption key in the HEX format.
   * 
   * @example
   * 1adfdfdfd******111
   */
  encryptKey?: string;
  /**
   * @remarks
   * Indicates whether IDaaS event callback messages are encrypted. Valid values:
   * 
   * *   true: The messages are encrypted.
   * *   false: The messages are transmitted in plaintext.
   * 
   * @example
   * true
   */
  encryptRequired?: boolean;
  /**
   * @remarks
   * The list of types of IDaaS event callback messages that are supported by the listener.
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
   * The access token. This parameter is returned when the GrantType parameter is set to bearer_token.
   * 
   * @example
   * k52x2ru63rlkflina5utgkxxxx
   */
  accessToken?: string;
  /**
   * @remarks
   * The authentication mode of the SCIM protocol. Valid values:
   * 
   * *   client_secret_basic: The client secret is passed in the request header.
   * *   client_secret_post: The client secret is passed in the request body.
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
   * The authentication mode of the SCIM protocol. Valid value:
   * 
   * *   oauth2: OAuth2.0 mode.
   * 
   * @example
   * oauth2
   */
  authnMode?: string;
  /**
   * @remarks
   * The configuration parameters related to authorization.
   * 
   * *   If the GrantType parameter is set to client_credentials, the configuration parameters ClientId, ClientSecret, and AuthnMethod are returned.
   * *   If the GrantType parameter is set to bearer_token, the configuration parameter AccessToken is returned.
   */
  authnParam?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfigurationAuthnParam;
  /**
   * @remarks
   * The grant type of the SCIM protocol. Valid values:
   * 
   * *   client_credentials: client mode.
   * *   bearer_token: key mode.
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
   * The configuration parameters related to SCIM-based synchronization.
   */
  authnConfiguration?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfiguration;
  /**
   * @remarks
   * The full synchronization scope of the SCIM protocol. Valid value:
   * 
   * *   urn:alibaba:idaas:app:scim:User:PUSH: full account data synchronization.
   */
  fullPushScopes?: string[];
  /**
   * @remarks
   * The resource operations of the SCIM protocol. Valid values:
   * 
   * *   urn:alibaba:idaas:app:scim:User:CREATE: account creation.
   * *   urn:alibaba:idaas:app:scim:User:UPDATE: account update.
   * *   urn:alibaba:idaas:app:scim:User:DELETE: account deletion.
   */
  provisioningActions?: string[];
  /**
   * @remarks
   * The base URL that the application uses to receive the SCIM protocol for IDaaS synchronization.
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
   * The ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The configuration of the custom event callback protocol of IDaaS.
   */
  callbackProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig;
  /**
   * @remarks
   * The rendering mode of the account synchronization page. Valid values:
   * 
   * *   standard: standard mode
   * *   template: template mode
   * 
   * @example
   * standard
   */
  configOperateMode?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The public key endpoint for signature verification of the synchronization callback information.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk267xxxxx/app_mkv7rgt4d7i4u7zqtzev2mxxxx/provisioning/jwks
   */
  provisionJwksEndpoint?: string;
  /**
   * @remarks
   * Indicates whether the password is synchronized in IDaaS user event callbacks. Valid values:
   * 
   * *   true: The password is synchronized.
   * *   false: The password is not synchronized.
   * 
   * @example
   * true
   */
  provisionPassword?: boolean;
  /**
   * @remarks
   * The synchronization protocol type of the application. Valid values:
   * 
   * *   idaas_callback: custom event callback protocol of IDaaS.
   * *   scim2: System for Cross-domain Identity Management (SCIM) protocol.
   * 
   * @example
   * idaas_callback
   */
  provisionProtocolType?: string;
  /**
   * @remarks
   * The configuration of SCIM-based IDaaS synchronization.
   */
  scimProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfig;
  /**
   * @remarks
   * The status of the IDaaS account synchronization feature. Valid values:
   * 
   * *   enabled: The feature is enabled.
   * *   disabled: The feature is disabled.
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
   * The configuration of the account synchronization feature for the application.
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

