// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveImageBaselineStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The baseline check items.
   * 
   * > You can call the [DescribeImageBaselineStrategy](~~DescribeImageBaselineStrategy~~) operation to query baseline check items.
   * 
   * This parameter is required.
   * 
   * @example
   * ak_leak
   */
  baselineItemList?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The data source. If this parameter is left empty, the baseline check policy for images is queried. Valid values:
   * 
   * *   **default**: the baseline check policy for images
   * *   **agentless**: agentless detection
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * > You can call the [DescribeImageBaselineStrategy](~~DescribeImageBaselineStrategy~~) operation to query the IDs of baseline check policies.
   * 
   * @example
   * 8639
   */
  strategyId?: number;
  /**
   * @remarks
   * The name of the baseline check policy.
   * 
   * @example
   * default
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      baselineItemList: 'BaselineItemList',
      lang: 'Lang',
      source: 'Source',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineItemList: 'string',
      lang: 'string',
      source: 'string',
      strategyId: 'number',
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

