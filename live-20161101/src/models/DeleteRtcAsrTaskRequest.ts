// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRtcAsrTaskRequest extends $dara.Model {
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The task ID. You can obtain the ID from the response to the [CreateRtcAsrTask](https://help.aliyun.com/document_detail/2848217.html) operation.
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

