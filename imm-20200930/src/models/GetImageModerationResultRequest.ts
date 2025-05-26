// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageModerationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ImageModeration-ff207203-3f93-4645-a041-7b8f0f******
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * ImageModeration
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
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

