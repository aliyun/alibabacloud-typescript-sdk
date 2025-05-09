// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTask } from "./GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTask";


export class GetDataQualityEvaluationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the monitor.
   */
  dataQualityEvaluationTask?: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTask;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * SDFSDFSDF-SDFSDF-SDFDSF-SDFSDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTask: 'DataQualityEvaluationTask',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTask: GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTask,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityEvaluationTask && typeof (this.dataQualityEvaluationTask as any).validate === 'function') {
      (this.dataQualityEvaluationTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

