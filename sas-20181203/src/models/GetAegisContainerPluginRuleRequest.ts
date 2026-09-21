// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAegisContainerPluginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container anti-escape rule. You can call [ListAegisContainerPluginRule](~~ListAegisContainerPluginRule~~) to obtain the ID. This parameter is required. If this parameter is not specified, the API returns HTTP 400 with error code -101.
   * 
   * @example
   * 1141****
   */
  id?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
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

