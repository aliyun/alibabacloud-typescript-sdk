// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWebhookResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2022-03-12 12:00:00
   */
  createdAt?: string;
  description?: string;
  /**
   * @example
   * false
   */
  enableSslVerification?: boolean;
  /**
   * @example
   * 30815
   */
  id?: number;
  /**
   * @example
   * ok
   */
  lastTestResult?: string;
  /**
   * @example
   * true
   */
  mergeRequestsEvents?: boolean;
  /**
   * @example
   * false
   */
  noteEvents?: boolean;
  /**
   * @example
   * true
   */
  pushEvents?: boolean;
  /**
   * @example
   * 2835387
   */
  repositoryId?: number;
  /**
   * @example
   * xxxx
   */
  secretToken?: string;
  /**
   * @example
   * true
   */
  tagPushEvents?: boolean;
  /**
   * @example
   * https://xxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      enableSslVerification: 'enableSslVerification',
      id: 'id',
      lastTestResult: 'lastTestResult',
      mergeRequestsEvents: 'mergeRequestsEvents',
      noteEvents: 'noteEvents',
      pushEvents: 'pushEvents',
      repositoryId: 'repositoryId',
      secretToken: 'secretToken',
      tagPushEvents: 'tagPushEvents',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      enableSslVerification: 'boolean',
      id: 'number',
      lastTestResult: 'string',
      mergeRequestsEvents: 'boolean',
      noteEvents: 'boolean',
      pushEvents: 'boolean',
      repositoryId: 'number',
      secretToken: 'string',
      tagPushEvents: 'boolean',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddWebhookResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_NOT_FOUND_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * “”
   */
  errorMessage?: string;
  /**
   * @example
   * 6177543A-8D54-5736-A93B-E0195A1512CB
   */
  requestId?: string;
  result?: AddWebhookResponseBodyResult;
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
      result: AddWebhookResponseBodyResult,
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

