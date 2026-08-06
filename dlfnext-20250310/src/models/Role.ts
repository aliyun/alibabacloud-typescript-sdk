// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { User } from "./User";


export class Role extends $dara.Model {
  /**
   * @remarks
   * The time when the role was created. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * The name of the user who created the role.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  createdBy?: string;
  /**
   * @remarks
   * The role description.
   * 
   * @example
   * role_description
   */
  description?: string;
  /**
   * @remarks
   * The display name of the role.
   * 
   * @example
   * role_display_name
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the role is a system role.
   * 
   * @example
   * true
   */
  isPredefined?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * role_name
   */
  roleName?: string;
  /**
   * @remarks
   * The resource descriptor of the role.
   * 
   * @example
   * acs:dlf::[accountId]:role/role_name
   */
  rolePrincipal?: string;
  /**
   * @remarks
   * The time when the role was last updated. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1744970111419
   */
  updatedAt?: number;
  /**
   * @remarks
   * The name of the user who last updated the role.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  updatedBy?: string;
  /**
   * @remarks
   * The users for the role.
   */
  users?: User[];
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      description: 'description',
      displayName: 'displayName',
      isPredefined: 'isPredefined',
      roleName: 'roleName',
      rolePrincipal: 'rolePrincipal',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      description: 'string',
      displayName: 'string',
      isPredefined: 'string',
      roleName: 'string',
      rolePrincipal: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
      users: { 'type': 'array', 'itemType': User },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

