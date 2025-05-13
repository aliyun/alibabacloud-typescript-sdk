// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefaultWorkspaceResponseBodyOwner extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 17915******4216
   */
  userId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 17915******4216
   */
  userKp?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userKp: 'UserKp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

