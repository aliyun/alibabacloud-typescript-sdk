// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetBuildRiskDefineRuleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The risk items in the risk scan configuration for image build instructions. Valid values:
   * - **classKey**: the ClassKey field value from RuleTree
   * - **ruleList**: the RuleKey field values under RuleList
   * > Call the [GetBuildRiskDefineRuleConfig](~~GetBuildRiskDefineRuleConfig~~) operation to obtain this parameter.
   * 
   * @example
   * [
   * 	{
   * 		"classKey": "other",
   * 		"ruleList": [
   * 			"add",
   * 			"apk"
   * 		]
   * 	}
   * ]
   */
  config?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

