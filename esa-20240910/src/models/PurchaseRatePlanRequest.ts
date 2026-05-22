// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseRatePlanRequest extends $dara.Model {
  amount?: number;
  autoPay?: boolean;
  autoRenew?: boolean;
  channel?: string;
  chargeType?: string;
  coverage?: string;
  period?: number;
  planCode?: string;
  planName?: string;
  siteName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      channel: 'Channel',
      chargeType: 'ChargeType',
      coverage: 'Coverage',
      period: 'Period',
      planCode: 'PlanCode',
      planName: 'PlanName',
      siteName: 'SiteName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      channel: 'string',
      chargeType: 'string',
      coverage: 'string',
      period: 'number',
      planCode: 'string',
      planName: 'string',
      siteName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

