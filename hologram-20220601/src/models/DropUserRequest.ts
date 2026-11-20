// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DropUserRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the user is a superuser.
   * 
   * @example
   * false
   */
  superUser?: string;
  /**
   * @remarks
   * The username. Only RAM users and STS accounts are supported. If the user is a RAM user, the name must be prefixed with "p4_", such as p4_234253434. If the user is an STS account, the name must be prefixed with "v4_", such as v4_3234134.
   * 
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

