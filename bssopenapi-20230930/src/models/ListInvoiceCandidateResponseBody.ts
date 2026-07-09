// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInvoiceCandidateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The accepted offset amount.
   * 
   * @example
   * 0.01
   */
  acceptedOffsetAmount?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 1990699401005016
   */
  accountId?: number;
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * 测试账号
   */
  accountName?: string;
  /**
   * @remarks
   * The billing cycle.
   * 
   * @example
   * 202506
   */
  billingCycle?: number;
  /**
   * @remarks
   * The business document number.
   * 
   * @example
   * 202506
   */
  businessId?: string;
  /**
   * @remarks
   * The time when the business event occurred.
   * 
   * @example
   * 2025-06-01 00:00:00
   */
  businessTime?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * pts
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity name.
   * 
   * @example
   * 性能测试
   */
  commodityName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-91 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the invoice candidate.
   * 
   * @example
   * 12345
   */
  id?: string;
  /**
   * @remarks
   * The invoice issuer.
   * 
   * @example
   * ALIYUN_SERVICE
   */
  invoiceIssuer?: string;
  /**
   * @remarks
   * The invoiceable amount.
   * 
   * @example
   * 0.01
   */
  invoiceableAmount?: string;
  /**
   * @remarks
   * The invoiced amount.
   * 
   * @example
   * 0
   */
  invoicedAmount?: string;
  /**
   * @remarks
   * The offset amount.
   * 
   * @example
   * 0
   */
  offsetAmount?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * pts
   */
  productCode?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * 性能测试
   */
  productName?: string;
  /**
   * @remarks
   * The ID of the resource owner account.
   * 
   * @example
   * 1990699401005016
   */
  resourceOwnerAccountId?: number;
  /**
   * @remarks
   * The name of the resource owner account.
   * 
   * @example
   * 测试账号
   */
  resourceOwnerAccountName?: string;
  /**
   * @remarks
   * The status of the invoice candidate.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The total amount.
   * 
   * @example
   * 0.01
   */
  totalAmount?: string;
  /**
   * @remarks
   * The type of the invoice candidate.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      acceptedOffsetAmount: 'AcceptedOffsetAmount',
      accountId: 'AccountId',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      businessId: 'BusinessId',
      businessTime: 'BusinessTime',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      createTime: 'CreateTime',
      id: 'Id',
      invoiceIssuer: 'InvoiceIssuer',
      invoiceableAmount: 'InvoiceableAmount',
      invoicedAmount: 'InvoicedAmount',
      offsetAmount: 'OffsetAmount',
      productCode: 'ProductCode',
      productName: 'ProductName',
      resourceOwnerAccountId: 'ResourceOwnerAccountId',
      resourceOwnerAccountName: 'ResourceOwnerAccountName',
      status: 'Status',
      totalAmount: 'TotalAmount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedOffsetAmount: 'string',
      accountId: 'number',
      accountName: 'string',
      billingCycle: 'number',
      businessId: 'string',
      businessTime: 'string',
      commodityCode: 'string',
      commodityName: 'string',
      createTime: 'string',
      id: 'string',
      invoiceIssuer: 'string',
      invoiceableAmount: 'string',
      invoicedAmount: 'string',
      offsetAmount: 'string',
      productCode: 'string',
      productName: 'string',
      resourceOwnerAccountId: 'number',
      resourceOwnerAccountName: 'string',
      status: 'number',
      totalAmount: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvoiceCandidateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of data entries.
   */
  data?: ListInvoiceCandidateResponseBodyData[];
  /**
   * @remarks
   * The metadata of the response.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      metadata: 'Metadata',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListInvoiceCandidateResponseBodyData },
      metadata: 'any',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

