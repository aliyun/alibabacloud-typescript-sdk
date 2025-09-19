// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBaselineStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
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
   * The data source. Default value: default. Valid values:
   * 
   * *   **default**: queries the information about a baseline check policy for images.
   * *   **agentless**: queries the information about a baseline check policy for agentless detection.
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * @example
   * 8037
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      source: 'Source',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      source: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

