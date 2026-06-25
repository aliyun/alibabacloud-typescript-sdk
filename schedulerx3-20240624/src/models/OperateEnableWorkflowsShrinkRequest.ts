// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateEnableWorkflowsShrinkRequest extends $dara.Model {
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
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * A list of workflow IDs.
   * 
   * This parameter is required.
   */
  workflowIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      workflowIdsShrink: 'WorkflowIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      workflowIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

