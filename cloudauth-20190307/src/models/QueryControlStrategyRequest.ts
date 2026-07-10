// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryControlStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The product type. Currently, only ANT_CLOUD_AUTH (financial-grade ID Verification) is supported. All other product types have been discontinued.
   * 
   * @example
   * ANT_CLOUD_AUTH
   */
  productType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

