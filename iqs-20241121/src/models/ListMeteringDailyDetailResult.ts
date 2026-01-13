// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMeteringDailyDetailResultMeteringDailyDetailList extends $dara.Model {
  billDate?: string;
  billPeriod?: string;
  billingFunctionItem?: string;
  billingItem?: string;
  billingQps?: number;
  failedCount?: number;
  ladderTypeCode?: number;
  subAccountId?: string;
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      billDate: 'billDate',
      billPeriod: 'billPeriod',
      billingFunctionItem: 'billingFunctionItem',
      billingItem: 'billingItem',
      billingQps: 'billingQps',
      failedCount: 'failedCount',
      ladderTypeCode: 'ladderTypeCode',
      subAccountId: 'subAccountId',
      successCount: 'successCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billDate: 'string',
      billPeriod: 'string',
      billingFunctionItem: 'string',
      billingItem: 'string',
      billingQps: 'number',
      failedCount: 'number',
      ladderTypeCode: 'number',
      subAccountId: 'string',
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

export class ListMeteringDailyDetailResult extends $dara.Model {
  meteringDailyDetailList?: ListMeteringDailyDetailResultMeteringDailyDetailList[];
  static names(): { [key: string]: string } {
    return {
      meteringDailyDetailList: 'meteringDailyDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meteringDailyDetailList: { 'type': 'array', 'itemType': ListMeteringDailyDetailResultMeteringDailyDetailList },
    };
  }

  validate() {
    if(Array.isArray(this.meteringDailyDetailList)) {
      $dara.Model.validateArray(this.meteringDailyDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

