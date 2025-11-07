// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlStrategyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of security alarm rules.
   */
  controlStrategyListShrink?: string;
  /**
   * @remarks
   * Product type, currently only supports **ANT_CLOUD_AUTH** (Financial-grade Real Person), all others are phased out.
   * 
   * @example
   * ANT_CLOUD_AUTH
   */
  productType?: string;
  /**
   * @remarks
   * Region ID of the intelligent access gateway instance.
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

