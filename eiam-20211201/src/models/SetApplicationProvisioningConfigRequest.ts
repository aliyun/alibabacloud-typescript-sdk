// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetApplicationProvisioningConfigRequestCallbackProvisioningConfig extends $dara.Model {
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
   * ad3b248**************************b3561a73d7
   */
  encryptKey?: string;
  /**
   * @remarks
   * Specifies whether to encrypt IDaaS event callback messages. Valid values:
   * 
   * *   true: encrypt the messages.
   * *   false: transmit the messages in plaintext.
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

export class SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam extends $dara.Model {
  /**
   * @remarks
   * The access token. If the GrantType parameter is set to bearer_token, you can set this parameter.
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

export class SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration extends $dara.Model {
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
   * *   If the GrantType parameter is set to client_credentials, you can set the configuration parameters ClientId, ClientSecret, and AuthnMethod.
   * *   If the GrantType parameter is set to bearer_token, you can set the configuration parameter AccessToken.
   */
  authnParam?: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam;
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
      authnParam: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam,
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

export class SetApplicationProvisioningConfigRequestScimProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration parameters related to SCIM-based synchronization.
   */
  authnConfiguration?: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration;
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
      authnConfiguration: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration,
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

export class SetApplicationProvisioningConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The configuration of event callback synchronization. This parameter is required when the ProvisionProtocolType parameter is set to idaas_callback.
   */
  callbackProvisioningConfig?: SetApplicationProvisioningConfigRequestCallbackProvisioningConfig;
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
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * Specifies whether to synchronize the password in IDaaS user event callbacks. Valid values:
   * 
   * *   true: synchronize the password.
   * *   false: do not synchronize the password.
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
   * This parameter is required.
   * 
   * @example
   * idaas_callback
   */
  provisionProtocolType?: string;
  /**
   * @remarks
   * The configuration of SCIM-based IDaaS synchronization. This parameter is required when the ProvisionProtocolType parameter is set to scim2.
   */
  scimProvisioningConfig?: SetApplicationProvisioningConfigRequestScimProvisioningConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      callbackProvisioningConfig: 'CallbackProvisioningConfig',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      provisionPassword: 'ProvisionPassword',
      provisionProtocolType: 'ProvisionProtocolType',
      scimProvisioningConfig: 'ScimProvisioningConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      callbackProvisioningConfig: SetApplicationProvisioningConfigRequestCallbackProvisioningConfig,
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      provisionPassword: 'boolean',
      provisionProtocolType: 'string',
      scimProvisioningConfig: SetApplicationProvisioningConfigRequestScimProvisioningConfig,
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

