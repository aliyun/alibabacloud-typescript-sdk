// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomizeFlowStrategyRequest extends $dara.Model {
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
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 38
   */
  id?: number;
  /**
   * @remarks
   * The product type. Currently, only **ANT_CLOUD_AUTH** (financial-grade ID Verification) is supported. All other types have been discontinued.
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
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 126005125163xxxx
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      id: 'Id',
      productType: 'ProductType',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      id: 'number',
      productType: 'string',
      regionId: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

