// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The associated resource ID. **If TaskId is not specified, you must provide EntityId, EntityType, and TaskCategory at the same time.** The resource ID must match the selected resource type.
   * 
   * @example
   * imgc-bp1example****
   */
  entityId?: string;
  /**
   * @remarks
   * The associated resource type. Required if TaskId is not specified.
   * 
   * Valid values:
   * - **IMAGE**: Image resource.
   * - **APP**: Application resource.
   * - **SNAPSHOT**: Snapshot resource.
   * 
   * You must also select the applicable TaskCategory. The resource type itself does not mean that all task categories can be queried by resource.
   * 
   * @example
   * IMAGE
   */
  entityType?: string;
  /**
   * @remarks
   * The associated resource version ID. Used to specify the version when querying by resource. For image resources, enter the image version ID.
   * 
   * @example
   * iv-bp1example****
   */
  entityVersionId?: string;
  /**
   * @remarks
   * The task category when querying by resource. Required if TaskId is not specified.
   * 
   * Valid values:
   * - **IMAGE_BUILDER**: Image creation. Queries tasks for manual creation, automatic creation, or creation based on an instance.
   * - **IMAGE_DISTRIBUTE**: Image region distribution task.
   * 
   * @example
   * IMAGE_BUILDER
   */
  taskCategory?: string;
  /**
   * @remarks
   * The task ID. If specified, the query prioritizes this ID, and resource information query conditions are no longer used for locating the task.
   * 
   * @example
   * tid-bp1example****
   */
  taskId?: string;
  /**
   * @remarks
   * **Not enabled. Do not pass this parameter.** When querying a task, locate the task by using TaskId or resource information and TaskCategory. This parameter is not used for task filtering.
   * 
   * The example "Not applicable (not enabled)" is only a description of the field status, not a valid parameter value.
   * 
   * @example
   * Not applicable (not enabled)
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      entityType: 'EntityType',
      entityVersionId: 'EntityVersionId',
      taskCategory: 'TaskCategory',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'string',
      entityVersionId: 'string',
      taskCategory: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

