// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskFlowCooperatorsResponseBodyCooperatorListCooperator extends $dara.Model {
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * test@XX.com
   */
  email?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * name
   */
  loginName?: string;
  /**
   * @remarks
   * The alias of the user.
   * 
   * @example
   * name
   */
  nickName?: string;
  /**
   * @remarks
   * userId.
   * 
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      loginName: 'LoginName',
      nickName: 'NickName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      loginName: 'string',
      nickName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

