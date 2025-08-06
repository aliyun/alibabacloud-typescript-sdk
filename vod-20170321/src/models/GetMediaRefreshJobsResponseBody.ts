// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaRefreshJobsResponseBodyMediaRefreshJobs extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned if the refresh or prefetch task fails.
   * 
   * @example
   * PreloadQueueFull
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is returned if the refresh or prefetch task fails.
   * 
   * @example
   * Preload queue is full, please try again later!
   */
  errorMessage?: string;
  /**
   * @remarks
   * The filtering conditions for stream playback. The value is a JSON string. This parameter is used as a request parameter of the [RefreshMediaPlayUrls](~~RefreshMediaPlayUrls~~) operation.
   * 
   * @example
   * {"Formats":"mp4,m3u8", "Definitions":"HD,SD",  " StreamType":"video",  "ResultType":"Single",  " SliceFlag":false, "SliceCount": 3}
   */
  filterPolicy?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-05-20T08:23:22Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 2022-05-21T08:23:22Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the media file.
   * 
   * @example
   * ca3a8f6e4957b658067095869****
   */
  mediaId?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 41d465e31957****
   */
  mediaRefreshJobId?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The playback URLs that were refreshed or prefetched.
   * 
   * @example
   * https://shenzhen.****.aliyuncdn.com/74401a4f546007bf845cd8840****.m3u8,https://shenzhen.****.aliyuncdn.com/24041e7d13582d86604d8****.m3u8
   */
  successPlayUrls?: string;
  /**
   * @remarks
   * The IDs of the refresh or prefetch tasks for the playback URLs of media files. Only one URL can be refreshed or prefetched in a task. This value is used in the [DescribeVodRefreshTasks](~~DescribeVodRefreshTasks~~) operation, which queries the status of refresh or prefetch tasks for playback URLs of media files.
   * 
   * @example
   * 70422****,9524****
   */
  taskIds?: string;
  /**
   * @remarks
   * The type of the job. Valid values:
   * 
   * *   **Refresh**
   * *   **Preload**
   * 
   * @example
   * Preload
   */
  taskType?: string;
  /**
   * @remarks
   * The user data that you passed when you submit a refresh or prefetch task.
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"}, "Extend":{"localId":"xxx","test":"www"}}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      filterPolicy: 'FilterPolicy',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      mediaId: 'MediaId',
      mediaRefreshJobId: 'MediaRefreshJobId',
      status: 'Status',
      successPlayUrls: 'SuccessPlayUrls',
      taskIds: 'TaskIds',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      filterPolicy: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      mediaId: 'string',
      mediaRefreshJobId: 'string',
      status: 'string',
      successPlayUrls: 'string',
      taskIds: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaRefreshJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The media refresh or prefetch jobs.
   */
  mediaRefreshJobs?: GetMediaRefreshJobsResponseBodyMediaRefreshJobs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaRefreshJobs: 'MediaRefreshJobs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaRefreshJobs: { 'type': 'array', 'itemType': GetMediaRefreshJobsResponseBodyMediaRefreshJobs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mediaRefreshJobs)) {
      $dara.Model.validateArray(this.mediaRefreshJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

