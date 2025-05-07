// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMaskingRulesResponseBodyDataRulesRuleConfig } from "./DescribeMaskingRulesResponseBodyDataRulesRuleConfig";


export class DescribeMaskingRulesResponseBodyDataRules extends $dara.Model {
  defaultAlgo?: string;
  enabled?: string;
  maskingAlgo?: string;
  ruleConfig?: DescribeMaskingRulesResponseBodyDataRulesRuleConfig;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultAlgo: 'DefaultAlgo',
      enabled: 'Enabled',
      maskingAlgo: 'MaskingAlgo',
      ruleConfig: 'RuleConfig',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultAlgo: 'string',
      enabled: 'string',
      maskingAlgo: 'string',
      ruleConfig: DescribeMaskingRulesResponseBodyDataRulesRuleConfig,
      ruleName: 'string',
    };
  }

  validate() {
    if(this.ruleConfig && typeof (this.ruleConfig as any).validate === 'function') {
      (this.ruleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

