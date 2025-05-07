// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoginTokenResponseBodyRiskVerifyInfo extends $dara.Model {
  /**
   * @remarks
   * The email used for authentication.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * The duration of the lock.
   * 
   * @example
   * 1713749778
   */
  lastLockDuration?: number;
  /**
   * @remarks
   * Whether the account is locked or not.
   * 
   * @example
   * true
   */
  locked?: string;
  /**
   * @remarks
   * The mobile number used for authentication.
   * 
   * @example
   * 1388888****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lastLockDuration: 'LastLockDuration',
      locked: 'Locked',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lastLockDuration: 'number',
      locked: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

