// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeletePracticeTaskResponseBodyResults extends $dara.Model {
  /**
   * @example
   * job delete error by auth
   */
  message?: string;
  /**
   * @example
   * 901524394325590016
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeletePracticeTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @example
   * true
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 10923AA3-F7A1-5EA0-ACCA-D704269EAA78
   */
  requestId?: string;
  results?: BatchDeletePracticeTaskResponseBodyResults[];
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
      results: 'results',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': BatchDeletePracticeTaskResponseBodyResults },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

