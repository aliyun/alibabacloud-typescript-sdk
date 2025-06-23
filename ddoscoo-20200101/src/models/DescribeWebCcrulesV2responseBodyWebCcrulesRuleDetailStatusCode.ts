// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatusCode extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values: **100** to **599**.
   * 
   * *   **200**: The request was successful.
   * *   Other codes: The request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * If a ratio is not used, the handling action is triggered only when the number of requests of the corresponding status code reaches the value of **CountThreshold**. Valid values: **2** to **50000**.
   * 
   * @example
   * 10
   */
  countThreshold?: number;
  /**
   * @remarks
   * Indicates whether the status code is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * If a ratio is used, the handling action is triggered only when the number of requests of the corresponding status code reaches the value of **RatioThreshold**. Valid values: **1** to **100**.
   * 
   * @example
   * 10
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * Indicates whether to use a ratio.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  useRatio?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      countThreshold: 'CountThreshold',
      enabled: 'Enabled',
      ratioThreshold: 'RatioThreshold',
      useRatio: 'UseRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      countThreshold: 'number',
      enabled: 'boolean',
      ratioThreshold: 'number',
      useRatio: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

