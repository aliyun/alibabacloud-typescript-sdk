// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SkuQueryParam } from "./SkuQueryParam";


export class SkuSaleInfoListQuery extends $dara.Model {
  /**
   * @remarks
   * Region code. Use a five-level administrative division code, such as a town or subdistrict code.
   * 
   * @example
   * 330106109
   */
  divisionCode?: string;
  /**
   * @remarks
   * Purchaser ID
   * 
   * This parameter is required.
   * 
   * @example
   * 21000017
   */
  purchaserId?: string;
  /**
   * @remarks
   * Product query parameters
   * 
   * > You can query up to 20 SKUs per request.
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

