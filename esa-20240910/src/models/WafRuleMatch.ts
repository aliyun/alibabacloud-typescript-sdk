// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRuleMatch extends $dara.Model {
  /**
   * @remarks
   * The case-insensitive value setting.
   */
  convertToLower?: boolean;
  /**
   * @remarks
   * The logic list.
   */
  criteria?: WafRuleMatch[];
  /**
   * @remarks
   * The logical relationship.
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
   * The negation of the match result.
   */
  negate?: boolean;
  /**
   * @remarks
   * The primary row key of the parent group. This is used for two-level drop-down positioning of enumeration subkey fields. For example, the Parent of ali.websdk.umid is ali.websdk.
   * 
   * @example
   * ali.websdk
   */
  parent?: string;
  static names(): { [key: string]: string } {
    return {
      convertToLower: 'ConvertToLower',
      criteria: 'Criteria',
      logic: 'Logic',
      matchOperator: 'MatchOperator',
      matchType: 'MatchType',
      matchValue: 'MatchValue',
      negate: 'Negate',
      parent: 'Parent',
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
      parent: 'string',
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

