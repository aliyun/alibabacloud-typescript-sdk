// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommitStatusResponseBodyResultCreator extends $dara.Model {
  /**
   * @example
   * 204485087002425236
   */
  aliyunPk?: number;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * codeup
   */
  login?: string;
  /**
   * @example
   * User
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
      avatarUrl: 'avatarUrl',
      login: 'login',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'number',
      avatarUrl: 'string',
      login: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommitStatusResponseBodyResult extends $dara.Model {
  /**
   * @example
   * default
   */
  context?: string;
  creator?: CreateCommitStatusResponseBodyResultCreator;
  description?: string;
  /**
   * @example
   * 30815
   */
  id?: number;
  /**
   * @example
   * c0ca103441b9fa7f369be8d24a6f20db44dfddf7
   */
  sha?: string;
  /**
   * @example
   * success
   */
  state?: string;
  /**
   * @example
   * xxx
   */
  targetUrl?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      creator: 'creator',
      description: 'description',
      id: 'id',
      sha: 'sha',
      state: 'state',
      targetUrl: 'targetUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      creator: CreateCommitStatusResponseBodyResultCreator,
      description: 'string',
      id: 'number',
      sha: 'string',
      state: 'string',
      targetUrl: 'string',
    };
  }

  validate() {
    if(this.creator && typeof (this.creator as any).validate === 'function') {
      (this.creator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommitStatusResponseBody extends $dara.Model {
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
   * 020F71F3-F063-5B8B-8978-2B01833216BB
   */
  requestId?: string;
  result?: CreateCommitStatusResponseBodyResult;
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
      result: CreateCommitStatusResponseBodyResult,
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

