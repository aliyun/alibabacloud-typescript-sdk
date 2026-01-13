// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MeteringSummaryResultMeteringSummaryList extends $dara.Model {
  billingFunctionItem?: string;
  billingItem?: string;
  failCount?: number;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      billingFunctionItem: 'billingFunctionItem',
      billingItem: 'billingItem',
      failCount: 'failCount',
      successCount: 'successCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingFunctionItem: 'string',
      billingItem: 'string',
      failCount: 'number',
      successCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MeteringSummaryResult extends $dara.Model {
  meteringSummaryList?: MeteringSummaryResultMeteringSummaryList[];
  static names(): { [key: string]: string } {
    return {
      meteringSummaryList: 'meteringSummaryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meteringSummaryList: { 'type': 'array', 'itemType': MeteringSummaryResultMeteringSummaryList },
    };
  }

  validate() {
    if(Array.isArray(this.meteringSummaryList)) {
      $dara.Model.validateArray(this.meteringSummaryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

