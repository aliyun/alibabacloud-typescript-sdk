// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachAppPolicyToIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   * 
   * > If the policy name is VODAppAdministratorAccess, this parameter is optional. For other policies, this parameter is required.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The identity name.
   * 
   * - If the type is RamUser, specify the Resource Access Management (RAM) user ID.
   * - If the type is RamRole, specify the role name.
   * 
   * This parameter is required.
   * 
   * @example
   * ****
   */
  identityName?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * - **RamUser**: Resource Access Management (RAM) user.
   * - **RamRole**: RAM role.
   * 
   * This parameter is required.
   * 
   * @example
   * RamRole
   */
  identityType?: string;
  /**
   * @remarks
   * The policy names. Separate multiple names with commas (,). Only system policies are supported. Valid values:
   * - **VODAppFullAccess**: permissions to manage and operate all resources in the application.
   * - **VODAppReadOnlyAccess**: read-only permissions on all resources in the application.
   * - **VODAppAdministratorAccess**: application administrator permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * VODAppFullAccess
   */
  policyNames?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      identityName: 'IdentityName',
      identityType: 'IdentityType',
      policyNames: 'PolicyNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      identityName: 'string',
      identityType: 'string',
      policyNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

