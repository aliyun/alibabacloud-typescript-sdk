// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportInterveneFileAsyncResponseBodyData extends $dara.Model {
  code?: number;
  failIdList?: string[];
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failIdList)) {
      $dara.Model.validateArray(this.failIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileAsyncResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ImportInterveneFileAsyncResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 94512A33-8EC1-5452-A793-5C91F18ED2F0
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ImportInterveneFileAsyncResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

