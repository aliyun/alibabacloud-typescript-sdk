// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelOrderDetailResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 200
   */
  applyAmt?: number;
  /**
   * @example
   * 1659952892000
   */
  gmtCreate?: number;
  /**
   * @example
   * https://ailabsaicloudservice.alicdn.com/hotel/icon/jiudianmianban_fuwushangpintu/weixiu/dianqilei/chuanglian.png
   */
  itemUrl?: string;
  /**
   * @example
   * 窗帘
   */
  name?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      applyAmt: 'ApplyAmt',
      gmtCreate: 'GmtCreate',
      itemUrl: 'ItemUrl',
      name: 'Name',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyAmt: 'number',
      gmtCreate: 'number',
      itemUrl: 'string',
      name: 'string',
      quantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelOrderDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 6F579407-13C4-1708-AFA2-B657BE5FE8F5
   */
  requestId?: string;
  result?: GetHotelOrderDetailResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetHotelOrderDetailResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

