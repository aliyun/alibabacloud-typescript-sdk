// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunContractRuleGenerationResponseBodyOutputRules } from "./RunContractRuleGenerationResponseBodyOutputRules";


export class RunContractRuleGenerationResponseBodyOutput extends $dara.Model {
  /**
   * @example
   * b265b416-ca1f-425d-9340-c968f39624e9
   */
  ruleTaskId?: string;
  rules?: RunContractRuleGenerationResponseBodyOutputRules[];
  static names(): { [key: string]: string } {
    return {
      ruleTaskId: 'ruleTaskId',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleTaskId: 'string',
      rules: { 'type': 'array', 'itemType': RunContractRuleGenerationResponseBodyOutputRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

