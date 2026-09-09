// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAmountResponseBodyDataItems extends $dara.Model {
  aliyunUid?: string;
  amount?: string;
  amountRatio?: string;
  listFee?: string;
  price?: string;
  tier?: string;
  totalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'aliyunUid',
      amount: 'amount',
      amountRatio: 'amountRatio',
      listFee: 'listFee',
      price: 'price',
      tier: 'tier',
      totalAmount: 'totalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      amount: 'string',
      amountRatio: 'string',
      listFee: 'string',
      price: 'string',
      tier: 'string',
      totalAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAmountResponseBodyDataTotal extends $dara.Model {
  amount?: string;
  listFee?: string;
  totalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      listFee: 'listFee',
      totalAmount: 'totalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      listFee: 'string',
      totalAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAmountResponseBodyData extends $dara.Model {
  endDate?: string;
  items?: QueryAmountResponseBodyDataItems[];
  scopeNote?: string;
  startDate?: string;
  total?: QueryAmountResponseBodyDataTotal;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      items: 'items',
      scopeNote: 'scopeNote',
      startDate: 'startDate',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      items: { 'type': 'array', 'itemType': QueryAmountResponseBodyDataItems },
      scopeNote: 'string',
      startDate: 'string',
      total: QueryAmountResponseBodyDataTotal,
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.total && typeof (this.total as any).validate === 'function') {
      (this.total as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAmountResponseBody extends $dara.Model {
  code?: string;
  data?: QueryAmountResponseBodyData;
  message?: string;
  retryAble?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      retryAble: 'retryAble',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAmountResponseBodyData,
      message: 'string',
      retryAble: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

