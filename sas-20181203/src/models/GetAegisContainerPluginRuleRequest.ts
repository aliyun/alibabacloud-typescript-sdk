// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAegisContainerPluginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container anti-escape rule.
   * >You can call the [ListAegisContainerPluginRule](~~ListAegisContainerPluginRule~~) operation to obtain this parameter.
   * 
   * Note: This parameter is required. If you do not specify this parameter, the API returns a parameter validation error (HTTP 400).
   * 
   * @example
   * 1141****
   */
  id?: string;
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * 
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * - **0**: user-defined
   * - **1**: system built-in
   * 
   * @example
   * 0
   */
  ruleType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      lang: 'string',
      ruleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

