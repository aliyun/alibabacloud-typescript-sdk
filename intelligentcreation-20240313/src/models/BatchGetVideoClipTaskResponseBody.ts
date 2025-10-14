// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetVideoClipTaskResponseBodyTaskListVideoList extends $dara.Model {
  /**
   * @example
   * 0
   */
  beginTime?: number;
  description?: string;
  /**
   * @example
   * 11110
   */
  endTime?: number;
  errorMsg?: string;
  title?: string;
  /**
   * @example
   * https://e-ai.oss-cn-guangzhou.aliyuncs.com/video/jlkasdl.mp4
   */
  videoDownloadUrl?: string;
  videoName?: string;
  /**
   * @example
   * https://e-ai.oss-cn-guangzhou.aliyuncs.com/video/jlkasdl.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      description: 'description',
      endTime: 'endTime',
      errorMsg: 'errorMsg',
      title: 'title',
      videoDownloadUrl: 'videoDownloadUrl',
      videoName: 'videoName',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      description: 'string',
      endTime: 'number',
      errorMsg: 'string',
      title: 'string',
      videoDownloadUrl: 'string',
      videoName: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class BatchGetVideoClipTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 86A90C40-D1AB-50DA-A4B1-0D545F80F2FE
   */
  requestId?: string;
  taskList?: BatchGetVideoClipTaskResponseBodyTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskList: 'taskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': BatchGetVideoClipTaskResponseBodyTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

