// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAttackPathWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * Attack path whitelist ID.
   * > You can call [ListAttackPathWhitelist](~~ListAttackPathWhitelist~~) to query the attack path whitelist ID.
   * 
   * This parameter is required.
   * 
   * @example
   * apwl-b33dec0acf9b42aabde032d656c0****
   */
  attackPathWhitelistId?: string;
  static names(): { [key: string]: string } {
    return {
      attackPathWhitelistId: 'AttackPathWhitelistId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathWhitelistId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

