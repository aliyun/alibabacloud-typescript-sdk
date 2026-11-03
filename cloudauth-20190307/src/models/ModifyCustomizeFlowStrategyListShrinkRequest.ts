// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomizeFlowStrategyListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The product type. Currently, only **ANT_CLOUD_AUTH** (Financial-grade ID Verification) is supported. All other product types are retired.
   * 
   * @example
   * ANT_CLOUD_AUTH
   */
  productType?: string;
  /**
   * @remarks
   * The list of policies.
   */
  strategyObjectShrink?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      strategyObjectShrink: 'StrategyObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      strategyObjectShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

