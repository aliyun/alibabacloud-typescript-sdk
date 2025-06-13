// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Bid。
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @example
   * True
   */
  buy?: boolean;
  /**
   * @example
   * xxx
   */
  commodityCode?: string;
  /**
   * @example
   * False
   */
  indebt?: boolean;
  /**
   * @example
   * True
   */
  ramStatus?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  slsStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      buy: 'Buy',
      commodityCode: 'CommodityCode',
      indebt: 'Indebt',
      ramStatus: 'RamStatus',
      requestId: 'RequestId',
      slsStatus: 'SlsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      buy: 'boolean',
      commodityCode: 'string',
      indebt: 'boolean',
      ramStatus: 'string',
      requestId: 'string',
      slsStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

