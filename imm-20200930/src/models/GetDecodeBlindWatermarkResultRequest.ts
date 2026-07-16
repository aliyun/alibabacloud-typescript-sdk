// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDecodeBlindWatermarkResultRequest extends $dara.Model {
  /**
   * @remarks
   * The project name. For information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The task ID. You can obtain the task ID from the response parameters of the blind watermark extraction task creation operation.
   * 
   * This parameter is required.
   * 
   * @example
   * DecodeBlindWatermark-c09b0943-ed79-4983-8dbe-7a882574****
   */
  taskId?: string;
  /**
   * @remarks
   * The task type.
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

