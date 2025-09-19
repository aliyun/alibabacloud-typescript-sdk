// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetBuildRiskDefineRuleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration item for scanning image build command risks. Valid values:
   * 
   * *   **classKey**: Set the value to a valid value of the ClassKey parameter in RuleTree.
   * *   **ruleList**: Set the value to a valid value of the RuleKey parameter in RuleList.
   * 
   * >  You can call the [GetBuildRiskDefineRuleConfig](~~GetBuildRiskDefineRuleConfig~~) operation to query the valid values.
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

