// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SkuQueryParam } from "./SkuQueryParam";


export class SkuSaleInfoListQuery extends $dara.Model {
  /**
   * @remarks
   * The division code. A level-5 township or sub-district address code is recommended.
   * 
   * @example
   * 330106109
   */
  divisionCode?: string;
  /**
   * @remarks
   * The purchaser ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 21000017
   */
  purchaserId?: string;
  /**
   * @remarks
   * The product query parameters.
   * > The maximum number of SKUs that can be queried in a single request is 20.
   * 
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

