// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRepositoryWebhookResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  buildEvents?: boolean;
  /**
   * @example
   * 2022-03-18 14:24:54
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
   * 524836
   */
  id?: number;
  /**
   * @example
   * false
   */
  issuesEvents?: boolean;
  /**
   * @example
   * ""
   */
  lastTestResult?: string;
  /**
   * @example
   * true
   */
  mergeRequestsEvents?: boolean;
  /**
   * @example
   * true
   */
  noteEvents?: boolean;
  /**
   * @example
   * 2369234
   */
  projectId?: number;
  /**
   * @example
   * true
   */
  pushEvents?: boolean;
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
   * ProjectHook
   */
  type?: string;
  /**
   * @example
   * https://xxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      buildEvents: 'buildEvents',
      createdAt: 'createdAt',
      description: 'description',
      enableSslVerification: 'enableSslVerification',
      id: 'id',
      issuesEvents: 'issuesEvents',
      lastTestResult: 'lastTestResult',
      mergeRequestsEvents: 'mergeRequestsEvents',
      noteEvents: 'noteEvents',
      projectId: 'projectId',
      pushEvents: 'pushEvents',
      secretToken: 'secretToken',
      tagPushEvents: 'tagPushEvents',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildEvents: 'boolean',
      createdAt: 'string',
      description: 'string',
      enableSslVerification: 'boolean',
      id: 'number',
      issuesEvents: 'boolean',
      lastTestResult: 'string',
      mergeRequestsEvents: 'boolean',
      noteEvents: 'boolean',
      projectId: 'number',
      pushEvents: 'boolean',
      secretToken: 'string',
      tagPushEvents: 'boolean',
      type: 'string',
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

export class DeleteRepositoryWebhookResponseBody extends $dara.Model {
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
   * F7B85D1B-D1C2-140F-A039-341859F130B9
   */
  requestId?: string;
  result?: DeleteRepositoryWebhookResponseBodyResult;
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
      result: DeleteRepositoryWebhookResponseBodyResult,
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

