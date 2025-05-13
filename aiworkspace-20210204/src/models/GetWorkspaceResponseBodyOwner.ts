// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceResponseBodyOwner extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * mings****t
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1157******94123
   */
  userId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1157******94123
   */
  userKp?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * mings****t
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
      userKp: 'UserKp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
      userKp: 'string',
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

