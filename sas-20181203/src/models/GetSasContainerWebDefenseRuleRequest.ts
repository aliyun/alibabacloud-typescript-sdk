// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSasContainerWebDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * > You can call the [ListSasContainerWebDefenseRule](~~ListSasContainerWebDefenseRule~~) operation to obtain this parameter.
   * This parameter is required. If you do not specify this parameter, the API returns an HTTP 400 error with the error code -101.
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

