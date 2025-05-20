// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Permission } from "./Permission";


export class Role extends $dara.Model {
  createdAt?: number;
  creator?: string;
  description?: string;
  manageResourceType?: string;
  name?: string;
  permissions?: Permission[];
  roleId?: string;
  status?: string;
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

