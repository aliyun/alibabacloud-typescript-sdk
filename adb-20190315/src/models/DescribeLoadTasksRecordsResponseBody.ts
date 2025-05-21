// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLoadTasksRecordsResponseBodyLoadTasksRecords } from "./DescribeLoadTasksRecordsResponseBodyLoadTasksRecords";


export class DescribeLoadTasksRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp2590j****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried asynchronous import and export tasks.
   */
  loadTasksRecords?: DescribeLoadTasksRecordsResponseBodyLoadTasksRecords[];
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
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C60B05DB-2B77-421A-98E9-92C20E******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      loadTasksRecords: 'LoadTasksRecords',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      loadTasksRecords: { 'type': 'array', 'itemType': DescribeLoadTasksRecordsResponseBodyLoadTasksRecords },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loadTasksRecords)) {
      $dara.Model.validateArray(this.loadTasksRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

