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
   * The new display name.
   * 
   * @example
   * NewApp
   */
  newDisplayName?: string;
  /**
   * @remarks
   * Indicates whether the application can be installed by other Alibaba Cloud accounts. Valid values:
   * 
   * - true: The application can be installed.
   * 
   * - false: The application cannot be installed.
   * 
   * @example
   * true
   */
  newIsMultiTenant?: boolean;
  /**
   * @remarks
   * The permission scopes of the application.
   * 
   * For more information about the valid values and descriptions of permission scopes, see [OAuth scopes](https://help.aliyun.com/document_detail/93693.html). You can also call the [ListPredefinedScopes](https://help.aliyun.com/document_detail/187206.html) operation to obtain the permission scopes that are supported by different types of applications.
   * 
   * If you enter multiple permission scopes, separate them with semicolons (;).
   * 
   * The new permission scopes overwrite the original ones. For example, if the original permission scope is `/acs/ccc` and you set the new permission scope to `/acs/alidns`, the permission scope that takes effect is `/acs/alidns`. If you want to add `/acs/alidns` to the original scope, set the new permission scope to `/acs/ccc;/acs/alidns`.
   * 
   * @example
   * openid
   */
  newPredefinedScopes?: string;
  /**
   * @remarks
   * The webhook address.
   * 
   * If you enter multiple webhook addresses, separate them with semicolons (;).
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
   * The required permission scopes of the application.
   * 
   * You can set one or more scopes specified in `RequiredScopes` as required. After a scope is set as required, it is selected by default and cannot be deselected when a user grants permissions to the application.
   * 
   * If you also specify `NewPredefinedScopes`, the list of application scopes is reset by `NewPredefinedScopes` first. Then, this parameter is used to configure whether the scopes are required.
   * 
   * If you enter multiple permission scopes, separate them with semicolons (;).
   * 
   * The new required scopes overwrite the original ones.
   * 
   * > If a scope that you specify for `RequiredScopes` is not within the range of `PredefinedScopes`, the required setting for that scope does not take effect.
   * 
   * @example
   * profile;aliuid
   */
  newRequiredScopes?: string;
  /**
   * @remarks
   * Indicates whether an application key is required. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * > * For applications of the WebApp and ServerApp types, this parameter is forcibly set to true and cannot be modified.
   * 
   * - For applications of the NativeApp type, you can set this parameter to true or false. The default value is false. These applications often run in untrusted environments and cannot effectively protect application keys. Do not set this parameter to true unless necessary. For more information, see [Log on to Alibaba Cloud using a native application](https://help.aliyun.com/document_detail/93697.html).
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

