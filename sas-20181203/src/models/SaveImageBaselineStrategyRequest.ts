// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveImageBaselineStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The baseline items.
   * 
   * > You can call the [DescribeImageBaselineStrategy](~~DescribeImageBaselineStrategy~~) API to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ak_leak
   */
  baselineItemList?: string;
  /**
   * @remarks
   * The baseline risk retention period, in days.
   * 
   * @example
   * 90
   */
  imageVulClean?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The data source. If you do not specify this parameter, the operation queries image baseline strategies by default. Valid values:
   * 
   * - **default**: image
   * 
   * - **agentless**: agentless
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The ID of the baseline check strategy.
   * 
   * > You can call the [DescribeImageBaselineStrategy](~~DescribeImageBaselineStrategy~~) API to obtain the value of this parameter.
   * 
   * @example
   * 8639
   */
  strategyId?: number;
  /**
   * @remarks
   * The name of the baseline check strategy.
   * 
   * @example
   * default
   */
  strategyName?: string;
  static names(): { [key: string]: string } {
    return {
      baselineItemList: 'BaselineItemList',
      imageVulClean: 'ImageVulClean',
      lang: 'Lang',
      source: 'Source',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineItemList: 'string',
      imageVulClean: 'number',
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

