// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkflowResponseBodyWorkflow } from "./GetWorkflowResponseBodyWorkflow";


export class GetWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the workflow.
   */
  workflow?: GetWorkflowResponseBodyWorkflow;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflow: 'Workflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflow: GetWorkflowResponseBodyWorkflow,
    };
  }

  validate() {
    if(this.workflow && typeof (this.workflow as any).validate === 'function') {
      (this.workflow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

