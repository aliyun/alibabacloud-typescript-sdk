// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseCacheReserveRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to automatically pay. The default value is false.
   * - true: Automatically pay.
   * - false: Do not automatically pay.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Whether to auto-renew:
   * - true: Auto-renew.
   * - false: Do not auto-renew.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Billing type
   * - PREPAY: Prepaid.
   * - POSTPAY: Postpaid.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * Cache retention region
   * - HK: Hong Kong, China
   * - CN-beijing: Mainland China - Beijing
   * 
   * @example
   * HK
   */
  crRegion?: string;
  /**
   * @remarks
   * Purchase period (unit: month).
   * 
   * @example
   * 3
   */
  period?: number;
  /**
   * @remarks
   * Cache retention specification (unit: GB).
   * 
   * @example
   * 512000
   */
  quotaGb?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      crRegion: 'CrRegion',
      period: 'Period',
      quotaGb: 'QuotaGb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      chargeType: 'string',
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

