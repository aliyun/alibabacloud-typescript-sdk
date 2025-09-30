// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoAnalysisTasksResponseBodyData extends $dara.Model {
  /**
   * @example
   * xx
   */
  taskErrorCode?: string;
  /**
   * @example
   * xx
   */
  taskErrorMessage?: string;
  /**
   * @example
   * xx
   */
  taskId?: string;
  /**
   * @example
   * CANCELED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      taskErrorCode: 'taskErrorCode',
      taskErrorMessage: 'taskErrorMessage',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskErrorCode: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVideoAnalysisTasksResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: UpdateVideoAnalysisTasksResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 04DA1A52-4E51-56CB-BA64-FDDA0B53BAE8
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': UpdateVideoAnalysisTasksResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

