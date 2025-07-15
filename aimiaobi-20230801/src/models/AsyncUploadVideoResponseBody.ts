// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncUploadVideoResponseBodyDataVideoInfos extends $dara.Model {
  videoExtraInfo?: string;
  /**
   * @example
   * 60616fad41b171f0bb4b4531948c0102
   */
  videoId?: string;
  /**
   * @example
   * 123.mp4
   */
  videoName?: string;
  /**
   * @example
   * http://123.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoExtraInfo: 'VideoExtraInfo',
      videoId: 'VideoId',
      videoName: 'VideoName',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoExtraInfo: 'string',
      videoId: 'string',
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

export class AsyncUploadVideoResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: AsyncUploadVideoResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 94512A33-8EC1-5452-A793-5C91F18ED2F0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AsyncUploadVideoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

