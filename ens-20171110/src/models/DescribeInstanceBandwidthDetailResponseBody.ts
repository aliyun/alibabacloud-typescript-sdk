// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceBandwidthDetailResponseBodyBandwidths } from "./DescribeInstanceBandwidthDetailResponseBodyBandwidths";


export class DescribeInstanceBandwidthDetailResponseBody extends $dara.Model {
  bandwidths?: DescribeInstanceBandwidthDetailResponseBodyBandwidths[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidths: 'Bandwidths',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidths: { 'type': 'array', 'itemType': DescribeInstanceBandwidthDetailResponseBodyBandwidths },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bandwidths)) {
      $dara.Model.validateArray(this.bandwidths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

