// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoAnalysisTaskResponseBodyDataHeader } from "./GetVideoAnalysisTaskResponseBodyDataHeader";
import { GetVideoAnalysisTaskResponseBodyDataPayload } from "./GetVideoAnalysisTaskResponseBodyDataPayload";
import { GetVideoAnalysisTaskResponseBodyDataTaskRunInfo } from "./GetVideoAnalysisTaskResponseBodyDataTaskRunInfo";


export class GetVideoAnalysisTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * Access was denied, message: No such namespace namespaces/mjp-test-default.
   */
  errorMessage?: string;
  header?: GetVideoAnalysisTaskResponseBodyDataHeader;
  payload?: GetVideoAnalysisTaskResponseBodyDataPayload;
  /**
   * @example
   * 3feb69ed02d9b1a17d0f1a942675d300
   */
  taskId?: string;
  taskRunInfo?: GetVideoAnalysisTaskResponseBodyDataTaskRunInfo;
  /**
   * @example
   * SUCCESSED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      header: 'header',
      payload: 'payload',
      taskId: 'taskId',
      taskRunInfo: 'taskRunInfo',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      header: GetVideoAnalysisTaskResponseBodyDataHeader,
      payload: GetVideoAnalysisTaskResponseBodyDataPayload,
      taskId: 'string',
      taskRunInfo: GetVideoAnalysisTaskResponseBodyDataTaskRunInfo,
      taskStatus: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    if(this.taskRunInfo && typeof (this.taskRunInfo as any).validate === 'function') {
      (this.taskRunInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

