// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateRetryWorkflowExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
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
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Set to `true` to rerun only failed nodes.
   * 
   * @example
   * true
   */
  onlyFailed?: boolean;
  /**
   * @remarks
   * The workflow execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1450568762586578000
   */
  workflowExecutionId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      onlyFailed: 'OnlyFailed',
      workflowExecutionId: 'WorkflowExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      onlyFailed: 'boolean',
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

