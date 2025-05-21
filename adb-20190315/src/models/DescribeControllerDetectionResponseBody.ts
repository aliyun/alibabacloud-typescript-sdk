// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeControllerDetectionResponseBodyDetectionItems } from "./DescribeControllerDetectionResponseBodyDetectionItems";


export class DescribeControllerDetectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-xxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeControllerDetectionResponseBodyDetectionItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9856CFD-10DC-50AF-AE29-07C30FC57B86
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 8
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
      detectionItems: { 'type': 'array', 'itemType': DescribeControllerDetectionResponseBodyDetectionItems },
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

