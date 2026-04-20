// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DropUserRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  superUser?: string;
  /**
   * @example
   * p4_234253434
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
      superUser: 'string',
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

