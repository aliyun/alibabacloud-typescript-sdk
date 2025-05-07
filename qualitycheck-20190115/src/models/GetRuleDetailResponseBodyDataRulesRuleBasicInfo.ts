// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories } from "./GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories";
import { GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers } from "./GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers";


export class GetRuleDetailResponseBodyDataRulesRuleBasicInfo extends $dara.Model {
  businessCategories?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories;
  /**
   * @example
   * 4
   */
  rid?: string;
  /**
   * @example
   * 7&&!8
   */
  ruleLambda?: string;
  triggers?: GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers;
  static names(): { [key: string]: string } {
    return {
      businessCategories: 'BusinessCategories',
      rid: 'Rid',
      ruleLambda: 'RuleLambda',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessCategories: GetRuleDetailResponseBodyDataRulesRuleBasicInfoBusinessCategories,
      rid: 'string',
      ruleLambda: 'string',
      triggers: GetRuleDetailResponseBodyDataRulesRuleBasicInfoTriggers,
    };
  }

  validate() {
    if(this.businessCategories && typeof (this.businessCategories as any).validate === 'function') {
      (this.businessCategories as any).validate();
    }
    if(this.triggers && typeof (this.triggers as any).validate === 'function') {
      (this.triggers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

