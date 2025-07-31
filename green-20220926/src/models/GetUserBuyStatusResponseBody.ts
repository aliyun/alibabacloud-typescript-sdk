// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserBuyStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Bid。
   * 
   * @example
   * 26842
   */
  bid?: number;
  /**
   * @example
   * True
   */
  buy?: boolean;
  /**
   * @example
   * False
   */
  indebt?: boolean;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      buy: 'Buy',
      indebt: 'Indebt',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      buy: 'boolean',
      indebt: 'boolean',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserBuyStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetUserBuyStatusResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetUserBuyStatusResponseBodyData,
      msg: 'string',
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

