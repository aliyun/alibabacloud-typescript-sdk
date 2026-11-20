// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo extends $dara.Model {
  /**
   * @remarks
   * The detailed address of the recipient.
   * 
   * @example
   * XX Community, No. XX
   */
  addressDetail?: string;
  /**
   * @remarks
   * The district where the recipient is located.
   * 
   * @example
   * Chang\\"an District
   */
  areaName?: string;
  /**
   * @remarks
   * The city where the recipient is located.
   * 
   * @example
   * Xi\\"an
   */
  cityName?: string;
  /**
   * @remarks
   * The province where the recipient is located.
   * 
   * @example
   * Shaanxi Province
   */
  provinceName?: string;
  /**
   * @remarks
   * The street where the recipient is located.
   * 
   * @example
   * XX Street
   */
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      areaName: 'AreaName',
      cityName: 'CityName',
      provinceName: 'ProvinceName',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      areaName: 'string',
      cityName: 'string',
      provinceName: 'string',
      townName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequestConsigneeInfo extends $dara.Model {
  /**
   * @remarks
   * The address information of the recipient.
   */
  addressInfo?: CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo;
  /**
   * @remarks
   * The mobile phone number of the recipient.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  mobile?: string;
  /**
   * @remarks
   * The name of the recipient.
   * 
   * This parameter is required.
   * 
   * @example
   * Li XX
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: CreatePickUpWaybillPreQueryRequestConsigneeInfoAddressInfo,
      mobile: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.addressInfo && typeof (this.addressInfo as any).validate === 'function') {
      (this.addressInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo extends $dara.Model {
  /**
   * @remarks
   * The detailed address of the sender.
   * 
   * @example
   * XX Community, No. XX
   */
  addressDetail?: string;
  /**
   * @remarks
   * The district where the sender is located.
   * 
   * @example
   * Xihu District
   */
  areaName?: string;
  /**
   * @remarks
   * The city where the sender is located.
   * 
   * @example
   * Hangzhou
   */
  cityName?: string;
  /**
   * @remarks
   * The province where the sender is located.
   * 
   * @example
   * Zhejiang Province
   */
  provinceName?: string;
  /**
   * @remarks
   * The street where the sender is located.
   * 
   * @example
   * XX Street
   */
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'AddressDetail',
      areaName: 'AreaName',
      cityName: 'CityName',
      provinceName: 'ProvinceName',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: 'string',
      areaName: 'string',
      cityName: 'string',
      provinceName: 'string',
      townName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequestSenderInfo extends $dara.Model {
  /**
   * @remarks
   * The address information of the sender.
   */
  addressInfo?: CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo;
  /**
   * @remarks
   * The mobile phone number of the sender.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  mobile?: string;
  /**
   * @remarks
   * The name of the sender.
   * 
   * This parameter is required.
   * 
   * @example
   * Wang XX
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addressInfo: 'AddressInfo',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressInfo: CreatePickUpWaybillPreQueryRequestSenderInfoAddressInfo,
      mobile: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.addressInfo && typeof (this.addressInfo as any).validate === 'function') {
      (this.addressInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillPreQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The recipient information.
   * 
   * This parameter is required.
   */
  consigneeInfo?: CreatePickUpWaybillPreQueryRequestConsigneeInfo;
  /**
   * @remarks
   * The courier company code. If not specified, the system automatically assigns a courier company.
   * 
   * @example
   * YTO
   */
  cpCode?: string;
  /**
   * @remarks
   * The external channel source identifier. The value cannot contain underscores. The value is agreed upon with the system during integration.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  orderChannels?: string;
  /**
   * @remarks
   * The order number in the caller\\"s system.
   * 
   * @example
   * 787DFHHDS989****
   */
  outerOrderCode?: string;
  /**
   * @remarks
   * The estimated weight, in grams.
   * 
   * > If you want to query the estimated price, this parameter is required.
   * 
   * @example
   * 2000
   */
  preWeight?: string;
  /**
   * @remarks
   * The sender information.
   * 
   * This parameter is required.
   */
  senderInfo?: CreatePickUpWaybillPreQueryRequestSenderInfo;
  static names(): { [key: string]: string } {
    return {
      consigneeInfo: 'ConsigneeInfo',
      cpCode: 'CpCode',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      preWeight: 'PreWeight',
      senderInfo: 'SenderInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consigneeInfo: CreatePickUpWaybillPreQueryRequestConsigneeInfo,
      cpCode: 'string',
      orderChannels: 'string',
      outerOrderCode: 'string',
      preWeight: 'string',
      senderInfo: CreatePickUpWaybillPreQueryRequestSenderInfo,
    };
  }

  validate() {
    if(this.consigneeInfo && typeof (this.consigneeInfo as any).validate === 'function') {
      (this.consigneeInfo as any).validate();
    }
    if(this.senderInfo && typeof (this.senderInfo as any).validate === 'function') {
      (this.senderInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

