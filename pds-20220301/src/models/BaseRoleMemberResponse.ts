// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BaseAssignmentResponse } from "./BaseAssignmentResponse";
import { Identity } from "./Identity";


export class BaseRoleMemberResponse extends $dara.Model {
  assignmentList?: BaseAssignmentResponse[];
  createdAt?: string;
  creator?: string;
  domainId?: string;
  identity?: Identity;
  identityName?: string;
  isAdmin?: boolean;
  subdomainId?: string;
  static names(): { [key: string]: string } {
    return {
      assignmentList: 'assignment_list',
      createdAt: 'created_at',
      creator: 'creator',
      domainId: 'domain_id',
      identity: 'identity',
      identityName: 'identity_name',
      isAdmin: 'is_admin',
      subdomainId: 'subdomain_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignmentList: { 'type': 'array', 'itemType': BaseAssignmentResponse },
      createdAt: 'string',
      creator: 'string',
      domainId: 'string',
      identity: Identity,
      identityName: 'string',
      isAdmin: 'boolean',
      subdomainId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignmentList)) {
      $dara.Model.validateArray(this.assignmentList);
    }
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

