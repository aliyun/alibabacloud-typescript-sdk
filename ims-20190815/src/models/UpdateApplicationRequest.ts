// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The validity period of the access token.
   * 
   * Valid values: 900 to 10800. Unit: seconds.
   * 
   * @example
   * 3600
   */
  newAccessTokenValidity?: number;
  /**
   * @remarks
   * The application assignment type. Valid values:
   * 
   * + AllowAll: Full assignment. All RAM users and roles under the account are allowed to use the application.
   * + OnDemand: On-demand assignment. Only specified RAM users and roles under the account are allowed to use the application.
   * 
   * @example
   * AlloAll
   */
  newAssignmentType?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * NewApp
   */
  newDisplayName?: string;
  /**
   * @remarks
   * Specifies whether the application can be installed by other accounts. Valid values:
   * 
   * - true: Allowed.
   * 
   * - false: Not allowed.
   * 
   * @example
   * true
   */
  newIsMultiTenant?: boolean;
  /**
   * @remarks
   * Specifies whether user authorization is required. Valid values:
   * 
   * + true: In addition to the authorization required during application installation, the user must also authorize the application **each time** they use it for OAuth logon.
   * + false: Authorization is required only during application installation. No additional authorization is required when the user uses the application for OAuth logon later.
   * 
   * @example
   * true
   */
  newNeedPrincipalConsent?: boolean;
  /**
   * @remarks
   * The application permission scopes.
   * 
   * For the valid values and descriptions of application permission scopes, see [OAuth scopes](https://help.aliyun.com/document_detail/93693.html). You can also call the [ListPredefinedScopes](https://help.aliyun.com/document_detail/187206.html) operation to obtain the application permission scopes supported by different application types.
   * 
   * Separate multiple scopes with semicolons (;).
   * 
   * The new scopes overwrite the original scopes. For example, if the original scope is /acs/ccc and the new scope is /acs/alidns, the effective scope is /acs/alidns. To add /acs/alidns to the original scopes, set the new scopes to /acs/ccc;/acs/alidns.
   * 
   * @example
   * openid
   */
  newPredefinedScopes?: string;
  /**
   * @remarks
   * The callback URLs. Separate multiple URLs with semicolons (;).
   * 
   * @example
   * https://www.example.com
   */
  newRedirectUris?: string;
  /**
   * @remarks
   * The validity period of the refresh token.
   * 
   * Valid values: 7200 to 31536000. Unit: seconds.
   * 
   * @example
   * 7776000
   */
  newRefreshTokenValidity?: number;
  /**
   * @remarks
   * The required application permission scopes.
   * 
   * You can set one or more scopes in RequiredScopes as required. After a scope is set as required, it is selected by default and cannot be deselected when a user authorizes the application.
   * 
   * If you also specify NewPredefinedScopes, the scope list of the application is reset by using NewPredefinedScopes first, and then this parameter is used to specify whether the scopes are required.
   * 
   * Separate multiple scopes with semicolons (;).
   * 
   * The new required scopes overwrite the original required scopes.
   * 
   * > If a scope specified in RequiredScopes is not included in PredefinedScopes, the required setting for this scope does not take effect.
   * 
   * @example
   * profile;aliuid
   */
  newRequiredScopes?: string;
  /**
   * @remarks
   * Specifies whether an application secret is required. Valid values:
   * 
   * - true
   * - false
   * 
   * > - + For WebApp and ServerApp applications, this value is forcibly set to true and cannot be modified.
   * > - + For NativeApp applications, you can set this value to true or false. If you do not specify this parameter, the default value is false. Because such applications usually run in untrusted environments and cannot effectively protect application secrets, do not set this value to true unless necessary. For more information, see [Log on to Alibaba Cloud from a native application](https://help.aliyun.com/document_detail/93697.html).
   * 
   * @example
   * true
   */
  newSecretRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      newAccessTokenValidity: 'NewAccessTokenValidity',
      newAssignmentType: 'NewAssignmentType',
      newDisplayName: 'NewDisplayName',
      newIsMultiTenant: 'NewIsMultiTenant',
      newNeedPrincipalConsent: 'NewNeedPrincipalConsent',
      newPredefinedScopes: 'NewPredefinedScopes',
      newRedirectUris: 'NewRedirectUris',
      newRefreshTokenValidity: 'NewRefreshTokenValidity',
      newRequiredScopes: 'NewRequiredScopes',
      newSecretRequired: 'NewSecretRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      newAccessTokenValidity: 'number',
      newAssignmentType: 'string',
      newDisplayName: 'string',
      newIsMultiTenant: 'boolean',
      newNeedPrincipalConsent: 'boolean',
      newPredefinedScopes: 'string',
      newRedirectUris: 'string',
      newRefreshTokenValidity: 'number',
      newRequiredScopes: 'string',
      newSecretRequired: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

