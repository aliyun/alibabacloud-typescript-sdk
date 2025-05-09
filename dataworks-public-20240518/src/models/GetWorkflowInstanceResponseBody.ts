// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkflowInstanceResponseBodyWorkflowInstance } from "./GetWorkflowInstanceResponseBodyWorkflowInstance";


export class GetWorkflowInstanceResponseBody extends $dara.Model {
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
   * The information about the workflow instance.
   */
  workflowInstance?: GetWorkflowInstanceResponseBodyWorkflowInstance;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowInstance: 'WorkflowInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowInstance: GetWorkflowInstanceResponseBodyWorkflowInstance,
    };
  }

  validate() {
    if(this.workflowInstance && typeof (this.workflowInstance as any).validate === 'function') {
      (this.workflowInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

