// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleV4Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
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

