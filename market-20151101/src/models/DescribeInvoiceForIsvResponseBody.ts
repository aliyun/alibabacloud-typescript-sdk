// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvoiceForIsvResponseBodyResultEvaluateList extends $dara.Model {
  /**
   * @remarks
   * Specifies whether proxy invoicing is used.
   * 
   * @example
   * false
   */
  agent?: boolean;
  /**
   * @remarks
   * The amount. Unit: CNY.
   * 
   * @example
   * 1
   */
  amount?: string;
  /**
   * @remarks
   * The time when the transaction occurred.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  bizTimeStr?: string;
  /**
   * @remarks
   * The ID of the invoicing object.
   * 
   * @example
   * 9540765
   */
  id?: string;
  /**
   * @remarks
   * The type of the order or bill. Valid values:
   * - 0: Order.
   * - 1: Bill.
   * 
   * @example
   * 0
   */
  orderType?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2024091610072000****
   */
  outBizId?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmapi00067***
   */
  productCode?: string;
  /**
   * @remarks
   * **[Deprecated]** The product name.
   * 
   * @example
   * Image recognition OCR***
   */
  productName?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * example@alibaba-inc.com
   */
  realAliyunId?: string;
  /**
   * @remarks
   * The account to which the order belongs.
   * 
   * @example
   * 102277855749****
   */
  realAliyunPk?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      amount: 'Amount',
      bizTimeStr: 'BizTimeStr',
      id: 'Id',
      orderType: 'OrderType',
      outBizId: 'OutBizId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      realAliyunId: 'RealAliyunId',
      realAliyunPk: 'RealAliyunPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: 'boolean',
      amount: 'string',
      bizTimeStr: 'string',
      id: 'string',
      orderType: 'string',
      outBizId: 'string',
      productCode: 'string',
      productName: 'string',
      realAliyunId: 'string',
      realAliyunPk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvoiceForIsvResponseBodyResultInvoiceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the invoice object.
   * 
   * @example
   * 4072040****
   */
  id?: string;
  /**
   * @remarks
   * The applied invoicing amount. Unit: CNY.
   * 
   * @example
   * 99.99
   */
  invoiceAmount?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      invoiceAmount: 'InvoiceAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      invoiceAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvoiceForIsvResponseBodyResultReceiptUserInfoDto extends $dara.Model {
  /**
   * @remarks
   * The bank account.
   * 
   * @example
   * 000000
   */
  bankAccount?: string;
  /**
   * @remarks
   * The name of the bank.
   * 
   * @example
   * 111111
   */
  bankName?: string;
  /**
   * @remarks
   * The registered address.
   * 
   * @example
   * Hangzhou ****
   */
  regAddress?: string;
  /**
   * @remarks
   * The registered landline number.
   * 
   * @example
   * 0571-****
   */
  regPhone?: string;
  /**
   * @remarks
   * The unified social credit code of the enterprise.
   * 
   * @example
   * 91420100MA49L5****
   */
  taxNumber?: string;
  static names(): { [key: string]: string } {
    return {
      bankAccount: 'BankAccount',
      bankName: 'BankName',
      regAddress: 'RegAddress',
      regPhone: 'RegPhone',
      taxNumber: 'TaxNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankAccount: 'string',
      bankName: 'string',
      regAddress: 'string',
      regPhone: 'string',
      taxNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvoiceForIsvResponseBodyResultUserAddressDto extends $dara.Model {
  /**
   * @remarks
   * The recipient.
   * 
   * @example
   * Zhang San
   */
  addressee?: string;
  /**
   * @remarks
   * The Alibaba Cloud user ID of the customer.
   * 
   * @example
   * 174452687724****
   */
  aliyunPk?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * ******
   */
  bizType?: string;
  /**
   * @remarks
   * The delivery address.
   * 
   * @example
   * Hangzhou ****
   */
  deliveryAddress?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * demo@example.com
   */
  emails?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 130********
   */
  phone?: string;
  /**
   * @remarks
   * The postal code.
   * 
   * @example
   * ******
   */
  postalCode?: string;
  static names(): { [key: string]: string } {
    return {
      addressee: 'Addressee',
      aliyunPk: 'AliyunPk',
      bizType: 'BizType',
      deliveryAddress: 'DeliveryAddress',
      emails: 'Emails',
      phone: 'Phone',
      postalCode: 'PostalCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressee: 'string',
      aliyunPk: 'string',
      bizType: 'string',
      deliveryAddress: 'string',
      emails: 'string',
      phone: 'string',
      postalCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvoiceForIsvResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud user ID of the customer.
   * 
   * @example
   * 102277855749****
   */
  aliyunPk?: string;
  /**
   * @remarks
   * The service provider invoice remarks.
   * 
   * @example
   * None
   */
  checkNotice?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  createTimeStr?: string;
  /**
   * @remarks
   * The order, bill, or contract number.
   */
  evaluateList?: DescribeInvoiceForIsvResponseBodyResultEvaluateList[];
  /**
   * @remarks
   * The ID of the invoice application. This corresponds to the InvoiceId parameter when you call the ModifyInvoiceForIsv operation.
   * 
   * @example
   * 4072040****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the invoice object.
   * 
   * @example
   * 4072040****
   */
  invoiceId?: string;
  /**
   * @remarks
   * **[Deprecated]** The invoice sub-collection.
   */
  invoiceList?: DescribeInvoiceForIsvResponseBodyResultInvoiceList[];
  /**
   * @remarks
   * The relationship between the invoice title and the customer real-name information. Valid values: `REAL_NAME_MATCH` (The real-name information is consistent), `PERSONAL_APPLY_ENTERPRISE_TITLE` (An individual applies for an enterprise title), `ENTERPRISE_MULTI_TITLE` (Multiple titles for an enterprise), `MASTER_ACCOUNT_OPERATION` (Operated by the main account), and `OTHER` (Other). If not provided, the value is null.
   * 
   * @example
   * REAL_NAME_MATCH
   */
  invoiceTitleRelation?: string;
  /**
   * @remarks
   * The invoice issuance type. Valid values:
   * - 0: Paper.
   * - 1: Electronic.
   * 
   * @example
   * 1
   */
  materialType?: string;
  /**
   * @remarks
   * The time when the order status was modified. The time is displayed in GMT.
   * 
   * @example
   * 2025-03-04T09:43:18+08:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The time when the invoice was modified.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  modifiedTimeStr?: string;
  /**
   * @remarks
   * The total invoice amount. Unit: CNY.
   * 
   * @example
   * 99.99
   */
  price?: string;
  /**
   * @remarks
   * The user information of the invoice applicant.
   */
  receiptUserInfoDto?: DescribeInvoiceForIsvResponseBodyResultReceiptUserInfoDto;
  /**
   * @remarks
   * The invoice status. Valid values: 0: Pending. 1: Invoiced.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The invoice title.
   * 
   * @example
   * Alibaba Cloud Computing Ltd
   */
  title?: string;
  /**
   * @remarks
   * The invoice type. Valid values:
   * - 2: Digital electronic general invoice.
   * - 3: Digital electronic special invoice.
   * 
   * @example
   * 2
   */
  type?: string;
  /**
   * @remarks
   * The address information.
   */
  userAddressDto?: DescribeInvoiceForIsvResponseBodyResultUserAddressDto;
  /**
   * @remarks
   * The user invoice remarks.
   * 
   * @example
   * None
   */
  userNotice?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'AliyunPk',
      checkNotice: 'CheckNotice',
      createTimeStr: 'CreateTimeStr',
      evaluateList: 'EvaluateList',
      id: 'Id',
      invoiceId: 'InvoiceId',
      invoiceList: 'InvoiceList',
      invoiceTitleRelation: 'InvoiceTitleRelation',
      materialType: 'MaterialType',
      modifiedTime: 'ModifiedTime',
      modifiedTimeStr: 'ModifiedTimeStr',
      price: 'Price',
      receiptUserInfoDto: 'ReceiptUserInfoDto',
      status: 'Status',
      title: 'Title',
      type: 'Type',
      userAddressDto: 'UserAddressDto',
      userNotice: 'UserNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      checkNotice: 'string',
      createTimeStr: 'string',
      evaluateList: { 'type': 'array', 'itemType': DescribeInvoiceForIsvResponseBodyResultEvaluateList },
      id: 'string',
      invoiceId: 'string',
      invoiceList: { 'type': 'array', 'itemType': DescribeInvoiceForIsvResponseBodyResultInvoiceList },
      invoiceTitleRelation: 'string',
      materialType: 'string',
      modifiedTime: 'string',
      modifiedTimeStr: 'string',
      price: 'string',
      receiptUserInfoDto: DescribeInvoiceForIsvResponseBodyResultReceiptUserInfoDto,
      status: 'string',
      title: 'string',
      type: 'string',
      userAddressDto: DescribeInvoiceForIsvResponseBodyResultUserAddressDto,
      userNotice: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.evaluateList)) {
      $dara.Model.validateArray(this.evaluateList);
    }
    if(Array.isArray(this.invoiceList)) {
      $dara.Model.validateArray(this.invoiceList);
    }
    if(this.receiptUserInfoDto && typeof (this.receiptUserInfoDto as any).validate === 'function') {
      (this.receiptUserInfoDto as any).validate();
    }
    if(this.userAddressDto && typeof (this.userAddressDto as any).validate === 'function') {
      (this.userAddressDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvoiceForIsvResponseBody extends $dara.Model {
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 100
   */
  count?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token returned by this call.
   * 
   * @example
   * 3v3mzZN1QdVsTPNiT0OkD36LC9I+AJHU9z2oXBmJJOyy4nQl7MIUZUYG6fdbYBk+
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the successful flow node.
   */
  result?: DescribeInvoiceForIsvResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeInvoiceForIsvResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

