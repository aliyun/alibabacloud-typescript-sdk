// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteAdhocWorkflowInstanceResponseBody extends $dara.Model {
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
   * The workflow instance ID.
   * 
   * @example
   * 1234
   */
  workflowInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowInstanceId: 'WorkflowInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

