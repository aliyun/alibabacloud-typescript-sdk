// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogsResponseBodyItems } from "./DescribeSlowLogsResponseBodyItems";


export class DescribeSlowLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end date of the query.
   * 
   * @example
   * 2021-05-30Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * polardb_mysql
   */
  engine?: string;
  /**
   * @remarks
   * Details about slow query logs.
   */
  items?: DescribeSlowLogsResponseBodyItems;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of SQL statements that are returned on the current page.
   * 
   * @example
   * 6
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2553A660-E4EB-4AF4-A402-8AFF70A49143
   */
  requestId?: string;
  /**
   * @remarks
   * The start date of the query.
   * 
   * @example
   * 2021-05-01Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 5
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      engine: 'Engine',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      engine: 'string',
      items: DescribeSlowLogsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      startTime: 'string',
      totalRecordCount: 'number',
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

