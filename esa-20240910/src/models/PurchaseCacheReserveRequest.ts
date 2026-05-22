// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseCacheReserveRequest extends $dara.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  chargeType?: string;
  crRegion?: string;
  period?: number;
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

