// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImportOASTaskResponseBodyApiResults } from "./DescribeImportOastaskResponseBodyApiResults";
import { DescribeImportOASTaskResponseBodyModelResults } from "./DescribeImportOastaskResponseBodyModelResults";


export class DescribeImportOASTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution status of the subtask. Valid values:
   * 
   * *   RUNNING
   * *   WAIT
   * *   OVER
   * *   FAIL
   * *   CANCEL
   */
  apiResults?: DescribeImportOASTaskResponseBodyApiResults;
  /**
   * @remarks
   * The execution status of the subtask. Valid values:
   * 
   * *   RUNNING
   * *   WAIT
   * *   OVER
   * *   FAIL
   * *   CANCEL
   */
  modelResults?: DescribeImportOASTaskResponseBodyModelResults;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE5722A6-AE78-4741-A9B0-6C817D360510
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the import task. Valid values:
   * 
   * *   Running
   * *   Finished
   * 
   * @example
   * Finished
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiResults: 'ApiResults',
      modelResults: 'ModelResults',
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiResults: DescribeImportOASTaskResponseBodyApiResults,
      modelResults: DescribeImportOASTaskResponseBodyModelResults,
      requestId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    if(this.apiResults && typeof (this.apiResults as any).validate === 'function') {
      (this.apiResults as any).validate();
    }
    if(this.modelResults && typeof (this.modelResults as any).validate === 'function') {
      (this.modelResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

