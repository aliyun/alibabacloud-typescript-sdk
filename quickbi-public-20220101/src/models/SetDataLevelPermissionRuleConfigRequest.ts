// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDataLevelPermissionRuleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ruleModel?: string;
  static names(): { [key: string]: string } {
    return {
      ruleModel: 'RuleModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

