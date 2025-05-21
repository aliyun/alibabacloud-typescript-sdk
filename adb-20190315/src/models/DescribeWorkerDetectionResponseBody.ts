// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWorkerDetectionResponseBodyDetectionItems } from "./DescribeWorkerDetectionResponseBodyDetectionItems";


export class DescribeWorkerDetectionResponseBody extends $dara.Model {
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
  detectionItems?: DescribeWorkerDetectionResponseBodyDetectionItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 37A6F56E-B970-50AF-AF33-C71E57AB2C8E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 144
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
      detectionItems: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItems },
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

