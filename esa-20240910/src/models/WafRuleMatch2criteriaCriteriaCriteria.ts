// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRuleMatch2CriteriaCriteriaCriteria extends $dara.Model {
  convertToLower?: boolean;
  matchOperator?: string;
  matchType?: string;
  matchValue?: any;
  negate?: boolean;
  static names(): { [key: string]: string } {
    return {
      convertToLower: 'ConvertToLower',
      matchOperator: 'MatchOperator',
      matchType: 'MatchType',
      matchValue: 'MatchValue',
      negate: 'Negate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convertToLower: 'boolean',
      matchOperator: 'string',
      matchType: 'string',
      matchValue: 'any',
      negate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

