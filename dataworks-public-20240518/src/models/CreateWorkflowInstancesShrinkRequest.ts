// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to run the workflow instance immediately after it is created. Default value: true.
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
   * - Prod: production
   * - Dev: development
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
   * The tag creation policy. Valid values:
   * - Append: Append mode. Inherits existing tags from the manual workflow and appends new tags.
   * - Overwrite: Overwrite mode. Does not inherit existing tags from the manual workflow and directly creates tags.
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
   * The node parameters, which are used to set parameters for specific nodes. The value is in JSON format. The key is the node ID, and the value format refers to the node script parameters (Task.Script.Parameter in the response of the GetTask operation).
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
   * - SupplementData: data backfill. The methods for specifying RootTaskIds and IncludeTaskIds vary based on the data backfill mode. For more information, see the parameter description of DefaultRunProperties.Mode.
   * - ManualWorkflow: manually triggered workflow. You must set WorkflowId to the ID of the manually triggered workflow. RootTaskIds is optional. If you do not specify RootTaskIds, the default root node list of the manually triggered workflow is used.
   * - Manual: manually triggered node. You only need to specify RootTaskIds, which is the list of manually triggered nodes to be run.
   * - SmokeTest: smoke test. You only need to specify RootTaskIds, which is the list of test nodes to be run.
   * - TriggerWorkflow: event-triggered workflow. You must set WorkflowId to the ID of the event-triggered workflow. IncludeTaskIds is optional. If you do not specify IncludeTaskIds, the entire workflow is run.
   * 
   * This parameter is required.
   * 
   * @example
   * SupplementData
   */
  type?: string;
  /**
   * @remarks
   * The ID of the workflow to which the node belongs. The WorkflowId of a periodic node is always 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  workflowId?: number;
  /**
   * @remarks
   * The workflow parameters. This parameter takes effect only when a specific workflow is specified (WorkflowId != 1). For a periodic workflow or an event-triggered workflow, the format is key=value, and the priority is lower than that of node parameters. For a manually triggered workflow, the format is JSON, and the priority is higher than that of node parameters.
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

