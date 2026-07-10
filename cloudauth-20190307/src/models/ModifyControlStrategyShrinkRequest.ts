// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlStrategyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of security alert rules.
   */
  controlStrategyListShrink?: string;
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
   * The region ID of the Smart Access Gateway instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      controlStrategyListShrink: 'ControlStrategyList',
      productType: 'ProductType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlStrategyListShrink: 'string',
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

