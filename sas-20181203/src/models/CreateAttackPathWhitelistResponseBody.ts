// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAttackPathWhitelistResponseBodyAttackPathWhitelist extends $dara.Model {
  /**
   * @remarks
   * The ID of the attack path whitelist.
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

export class CreateAttackPathWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The attack path whitelist.
   */
  attackPathWhitelist?: CreateAttackPathWhitelistResponseBodyAttackPathWhitelist;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 7BC55C8F-226E-5AF5-9A2C-2EC43864****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attackPathWhitelist: 'AttackPathWhitelist',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackPathWhitelist: CreateAttackPathWhitelistResponseBodyAttackPathWhitelist,
      requestId: 'string',
    };
  }

  validate() {
    if(this.attackPathWhitelist && typeof (this.attackPathWhitelist as any).validate === 'function') {
      (this.attackPathWhitelist as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

