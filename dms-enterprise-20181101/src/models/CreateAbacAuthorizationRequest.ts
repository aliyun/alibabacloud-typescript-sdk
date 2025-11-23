// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAbacAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * Principal Type. Valid values:**user**or**custom role**.
   * 
   * Valid values:
   * 
   * *   USER
   * *   ROLE
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  policyId?: number;
  /**
   * @remarks
   * The ID of the role.
   * 
   * > If IdentityType is set to ROLE, this parameter is required.
   * 
   * @example
   * 31****
   */
  roleId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The ID of the user. You can call the [GetUser](https://help.aliyun.com/document_detail/465816.html) operation to query the user ID.
   * 
   * > If IdentityType is set to USER, this parameter is required.
   * 
   * @example
   * 51****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      identityType: 'IdentityType',
      policyId: 'PolicyId',
      roleId: 'RoleId',
      tid: 'Tid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityType: 'string',
      policyId: 'number',
      roleId: 'number',
      tid: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

