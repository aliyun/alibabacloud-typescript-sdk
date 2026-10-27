// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSasContainerWebDefenseRuleApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID. You can call the [ListSasContainerWebDefenseRule](~~ListSasContainerWebDefenseRule~~) operation to obtain this parameter. This parameter is required. If it is not provided, the API returns HTTP 400 with error code -101.
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

