// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Identity } from "./Identity";


export class BaseAssignmentResponse extends $dara.Model {
  associatedRoleTagId?: string;
  createdAt?: string;
  creator?: string;
  disinheritSubGroup?: boolean;
  domainId?: string;
  identity?: Identity;
  manageResourceId?: string;
  manageResourceType?: string;
  roleId?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      associatedRoleTagId: 'associated_role_tag_id',
      createdAt: 'created_at',
      creator: 'creator',
      disinheritSubGroup: 'disinherit_sub_group',
      domainId: 'domain_id',
      identity: 'identity',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      roleId: 'role_id',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedRoleTagId: 'string',
      createdAt: 'string',
      creator: 'string',
      disinheritSubGroup: 'boolean',
      domainId: 'string',
      identity: Identity,
      manageResourceId: 'string',
      manageResourceType: 'string',
      roleId: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

