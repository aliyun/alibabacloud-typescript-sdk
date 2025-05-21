// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachScriptResponseBodyPointDeductionRuleList extends $dara.Model {
  /**
   * @example
   * demo
   */
  description?: string;
  punishmentTypes?: string[];
  ruleValue?: string;
  /**
   * @example
   * 90
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      punishmentTypes: 'punishmentTypes',
      ruleValue: 'ruleValue',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      punishmentTypes: { 'type': 'array', 'itemType': 'string' },
      ruleValue: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.punishmentTypes)) {
      $dara.Model.validateArray(this.punishmentTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

