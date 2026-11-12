// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkflowsRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-a1804a3226d
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to delete all jobs in the workflow.
   * 
   * @example
   * false
   */
  deleteJobs?: boolean;
  /**
   * @remarks
   * The list of workflow IDs.
   * 
   * This parameter is required.
   */
  workflowIds?: number[];
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      deleteJobs: 'DeleteJobs',
      workflowIds: 'WorkflowIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      deleteJobs: 'boolean',
      workflowIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.workflowIds)) {
      $dara.Model.validateArray(this.workflowIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

