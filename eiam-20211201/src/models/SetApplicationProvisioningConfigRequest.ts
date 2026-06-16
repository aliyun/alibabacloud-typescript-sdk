// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetApplicationProvisioningConfigRequestCallbackProvisioningConfig extends $dara.Model {
  /**
   * @remarks
   * The destination address where the application accepts IDaaS event callbacks.
   * 
   * @example
   * https://example.com/event/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The symmetric key for encrypting and decrypting IDaaS event callbacks. The key uses the AES-256 algorithm and is in hexadecimal format.
   * 
   * @example
   * ad3b248**************************b3561a73d7
   */
  encryptKey?: string;
  /**
   * @remarks
   * Indicates whether to encrypt IDaaS event callback messages. Valid values:
   * 
   * - true: Encrypt the messages.
   * 
   * - false: Do not encrypt the messages. The messages are transmitted in plaintext.
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

export class SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam extends $dara.Model {
  /**
   * @remarks
   * The access token. You can update this field when the grant type is bearer_token.
   * 
   * @example
   * k52x2ru63rlkflina5utgkxxxx
   */
  accessToken?: string;
  /**
   * @remarks
   * The authentication method for the SCIM protocol. Valid values:
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

export class SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration extends $dara.Model {
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
   * The authorization configuration parameters. The usage is as follows:
   * 
   * - If GrantType is set to client_credentials, you can update ClientId, ClientSecret, and AuthnMethod.
   * 
   * - If GrantType is set to bearer_token, you can update AccessToken.
   */
  authnParam?: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam;
  /**
   * @remarks
   * The authorization grant type for the SCIM protocol. Valid values:
   * 
   * - client_credentials: Client credentials mode.
   * 
   * - bearer_token: Bearer token mode.
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
   * The configuration parameters for SCIM protocol synchronization.
   */
  authnConfiguration?: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration;
  /**
   * @remarks
   * The scope of a full push for the SCIM protocol. Valid values:
   * 
   * - urn:alibaba:idaas:app:scim:User:PUSH: Full synchronization of users.
   */
  fullPushScopes?: string[];
  /**
   * @remarks
   * The operations on the target resource for the SCIM protocol. Valid values:
   * 
   * - urn:alibaba:idaas:app:scim:User:CREATE: Create an account.
   * 
   * - urn:alibaba:idaas:app:scim:User:UPDATE: Update an account.
   * 
   * - urn:alibaba:idaas:app:scim:User:DELETE: Delete an account.
   */
  provisioningActions?: string[];
  /**
   * @remarks
   * The base URL where the application accepts IDaaS SCIM protocol synchronization.
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
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The application event callback synchronization configuration. This parameter is required when ProvisionProtocolType is set to idaas_callback.
   */
  callbackProvisioningConfig?: SetApplicationProvisioningConfigRequestCallbackProvisioningConfig;
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
   * Indicates whether to synchronize passwords for IDaaS user event callbacks. Valid values:
   * 
   * - true: Synchronize passwords.
   * 
   * - false: Do not synchronize passwords.
   * 
   * @example
   * true
   */
  provisionPassword?: boolean;
  /**
   * @remarks
   * The account synchronization protocol. Valid values:
   * 
   * - idaas_callback: IDaaS custom event callback for account synchronization.
   * 
   * - scim2: System for Cross-domain Identity Management (SCIM) protocol for synchronization.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_callback
   */
  provisionProtocolType?: string;
  /**
   * @remarks
   * The IDaaS SCIM protocol synchronization configuration parameters. This parameter is required when ProvisionProtocolType is set to scim2.
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

