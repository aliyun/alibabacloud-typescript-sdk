// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectMemberResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 30
   */
  accessLevel?: number;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c4ef67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  email?: string;
  /**
   * @example
   * 2959
   */
  id?: number;
  /**
   * @example
   * codeup
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      avatarUrl: 'avatarUrl',
      email: 'email',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 30C99C69-A340-5E2E-ACE4-8888FF50CF52
   */
  requestId?: string;
  result?: GetProjectMemberResponseBodyResult;
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
      result: GetProjectMemberResponseBodyResult,
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

