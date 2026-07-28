// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RamAccount extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the RamAccount can be bound to other resources.
   * 
   * @example
   * true
   */
  bindable?: boolean;
  /**
   * @remarks
   * The display name for the RamAccount, which appears in the console.
   * 
   * @example
   * Test User
   */
  displayName?: string;
  /**
   * @remarks
   * The unique identifier for the RamAccount.
   * 
   * @example
   * 1234567890123456
   */
  uid?: string;
  /**
   * @remarks
   * The user name for the RamAccount.
   * 
   * @example
   * test-user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      bindable: 'bindable',
      displayName: 'displayName',
      uid: 'uid',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindable: 'boolean',
      displayName: 'string',
      uid: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

