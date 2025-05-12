// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersPasswordResponseBodyDesktopUsers extends $dara.Model {
  /**
   * @remarks
   * The display name of the end user.
   * 
   * @example
   * alice_1365*****
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The password of the end user.
   * 
   * @example
   * tes123
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      endUserId: 'EndUserId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endUserId: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

