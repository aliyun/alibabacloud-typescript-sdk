// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInvoiceCandidateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0.01
   */
  acceptedOffsetAmount?: string;
  /**
   * @example
   * 1990699401005016
   */
  accountId?: number;
  accountName?: string;
  /**
   * @example
   * 202506
   */
  billingCycle?: number;
  /**
   * @example
   * 202506
   */
  businessId?: string;
  /**
   * @example
   * 2025-06-01 00:00:00
   */
  businessTime?: string;
  /**
   * @example
   * pts
   */
  commodityCode?: string;
  commodityName?: string;
  /**
   * @example
   * 2025-06-91 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 12345
   */
  id?: string;
  /**
   * @example
   * ALIYUN_SERVICE
   */
  invoiceIssuer?: string;
  /**
   * @example
   * 0.01
   */
  invoiceableAmount?: string;
  /**
   * @example
   * 0
   */
  invoicedAmount?: string;
  /**
   * @example
   * 0
   */
  offsetAmount?: string;
  /**
   * @example
   * pts
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * 1990699401005016
   */
  resourceOwnerAccountId?: number;
  resourceOwnerAccountName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 0.01
   */
  totalAmount?: string;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListInvoiceCandidateResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
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

