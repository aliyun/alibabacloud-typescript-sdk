// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOrganizationRoleUsersResponseBodyResultData } from "./ListOrganizationRoleUsersResponseBodyResultData";


export class ListOrganizationRoleUsersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * User list.
   */
  data?: ListOrganizationRoleUsersResponseBodyResultData[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of items per page as set in the request.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListOrganizationRoleUsersResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

