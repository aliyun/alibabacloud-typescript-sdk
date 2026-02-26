// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SkuSaleInfo } from "./SkuSaleInfo";


export class SkuSaleInfoListResult extends $dara.Model {
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  skuSaleInfos?: SkuSaleInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      skuSaleInfos: 'skuSaleInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      skuSaleInfos: { 'type': 'array', 'itemType': SkuSaleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.skuSaleInfos)) {
      $dara.Model.validateArray(this.skuSaleInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

