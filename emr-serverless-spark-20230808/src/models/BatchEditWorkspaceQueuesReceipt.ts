// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchEditWorkspaceQueuesReceipt extends $dara.Model {
  /**
   * @remarks
   * The target states of these queues are progressively written during the workflow.
   */
  acceptedQueues?: string[];
  /**
   * @remarks
   * The current values are already equal to the target values, so no write operations are required.
   */
  skippedQueues?: string[];
  /**
   * @remarks
   * A null value indicates that all queues in this request are already in the target state and no workflow is started (idempotent no-op).
   * 
   * @example
   * 9527
   */
  workflowInstanceId?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-1234abcd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptedQueues: 'acceptedQueues',
      skippedQueues: 'skippedQueues',
      workflowInstanceId: 'workflowInstanceId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptedQueues: { 'type': 'array', 'itemType': 'string' },
      skippedQueues: { 'type': 'array', 'itemType': 'string' },
      workflowInstanceId: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acceptedQueues)) {
      $dara.Model.validateArray(this.acceptedQueues);
    }
    if(Array.isArray(this.skippedQueues)) {
      $dara.Model.validateArray(this.skippedQueues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

