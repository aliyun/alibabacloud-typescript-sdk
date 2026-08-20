// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketCreateOrderRequestContact extends $dara.Model {
  /**
   * @example
   * 11010519900301001X
   */
  certificateNo?: string;
  /**
   * @example
   * 1
   */
  certificateType?: number;
  /**
   * @example
   * 86
   */
  dialingCode?: string;
  /**
   * @example
   * test@example.com
   */
  email?: string;
  /**
   * @example
   * ZHANG
   */
  firstName?: string;
  /**
   * @example
   * SAN
   */
  lastName?: string;
  /**
   * @example
   * 13800000000
   */
  mobile?: string;
  /**
   * @example
   * 张三
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      certificateNo: 'CertificateNo',
      certificateType: 'CertificateType',
      dialingCode: 'DialingCode',
      email: 'Email',
      firstName: 'FirstName',
      lastName: 'LastName',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateNo: 'string',
      certificateType: 'number',
      dialingCode: 'string',
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      mobile: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketCreateOrderRequestOrderProductDistributionPrice extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  amount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USD
   */
  currencyCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currencyCode: 'CurrencyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      currencyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketCreateOrderRequestOrderProduct extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  distributionPrice?: TicketCreateOrderRequestOrderProductDistributionPrice;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  productId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-10-01
   */
  travelDate?: string;
  static names(): { [key: string]: string } {
    return {
      distributionPrice: 'DistributionPrice',
      productId: 'ProductId',
      travelDate: 'TravelDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionPrice: TicketCreateOrderRequestOrderProductDistributionPrice,
      productId: 'string',
      travelDate: 'string',
    };
  }

  validate() {
    if(this.distributionPrice && typeof (this.distributionPrice as any).validate === 'function') {
      (this.distributionPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketCreateOrderRequestTotalDistributionPrice extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  amount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USD
   */
  currencyCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currencyCode: 'CurrencyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      currencyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketCreateOrderRequestTravelers extends $dara.Model {
  /**
   * @example
   * 1990-01-01
   */
  birthday?: string;
  /**
   * @example
   * 1234567890
   */
  certificateNo?: string;
  /**
   * @example
   * 1
   */
  certificateType?: number;
  /**
   * @example
   * 86
   */
  dialingCode?: string;
  /**
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @example
   * Zhang
   */
  firstName?: string;
  /**
   * @example
   * 1
   */
  gender?: number;
  /**
   * @example
   * San
   */
  lastName?: string;
  /**
   * @example
   * 13800000000
   */
  mobile?: string;
  /**
   * @example
   * 张三
   */
  name?: string;
  /**
   * @example
   * CN
   */
  nationality?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'Birthday',
      certificateNo: 'CertificateNo',
      certificateType: 'CertificateType',
      dialingCode: 'DialingCode',
      email: 'Email',
      firstName: 'FirstName',
      gender: 'Gender',
      lastName: 'LastName',
      mobile: 'Mobile',
      name: 'Name',
      nationality: 'Nationality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certificateNo: 'string',
      certificateType: 'number',
      dialingCode: 'string',
      email: 'string',
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobile: 'string',
      name: 'string',
      nationality: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketCreateOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  contact?: TicketCreateOrderRequestContact;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  distributorOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderProduct?: TicketCreateOrderRequestOrderProduct;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  totalDistributionPrice?: TicketCreateOrderRequestTotalDistributionPrice;
  travelers?: TicketCreateOrderRequestTravelers[];
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      contact: 'Contact',
      distributorOrderId: 'DistributorOrderId',
      orderProduct: 'OrderProduct',
      quantity: 'Quantity',
      totalDistributionPrice: 'TotalDistributionPrice',
      travelers: 'Travelers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      contact: TicketCreateOrderRequestContact,
      distributorOrderId: 'string',
      orderProduct: TicketCreateOrderRequestOrderProduct,
      quantity: 'number',
      totalDistributionPrice: TicketCreateOrderRequestTotalDistributionPrice,
      travelers: { 'type': 'array', 'itemType': TicketCreateOrderRequestTravelers },
    };
  }

  validate() {
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    if(this.orderProduct && typeof (this.orderProduct as any).validate === 'function') {
      (this.orderProduct as any).validate();
    }
    if(this.totalDistributionPrice && typeof (this.totalDistributionPrice as any).validate === 'function') {
      (this.totalDistributionPrice as any).validate();
    }
    if(Array.isArray(this.travelers)) {
      $dara.Model.validateArray(this.travelers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

