// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomizeFlowStrategyListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Product type, currently only supports **ANT_CLOUD_AUTH** (Financial-grade real person), all others have been phased out.
   * 
   * @example
   * ANT_CLOUD_AUTH
   */
  productType?: string;
  /**
   * @remarks
   * Strategy list.
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

