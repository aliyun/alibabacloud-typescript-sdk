// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillRequestConsigneeAddress extends $dara.Model {
  /**
   * @remarks
   * The detailed address.
   * 
   * This parameter is required.
   * 
   * @example
   * No. XX, XX Community
   */
  addressDetail?: string;
  /**
   * @remarks
   * The district.
   * 
   * This parameter is required.
   * 
   * @example
   * Xihu District
   */
  areaName?: string;
  /**
   * @remarks
   * The city.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  cityName?: string;
  /**
   * @remarks
   * The province.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhejiang
   */
  provinceName?: string;
  /**
   * @remarks
   * The street.
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

export class CreatePickUpWaybillRequestGoodsInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the item.
   * 
   * @example
   * Shoes
   */
  name?: string;
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @remarks
   * The weight. Unit: grams.
   * 
   * @example
   * 1000
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      quantity: 'Quantity',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      quantity: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePickUpWaybillRequestSendAddress extends $dara.Model {
  /**
   * @remarks
   * The detailed address.
   * 
   * This parameter is required.
   * 
   * @example
   * No. XX, XX Community
   */
  addressDetail?: string;
  /**
   * @remarks
   * The district.
   * 
   * This parameter is required.
   * 
   * @example
   * Weiyang District
   */
  areaName?: string;
  /**
   * @remarks
   * The city.
   * 
   * This parameter is required.
   * 
   * @example
   * Xi\\"an
   */
  cityName?: string;
  /**
   * @remarks
   * The province.
   * 
   * This parameter is required.
   * 
   * @example
   * Shaanxi Province
   */
  provinceName?: string;
  /**
   * @remarks
   * The street.
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

export class CreatePickUpWaybillRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the scheduled door-to-door pickup, in the YYYY-MM-DD HH:mm:ss format. To obtain the value of **AppointGotEndTime**, obtain the **EndTime** value from **AppointTimes** in the **CpTimeSelectList** response parameter of the [CreatePickUpWaybillPreQuery](https://api.aliyun.com/document/Dyplsapi/2017-05-25/CreatePickUpWaybillPreQuery) operation.
   * > Required when **bizType** is set to **1**.
   * 
   * @example
   * 2021-01-01 12:00:00
   */
  appointGotEndTime?: string;
  /**
   * @remarks
   * The start time of the scheduled door-to-door pickup, in the YYYY-MM-DD HH:mm:ss format. To obtain the value of **AppointGotStartTime**, obtain the **StartTime** value from **AppointTimes** in the **CpTimeSelectList** response parameter of the [CreatePickUpWaybillPreQuery](https://api.aliyun.com/document/Dyplsapi/2017-05-25/CreatePickUpWaybillPreQuery) operation.
   * 
   * > Required when **bizType** is set to **1**.
   * 
   * @example
   * 2021-01-01 10:00:00
   */
  appointGotStartTime?: string;
  /**
   * @remarks
   * The delivery mode. Valid values:
   * 
   * - **0**: real-time order (default)
   * - **1**: scheduled order
   * 
   * @example
   * 0
   */
  bizType?: number;
  /**
   * @remarks
   * The address of the recipient.
   * 
   * This parameter is required.
   */
  consigneeAddress?: CreatePickUpWaybillRequestConsigneeAddress;
  /**
   * @remarks
   * The mobile phone number of the recipient.
   * 
   * > You must specify either ConsigneeMobile or ConsigneePhone.
   * 
   * @example
   * 1580000****
   */
  consigneeMobile?: string;
  /**
   * @remarks
   * The name of the recipient.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhang XX
   */
  consigneeName?: string;
  /**
   * @remarks
   * The landline phone number of the recipient.
   * > You must specify either ConsigneeMobile or ConsigneePhone.
   * 
   * @example
   * 0570000****
   */
  consigneePhone?: string;
  /**
   * @remarks
   * The express delivery company code.
   * 
   * @example
   * YTO
   */
  cpCode?: string;
  /**
   * @remarks
   * The list of goods.
   */
  goodsInfos?: CreatePickUpWaybillRequestGoodsInfos[];
  /**
   * @remarks
   * The external channel source.
   * 
   * This parameter is required.
   * 
   * @example
   * YUN_DIAN_SHANG
   */
  orderChannels?: string;
  /**
   * @remarks
   * The external order ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 143234234266****
   */
  outerOrderCode?: string;
  /**
   * @remarks
   * The remark. The remark content printed on the waybill.
   * 
   * @example
   * Fragile items
   */
  remark?: string;
  /**
   * @remarks
   * The address of the sender.
   * 
   * This parameter is required.
   */
  sendAddress?: CreatePickUpWaybillRequestSendAddress;
  /**
   * @remarks
   * The mobile phone number of the sender.
   * 
   * > You must specify either SendMobile or SendPhone.
   * 
   * @example
   * 1596714****
   */
  sendMobile?: string;
  /**
   * @remarks
   * The name of the sender.
   * 
   * This parameter is required.
   * 
   * @example
   * Wang XX
   */
  sendName?: string;
  /**
   * @remarks
   * The landline phone number of the sender.
   * > You must specify either SendMobile or SendPhone.
   * 
   * @example
   * 05718845****
   */
  sendPhone?: string;
  static names(): { [key: string]: string } {
    return {
      appointGotEndTime: 'AppointGotEndTime',
      appointGotStartTime: 'AppointGotStartTime',
      bizType: 'BizType',
      consigneeAddress: 'ConsigneeAddress',
      consigneeMobile: 'ConsigneeMobile',
      consigneeName: 'ConsigneeName',
      consigneePhone: 'ConsigneePhone',
      cpCode: 'CpCode',
      goodsInfos: 'GoodsInfos',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      remark: 'Remark',
      sendAddress: 'SendAddress',
      sendMobile: 'SendMobile',
      sendName: 'SendName',
      sendPhone: 'SendPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointGotEndTime: 'string',
      appointGotStartTime: 'string',
      bizType: 'number',
      consigneeAddress: CreatePickUpWaybillRequestConsigneeAddress,
      consigneeMobile: 'string',
      consigneeName: 'string',
      consigneePhone: 'string',
      cpCode: 'string',
      goodsInfos: { 'type': 'array', 'itemType': CreatePickUpWaybillRequestGoodsInfos },
      orderChannels: 'string',
      outerOrderCode: 'string',
      remark: 'string',
      sendAddress: CreatePickUpWaybillRequestSendAddress,
      sendMobile: 'string',
      sendName: 'string',
      sendPhone: 'string',
    };
  }

  validate() {
    if(this.consigneeAddress && typeof (this.consigneeAddress as any).validate === 'function') {
      (this.consigneeAddress as any).validate();
    }
    if(Array.isArray(this.goodsInfos)) {
      $dara.Model.validateArray(this.goodsInfos);
    }
    if(this.sendAddress && typeof (this.sendAddress as any).validate === 'function') {
      (this.sendAddress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

