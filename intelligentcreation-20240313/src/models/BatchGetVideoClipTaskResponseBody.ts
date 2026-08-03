// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetVideoClipTaskResponseBodyTaskListVideoList extends $dara.Model {
  beginTime?: number;
  description?: string;
  endTime?: number;
  errorMsg?: string;
  title?: string;
  videoDownloadUrl?: string;
  videoName?: string;
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
  status?: string;
  taskId?: string;
  totalDuration?: number;
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

