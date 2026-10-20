// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSasContainerWebDefenseRuleApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID. This parameter is required. If it is not provided, the API returns an HTTP 400 error with the error code -101. You can call the ListSasContainerWebDefenseRule operation to obtain a valid RuleId.
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

