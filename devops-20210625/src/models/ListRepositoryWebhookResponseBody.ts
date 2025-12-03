// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryWebhookResponseBodyResult extends $dara.Model {
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
   * 16776
   */
  id?: number;
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
  projectId?: number;
  /**
   * @example
   * false
   */
  pushEvents?: boolean;
  /**
   * @example
   * xxxx
   */
  secretToken?: string;
  /**
   * @example
   * false
   */
  tagPushEvents?: boolean;
  /**
   * @example
   * https://xxxx
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
      projectId: 'projectId',
      pushEvents: 'pushEvents',
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
      projectId: 'number',
      pushEvents: 'boolean',
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

export class ListRepositoryWebhookResponseBody extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * HC93CE1A-8D7A-13A9-8306-7465DE2E5C0F
   */
  requestId?: string;
  result?: ListRepositoryWebhookResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
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
      result: { 'type': 'array', 'itemType': ListRepositoryWebhookResponseBodyResult },
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

