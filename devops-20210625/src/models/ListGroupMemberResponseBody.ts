// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupMemberResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 30
   */
  accessLevel?: number;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * USERS
   */
  memberType?: string;
  /**
   * @example
   * test-codeup
   */
  name?: string;
  /**
   * @example
   * 223241
   */
  sourceId?: number;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * test-codeup-nickname
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      avatarUrl: 'avatarUrl',
      email: 'email',
      id: 'id',
      memberType: 'memberType',
      name: 'name',
      sourceId: 'sourceId',
      state: 'state',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      id: 'number',
      memberType: 'string',
      name: 'string',
      sourceId: 'number',
      state: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupMemberResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * C8F8B434-B006-59FB-8B9C-0382CF3D5680
   */
  requestId?: string;
  result?: ListGroupMemberResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListGroupMemberResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

