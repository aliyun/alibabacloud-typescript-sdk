// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressListCustomerInvoiceAddress extends $dara.Model {
  /**
   * @remarks
   * The addressee.
   * 
   * @example
   * test
   */
  addressee?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * test
   */
  bizType?: string;
  /**
   * @remarks
   * The city to which the invoice is mailed.
   * 
   * @example
   * Hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The name of the district to which the invoice is mailed.
   * 
   * @example
   * Test District
   */
  county?: string;
  /**
   * @remarks
   * The detailed address to which the invoice is mailed. This parameter is returned after fields are concatenated.
   * 
   * @example
   * Test Address
   */
  deliveryAddress?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 311601051
   */
  id?: number;
  /**
   * @remarks
   * The phone number of the addressee.
   * 
   * @example
   * 138xxxxxxxx
   */
  phone?: string;
  /**
   * @remarks
   * The postcode.
   * 
   * @example
   * 000000
   */
  postalCode?: string;
  /**
   * @remarks
   * The province to which the invoice is mailed.
   * 
   * @example
   * Zhejiang
   */
  province?: string;
  /**
   * @remarks
   * The name of the street to which the invoice is mailed.
   * 
   * @example
   * Test Street
   */
  street?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 4382956342857
   */
  userId?: number;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * testNick
   */
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      addressee: 'Addressee',
      bizType: 'BizType',
      city: 'City',
      county: 'County',
      deliveryAddress: 'DeliveryAddress',
      id: 'Id',
      phone: 'Phone',
      postalCode: 'PostalCode',
      province: 'Province',
      street: 'Street',
      userId: 'UserId',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressee: 'string',
      bizType: 'string',
      city: 'string',
      county: 'string',
      deliveryAddress: 'string',
      id: 'number',
      phone: 'string',
      postalCode: 'string',
      province: 'string',
      street: 'string',
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

export class QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressList extends $dara.Model {
  customerInvoiceAddress?: QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressListCustomerInvoiceAddress[];
  static names(): { [key: string]: string } {
    return {
      customerInvoiceAddress: 'CustomerInvoiceAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoiceAddress: { 'type': 'array', 'itemType': QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressListCustomerInvoiceAddress },
    };
  }

  validate() {
    if(Array.isArray(this.customerInvoiceAddress)) {
      $dara.Model.validateArray(this.customerInvoiceAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of addresses to which invoices are mailed.
   */
  customerInvoiceAddressList?: QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressList;
  static names(): { [key: string]: string } {
    return {
      customerInvoiceAddressList: 'CustomerInvoiceAddressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerInvoiceAddressList: QueryCustomerAddressListResponseBodyDataCustomerInvoiceAddressList,
    };
  }

  validate() {
    if(this.customerInvoiceAddressList && typeof (this.customerInvoiceAddressList as any).validate === 'function') {
      (this.customerInvoiceAddressList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCustomerAddressListResponseBody extends $dara.Model {
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
  data?: QueryCustomerAddressListResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BBEF51A3-E933-4F40-A534-C673CBDB9C80
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
      data: QueryCustomerAddressListResponseBodyData,
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

