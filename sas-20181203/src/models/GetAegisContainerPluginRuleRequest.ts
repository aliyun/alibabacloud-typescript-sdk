// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAegisContainerPluginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container escape prevention rule.
   * >You can call the [ListAegisContainerPluginRule](~~ListAegisContainerPluginRule~~) operation to query this parameter.
   * 
   * @example
   * 1141****
   */
  id?: string;
  /**
   * @remarks
   * The language type for requests and responses. Default value: **zh**. Valid values:
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

