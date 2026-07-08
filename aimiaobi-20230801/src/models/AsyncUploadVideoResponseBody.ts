// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncUploadVideoResponseBodyDataVideoInfos extends $dara.Model {
  /**
   * @remarks
   * Additional information about the video.
   * 
   * @example
   * 视频中有一个房子
   */
  videoExtraInfo?: string;
  /**
   * @remarks
   * The video ID.
   * 
   * @example
   * 60616fad41b171f0bb4b4531948c0102
   */
  videoId?: string;
  /**
   * @remarks
   * The name of the video.
   * 
   * @example
   * 123.mp4
   */
  videoName?: string;
  /**
   * @remarks
   * The video URL.
   * 
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
   * @remarks
   * The task ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * Information about the videos.
   */
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
   * @remarks
   * The status code returned for the request.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: AsyncUploadVideoResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 94512A33-8EC1-5452-A793-5C91F18ED2F0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\` indicates success. \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AsyncUploadVideoResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

