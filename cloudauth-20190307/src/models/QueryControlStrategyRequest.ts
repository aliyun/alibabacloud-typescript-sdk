// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryControlStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * Product type, currently only supports ANT_CLOUD_AUTH (financial-grade real person), all others have been phased out.
   * 
   * @example
   * ANT_CLOUD_AUTH
   */
  productType?: string;
  /**
   * @remarks
   * Region ID
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

