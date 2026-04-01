// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYouhuiForOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0688F1D2-CDA8-5617-A43C-ADAC61D80D43
   */
  requestId?: string;
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 221201******
   */
  youhuiId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      youhuiId: 'YouhuiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      youhuiId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

