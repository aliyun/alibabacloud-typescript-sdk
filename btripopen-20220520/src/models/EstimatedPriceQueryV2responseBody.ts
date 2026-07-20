// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModulePriceMapValue } from "./ModulePriceMapValue";


export class EstimatedPriceQueryV2ResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The category, such as flight, hotel, or train.
   * 
   * @example
   * flight
   */
  bizType?: string;
  /**
   * @remarks
   * The price map. Key: min and max.
   */
  priceMap?: { [key: string]: ModulePriceMapValue };
  /**
   * @remarks
   * The type, such as economy class, business class, first class, G/D train, other, or travel standard.
   * 
   * @example
   * 经济舱
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'biz_type',
      priceMap: 'price_map',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      priceMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModulePriceMapValue },
      type: 'string',
    };
  }

  validate() {
    if(this.priceMap) {
      $dara.Model.validateMap(this.priceMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedPriceQueryV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  module?: EstimatedPriceQueryV2ResponseBodyModule[];
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210bcc3a16583004579056128d33d7
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      module: { 'type': 'array', 'itemType': EstimatedPriceQueryV2ResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

