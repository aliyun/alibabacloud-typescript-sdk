// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDecodeBlindWatermarkResultRequest extends $dara.Model {
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
   * The ID of the task. You can obtain the ID of the task from the response of the CreateDecodeBlindWatermarkTask operation.
   * 
   * This parameter is required.
   * 
   * @example
   * DecodeBlindWatermark-c09b0943-ed79-4983-8dbe-7a882574****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * *   Set the value to DecodeBlindWatermark.
   * 
   * This parameter is required.
   * 
   * @example
   * DecodeBlindWatermark
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

