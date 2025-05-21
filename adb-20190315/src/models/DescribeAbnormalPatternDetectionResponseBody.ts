// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAbnormalPatternDetectionResponseBodyDetectionItems } from "./DescribeAbnormalPatternDetectionResponseBodyDetectionItems";


export class DescribeAbnormalPatternDetectionResponseBody extends $dara.Model {
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
  detectionItems?: DescribeAbnormalPatternDetectionResponseBodyDetectionItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36B66482-A215-5F04-A42E-859983D89D7B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 300
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
      detectionItems: { 'type': 'array', 'itemType': DescribeAbnormalPatternDetectionResponseBodyDetectionItems },
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

