// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The associated resource ID. **If you do not specify TaskId, you must specify EntityId, EntityType, and TaskCategory at the same time.** The resource ID must match the selected resource type.
   * 
   * @example
   * imgc-bp1example****
   */
  entityId?: string;
  /**
   * @remarks
   * The associated resource type. This parameter is required if you do not specify TaskId.
   * 
   * Valid values:
   * - **IMAGE**: Image resource.
   * - **APP**: Application resource.
   * - **SNAPSHOT**: Snapshot resource.
   * 
   * You must also specify a valid TaskCategory. The resource type itself does not mean that all task categories can be queried by resource.
   * 
   * @example
   * IMAGE
   */
  entityType?: string;
  /**
   * @remarks
   * The associated resource version ID. This parameter is used to specify the version when you query by resource. For image resources, specify the image version ID.
   * 
   * @example
   * iv-bp1example****
   */
  entityVersionId?: string;
  /**
   * @remarks
   * The task category when you query by resource. This parameter is required if you do not specify TaskId.
   * 
   * Valid values:
   * - **IMAGE_BUILDER**: Image creation. Queries tasks for manual creation, automatic creation, or creation based on an instance.
   * - **IMAGE_DISTRIBUTE**: Image distribution across regions.
   * 
   * @example
   * IMAGE_BUILDER
   */
  taskCategory?: string;
  /**
   * @remarks
   * The task ID. If you specify this parameter, the system queries the task by this ID, and the resource information query conditions are ignored.
   * 
   * @example
   * tid-bp1example****
   */
  taskId?: string;
  /**
   * @remarks
   * **Not enabled. Do not specify this parameter.** When you query a task, locate the task by using TaskId or the combination of resource information and TaskCategory. This parameter is not used for task filtering.
   * 
   * The example "Not applicable (not enabled)" is only a description of the field status and is not a valid parameter value.
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

