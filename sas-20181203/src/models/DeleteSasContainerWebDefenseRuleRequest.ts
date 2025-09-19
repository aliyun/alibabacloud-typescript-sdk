// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSasContainerWebDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * >  You can call the ListContainerWebDefenseRule operation to query the rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 400597
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

