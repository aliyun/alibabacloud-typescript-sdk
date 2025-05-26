// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkAnalyzeLogTask } from "./SparkAnalyzeLogTask";


export class SubmitSparkLogAnalyzeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the Spark log analysis task.
   */
  data?: SparkAnalyzeLogTask;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1DF5AF5B-C803-1861-A0FF-63666A557709
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SparkAnalyzeLogTask,
      requestId: 'string',
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

