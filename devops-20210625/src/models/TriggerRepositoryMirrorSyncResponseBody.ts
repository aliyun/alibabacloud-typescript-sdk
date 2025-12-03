// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerRepositoryMirrorSyncResponseBodyResult extends $dara.Model {
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerRepositoryMirrorSyncResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_ILLEGAL_ARGUMENT_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * 企业不存在
   */
  errorMessage?: string;
  /**
   * @example
   * 37294673-00CA-5B8B-914F-A8B35511E90A
   */
  requestId?: string;
  result?: TriggerRepositoryMirrorSyncResponseBodyResult;
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
      result: TriggerRepositoryMirrorSyncResponseBodyResult,
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

