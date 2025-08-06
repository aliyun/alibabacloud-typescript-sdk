// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachAppPolicyFromIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. This parameter is optional if you set PolicyNames to VODAppAdministratorAccess. This parameter is required if you set PolicyNames to a value other than VODAppAdministratorAccess.
   * 
   * *   Default value: **app-1000000**.
   * *   For more information, see [Overview](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the RAM user or the name of the RAM role.
   * 
   * *   Specifies the ID of the RAM user for this parameter if you set IdentityType to RamUser.
   * *   Specifies the name of the RAM role for this parameter if you set IdentityType to RamRole.
   * 
   * This parameter is required.
   * 
   * @example
   * test****name
   */
  identityName?: string;
  /**
   * @remarks
   * The type of the identity. Valid values:
   * 
   * *   **RamUser**: RAM user
   * *   **RamRole**: RAM role
   * 
   * This parameter is required.
   * 
   * @example
   * RamUser
   */
  identityType?: string;
  /**
   * @remarks
   * The name of the policy. Separate multiple names with commas (,). Only system policies are supported.
   * 
   * *   **VODAppFullAccess**: permissions to manage all resources in an application
   * *   **VODAppReadOnlyAccess**: permissions to read all resources in an application
   * *   **VODAppAdministratorAccess**: permissions of the application administrator
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

