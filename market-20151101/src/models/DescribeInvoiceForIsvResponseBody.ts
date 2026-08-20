// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvoiceForIsvResponseBodyResultEvaluateList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether invoicing is performed by an agent.
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
   * The time when the business transaction occurred.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  bizTimeStr?: string;
  /**
   * @remarks
   * The invoicing object ID.
   * 
   * @example
   * 9540765
   */
  id?: string;
  /**
   * @remarks
   * The order or bill type. Valid values:
   * 
   * - 0: order
   * 
   * - 1: bill
   * 
   * @example
   * 0
   */
  orderType?: string;
  /**
   * @remarks
   * The order ID.
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
   * The product name. (Deprecated.)
   * 
   * @example
   * 图像识别OCR***
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
   * The invoice object ID.
   * 
   * @example
   * 4072040****
   */
  id?: string;
  /**
   * @remarks
   * The invoicing amount applied for. Unit: CNY.
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
   * The bank account number.
   * 
   * @example
   * 000000
   */
  bankAccount?: string;
  /**
   * @remarks
   * The bank name.
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
   * 杭州市****
   */
  regAddress?: string;
  /**
   * @remarks
   * The registered phone number.
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
   * ***
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
   * Deprecated.
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
   * 杭州市****
   */
  deliveryAddress?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * ******
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
   * The supplier invoice remarks.
   * 
   * @example
   * 无
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
   * The order, bill, or contract numbers.
   */
  evaluateList?: DescribeInvoiceForIsvResponseBodyResultEvaluateList[];
  /**
   * @remarks
   * The invoice application ID. This corresponds to the InvoiceId parameter used when calling the ModifyInvoiceForIsv operation.
   * 
   * @example
   * 4072040****
   */
  id?: string;
  /**
   * @remarks
   * The invoice object ID.
   * 
   * @example
   * 4072040****
   */
  invoiceId?: string;
  /**
   * @remarks
   * The invoice sub-collection. (Deprecated.)
   */
  invoiceList?: DescribeInvoiceForIsvResponseBodyResultInvoiceList[];
  /**
   * @remarks
   * The invoice issuance type. Valid values:
   * - 0: paper
   * - 1: electronic
   * 
   * @example
   * 1
   */
  materialType?: string;
  /**
   * @remarks
   * The time when the order status was modified (GMT).
   * 
   * @example
   * 2025-03-04T09:43:18+08:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The invoice modification time.
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
   * The invoice applicant user information.
   */
  receiptUserInfoDto?: DescribeInvoiceForIsvResponseBodyResultReceiptUserInfoDto;
  /**
   * @remarks
   * The invoice status. Valid values: 0: pending invoicing. 1: invoiced.
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
   * 阿里云计算有限公司
   */
  title?: string;
  /**
   * @remarks
   * The invoice type. Valid values:
   * - 2: general digital electronic invoice
   * - 3: special digital electronic invoice
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
   * 无
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
   * The commodity code corresponding to the product.
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
   * The number of instances per page.
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
   * The process node information upon success.
   */
  result?: DescribeInvoiceForIsvResponseBodyResult[];
  /**
   * @remarks
   * The result indicator.
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

