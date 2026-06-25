// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateHoldWorkflowExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * xxl-job-executor-sample
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-d6a5243b6fa
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the Workflow Execution.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  workflowExecutionId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      workflowExecutionId: 'WorkflowExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      workflowExecutionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

