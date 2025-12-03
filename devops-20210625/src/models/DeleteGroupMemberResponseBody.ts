// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGroupMemberResponseBodyResult extends $dara.Model {
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
   * 524836
   */
  id?: number;
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
   * 2080398
   */
  sourceId?: number;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * test-codeup
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      avatarUrl: 'avatarUrl',
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

export class DeleteGroupMemberResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorMessage?: string;
  /**
   * @example
   * 4D6AF7CC-B43B-5454-86AB-023D25E44868
   */
  requestId?: string;
  result?: DeleteGroupMemberResponseBodyResult;
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
      result: DeleteGroupMemberResponseBodyResult,
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

