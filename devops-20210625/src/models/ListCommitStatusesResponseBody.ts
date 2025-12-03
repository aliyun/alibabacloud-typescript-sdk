// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCommitStatusesResponseBodyResultCreator extends $dara.Model {
  /**
   * @example
   * 235671547828975455
   */
  aliyunPk?: string;
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
      aliyunPk: 'string',
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

export class ListCommitStatusesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * test-commit-status-context
   */
  context?: string;
  creator?: ListCommitStatusesResponseBodyResultCreator;
  description?: string;
  /**
   * @example
   * 19285
   */
  id?: number;
  /**
   * @example
   * 61cc69557962d29f737a91730b3e86f497f083a3
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
      creator: ListCommitStatusesResponseBodyResultCreator,
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

export class ListCommitStatusesResponseBody extends $dara.Model {
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
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: ListCommitStatusesResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 28
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCommitStatusesResponseBodyResult },
      success: 'boolean',
      total: 'number',
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

