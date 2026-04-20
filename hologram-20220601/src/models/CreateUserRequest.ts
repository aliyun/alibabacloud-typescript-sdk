// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  superUser?: boolean;
  /**
   * @example
   * p4_2346134
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      superUser: 'superUser',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      superUser: 'boolean',
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

