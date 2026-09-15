// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSasContainerWebDefenseRuleApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * > Call the ListSasContainerWebDefenseRule operation to obtain this parameter.
   * Note: This parameter is required. If this parameter is not specified, the API returns a 400 error. Call the ListSasContainerWebDefenseRule operation to obtain valid RuleId values.
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

