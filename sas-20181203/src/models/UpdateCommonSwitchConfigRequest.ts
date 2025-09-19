// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCommonSwitchConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to turn on the switch for newly added servers. Valid values:
   * 
   * *   **add**: yes
   * *   **del**: no
   * 
   * @example
   * add
   */
  targetDefault?: string;
  /**
   * @remarks
   * The type of the switch.
   * 
   * >  You can call the [ListClientUserDefineRules](~~ListClientUserDefineRules~~) or [ListSystemClientRules](~~ListSystemClientRules~~) operation to obtain the type from the response parameter SwitchId.
   * 
   * @example
   * USER-DEFINE-RULE-SWITCH-TYPE_190****
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      targetDefault: 'TargetDefault',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetDefault: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

