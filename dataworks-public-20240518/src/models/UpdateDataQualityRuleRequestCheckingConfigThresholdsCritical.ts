// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityRuleRequestCheckingConfigThresholdsCritical extends $dara.Model {
  /**
   * @remarks
   * The threshold expression.
   * 
   * The volatility type rule must use an expression to represent the volatility threshold. For example:
   * 
   * - Fluctuation rise greater than 0.01: $checkValue > 0.01
   * - Fluctuation drop greater than 0.01:$checkValue < -0.01
   * - Absolute volatility: abs($checkValue) > 0.01
   * 
   * You can also use expressions to configure thresholds for fixed-Value rules. If you configure them at the same time, the expression priority is higher than Operator and Value.
   * 
   * @example
   * $checkValue > 0.05
   */
  expression?: string;
  /**
   * @remarks
   * The comparison operator. Valid values:
   * 
   * *   \\>
   * *   \\>=
   * *   <
   * *   <=
   * *   !=
   * *   \\=
   * 
   * @example
   * >
   */
  operator?: string;
  /**
   * @remarks
   * The threshold value.
   * 
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

