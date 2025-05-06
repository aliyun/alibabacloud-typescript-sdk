// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractResultGenerationRequestAssistantMetaDataCustomRuleConfigCustomRules extends $dara.Model {
  /**
   * @example
   * high
   */
  riskLevel?: string;
  ruleDesc?: string;
  ruleTitle?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'riskLevel',
      ruleDesc: 'ruleDesc',
      ruleTitle: 'ruleTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      ruleDesc: 'string',
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

