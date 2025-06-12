// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserResponseBodyData extends $dara.Model {
  avatarUrl?: string;
  displayName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @example
   * 1382114****
   */
  mobile?: string;
  nickname?: string;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  /**
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      loginName: 'LoginName',
      mobile: 'Mobile',
      nickname: 'Nickname',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      displayName: 'string',
      email: 'string',
      extension: 'string',
      loginName: 'string',
      mobile: 'string',
      nickname: 'string',
      userId: 'string',
      workMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

