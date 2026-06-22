// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContainerPluginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language type of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The rule ID. You can call the addContainerWebDefenseRule operation to obtain the rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 200022
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

