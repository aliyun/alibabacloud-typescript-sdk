// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRepositoryMemberResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 40
   */
  accessLevel?: number;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * test@alibaba.com
   */
  email?: string;
  /**
   * @example
   * 2020-08-08 08:08:08
   */
  expireAt?: string;
  /**
   * @example
   * 30815
   */
  id?: number;
  /**
   * @example
   * test_memeber_name
   */
  memberName?: string;
  /**
   * @example
   * USERS
   */
  memberType?: string;
  /**
   * @example
   * codeup
   */
  name?: string;
  /**
   * @example
   * 223241
   */
  sourceId?: number;
  /**
   * @example
   * Project
   */
  sourceType?: string;
  /**
   * @example
   * normal
   */
  state?: string;
  /**
   * @example
   * codeup-test
   */
  username?: string;
  /**
   * @remarks
   * web url
   * 
   * @example
   * ""
   */
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      avatarUrl: 'avatarUrl',
      email: 'email',
      expireAt: 'expireAt',
      id: 'id',
      memberName: 'memberName',
      memberType: 'memberType',
      name: 'name',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
      state: 'state',
      username: 'username',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      expireAt: 'string',
      id: 'number',
      memberName: 'string',
      memberType: 'string',
      name: 'string',
      sourceId: 'number',
      sourceType: 'string',
      state: 'string',
      username: 'string',
      webUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryMemberResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * F590C9D8-E908-5B6C-95AC-56B7E8011FFA
   */
  requestId?: string;
  result?: UpdateRepositoryMemberResponseBodyResult;
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
      result: UpdateRepositoryMemberResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

