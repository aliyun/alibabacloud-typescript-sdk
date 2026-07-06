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
   * The display name of the application.
   * 
   * @example
   * NewApp
   */
  newDisplayName?: string;
  /**
   * @remarks
   * Specifies whether the application can be installed by using other Alibaba Cloud accounts. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  newIsMultiTenant?: boolean;
  /**
   * @remarks
   * The scope of application permissions.
   * 
   * For more information about the application permission scope, see [OAuth overview](https://help.aliyun.com/document_detail/93693.html). You can also call the [ListPredefinedScopes](https://help.aliyun.com/document_detail/187206.html) operation to obtain the scopes that are supported by different application types.
   * 
   * To specify multiple permissions, separate them with semicolons (;).
   * 
   * The new value of this parameter overwrites the original value, and the permission specified by the new value takes effect. For example, if the original value is `/acs/ccc`, and the new value is `/acs/alidns`, `/acs/alidns` takes effect. If you want to retain the original permission and the `/acs/alidns` permission, set the value to `/acs/ccc;/acs/alidns`.
   * 
   * @example
   * openid
   */
  newPredefinedScopes?: string;
  /**
   * @remarks
   * The redirect URL.
   * 
   * To specify multiple URLs, separate them with semicolons (;).
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
   * The required permission.
   * 
   * You can specify one or more permissions for the `RequiredScopes` parameter. When a user grants permissions to the application, the scopes specified in this parameter are pre-selected and cannot be deselected.
   * 
   * If you also specify the `NewPredefinedScopes` parameter, the `NewPredefinedScopes` parameter specifies the permissions that can be granted on the application, and this parameter specifies the required permissions.
   * 
   * To enter multiple scopes, separate them with semicolons (;).
   * 
   * The new value of this parameter overwrites the original value, and the required permission specified by the new value takes effect.
   * 
   * > Any scope specified here must also be included in `PredefinedScopes`. Otherwise, the scope will not be set as required.
   * 
   * @example
   * profile;aliuid
   */
  newRequiredScopes?: string;
  /**
   * @remarks
   * Specifies whether a secret is required. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * > * For applications of the WebApp and ServerApp types, this parameter is automatically set to true and cannot be changed.
   * >
   * > * For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected.
   * 
   * We recommend that you do not set this parameter to true unless otherwise specified. For more information, see [Access Alibaba Cloud APIs from a native application](https://help.aliyun.com/document_detail/93697.html).
   * 
   * @example
   * true
   */
  newSecretRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      newAccessTokenValidity: 'NewAccessTokenValidity',
      newDisplayName: 'NewDisplayName',
      newIsMultiTenant: 'NewIsMultiTenant',
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
      newDisplayName: 'string',
      newIsMultiTenant: 'boolean',
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

