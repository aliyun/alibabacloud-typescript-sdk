// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModulePriceMapValue } from "./ModulePriceMapValue";


export class EstimatedPriceQueryV2ResponseBodyModule extends $dara.Model {
  /**
   * @example
   * flight
   */
  bizType?: string;
  priceMap?: { [key: string]: ModulePriceMapValue };
  /**
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
   * @example
   * 0
   */
  code?: number;
  module?: EstimatedPriceQueryV2ResponseBodyModule[];
  /**
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

