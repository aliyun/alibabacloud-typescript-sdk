// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTablePartitionDiagnoseResponseBodyDetectionItems } from "./DescribeTablePartitionDiagnoseResponseBodyDetectionItems";
import { DescribeTablePartitionDiagnoseResponseBodyItems } from "./DescribeTablePartitionDiagnoseResponseBodyItems";


export class DescribeTablePartitionDiagnoseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeTablePartitionDiagnoseResponseBodyDetectionItems[];
  /**
   * @remarks
   * The table statistics.
   */
  items?: DescribeTablePartitionDiagnoseResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The recommended maximum number of rows in each list partition.
   * 
   * @example
   * 640000000
   */
  suggestMaxRecordsPerPartition?: number;
  /**
   * @remarks
   * The recommended minimum number of rows in each list partition.
   * 
   * @example
   * 64000000
   */
  suggestMinRecordsPerPartition?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      suggestMaxRecordsPerPartition: 'SuggestMaxRecordsPerPartition',
      suggestMinRecordsPerPartition: 'SuggestMinRecordsPerPartition',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeTablePartitionDiagnoseResponseBodyDetectionItems },
      items: { 'type': 'array', 'itemType': DescribeTablePartitionDiagnoseResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      suggestMaxRecordsPerPartition: 'number',
      suggestMinRecordsPerPartition: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detectionItems)) {
      $dara.Model.validateArray(this.detectionItems);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

