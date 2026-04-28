// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Permission } from "./Permission";


export class Role extends $dara.Model {
  /**
   * @remarks
   * The time when the role was created. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1703648502811
   */
  createdAt?: number;
  /**
   * @remarks
   * The ID of the user who created the role.
   * 
   * @example
   * a23***
   */
  creator?: string;
  /**
   * @remarks
   * The description of the role.
   */
  description?: string;
  /**
   * @remarks
   * The type of the resource on which the role has permissions. Valid value: RT_File.
   * 
   * @example
   * RT_File
   */
  manageResourceType?: string;
  /**
   * @remarks
   * The name of the role.
   */
  name?: string;
  /**
   * @remarks
   * The permissions.
   */
  permissions?: Permission[];
  /**
   * @remarks
   * The ID of the role.
   * 
   * @example
   * f2a***
   */
  roleId?: string;
  /**
   * @remarks
   * The status of the role.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the role was modified. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1703648502811
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      manageResourceType: 'manage_resource_type',
      name: 'name',
      permissions: 'permissions',
      roleId: 'role_id',
      status: 'status',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      manageResourceType: 'string',
      name: 'string',
      permissions: { 'type': 'array', 'itemType': Permission },
      roleId: 'string',
      status: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

