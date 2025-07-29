// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoAnalysisTaskResponseBodyData extends $dara.Model {
  taskErrorMessage?: string;
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
   */
  taskId?: string;
  /**
   * @example
   * CANCELED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      taskErrorMessage: 'taskErrorMessage',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateVideoAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: UpdateVideoAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  /**
   * @example
   * false
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
      data: UpdateVideoAnalysisTaskResponseBodyData,
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

