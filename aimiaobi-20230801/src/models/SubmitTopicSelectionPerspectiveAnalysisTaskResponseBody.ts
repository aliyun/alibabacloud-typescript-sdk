// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTopicSelectionPerspectiveAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 任务名称
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTopicSelectionPerspectiveAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: SubmitTopicSelectionPerspectiveAnalysisTaskResponseBodyData;
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
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
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
      data: SubmitTopicSelectionPerspectiveAnalysisTaskResponseBodyData,
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

