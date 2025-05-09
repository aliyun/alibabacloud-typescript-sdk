// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectMembersResponseBodyPagingInfoProjectMembers } from "./ListProjectMembersResponseBodyPagingInfoProjectMembers";


export class ListProjectMembersResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The members in the workspace.
   */
  projectMembers?: ListProjectMembersResponseBodyPagingInfoProjectMembers[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectMembers: 'ProjectMembers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectMembers: { 'type': 'array', 'itemType': ListProjectMembersResponseBodyPagingInfoProjectMembers },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectMembers)) {
      $dara.Model.validateArray(this.projectMembers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

