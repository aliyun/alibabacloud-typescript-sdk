// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillShrinkRequest extends $dara.Model {
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
  consigneeAddressShrink?: string;
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
  goodsInfosShrink?: string;
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
  sendAddressShrink?: string;
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
      consigneeAddressShrink: 'ConsigneeAddress',
      consigneeMobile: 'ConsigneeMobile',
      consigneeName: 'ConsigneeName',
      consigneePhone: 'ConsigneePhone',
      cpCode: 'CpCode',
      goodsInfosShrink: 'GoodsInfos',
      orderChannels: 'OrderChannels',
      outerOrderCode: 'OuterOrderCode',
      remark: 'Remark',
      sendAddressShrink: 'SendAddress',
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
      consigneeAddressShrink: 'string',
      consigneeMobile: 'string',
      consigneeName: 'string',
      consigneePhone: 'string',
      cpCode: 'string',
      goodsInfosShrink: 'string',
      orderChannels: 'string',
      outerOrderCode: 'string',
      remark: 'string',
      sendAddressShrink: 'string',
      sendMobile: 'string',
      sendName: 'string',
      sendPhone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

