// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlipayUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.beian_assist
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 206129201170307
   */
  orderId?: number;
  /**
   * @example
   * https://nfyt.lzsgtghchy.com:502/sigin/
   */
  returnUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * web
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      orderId: 'OrderId',
      returnUrl: 'ReturnUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      orderId: 'number',
      returnUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

