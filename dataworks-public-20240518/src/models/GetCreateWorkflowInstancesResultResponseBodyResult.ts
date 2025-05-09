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
  /**
   * @remarks
   * The workflow instance IDs. This parameter is returned only if the creation is successful.
   */
  workflowInstanceIds?: number[];
  static names(): { [key: string]: string } {
    return {
      failureMessage: 'FailureMessage',
      status: 'Status',
      workflowInstanceIds: 'WorkflowInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureMessage: 'string',
      status: 'string',
      workflowInstanceIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.workflowInstanceIds)) {
      $dara.Model.validateArray(this.workflowInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

