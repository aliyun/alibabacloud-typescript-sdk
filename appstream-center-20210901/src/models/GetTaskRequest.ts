// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The associated resource ID. **If you do not specify the TaskId parameter, you must specify the EntityId, EntityType, and TaskCategory parameters at the same time.** The resource ID must match the selected resource type.
   * 
   * @example
   * imgc-bp1example****
   */
  entityId?: string;
  /**
   * @remarks
   * The associated resource type. This parameter is required if you do not specify the TaskId parameter.
   * 
   * Valid values:
   * 
   * - **IMAGE**: image resource.
   * - **APP**: application resource.
   * - **SNAPSHOT**: snapshot resource.
   * 
   * You must also select an applicable TaskCategory. The resource type itself does not mean that all task categories can be queried by resource.
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
   * The task category when you query by resource. This parameter is required if you do not specify the TaskId parameter.
   * 
   * Valid values:
   * 
   * - **IMAGE_BUILDER**: image creation. Queries tasks for manual creation, automatic creation, or creation based on an instance.
   * - **IMAGE_DISTRIBUTE**: image distribution across regions.
   * 
   * @example
   * IMAGE_BUILDER
   */
  taskCategory?: string;
  /**
   * @remarks
   * The task ID. If you specify this parameter, the system queries the task by this ID first, and the resource information query conditions are no longer used for locating the task.
   * 
   * @example
   * tid-bp1example****
   */
  taskId?: string;
  /**
   * @remarks
   * **Not enabled. Do not specify this parameter.** When you query a task, locate the task by using the TaskId parameter or the resource information and TaskCategory parameter. This parameter is not used for task filtering.
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

