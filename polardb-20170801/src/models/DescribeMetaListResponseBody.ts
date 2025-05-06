// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMetaListResponseBodyItems } from "./DescribeMetaListResponseBodyItems";


export class DescribeMetaListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-bp1s826a1up******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The details of databases and tables that can be restored.
   */
  items?: DescribeMetaListResponseBodyItems[];
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AA815DE7-B576-4B22-B33C-3FB31A******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  totalPageCount?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalPageCount: 'TotalPageCount',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      items: { 'type': 'array', 'itemType': DescribeMetaListResponseBodyItems },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalPageCount: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

