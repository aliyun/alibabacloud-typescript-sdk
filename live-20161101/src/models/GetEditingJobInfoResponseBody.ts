// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingJobInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97****
   */
  casterId?: string;
  /**
   * @remarks
   * The video clip task information. This includes:
   * 
   * - **OutputVodId**: The ID of the output video-on-demand file.
   * 
   * - **TaskStatus**: The status of the video clip task. (-1: failed. 0: task initialized. 1: clipping in progress. 2: uploading. 3: task succeeded.)
   * 
   * - **StorageLocation**: The video-on-demand storage address.
   * 
   * - **FileName**: The name of the clipped file.
   * 
   * - **ShowId**: The show ID.
   * 
   * @example
   * "EditingTasksInfo": {     "OutputVodId": "3e34733b40b9a96ccf5c1ff6f69****",     "TaskStatus": 1,     "StorageInfo": {       "StorageLocation": "***bucket***",       "FileName": "EditFile****"     },     "ShowId": "42200b81-b761-4c10-842a-a0726d97****"   },
   */
  editingTasksInfo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      editingTasksInfo: 'EditingTasksInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      editingTasksInfo: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

