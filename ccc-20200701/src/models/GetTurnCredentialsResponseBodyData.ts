// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTurnCredentialsResponseBodyData extends $dara.Model {
  /**
   * @example
   * M0NQNG/uRUrfIxW7er/S9gKX****
   */
  password?: string;
  /**
   * @example
   * 1602585817:****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
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

