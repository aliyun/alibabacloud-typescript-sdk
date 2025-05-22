// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIntentionForPartnerRequest extends $dara.Model {
  area?: string;
  /**
   * @example
   * esp.isp
   */
  bizType?: string;
  /**
   * @example
   * lingjun
   */
  channel?: string;
  /**
   * @example
   * Server
   */
  commodityType?: string;
  contactName?: string;
  /**
   * @example
   * ceshi
   */
  description?: string;
  /**
   * @example
   * {\\"beianServiceNumber\\":\\"9969c666-0935-4c5b-8042-926ff546e39f\\"}
   */
  extInfo?: string;
  /**
   * @example
   * country
   */
  grade?: number;
  /**
   * @example
   * 18704330000
   */
  mobile?: string;
  /**
   * @example
   * 1212312312312
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      bizType: 'BizType',
      channel: 'Channel',
      commodityType: 'CommodityType',
      contactName: 'ContactName',
      description: 'Description',
      extInfo: 'ExtInfo',
      grade: 'Grade',
      mobile: 'Mobile',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      bizType: 'string',
      channel: 'string',
      commodityType: 'string',
      contactName: 'string',
      description: 'string',
      extInfo: 'string',
      grade: 'number',
      mobile: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

