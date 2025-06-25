// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceRenewPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The description of the price calculation rule.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the price calculation rule.
   * 
   * @example
   * 20002****
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

