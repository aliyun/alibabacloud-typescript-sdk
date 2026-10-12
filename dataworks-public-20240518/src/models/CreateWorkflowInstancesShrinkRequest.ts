// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to run the instance immediately after it is created. Default value: true.
   * 
   * @example
   * true
   */
  autoStartEnabled?: boolean;
  /**
   * @remarks
   * The reason for creation.
   * 
   * @example
   * create for test
   */
  comment?: string;
  /**
   * @remarks
   * The runtime configurations.
   */
  defaultRunPropertiesShrink?: string;
  /**
   * @remarks
   * The project environment. Valid values:
   * - Prod: production.
   * - Dev: development.
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
   * The data backfill period settings.
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
   * The tag creation policy.
   * - Append: Append mode. Inherits existing tags from the manual business process and appends new tags.
   * - Overwrite: Overwrite mode. Does not inherit existing tags from the manual business process and directly creates tags.
   * 
   * @example
   * Append
   */
  tagCreationPolicy?: string;
  /**
   * @remarks
   * The list of task tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The task parameters. You can use this parameter to set parameters for specific tasks. The value is in JSON format. The key is the task ID. For the format of the value, refer to the task script parameters (Task.Script.Parameter in the response of the GetTask operation).
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
   * - SupplementData: data backfill. The methods for specifying RootTaskIds and IncludeTaskIds vary based on the data backfill pattern. For more information, see the parameter description of DefaultRunProperties.Mode.
   * - ManualWorkflow: manual workflow. You must set WorkflowId to the ID of the manual workflow. RootTaskIds is optional. If you do not specify RootTaskIds, the default root node list of the manual workflow is used.
   * - Manual: manual task. You only need to specify RootTaskIds, which is the list of manual tasks to be run.
   * - SmokeTest: smoke test. You only need to specify RootTaskIds, which is the list of test tasks to be run.
   * - TriggerWorkflow: trigger-based workflow. You must set WorkflowId to the ID of the trigger-based workflow. IncludeTaskIds is optional. If you do not specify IncludeTaskIds, the entire workflow is run.
   * 
   * This parameter is required.
   * 
   * @example
   * SupplementData
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow to which the task belongs. The WorkflowId of a periodic task is always 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  workflowId?: number;
  /**
   * @remarks
   * The workflow parameters. This parameter takes effect only when a specific workflow is specified (WorkflowId != 1). For a periodic workflow or a trigger-based workflow, the format is key=value, and the priority is lower than that of task parameters. For a manual workflow, the format is JSON, and the priority is higher than that of task parameters.
   * 
   * @example
   * "key=value" format:
   * key1=value1 key2=value2
   * JSON format:
   * {"key1":"value1", "key2": "value2"}
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

