// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits } from "./DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits";


export class DescribeCenInterRegionBandwidthLimitsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of inter-region connections.
   */
  cenInterRegionBandwidthLimits?: DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A30C665-8766-5AAA-9274-C97380E2D850
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cenInterRegionBandwidthLimits: 'CenInterRegionBandwidthLimits',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenInterRegionBandwidthLimits: DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.cenInterRegionBandwidthLimits && typeof (this.cenInterRegionBandwidthLimits as any).validate === 'function') {
      (this.cenInterRegionBandwidthLimits as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

