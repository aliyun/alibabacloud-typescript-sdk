// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRtcAsrTaskRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the task. Call the [CreateRtcAsrTask](https://help.aliyun.com/document_detail/2848217.html) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * asr-51c72******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

