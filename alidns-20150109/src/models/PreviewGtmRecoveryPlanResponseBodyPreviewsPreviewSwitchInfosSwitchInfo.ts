// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewGtmRecoveryPlanResponseBodyPreviewsPreviewSwitchInfosSwitchInfo extends $dara.Model {
  /**
   * @remarks
   * The formatted message content.
   */
  content?: string;
  /**
   * @remarks
   * The name of the switching policy for address pools.
   * 
   * @example
   * strategy-name-example-1
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      strategyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

