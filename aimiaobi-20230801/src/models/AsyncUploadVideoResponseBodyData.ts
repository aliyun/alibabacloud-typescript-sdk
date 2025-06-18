// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AsyncUploadVideoResponseBodyDataVideoInfos } from "./AsyncUploadVideoResponseBodyDataVideoInfos";


export class AsyncUploadVideoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  videoInfos?: AsyncUploadVideoResponseBodyDataVideoInfos[];
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      videoInfos: 'VideoInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      videoInfos: { 'type': 'array', 'itemType': AsyncUploadVideoResponseBodyDataVideoInfos },
    };
  }

  validate() {
    if(Array.isArray(this.videoInfos)) {
      $dara.Model.validateArray(this.videoInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

