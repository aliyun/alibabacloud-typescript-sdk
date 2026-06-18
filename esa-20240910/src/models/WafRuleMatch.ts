// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRuleMatch extends $dara.Model {
  /**
   * @remarks
   * 值大小写不敏感。
   */
  convertToLower?: boolean;
  /**
   * @remarks
   * 逻辑列表。
   */
  criteria?: WafRuleMatch[];
  /**
   * @remarks
   * 逻辑关系。
   * 
   * @example
   * and
   */
  logic?: string;
  /**
   * @remarks
   * 匹配符。
   * 
   * @example
   * eq
   */
  matchOperator?: string;
  /**
   * @remarks
   * 匹配域。
   * 
   * @example
   * ip.src
   */
  matchType?: string;
  /**
   * @remarks
   * 匹配值。
   * 
   * @example
   * 1.1.1.1
   */
  matchValue?: any;
  /**
   * @remarks
   * 匹配结果取反。
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

