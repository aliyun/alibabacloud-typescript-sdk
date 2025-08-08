// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvoiceForIsvResponseBodyResultEvaluateList extends $dara.Model {
  /**
   * @example
   * false
   */
  agent?: boolean;
  /**
   * @example
   * 1
   */
  amount?: string;
  /**
   * @example
   * 2025-01-01 00:00:00
   */
  bizTimeStr?: string;
  /**
   * @example
   * 9540765
   */
  id?: string;
  /**
   * @example
   * 0
   */
  orderType?: string;
  /**
   * @example
   * 2024091610072000****
   */
  outBizId?: string;
  /**
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
   * @example
   * 50000018
   */
  id?: string;
  /**
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
  taxNumber?: string;
  static names(): { [key: string]: string } {
    return {
      taxNumber: 'TaxNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  addressee?: string;
  aliyunPk?: string;
  bizType?: string;
  deliveryAddress?: string;
  emails?: string;
  phone?: string;
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
   * @example
   * 102277855749****
   */
  aliyunPk?: string;
  createTimeStr?: string;
  evaluateList?: DescribeInvoiceForIsvResponseBodyResultEvaluateList[];
  /**
   * @example
   * 58050005
   */
  id?: string;
  invoiceId?: string;
  invoiceList?: DescribeInvoiceForIsvResponseBodyResultInvoiceList[];
  /**
   * @example
   * 1
   */
  materialType?: string;
  /**
   * @example
   * 2025-03-04T09:43:18+08:00
   */
  modifiedTime?: string;
  /**
   * @example
   * 2025-01-01 00:00:00
   */
  modifiedTimeStr?: string;
  /**
   * @example
   * 99.99
   */
  price?: string;
  receiptUserInfoDto?: DescribeInvoiceForIsvResponseBodyResultReceiptUserInfoDto;
  /**
   * @example
   * Success
   */
  status?: string;
  title?: string;
  /**
   * @example
   * 2
   */
  type?: string;
  userAddressDto?: DescribeInvoiceForIsvResponseBodyResultUserAddressDto;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'AliyunPk',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 100
   */
  count?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 3v3mzZN1QdVsTPNiT0OkD36LC9I+AJHU9z2oXBmJJOyy4nQl7MIUZUYG6fdbYBk+
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  result?: DescribeInvoiceForIsvResponseBodyResult[];
  /**
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

