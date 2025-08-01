// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The default value is true.
   * 
   * @example
   * true
   */
  autoStartEnabled?: boolean;
  /**
   * @remarks
   * The reason for the creation.
   * 
   * @example
   * create for test
   */
  comment?: string;
  /**
   * @remarks
   * The runtime configuration.
   */
  defaultRunPropertiesShrink?: string;
  /**
   * @remarks
   * The environment of the workspace. Valid values:
   * 
   * *   Prod
   * *   Dev
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * WorkflowInstance1
   */
  name?: string;
  /**
   * @remarks
   * The configuration of the data backfilling period.
   */
  periodsShrink?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  tagCreationPolicy?: string;
  tagsShrink?: string;
  /**
   * @remarks
   * The task-specific parameters. The value is in the JSON format. The key specifies the task ID. You can call the GetTask operation to obtain the format of the value by querying the script parameters.
   * 
   * @example
   * {
   *   "1001": "key1=val2 key2=val2", 
   *   "1002": "key1=val2 key2=val2"
   * }
   */
  taskParameters?: string;
  /**
   * @remarks
   * The type of the workflow instance. Valid values:
   * 
   * *   SupplementData: The values of the RootTaskIds and IncludeTaskIds parameters vary based on the value of the Mode parameter. For more information, see the Mode parameter in this API operation.
   * *   ManualWorkflow: If you set the Type parameter to ManualWorkflow, you must set the WorkflowId parameter to the ID of the manually triggered workflow. The RootTaskIds parameter is optional. If you do not configure the RootTaskIds parameter, the IDs of the default root nodes of the manually triggered workflow are used.
   * *   Manual: You need to configure only the RootTaskIds parameter. The RootTaskIds parameter specifies the IDs of the manually triggered tasks that need to be run.
   * *   SmokeTest: You need to configure only the RootTaskIds parameter. The RootTaskIds parameter specifies the IDs of the test tasks that need to be run.
   * 
   * This parameter is required.
   * 
   * @example
   * SupplementData
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow to which the instance belongs. This parameter is set to 1 for auto triggered tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  workflowId?: number;
  /**
   * @remarks
   * The workflow parameters. This parameter takes effect only when you set the `WorkflowId` parameter to a value other than 1. If your workflow is an auto triggered workflow, configure this parameter in the key=value format. The parameters that you configure in this parameter have a lower priority than task parameters. If your workflow is a manually triggered workflow, configure this parameter in the JSON format. The parameters that you configure in this parameter have a higher priority than task parameters.
   * 
   * @example
   * { 
   *   "key1": "value1", 
   *   "key2": "value2" 
   * }
   */
  workflowParameters?: string;
  static names(): { [key: string]: string } {
    return {
      autoStartEnabled: 'AutoStartEnabled',
      comment: 'Comment',
      defaultRunPropertiesShrink: 'DefaultRunProperties',
      envType: 'EnvType',
      name: 'Name',
      periodsShrink: 'Periods',
      projectId: 'ProjectId',
      tagCreationPolicy: 'TagCreationPolicy',
      tagsShrink: 'Tags',
      taskParameters: 'TaskParameters',
      type: 'Type',
      workflowId: 'WorkflowId',
      workflowParameters: 'WorkflowParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStartEnabled: 'boolean',
      comment: 'string',
      defaultRunPropertiesShrink: 'string',
      envType: 'string',
      name: 'string',
      periodsShrink: 'string',
      projectId: 'number',
      tagCreationPolicy: 'string',
      tagsShrink: 'string',
      taskParameters: 'string',
      type: 'string',
      workflowId: 'number',
      workflowParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

