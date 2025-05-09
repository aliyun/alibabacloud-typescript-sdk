// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeACLProtectTrendResponseBodyTrendList } from "./DescribeAclprotectTrendResponseBodyTrendList";


export class DescribeACLProtectTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of internal requests that are blocked by the ACL feature.
   * 
   * @example
   * 100
   */
  inProtectCnt?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 0
   */
  interVPCProtectCnt?: number;
  /**
   * @remarks
   * The interval for returning data. Unit: seconds.
   * 
   * @example
   * 86400
   */
  interval?: number;
  /**
   * @remarks
   * The number of external requests that are blocked by the ACL feature.
   * 
   * @example
   * 200
   */
  outProtectCnt?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9063AB86-6FFA-5B2D-A16D-697C966DECA3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of requests that are blocked by the ACL feature.
   * 
   * @example
   * 300
   */
  totalProtectCnt?: number;
  /**
   * @remarks
   * The statistics on the requests that are blocked by the ACL feature.
   */
  trendList?: DescribeACLProtectTrendResponseBodyTrendList[];
  static names(): { [key: string]: string } {
    return {
      inProtectCnt: 'InProtectCnt',
      interVPCProtectCnt: 'InterVPCProtectCnt',
      interval: 'Interval',
      outProtectCnt: 'OutProtectCnt',
      requestId: 'RequestId',
      totalProtectCnt: 'TotalProtectCnt',
      trendList: 'TrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inProtectCnt: 'number',
      interVPCProtectCnt: 'number',
      interval: 'number',
      outProtectCnt: 'number',
      requestId: 'string',
      totalProtectCnt: 'number',
      trendList: { 'type': 'array', 'itemType': DescribeACLProtectTrendResponseBodyTrendList },
    };
  }

  validate() {
    if(Array.isArray(this.trendList)) {
      $dara.Model.validateArray(this.trendList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

