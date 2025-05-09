// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProjectMemberResponseBodyProjectMemberRoles } from "./GetProjectMemberResponseBodyProjectMemberRoles";


export class GetProjectMemberResponseBodyProjectMember extends $dara.Model {
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 88757
   */
  projectId?: number;
  /**
   * @remarks
   * The roles that are assigned to the member in the workspace.
   */
  roles?: GetProjectMemberResponseBodyProjectMemberRoles[];
  /**
   * @remarks
   * The status of the member.
   * 
   * *   Normal
   * *   Forbidden
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The ID of the account used by the member in the workspace.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roles: 'Roles',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roles: { 'type': 'array', 'itemType': GetProjectMemberResponseBodyProjectMemberRoles },
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

