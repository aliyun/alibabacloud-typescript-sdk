// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Bid.
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * Whether a product has been activated on Alibaba Cloud.
   * 
   * @example
   * True
   */
  buy?: boolean;
  /**
   * @remarks
   * Commodity code.
   * 
   * @example
   * xxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * Whether there is an outstanding payment.
   * 
   * @example
   * False
   */
  indebt?: boolean;
  /**
   * @remarks
   * Whether internal security is authorized.
   * 
   * @example
   * True
   */
  ramStatus?: string;
  /**
   * @remarks
   * ID assigned by the backend, used to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether log analysis function is authorized.
   * 
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

