// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeExecutorDetectionResponseBodyDetectionItems } from "./DescribeExecutorDetectionResponseBodyDetectionItems";


export class DescribeExecutorDetectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-xxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeExecutorDetectionResponseBodyDetectionItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B20BA053-27A1-5FDF-B063-6D6146720DF6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeExecutorDetectionResponseBodyDetectionItems },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detectionItems)) {
      $dara.Model.validateArray(this.detectionItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

