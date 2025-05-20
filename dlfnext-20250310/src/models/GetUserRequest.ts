// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserRequest extends $dara.Model {
  /**
   * @example
   * acs:ram::[accountId]:user/user_name
   */
  userPrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      userPrincipal: 'userPrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

