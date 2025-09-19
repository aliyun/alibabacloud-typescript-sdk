// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommonSwitchConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the common switch.
   * 
   * >  You can call the [ListClientUserDefineRules](~~ListClientUserDefineRules~~) or [ListSystemClientRules](~~ListSystemClientRules~~) operation to obtain the switch type from the response parameter SwitchId.
   * 
   * @example
   * USER-DEFINE-RULE-SWITCH-TYPE_180****
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

