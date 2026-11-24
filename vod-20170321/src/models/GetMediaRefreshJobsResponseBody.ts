// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaRefreshJobsResponseBodyMediaRefreshJobs extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * This field is returned when the refresh or prefetch task fails to be submitted.
   * 
   * @example
   * PreloadQueueFull
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * This field is returned when the refresh or prefetch task fails to be submitted.
   * 
   * @example
   * Preload queue is full, please try again later!
   */
  errorMessage?: string;
  /**
   * @remarks
   * The filter policy for playback streams. The value is in JSON format and contains the request parameters of the [Submit audio and video refresh or prefetch tasks](https://help.aliyun.com/document_detail/431095.html) API operation.
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
   * 2022-05-20 08:23:22
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task was modified.
   * 
   * @example
   * 2022-05-21 08:23:22
   */
  gmtModified?: string;
  /**
   * @remarks
   * The audio or video ID.
   * 
   * @example
   * ca3a8f6e4957b658067095869****
   */
  mediaId?: string;
  /**
   * @remarks
   * The task ID of the audio or video refresh or prefetch task.
   * 
   * @example
   * 41d465e31957****
   */
  mediaRefreshJobId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - **success**: success
   * - **fail**: failure
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The playback URLs that are successfully refreshed or prefetched.
   * 
   * @example
   * https://shenzhen.****.aliyuncdn.com/74401a4f546007bf845cd8840****.m3u8,https://shenzhen.****.aliyuncdn.com/24041e7d13582d86604d8****.m3u8
   */
  successPlayUrls?: string;
  /**
   * @remarks
   * The task IDs for refreshing or prefetching the playback URLs. Each URL corresponds to one task ID. You can use the task ID to call the [DescribeVodRefreshTasks](https://help.aliyun.com/document_detail/69214.html) API operation to query the refresh or prefetch status of each playback URL.
   * 
   * @example
   * 70422****,9524****
   */
  taskIds?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **Refresh**: refresh
   * - **Preload**: prefetch
   * 
   * @example
   * Preload
   */
  taskType?: string;
  /**
   * @remarks
   * The UserData information passed when the refresh or prefetch task is submitted.
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
   * The list of audio and video refresh or prefetch task information.
   */
  mediaRefreshJobs?: GetMediaRefreshJobsResponseBodyMediaRefreshJobs[];
  /**
   * @remarks
   * The request ID.
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

