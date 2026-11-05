// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the access token.
   * 
   * Valid values: 900 to 10800. Unit: seconds.
   * 
   * Default value: 3600.
   * 
   * @example
   * 3600
   */
  accessTokenValidity?: number;
  /**
   * @remarks
   * The application name.
   * 
   * The maximum length is 64 characters. Only letters, digits, periods (.), underscores (_), and hyphens (-) are allowed.
   * 
   * @example
   * myapp
   */
  appName?: string;
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * - WebApp: web applications that interact with users through browsers. 
   * - NativeApp: native applications that run in operating systems, primarily on desktop or shift operating systems. 
   * - ServerApp: applications that directly access Alibaba Cloud services without requiring user logons. Currently, only user synchronization applications based on the System for Cross-domain Identity Management protocol are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * WebApp
   */
  appType?: string;
  /**
   * @remarks
   * The application assignment type. Valid values:
   * 
   * + AllowAll: assigns the application to all RAM users and roles in the account, allowing them to use the application.
   * + OnDemand: assigns the application only to specified RAM users and roles in the account, allowing only them to use the application.
   * 
   * @example
   * AllowAll
   */
  assignmentType?: string;
  /**
   * @remarks
   * The display name of the application.
   * 
   * Maximum length: 24 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * myapp
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether the application can be installed by other accounts. Valid values:
   * 
   * - true: For NativeApp and ServerApp applications, if this value is empty, the default value is true.
   * - false: For WebApp applications, if this value is empty, the default value is false.
   * 
   * @example
   * false
   */
  isMultiTenant?: boolean;
  /**
   * @remarks
   * Specifies whether user authorization is required. Valid values:
   * 
   * + true: In addition to the authorization required during application installation, users must also authorize the application **each time** they use it for OAuth logon.
   * + false: Authorization is required only during application installation. Users do not need additional authorization when they use the application for OAuth logon later.
   * 
   * @example
   * true
   */
  needPrincipalConsent?: boolean;
  /**
   * @remarks
   * The scopes of the application.
   * 
   * For the valid values and descriptions of application scopes, see [OAuth scopes](https://help.aliyun.com/document_detail/93693.html). You can also call the [ListPredefinedScopes](https://help.aliyun.com/document_detail/187206.html) operation to obtain the scopes supported by different application types.
   * 
   * Separate multiple scopes with semicolons (;).
   * 
   * @example
   * aliuid;profile
   */
  predefinedScopes?: string;
  /**
   * @remarks
   * The OAuth protocol version of the application. Valid values:
   * + 2.0: OAuth 2.0 protocol.
   * + 2.1: OAuth 2.1 protocol.
   * 
   * Default value: 2.0.
   * 
   * @example
   * 2.0
   */
  protocolVersion?: string;
  /**
   * @remarks
   * The redirect URIs.
   * 
   * Separate multiple URIs with semicolons (;).
   * 
   * @example
   * https://www.example.com
   */
  redirectUris?: string;
  /**
   * @remarks
   * The validity period of the refresh token.
   * 
   * Valid values: 7200 to 31536000. Unit: seconds.
   * 
   * Default value:
   * 
   * - For NativeApp and ServerApp applications, if this value is empty, the default value is 2592000 seconds (30 days).
   * - For WebApp applications, if this value is empty, the default value is 7776000 seconds (90 days).
   * 
   * @example
   * 2592000
   */
  refreshTokenValidity?: number;
  /**
   * @remarks
   * The required scopes of the application.
   * 
   * You can set one or more scopes in RequiredScopes as required. After a scope is set as required, it is selected by default and cannot be deselected when a user authorizes the application.
   * 
   * Separate multiple scopes with semicolons (;).
   * 
   * > If a scope that you specify in RequiredScopes is not included in PredefinedScopes, the required scope does not take effect.
   * 
   * @example
   * aliuid
   */
  requiredScopes?: string;
  /**
   * @remarks
   * Specifies whether an application secret is required. Valid values:
   * 
   * - true
   * - false
   * 
   * > - + For WebApp and ServerApp applications, this value is forcibly set to true and cannot be modified.
   * > - + For NativeApp applications, you can set this value to true or false. If you do not specify this value, the default value is false. Because such applications often run in untrusted environments and cannot effectively protect application secrets, do not set this value to true unless necessary. For more information, see [Log on to Alibaba Cloud from a native application](https://help.aliyun.com/document_detail/93697.html).
   * 
   * @example
   * true
   */
  secretRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessTokenValidity: 'AccessTokenValidity',
      appName: 'AppName',
      appType: 'AppType',
      assignmentType: 'AssignmentType',
      displayName: 'DisplayName',
      isMultiTenant: 'IsMultiTenant',
      needPrincipalConsent: 'NeedPrincipalConsent',
      predefinedScopes: 'PredefinedScopes',
      protocolVersion: 'ProtocolVersion',
      redirectUris: 'RedirectUris',
      refreshTokenValidity: 'RefreshTokenValidity',
      requiredScopes: 'RequiredScopes',
      secretRequired: 'SecretRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenValidity: 'number',
      appName: 'string',
      appType: 'string',
      assignmentType: 'string',
      displayName: 'string',
      isMultiTenant: 'boolean',
      needPrincipalConsent: 'boolean',
      predefinedScopes: 'string',
      protocolVersion: 'string',
      redirectUris: 'string',
      refreshTokenValidity: 'number',
      requiredScopes: 'string',
      secretRequired: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

