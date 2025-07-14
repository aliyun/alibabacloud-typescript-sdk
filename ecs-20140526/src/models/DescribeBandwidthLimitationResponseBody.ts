// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthLimitationResponseBodyBandwidthsBandwidth extends $dara.Model {
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   PayByBandwidth
   * *   PayByTraffic
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum public bandwidth.
   * 
   * @example
   * 100
   */
  max?: number;
  /**
   * @remarks
   * The minimum public bandwidth.
   * 
   * @example
   * 0
   */
  min?: number;
  /**
   * @remarks
   * The unit of the public bandwidth.
   * 
   * @example
   * Mbps
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      internetChargeType: 'InternetChargeType',
      max: 'Max',
      min: 'Min',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetChargeType: 'string',
      max: 'number',
      min: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthLimitationResponseBodyBandwidths extends $dara.Model {
  bandwidth?: DescribeBandwidthLimitationResponseBodyBandwidthsBandwidth[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: { 'type': 'array', 'itemType': DescribeBandwidthLimitationResponseBodyBandwidthsBandwidth },
    };
  }

  validate() {
    if(Array.isArray(this.bandwidth)) {
      $dara.Model.validateArray(this.bandwidth);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBandwidthLimitationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the maximum public bandwidth.
   */
  bandwidths?: DescribeBandwidthLimitationResponseBodyBandwidths;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidths: 'Bandwidths',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidths: DescribeBandwidthLimitationResponseBodyBandwidths,
      requestId: 'string',
    };
  }

  validate() {
    if(this.bandwidths && typeof (this.bandwidths as any).validate === 'function') {
      (this.bandwidths as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

