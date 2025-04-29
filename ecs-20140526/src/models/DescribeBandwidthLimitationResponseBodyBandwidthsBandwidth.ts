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

