// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheReservePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The cache reserve region.
   * 
   * - HK: Hong Kong (China)
   * 
   * - CN: the Chinese mainland.
   * 
   * @example
   * HK
   */
  crRegion?: string;
  /**
   * @remarks
   * The purchase period. Unit: months.
   * 
   * @example
   * 2
   */
  period?: number;
  /**
   * @remarks
   * The cache reserve specification. Unit: GB.
   * 
   * @example
   * 512000
   */
  quotaGb?: number;
  static names(): { [key: string]: string } {
    return {
      crRegion: 'CrRegion',
      period: 'Period',
      quotaGb: 'QuotaGb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crRegion: 'string',
      period: 'number',
      quotaGb: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

