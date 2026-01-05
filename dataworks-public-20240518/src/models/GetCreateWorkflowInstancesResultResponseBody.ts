// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCreateWorkflowInstancesResultResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The error message. This parameter is returned only if the creation fails.
   * 
   * @example
   * Invalid Param xxx
   */
  failureMessage?: string;
  /**
   * @remarks
   * The creation status. Valid values:
   * 
   * *   Creating
   * *   Created
   * *   CreateFailure
   * 
   * @example
   * Created
   */
  status?: string;
  unifiedWorkflowInstanceIds?: number[];
  /**
   * @remarks
   * The workflow instance IDs. This parameter is returned only if the creation is successful.
   */
  workflowInstanceIds?: number[];
  /**
   * @remarks
   * The list of task instance IDs corresponding to the workflow instance. This field is returned after successful creation.
   */
  workflowTaskInstanceIds?: number[];
  static names(): { [key: string]: string } {
    return {
      failureMessage: 'FailureMessage',
      status: 'Status',
      unifiedWorkflowInstanceIds: 'UnifiedWorkflowInstanceIds',
      workflowInstanceIds: 'WorkflowInstanceIds',
      workflowTaskInstanceIds: 'WorkflowTaskInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureMessage: 'string',
      status: 'string',
      unifiedWorkflowInstanceIds: { 'type': 'array', 'itemType': 'number' },
      workflowInstanceIds: { 'type': 'array', 'itemType': 'number' },
      workflowTaskInstanceIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.unifiedWorkflowInstanceIds)) {
      $dara.Model.validateArray(this.unifiedWorkflowInstanceIds);
    }
    if(Array.isArray(this.workflowInstanceIds)) {
      $dara.Model.validateArray(this.workflowInstanceIds);
    }
    if(Array.isArray(this.workflowTaskInstanceIds)) {
      $dara.Model.validateArray(this.workflowTaskInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCreateWorkflowInstancesResultResponseBody extends $dara.Model {
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
   * The creation result of the workflow instance.
   */
  result?: GetCreateWorkflowInstancesResultResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetCreateWorkflowInstancesResultResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

