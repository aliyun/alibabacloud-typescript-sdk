// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReimbursementOrderResponseBodyModuleExpensesExpenseCompositions extends $dara.Model {
  billSettlementId?: number;
  capitalDirection?: string;
  feeType?: string;
  orderId?: string;
  remark?: string;
  remindTagList?: string[];
  settlementAmount?: string;
  settlementTime?: string;
  voucherType?: number;
  static names(): { [key: string]: string } {
    return {
      billSettlementId: 'bill_settlement_id',
      capitalDirection: 'capital_direction',
      feeType: 'fee_type',
      orderId: 'order_id',
      remark: 'remark',
      remindTagList: 'remind_tag_list',
      settlementAmount: 'settlement_amount',
      settlementTime: 'settlement_time',
      voucherType: 'voucher_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billSettlementId: 'number',
      capitalDirection: 'string',
      feeType: 'string',
      orderId: 'string',
      remark: 'string',
      remindTagList: { 'type': 'array', 'itemType': 'string' },
      settlementAmount: 'string',
      settlementTime: 'string',
      voucherType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.remindTagList)) {
      $dara.Model.validateArray(this.remindTagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

