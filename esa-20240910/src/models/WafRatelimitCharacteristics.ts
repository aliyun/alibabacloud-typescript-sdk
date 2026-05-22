// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRatelimitCharacteristicsCriteriaCriteriaCriteria extends $dara.Model {
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
  criteria?: WafRatelimitCharacteristicsCriteriaCriteriaCriteria[];
  logic?: string;
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
  criteria?: WafRatelimitCharacteristicsCriteriaCriteria[];
  logic?: string;
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
  criteria?: WafRatelimitCharacteristicsCriteria[];
  logic?: string;
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

