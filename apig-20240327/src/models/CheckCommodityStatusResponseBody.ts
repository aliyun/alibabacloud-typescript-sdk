// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCommodityStatusResponseBodyCommodities extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * apigateway_aicredits_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * Indicates whether the commodity capability is enabled for the current account.
   * 
   * @example
   * true
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'commodityCode',
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCommodityStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The commodity status list. Each item contains the commodity code and indicates whether the commodity capability is enabled for the current account.
   */
  commodities?: CheckCommodityStatusResponseBodyCommodities[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commodities: 'commodities',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodities: { 'type': 'array', 'itemType': CheckCommodityStatusResponseBodyCommodities },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commodities)) {
      $dara.Model.validateArray(this.commodities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

