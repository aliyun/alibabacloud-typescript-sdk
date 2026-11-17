// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheReservePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The cache reservation region. Valid values:
   * 
   * - HK: Hong Kong (China)
   * 
   * - CN: the Chinese mainland
   * 
   * @example
   * HK
   */
  crRegion?: string;
  /**
   * @remarks
   * The subscription period. Unit: months.
   * 
   * @example
   * 2
   */
  period?: number;
  /**
   * @remarks
   * The cache reservation capacity. Unit: GB.
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

