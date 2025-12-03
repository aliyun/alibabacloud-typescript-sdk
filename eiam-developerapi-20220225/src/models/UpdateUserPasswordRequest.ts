// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserPasswordRequest extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

