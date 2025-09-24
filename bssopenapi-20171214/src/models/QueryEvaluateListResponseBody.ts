// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEvaluateListResponseBodyDataEvaluateListEvaluate extends $dara.Model {
  /**
   * @remarks
   * The billing cycle.
   * 
   * @example
   * 202002
   */
  billCycle?: string;
  /**
   * @remarks
   * The ID of the bill.
   * 
   * @example
   * 234543254325
   */
  billId?: number;
  /**
   * @remarks
   * The time.
   * 
   * @example
   * 2018-10-10 18:05:44
   */
  bizTime?: string;
  /**
   * @remarks
   * The market type in the invoice. Valid values:
   * 
   * *   ALIYUN: Alibaba Cloud
   * *   MARKETPLACE: Alibaba Cloud Marketplace
   * 
   * @example
   * ALIYUN
   */
  bizType?: string;
  /**
   * @remarks
   * The invoiceable amount.
   * 
   * @example
   * 123213
   */
  canInvoiceAmount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2018-10-10 18:05:44
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2018-10-10 18:05:44
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the invoice.
   * 
   * @example
   * 1325321532
   */
  id?: number;
  /**
   * @remarks
   * The invoiced amount.
   * 
   * @example
   * 10000
   */
  invoicedAmount?: number;
  /**
   * @remarks
   * The ID of the item.
   * 
   * @example
   * 23453245
   */
  itemId?: number;
  /**
   * @remarks
   * The name of the object to be invoiced.
   * 
   * @example
   * Refund of a voucher with denomination marked
   */
  name?: string;
  /**
   * @remarks
   * If a refund is issued due to an order such as an unsubscription order or a configuration downgrade order, the refund amount is used to offset the amount of the invoice. The value is consistent with the value of the **OffsetCostAmount** parameter.
   * 
   * @example
   * 500
   */
  offsetAcceptAmount?: number;
  /**
   * @remarks
   * The refund amount used to offset the amount of the invoice. If a refund is issued due to an order such as an unsubscription order or a configuration downgrade order, the refund amount is used to offset the amount of the invoice. The value is consistent with the value of the **OffsetAcceptAmount** parameter.
   * 
   * @example
   * 500
   */
  offsetCostAmount?: number;
  /**
   * @remarks
   * The ID of the external object.
   * 
   * @example
   * 12341
   */
  opId?: string;
  /**
   * @remarks
   * The original amount.
   * 
   * @example
   * -10000
   */
  originalAmount?: number;
  /**
   * @remarks
   * The ID of the external order.
   * 
   * @example
   * 124324213421
   */
  outBizId?: string;
  /**
   * @remarks
   * The balance.
   * 
   * @example
   * -10000
   */
  presentAmount?: number;
  /**
   * @remarks
   * The status of the invoiceable amount.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of orders that are queried. Valid values:
   * 
   * *   1: the orders in which the invoiceable amount is negative.
   * *   2: the orders in which the invoiceable amount is positive.
   * *   3: the orders in which the invoiceable amount is not 0.
   * *   4: the orders in which the amount that has been invoiced is greater than 0.
   * 
   * >  By default, this parameter is left empty. If this parameter is left empty, all orders are queried.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 2738543
   */
  userId?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * test
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      billCycle: 'BillCycle',
      billId: 'BillId',
      bizTime: 'BizTime',
      bizType: 'BizType',
      canInvoiceAmount: 'CanInvoiceAmount',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      invoicedAmount: 'InvoicedAmount',
      itemId: 'ItemId',
      name: 'Name',
      offsetAcceptAmount: 'OffsetAcceptAmount',
      offsetCostAmount: 'OffsetCostAmount',
      opId: 'OpId',
      originalAmount: 'OriginalAmount',
      outBizId: 'OutBizId',
      presentAmount: 'PresentAmount',
      status: 'Status',
      type: 'Type',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billCycle: 'string',
      billId: 'number',
      bizTime: 'string',
      bizType: 'string',
      canInvoiceAmount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      invoicedAmount: 'number',
      itemId: 'number',
      name: 'string',
      offsetAcceptAmount: 'number',
      offsetCostAmount: 'number',
      opId: 'string',
      originalAmount: 'number',
      outBizId: 'string',
      presentAmount: 'number',
      status: 'number',
      type: 'number',
      userId: 'number',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBodyDataEvaluateList extends $dara.Model {
  evaluate?: QueryEvaluateListResponseBodyDataEvaluateListEvaluate[];
  static names(): { [key: string]: string } {
    return {
      evaluate: 'Evaluate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluate: { 'type': 'array', 'itemType': QueryEvaluateListResponseBodyDataEvaluateListEvaluate },
    };
  }

  validate() {
    if(Array.isArray(this.evaluate)) {
      $dara.Model.validateArray(this.evaluate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  evaluateList?: QueryEvaluateListResponseBodyDataEvaluateList;
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The invoiced amount that meets the query conditions. Unit: Cent.
   * 
   * @example
   * 12344
   */
  totalInvoiceAmount?: number;
  /**
   * @remarks
   * The invoiceable amount that meets the query conditions. Unit: Cent.
   * 
   * @example
   * 12344
   */
  totalUnAppliedInvoiceAmount?: number;
  static names(): { [key: string]: string } {
    return {
      evaluateList: 'EvaluateList',
      hostId: 'HostId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalInvoiceAmount: 'TotalInvoiceAmount',
      totalUnAppliedInvoiceAmount: 'TotalUnAppliedInvoiceAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluateList: QueryEvaluateListResponseBodyDataEvaluateList,
      hostId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalInvoiceAmount: 'number',
      totalUnAppliedInvoiceAmount: 'number',
    };
  }

  validate() {
    if(this.evaluateList && typeof (this.evaluateList as any).validate === 'function') {
      (this.evaluateList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEvaluateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryEvaluateListResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D35FF10E-1B2E-4ABA-8401-0AE17725F50B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryEvaluateListResponseBodyData,
      message: 'string',
      requestId: 'string',
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

