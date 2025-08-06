// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachAppPolicyToIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Default value: **app-1000000**. For more information, see [Multi-application service](https://help.aliyun.com/document_detail/113600.html).
   * 
   * > This parameter is optional only if you set the policy name to VODAppAdministratorAccess.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the RAM user or the name of the RAM role.
   * 
   * *   Specify the ID of the RAM user when the IdentityType parameter is set to RamUser.
   * *   Specify the name of the RAM role when the IdentityType parameter is set to RamRole.
   * 
   * This parameter is required.
   * 
   * @example
   * ****
   */
  identityName?: string;
  /**
   * @remarks
   * The type of the identity. Valid values:
   * 
   * *   **RamUser**: a RAM user
   * *   **RamRole**: a RAM role
   * 
   * This parameter is required.
   * 
   * @example
   * RamRole
   */
  identityType?: string;
  /**
   * @remarks
   * The name of the policy. Only system policies are supported. Separate multiple policy names with commas (,). Valid values:
   * 
   * *   **VODAppFullAccess**: permissions to manage all resources in an application.
   * *   **VODAppReadOnlyAccess**: permissions to read all resources in an application.
   * *   **VODAppAdministratorAccess**: permissions of the application administrator.
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

