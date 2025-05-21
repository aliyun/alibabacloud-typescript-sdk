// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogRecordsResponseBodyItems } from "./DescribeSlowLogRecordsResponseBodyItems";


export class DescribeSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp1rqvm70uh2****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Details of the slow query logs.
   */
  items?: DescribeSlowLogRecordsResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned on the current page.
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
   * D7559209-7EC3-41E1-8F78-156990******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      items: DescribeSlowLogRecordsResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

