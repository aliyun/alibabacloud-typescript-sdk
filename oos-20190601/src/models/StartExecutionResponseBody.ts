// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartExecutionResponseBodyExecution } from "./StartExecutionResponseBodyExecution";


export class StartExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the execution.
   */
  execution?: StartExecutionResponseBodyExecution;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      execution: 'Execution',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execution: StartExecutionResponseBodyExecution,
      requestId: 'string',
    };
  }

  validate() {
    if(this.execution && typeof (this.execution as any).validate === 'function') {
      (this.execution as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

