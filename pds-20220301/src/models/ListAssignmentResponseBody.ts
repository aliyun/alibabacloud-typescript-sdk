// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Identity } from "./Identity";


export class ListAssignmentResponseBodyAssignmentList extends $dara.Model {
  /**
   * @remarks
   * The time when the role was assigned. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1622682267564
   */
  createdAt?: number;
  /**
   * @remarks
   * The ID of the user who assigned the role.
   * 
   * @example
   * 216***c83
   */
  creator?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * hz1
   */
  domainId?: string;
  /**
   * @remarks
   * The identity to whom the role is assigned, which is a user or a group.
   */
  identity?: Identity;
  /**
   * @remarks
   * The ID of the managed resource, such as a group ID.
   * 
   * @example
   * 105***b82
   */
  manageResourceId?: string;
  /**
   * @remarks
   * The type of the managed resource. For example, a value of RT_Group indicates group.
   * 
   * @example
   * RT_Group
   */
  manageResourceType?: string;
  /**
   * @remarks
   * The ID of the role assigned to the identity.
   * 
   * @example
   * SystemGroupAdmin
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      domainId: 'domain_id',
      identity: 'identity',
      manageResourceId: 'manage_resource_id',
      manageResourceType: 'manage_resource_type',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      domainId: 'string',
      identity: Identity,
      manageResourceId: 'string',
      manageResourceType: 'string',
      roleId: 'string',
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

export class ListAssignmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The assigned roles.
   */
  assignmentList?: ListAssignmentResponseBodyAssignmentList[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  nextMarker?: string;
  static names(): { [key: string]: string } {
    return {
      assignmentList: 'assignment_list',
      nextMarker: 'next_marker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignmentList: { 'type': 'array', 'itemType': ListAssignmentResponseBodyAssignmentList },
      nextMarker: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignmentList)) {
      $dara.Model.validateArray(this.assignmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

