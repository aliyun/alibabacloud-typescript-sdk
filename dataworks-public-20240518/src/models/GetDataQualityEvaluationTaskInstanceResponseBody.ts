// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstance } from "./GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstance";


export class GetDataQualityEvaluationTaskInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the monitor instance.
   */
  dataQualityEvaluationTaskInstance?: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstance;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTaskInstance: 'DataQualityEvaluationTaskInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTaskInstance: GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstance,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityEvaluationTaskInstance && typeof (this.dataQualityEvaluationTaskInstance as any).validate === 'function') {
      (this.dataQualityEvaluationTaskInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

