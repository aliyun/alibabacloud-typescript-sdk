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
   * The project environment. Valid values:
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
  /**
   * @remarks
   * The tag creation policy. Valid values:
   * 
   * *   Append: New tags are added on top of the existing tags of the manual workflow.
   * *   Overwrite: Existing tags of the manual workflow are not inherited. New tags are created directly.
   * 
   * @example
   * Append
   */
  tagCreationPolicy?: string;
  /**
   * @remarks
   * The task tag list.
   */
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
   * *   SupplementData: Data backfill. The usage of RootTaskIds and IncludeTaskIds varies based on the backfill mode. See the description of the DefaultRunProperties.Mode parameter.
   * *   ManualWorkflow: Manually triggered workflow. WorkflowId is required for a manual workflow. RootTaskIds is optional. If not specified, the system uses the default root task list of the manual workflow.
   * *   Manual: Manual task. You only need to specify RootTaskIds. This is the list of manual tasks to run.
   * *   SmokeTest: Smoke test. You only need to specify RootTaskIds. This is the list of test tasks to run.
   * *   TriggerWorkflow: Triggered Workflow You must specify the WorkflowId of the triggered workflow. IncludeTaskIds is optional. If you do not specify IncludeTaskIds, the entire workflow runs.
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
   * The workflow parameters. This parameter takes effect when a specific workflow is specified (`WorkflowId != 1`). For scheduled workflows and triggered workflows, the format is key=value, and these parameters have lower priority than task parameters. For manual workflows, the format is JSON, and these parameters have higher priority than task parameters.
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

