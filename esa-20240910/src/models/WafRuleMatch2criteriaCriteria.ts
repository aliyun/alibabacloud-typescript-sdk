// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleMatch2CriteriaCriteriaCriteria } from "./WafRuleMatch2criteriaCriteriaCriteria";


export class WafRuleMatch2CriteriaCriteria extends $dara.Model {
  convertToLower?: boolean;
  criteria?: WafRuleMatch2CriteriaCriteriaCriteria[];
  logic?: string;
  matchOperator?: string;
  matchType?: string;
  matchValue?: any;
  negate?: boolean;
  static names(): { [key: string]: string } {
    return {
      convertToLower: 'ConvertToLower',
      criteria: 'Criteria',
      logic: 'Logic',
      matchOperator: 'MatchOperator',
      matchType: 'MatchType',
      matchValue: 'MatchValue',
      negate: 'Negate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertToLower: 'boolean',
      criteria: { 'type': 'array', 'itemType': WafRuleMatch2CriteriaCriteriaCriteria },
      logic: 'string',
      matchOperator: 'string',
      matchType: 'string',
      matchValue: 'any',
      negate: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.criteria)) {
      $dara.Model.validateArray(this.criteria);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

