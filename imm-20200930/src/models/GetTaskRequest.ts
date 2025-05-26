// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * Specifies whether to return the initial request parameters that are used to create the task. Default value: False.
   * 
   * @example
   * True
   */
  requestDefinition?: boolean;
  /**
   * @remarks
   * The ID of the task. You can obtain the ID of a task after you create the task.
   * 
   * This parameter is required.
   * 
   * @example
   * c2b277b9-0d30-4882-ad6d-ad661382****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task. For information about valid values, see [Task types](https://help.aliyun.com/document_detail/2743993.html).
   * 
   * This parameter is required.
   * 
   * @example
   * VideoLabelClassification
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      requestDefinition: 'RequestDefinition',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      requestDefinition: 'boolean',
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

