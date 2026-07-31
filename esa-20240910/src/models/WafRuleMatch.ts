// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRuleMatch extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the value is case-insensitive.
   */
  convertToLower?: boolean;
  /**
   * @remarks
   * The logic list.
   */
  criteria?: WafRuleMatch[];
  /**
   * @remarks
   * The logic relationship.
   * 
   * @example
   * and
   */
  logic?: string;
  /**
   * @remarks
   * The match operator.
   * 
   * @example
   * eq
   */
  matchOperator?: string;
  /**
   * @remarks
   * The match field.
   * 
   * @example
   * ip.src
   */
  matchType?: string;
  /**
   * @remarks
   * The match value.
   * 
   * @example
   * 1.1.1.1
   */
  matchValue?: any;
  /**
   * @remarks
   * Specifies whether to negate the match result.
   */
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
      criteria: { 'type': 'array', 'itemType': WafRuleMatch },
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

