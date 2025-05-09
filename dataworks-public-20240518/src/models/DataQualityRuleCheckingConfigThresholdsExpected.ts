// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataQualityRuleCheckingConfigThresholdsExpected extends $dara.Model {
  /**
   * @example
   * 波动率类型规则使用，通过表达式来表示波动阈值。如：波动上升大于0.01： $checkValue > 0.01  波动下降大于0.01：$checkValue < -0.01   波动率绝对值：abs($checkValue) > 0.01
   */
  expression?: string;
  /**
   * @example
   * >
   */
  operator?: string;
  /**
   * @example
   * 100.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

