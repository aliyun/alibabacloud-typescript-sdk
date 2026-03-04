// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputDetail } from "./MediaConvertOutputDetail";


export class MediaConvertOutputGroupDetail extends $dara.Model {
  /**
   * @remarks
   * The error code for the failed output group task.
   * 
   * @example
   * InvalidParameter.ResourceContentBad
   */
  code?: string;
  /**
   * @remarks
   * The time the task was created.
   * 
   * @example
   * 2025-03-21T01:48:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2025-03-21T01:48:41Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The reason for a task failure.
   * 
   * @example
   * The resource operated "InputFile" is bad
   */
  message?: string;
  /**
   * @remarks
   * The name of the output group.
   * 
   * @example
   * hls-group
   */
  name?: string;
  /**
   * @remarks
   * The output details.
   */
  outputs?: MediaConvertOutputDetail[];
  /**
   * @remarks
   * The status of the output group task.
   * 
   * *   Init: The task is submitted.
   * *   Running
   * *   Success
   * *   Failed
   * *   Skipped
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the output group task.
   * 
   * @example
   * ******22dad741d086a50325f9******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      message: 'Message',
      name: 'Name',
      outputs: 'Outputs',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      message: 'string',
      name: 'string',
      outputs: { 'type': 'array', 'itemType': MediaConvertOutputDetail },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

