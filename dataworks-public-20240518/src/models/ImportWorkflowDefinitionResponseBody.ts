// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportWorkflowDefinitionResponseBodyAsyncJob } from "./ImportWorkflowDefinitionResponseBodyAsyncJob";


export class ImportWorkflowDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status information of the asynchronous task.
   */
  asyncJob?: ImportWorkflowDefinitionResponseBodyAsyncJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF020E7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncJob: 'AsyncJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncJob: ImportWorkflowDefinitionResponseBodyAsyncJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.asyncJob && typeof (this.asyncJob as any).validate === 'function') {
      (this.asyncJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

