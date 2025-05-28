// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryWorkspaceUserListResponseBodyResultData } from "./QueryWorkspaceUserListResponseBodyResultData";


export class QueryWorkspaceUserListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Information about the workspace members.
   */
  data?: QueryWorkspaceUserListResponseBodyResultData[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of rows per page as set in the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of rows.
   * 
   * @example
   * 1
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
      data: { 'type': 'array', 'itemType': QueryWorkspaceUserListResponseBodyResultData },
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

