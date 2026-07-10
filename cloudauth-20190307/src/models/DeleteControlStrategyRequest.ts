// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteControlStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The API name, same as **ProductCode**.
   * 
   * @example
   * ID_PRO
   */
  apiName?: string;
  /**
   * @remarks
   * The security rule ID.
   * 
   * @example
   * 38
   */
  id?: number;
  /**
   * @remarks
   * The product type. Currently, only **ANT_CLOUD_AUTH** (financial-grade real-person authentication) is supported. All other types have been discontinued.
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
      apiName: 'ApiName',
      id: 'Id',
      productType: 'ProductType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      id: 'number',
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

