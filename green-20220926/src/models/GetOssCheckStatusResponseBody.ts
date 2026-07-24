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
   * @remarks
   * Indicates whether the service is activated on Alibaba Cloud.
   * 
   * @example
   * True
   */
  buy?: boolean;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * xxx
   */
  commodityCode?: string;
  /**
   * @remarks
   * Indicates whether the account has an overdue payment.
   * 
   * @example
   * False
   */
  indebt?: boolean;
  /**
   * @remarks
   * Indicates whether Security Center is authorized.
   * 
   * @example
   * True
   */
  ramStatus?: string;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the log analysis feature is authorized.
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

