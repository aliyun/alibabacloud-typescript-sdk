// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSasContainerWebDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Rule ID.
   * > You can call the [ListSasContainerWebDefenseRule](~~ListSasContainerWebDefenseRule~~) API to get this parameter.
   * 
   * @example
   * 1600009
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

