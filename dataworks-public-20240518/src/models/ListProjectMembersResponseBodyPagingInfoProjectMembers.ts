// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectMembersResponseBodyPagingInfoProjectMembersRoles } from "./ListProjectMembersResponseBodyPagingInfoProjectMembersRoles";


export class ListProjectMembersResponseBodyPagingInfoProjectMembers extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 62136
   */
  projectId?: number;
  /**
   * @remarks
   * The roles that are assigned to the member.
   */
  roles?: ListProjectMembersResponseBodyPagingInfoProjectMembersRoles[];
  /**
   * @remarks
   * The status of the member. Valid values:
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
   * The ID of the account used by the member.
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
      roles: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyPagingInfoProjectMembersRoles },
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

