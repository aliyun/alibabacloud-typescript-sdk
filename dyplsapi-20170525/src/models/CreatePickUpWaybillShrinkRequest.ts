// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the door-to-door pickup in the appointment. The value of **AppointGotEndTime** is the value of **EndTime** of **AppointTimes** in **CpTimeSelectList** returned by the [CreatePickUpWaybillPreQuery](~~CreatePickUpWaybillPreQuery~~#resultMapping) operation.
   * 
   * >  This parameter is required when **BizType** is set to **1**.
   * 
   * @example
   * 2021-01-01 12:00:00
   */
  appointGotEndTime?: string;
  /**
   * @remarks
   * The start time of the door-to-door pickup in the appointment. The value of **AppointGotStartTime** is the value of **StartTime** of **AppointTimes** in **CpTimeSelectList** returned by the [CreatePickUpWaybillPreQuery](~~CreatePickUpWaybillPreQuery~~#resultMapping) operation.
   * 
   * >  This parameter is required when **BizType** is set to **1**.
   * 
   * @example
   * 2021-01-01 10:00:00
   */
  appointGotStartTime?: string;
  /**
   * @remarks
   * The pickup mode. Valid values:
   * 
   * *   **0** (default): real-time order.
   * *   **1**: appointment order.
   * 
   * @example
   * 0
   */
  bizType?: number;
  /**
   * @remarks
   * The address of the consignee.
   * 
   * This parameter is required.
   */
  consigneeAddressShrink?: string;
  /**
   * @remarks
   * The mobile phone number of the consignee.
   * 
   * >  Either ConsigneeMobile or ConsigneePhone must be set.
   * 
   * @example
   * 1580000****
   */
  consigneeMobile?: string;
  /**
   * @remarks
   * The name of the consignee.
   * 
   * This parameter is required.
   * 
   * @example
   * Li
   */
  consigneeName?: string;
  /**
   * @remarks
   * The landline phone number of the consignee.
   * 
   * >  Either ConsigneeMobile or ConsigneePhone must be set.
   * 
   * @example
   * 0570000****
   */
  consigneePhone?: string;
  /**
   * @remarks
   * The code of the courier company.
   * 
   * @example
   * YTO
   */
  cpCode?: string;
  /**
   * @remarks
   * The items.
   */
  goodsInfosShrink?: string;
  /**
   * @remarks
   * The external channel sources.
   * 
   * This parameter is required.
   * 
   * @example
   * YUN_DIAN_SHANG
   */
  orderChannels?: string;
  /**
   * @remarks
   * The ID of the external order.
   * 
   * This parameter is required.
   * 
   * @example
   * 143234234266****
   */
  outerOrderCode?: string;
  /**
   * @remarks
   * The additional information about the order. The additional information will be printed on the order.
   * 
   * @example
   * fragile
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
   * >  Either SendMobile or SendPhone must be set.
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
   * Wang
   */
  sendName?: string;
  /**
   * @remarks
   * The landline phone number of the sender.
   * 
   * >  Either SendMobile or SendPhone must be set.
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

