// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRatelimitCharacteristicsCriteriaCriteriaCriteria extends $dara.Model {
  /**
   * @remarks
   * The field to match.
   * 
   * @example
   * ip.src
   */
  matchType?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'MatchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafRatelimitCharacteristicsCriteriaCriteria extends $dara.Model {
  /**
   * @remarks
   * A list of match criteria.
   */
  criteria?: WafRatelimitCharacteristicsCriteriaCriteriaCriteria[];
  /**
   * @remarks
   * The logical relationship between the criteria.
   * 
   * @example
   * and
   */
  logic?: string;
  /**
   * @remarks
   * The field to match.
   * 
   * @example
   * ip.src
   */
  matchType?: string;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      logic: 'Logic',
      matchType: 'MatchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: { 'type': 'array', 'itemType': WafRatelimitCharacteristicsCriteriaCriteriaCriteria },
      logic: 'string',
      matchType: 'string',
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

export class WafRatelimitCharacteristicsCriteria extends $dara.Model {
  /**
   * @remarks
   * A list of match criteria.
   */
  criteria?: WafRatelimitCharacteristicsCriteriaCriteria[];
  /**
   * @remarks
   * The logical relationship between the criteria.
   * 
   * @example
   * and
   */
  logic?: string;
  /**
   * @remarks
   * The field to match.
   * 
   * @example
   * ip.src
   */
  matchType?: string;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      logic: 'Logic',
      matchType: 'MatchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: { 'type': 'array', 'itemType': WafRatelimitCharacteristicsCriteriaCriteria },
      logic: 'string',
      matchType: 'string',
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

export class WafRatelimitCharacteristics extends $dara.Model {
  /**
   * @remarks
   * A list of match criteria.
   */
  criteria?: WafRatelimitCharacteristicsCriteria[];
  /**
   * @remarks
   * The logical relationship between the criteria.
   * 
   * @example
   * and
   */
  logic?: string;
  /**
   * @remarks
   * The field to match.
   * 
   * @example
   * ip.src
   */
  matchType?: string;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      logic: 'Logic',
      matchType: 'MatchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: { 'type': 'array', 'itemType': WafRatelimitCharacteristicsCriteria },
      logic: 'string',
      matchType: 'string',
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

