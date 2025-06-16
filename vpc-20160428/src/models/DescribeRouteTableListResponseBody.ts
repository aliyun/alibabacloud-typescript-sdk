// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteTableListResponseBodyRouterTableList } from "./DescribeRouteTableListResponseBodyRouterTableList";


export class DescribeRouteTableListResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * DC668356-BCB4-42FD-9BC3-FA2B2E04B634
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about the route tables.
   */
  routerTableList?: DescribeRouteTableListResponseBodyRouterTableList;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routerTableList: 'RouterTableList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routerTableList: DescribeRouteTableListResponseBodyRouterTableList,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.routerTableList && typeof (this.routerTableList as any).validate === 'function') {
      (this.routerTableList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

