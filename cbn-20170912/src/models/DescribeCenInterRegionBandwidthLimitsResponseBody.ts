// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimitsCenInterRegionBandwidthLimit extends $dara.Model {
  bandwidthLimit?: number;
  bandwidthPackageId?: string;
  bandwidthType?: string;
  cenId?: string;
  geographicSpanId?: string;
  localRegionId?: string;
  oppositeRegionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthLimit: 'BandwidthLimit',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthType: 'BandwidthType',
      cenId: 'CenId',
      geographicSpanId: 'GeographicSpanId',
      localRegionId: 'LocalRegionId',
      oppositeRegionId: 'OppositeRegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthLimit: 'number',
      bandwidthPackageId: 'string',
      bandwidthType: 'string',
      cenId: 'string',
      geographicSpanId: 'string',
      localRegionId: 'string',
      oppositeRegionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimits extends $dara.Model {
  cenInterRegionBandwidthLimit?: DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimitsCenInterRegionBandwidthLimit[];
  static names(): { [key: string]: string } {
    return {
      cenInterRegionBandwidthLimit: 'CenInterRegionBandwidthLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenInterRegionBandwidthLimit: { 'type': 'array', 'itemType': DescribeCenInterRegionBandwidthLimitsResponseBodyCenInterRegionBandwidthLimitsCenInterRegionBandwidthLimit },
    };
  }

  validate() {
    if(Array.isArray(this.cenInterRegionBandwidthLimit)) {
      $dara.Model.validateArray(this.cenInterRegionBandwidthLimit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenInterRegionBandwidthLimitsResponseBody extends $dara.Model {
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

