// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRuleMatch2CriteriaCriteriaCriteria extends $dara.Model {
  /**
   * @remarks
   * Transforms input to lowercase to ensure case-insensitivity.
   */
  convertToLower?: boolean;
  /**
   * @remarks
   * The matching operator.
   * 
   * @example
   * eq
   */
  matchOperator?: string;
  /**
   * @remarks
   * The matching type.
   * 
   * @example
   * ip.src
   */
  matchType?: string;
  /**
   * @remarks
   * The value of the matching condition.
   * 
   * @example
   * 1.1.1.1
   */
  matchValue?: any;
  /**
   * @remarks
   * Converts a value or condition to its opposite.
   */
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

export class WafRuleMatch2CriteriaCriteria extends $dara.Model {
  /**
   * @remarks
   * Transforms input to lowercase to ensure case-insensitivity.
   */
  convertToLower?: boolean;
  /**
   * @remarks
   * The details of logical databases.
   */
  criteria?: WafRuleMatch2CriteriaCriteriaCriteria[];
  /**
   * @remarks
   * The logical judgment.
   * 
   * @example
   * and
   */
  logic?: string;
  /**
   * @remarks
   * The matching operator.
   * 
   * @example
   * eq
   */
  matchOperator?: string;
  /**
   * @remarks
   * The matching type.
   * 
   * @example
   * ip.src
   */
  matchType?: string;
  /**
   * @remarks
   * The value of the matching condition.
   * 
   * @example
   * 1.1.1.1
   */
  matchValue?: any;
  /**
   * @remarks
   * Converts a value or condition to its opposite.
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

export class WafRuleMatch2Criteria extends $dara.Model {
  /**
   * @remarks
   * Transforms input to lowercase to ensure case-insensitivity.
   */
  convertToLower?: boolean;
  /**
   * @remarks
   * The details of logical databases.
   */
  criteria?: WafRuleMatch2CriteriaCriteria[];
  /**
   * @remarks
   * The logical judgment.
   * 
   * @example
   * and
   */
  logic?: string;
  /**
   * @remarks
   * The matching operator.
   * 
   * @example
   * eq
   */
  matchOperator?: string;
  /**
   * @remarks
   * The matching type.
   * 
   * @example
   * ip.src
   */
  matchType?: string;
  /**
   * @remarks
   * The value of the matching condition.
   * 
   * @example
   * 1.1.1.1
   */
  matchValue?: any;
  /**
   * @remarks
   * Converts a value or condition to its opposite.
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
      criteria: { 'type': 'array', 'itemType': WafRuleMatch2CriteriaCriteria },
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

export class WafRuleMatch2 extends $dara.Model {
  /**
   * @remarks
   * Transforms input to lowercase to ensure case-insensitivity.
   */
  convertToLower?: boolean;
  /**
   * @remarks
   * The details of logical databases.
   */
  criteria?: WafRuleMatch2Criteria[];
  /**
   * @remarks
   * The logical judgment.
   * 
   * @example
   * and
   */
  logic?: string;
  /**
   * @remarks
   * The matching operator.
   * 
   * @example
   * eq
   */
  matchOperator?: string;
  /**
   * @remarks
   * The matching type.
   * 
   * @example
   * ip.src
   */
  matchType?: string;
  /**
   * @remarks
   * The value of the matching condition.
   * 
   * @example
   * 1.1.1.1
   */
  matchValue?: any;
  /**
   * @remarks
   * Converts a value or condition to its opposite.
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
      criteria: { 'type': 'array', 'itemType': WafRuleMatch2Criteria },
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

