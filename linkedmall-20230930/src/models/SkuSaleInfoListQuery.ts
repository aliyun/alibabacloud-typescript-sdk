// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SkuQueryParam } from "./SkuQueryParam";


export class SkuSaleInfoListQuery extends $dara.Model {
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21000017
   */
  purchaserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  skuQueryParams?: SkuQueryParam[];
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'divisionCode',
      purchaserId: 'purchaserId',
      skuQueryParams: 'skuQueryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'string',
      purchaserId: 'string',
      skuQueryParams: { 'type': 'array', 'itemType': SkuQueryParam },
    };
  }

  validate() {
    if(Array.isArray(this.skuQueryParams)) {
      $dara.Model.validateArray(this.skuQueryParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

