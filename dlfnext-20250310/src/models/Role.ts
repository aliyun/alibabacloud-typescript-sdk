// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { User } from "./User";


export class Role extends $dara.Model {
  createdAt?: number;
  createdBy?: string;
  description?: string;
  displayName?: string;
  isPredefined?: string;
  roleName?: string;
  rolePrincipal?: string;
  updatedAt?: number;
  updatedBy?: string;
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

