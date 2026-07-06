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
   * It can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * myapp
   */
  appName?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * - WebApp: a web application that is based on browser interaction.
   * 
   * - NativeApp: a native application that runs on an operating system, such as a desktop or mobile operating system.
   * 
   * - ServerApp: an application that directly accesses Alibaba Cloud services without user logon. Currently, only applications that use the System for Cross-domain Identity Management (SCIM) protocol for user synchronization are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * WebApp
   */
  appType?: string;
  /**
   * @remarks
   * The display name of the application.
   * 
   * It can be up to 24 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * myapp
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether the application can be installed by other Alibaba Cloud accounts. Valid values:
   * 
   * - true: If not specified, the default value is true for NativeApp and ServerApp applications.
   * 
   * - false: If not specified, the default value is false for WebApp applications.
   * 
   * @example
   * false
   */
  isMultiTenant?: boolean;
  /**
   * @remarks
   * The scope of application permissions.
   * 
   * For more information about the application permission scope, see [OAuth overview](https://help.aliyun.com/document_detail/93693.html). You can also call the [ListPredefinedScopes](https://help.aliyun.com/document_detail/187206.html) operation to obtain the scopes that are supported by different application types.
   * 
   * To specify multiple permissions, separate them with semicolons (;).
   * 
   * @example
   * aliuid;profile
   */
  predefinedScopes?: string;
  /**
   * @remarks
   * The OAuth protocol version of the application. Valid values:
   * 
   * - `2.0`: OAuth 2.0
   * 
   * - `2.1`: OAuth 2.1
   * 
   * Default value: `2.0`.
   * 
   * @example
   * 2.0
   */
  protocolVersion?: string;
  /**
   * @remarks
   * The redirect URL of the application.
   * 
   * To specify multiple URLs, separate them with semicolons (;).
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
   * - If not specified, the default value is 2,592,000 seconds (30 days) for NativeApp and ServerApp applications.
   * 
   * - If not specified, the default value is 7,776,000 seconds (90 days) for WebApp applications.
   * 
   * @example
   * 2592000
   */
  refreshTokenValidity?: number;
  /**
   * @remarks
   * The required permission.
   * 
   * You can specify one or more permissions for the `RequiredScopes` parameter. When a user grants permissions to the application, the scopes specified in this parameter are pre-selected and cannot be deselected.
   * 
   * To enter multiple scopes, separate them with semicolons (;).
   * 
   * > Any scope specified here must also be included in `PredefinedScopes`. Otherwise, the scope will not be set as required.
   * 
   * @example
   * aliuid
   */
  requiredScopes?: string;
  /**
   * @remarks
   * Specifies whether a secret is required. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * > * For applications of the WebApp and ServerApp types, this parameter is required and is always set to true.
   * 
   * - For applications of the NativeApp type, you can set this parameter to true or false. If not specified, the default value is false. Since native applications are public clients and cannot reliably protect secrets, we recommend keeping this false unless a secret is strictly required. For more information, see [Access Alibaba Cloud APIs from a native application](https://help.aliyun.com/document_detail/93697.html).
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
      displayName: 'DisplayName',
      isMultiTenant: 'IsMultiTenant',
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
      displayName: 'string',
      isMultiTenant: 'boolean',
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

