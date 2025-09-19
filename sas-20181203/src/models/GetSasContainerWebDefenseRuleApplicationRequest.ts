// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSasContainerWebDefenseRuleApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * >  You can call the ListSasContainerWebDefenseRule operation to query the IDs of rules.
   * 
   * @example
   * 400599
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

