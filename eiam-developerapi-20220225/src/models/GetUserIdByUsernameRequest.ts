// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserIdByUsernameRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * username_001
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

