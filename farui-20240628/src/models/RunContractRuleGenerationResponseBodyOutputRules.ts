// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractRuleGenerationResponseBodyOutputRules extends $dara.Model {
  /**
   * @example
   * medium
   */
  riskLevel?: string;
  /**
   * @example
   * 1.1
   */
  ruleSequence?: string;
  ruleTag?: string;
  ruleTitle?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'riskLevel',
      ruleSequence: 'ruleSequence',
      ruleTag: 'ruleTag',
      ruleTitle: 'ruleTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      ruleSequence: 'string',
      ruleTag: 'string',
      ruleTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

