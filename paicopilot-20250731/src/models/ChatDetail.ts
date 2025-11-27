// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChatDetailUserInfo extends $dara.Model {
  name?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatDetail extends $dara.Model {
  content?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   */
  gmtCreateTime?: string;
  userInfo?: ChatDetailUserInfo;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreateTime: 'GmtCreateTime',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreateTime: 'string',
      userInfo: ChatDetailUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

