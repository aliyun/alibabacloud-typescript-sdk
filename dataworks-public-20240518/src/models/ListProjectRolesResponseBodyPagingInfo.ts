// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectRolesResponseBodyPagingInfoProjectRoles } from "./ListProjectRolesResponseBodyPagingInfoProjectRoles";


export class ListProjectRolesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The roles in the DataWorks workspace.
   */
  projectRoles?: ListProjectRolesResponseBodyPagingInfoProjectRoles[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 42
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectRoles: 'ProjectRoles',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      projectRoles: { 'type': 'array', 'itemType': ListProjectRolesResponseBodyPagingInfoProjectRoles },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectRoles)) {
      $dara.Model.validateArray(this.projectRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

