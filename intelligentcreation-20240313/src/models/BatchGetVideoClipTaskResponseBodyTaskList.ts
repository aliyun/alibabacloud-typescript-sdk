// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchGetVideoClipTaskResponseBodyTaskListVideoList } from "./BatchGetVideoClipTaskResponseBodyTaskListVideoList";


export class BatchGetVideoClipTaskResponseBodyTaskList extends $dara.Model {
  /**
   * @example
   * FINISHED
   */
  status?: string;
  /**
   * @example
   * 864413342857035776
   */
  taskId?: string;
  /**
   * @example
   * 43335
   */
  totalDuration?: number;
  /**
   * @example
   * 11
   */
  totalToken?: number;
  videoList?: BatchGetVideoClipTaskResponseBodyTaskListVideoList[];
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      taskId: 'taskId',
      totalDuration: 'totalDuration',
      totalToken: 'totalToken',
      videoList: 'videoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskId: 'string',
      totalDuration: 'number',
      totalToken: 'number',
      videoList: { 'type': 'array', 'itemType': BatchGetVideoClipTaskResponseBodyTaskListVideoList },
    };
  }

  validate() {
    if(Array.isArray(this.videoList)) {
      $dara.Model.validateArray(this.videoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

