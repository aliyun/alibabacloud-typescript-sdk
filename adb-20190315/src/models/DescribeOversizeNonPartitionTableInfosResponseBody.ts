// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOversizeNonPartitionTableInfosResponseBodyDetectionItems } from "./DescribeOversizeNonPartitionTableInfosResponseBodyDetectionItems";
import { DescribeOversizeNonPartitionTableInfosResponseBodyTables } from "./DescribeOversizeNonPartitionTableInfosResponseBodyTables";


export class DescribeOversizeNonPartitionTableInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-8vb46cpn2aaxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeOversizeNonPartitionTableInfosResponseBodyDetectionItems[];
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
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F67B5AC5-6CDE-5187-9E25-B1EEE9AC4D91
   */
  requestId?: string;
  /**
   * @remarks
   * The queried oversized non-partitioned tables.
   */
  tables?: DescribeOversizeNonPartitionTableInfosResponseBodyTables[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 21
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tables: 'Tables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeOversizeNonPartitionTableInfosResponseBodyDetectionItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': DescribeOversizeNonPartitionTableInfosResponseBodyTables },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detectionItems)) {
      $dara.Model.validateArray(this.detectionItems);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

