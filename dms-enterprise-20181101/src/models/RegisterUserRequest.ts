// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterUserRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile number of the user.
   * 
   * @example
   * 130000000xx
   */
  mobile?: string;
  /**
   * @remarks
   * The role that you want to assign to the user. Valid values:
   * 
   * *   **USER**: a regular user role
   * *   **DBA**: a database administrator (DBA) role
   * *   **ADMIN**: a DMS administrator role
   * *   **SECURITY_ADMIN**: a security administrator role
   * 
   * >  If you do not specify this parameter, the regular user role is assigned to the user by default. You can assign one or more roles to the user. Separate multiple roles with commas (,).
   * 
   * @example
   * USER,DBA
   */
  roleNames?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To query ID of the tenant, move the pointer over the profile picture in the upper-right corner of the DMS console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html) topic.
   * 
   * @example
   * -1
   */
  tid?: number;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account of the user that you want to register.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  uid?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * dmstest
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      roleNames: 'RoleNames',
      tid: 'Tid',
      uid: 'Uid',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      roleNames: 'string',
      tid: 'number',
      uid: 'string',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

