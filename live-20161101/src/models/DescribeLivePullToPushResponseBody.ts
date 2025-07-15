// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePullToPushResponseBodyTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The HTTP callback URL.
   * 
   * @example
   * https://callback*****.com
   */
  callbackURL?: string;
  /**
   * @remarks
   * The destination URL to which the stream is relayed.
   * 
   * @example
   * rtmp://pushtest.********.aliyunlive.com/pulltest493/pulltest-w434
   */
  dstUrl?: string;
  /**
   * @remarks
   * The end time of the task. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2024-08-27T14:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The file index, which indicates the sequence of the file where the playback starts.
   * 
   * @example
   * 0
   */
  fileIndex?: number;
  /**
   * @remarks
   * The offset of the position where the system starts to read the video resource. Unit: seconds. Valid values: positive numbers.
   * 
   * > 
   * 
   * *   This parameter indicates an offset from the first frame.
   * 
   * *   This parameter is applicable to only video resources from ApsaraVideo VOD or a third party.
   * 
   * @example
   * 2
   */
  offset?: number;
  /**
   * @remarks
   * The number of playbacks after the first playback is complete. Valid values:
   * 
   * *   0 (default): specifies that the video list is played only once.
   * *   \\-1: specifies that the video list is played in loop mode.
   * *   Positive integer: specifies the number of times the video list repeats after the first playback is complete.
   * 
   * >  This parameter is applicable to only video resources from ApsaraVideo VOD or a third party.
   * 
   * @example
   * 0
   */
  repeatNumber?: number;
  /**
   * @remarks
   * The number of retries allowed.
   * 
   * @example
   * 3
   */
  retryCount?: number;
  /**
   * @remarks
   * The retry interval. Unit: seconds.
   * 
   * @example
   * 60
   */
  retryInterval?: number;
  /**
   * @remarks
   * The protocol of the source stream.
   * 
   * @example
   * RTMP
   */
  sourceProtocol?: string;
  /**
   * @remarks
   * The type of the source stream. Valid values:
   * 
   * *   live: a live stream
   * *   vod: a list of ApsaraVideo VOD resources
   * *   url: a list of video resources from a third party
   * 
   * @example
   * live
   */
  sourceType?: string;
  /**
   * @remarks
   * The source URLs.
   * 
   * @example
   * rtmp://pulltest.****.aliyunlive.com/pulltest493/pulltest-w434
   */
  sourceUrls?: string[];
  /**
   * @remarks
   * The start time of the task. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2024-08-26T10:30:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * fd245384-4067-4f91-9d75-9666a6bc9****
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * test
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      callbackURL: 'CallbackURL',
      dstUrl: 'DstUrl',
      endTime: 'EndTime',
      fileIndex: 'FileIndex',
      offset: 'Offset',
      repeatNumber: 'RepeatNumber',
      retryCount: 'RetryCount',
      retryInterval: 'RetryInterval',
      sourceProtocol: 'SourceProtocol',
      sourceType: 'SourceType',
      sourceUrls: 'SourceUrls',
      startTime: 'StartTime',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackURL: 'string',
      dstUrl: 'string',
      endTime: 'string',
      fileIndex: 'number',
      offset: 'number',
      repeatNumber: 'number',
      retryCount: 'number',
      retryInterval: 'number',
      sourceProtocol: 'string',
      sourceType: 'string',
      sourceUrls: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceUrls)) {
      $dara.Model.validateArray(this.sourceUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLivePullToPushResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current file index.
   * 
   * @example
   * 0
   */
  currentFileIndex?: number;
  /**
   * @remarks
   * The current offset for video playback.
   * 
   * @example
   * 0
   */
  currentOffset?: number;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3271ACD2-F143-1204-AFDB-9A87C131****
   */
  requestId?: string;
  /**
   * @remarks
   * The code that is returned for the request.
   * 
   * > 
   * 
   * *   0 is returned if the request is normal.
   * 
   * *   For information about codes that are returned when exceptions occur, see the following Error codes table.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * The reason why the task is stopped.
   * 
   * *   TriggerByUser: You proactively stopped the task.
   * *   OverEndTime: The specified end time was exceeded.
   * 
   * >  This parameter is returned only if the task is stopped.
   * 
   * @example
   * TriggerByUser
   */
  taskExitReason?: string;
  /**
   * @remarks
   * The time when the task was exited. The value is a Unix timestamp in seconds.
   * 
   * >  This parameter is returned only if the task status is exited.
   * 
   * @example
   * 1724740200
   */
  taskExitTime?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * fd245384-4067-4f91-9d75-9666a6bc9****
   */
  taskId?: string;
  /**
   * @remarks
   * The information about the task.
   */
  taskInfo?: DescribeLivePullToPushResponseBodyTaskInfo;
  /**
   * @remarks
   * The reason why the task was stopped.
   * 
   * *   PullStreamFailed: An exception occurred while pulling the source stream. A retry is in progress.
   * *   PushStreamFailed: An exception occurred while ingesting the stream. A retry is in progress.
   * *   UnknownError: An unknown exception occurred.
   * 
   * >  This parameter is returned only if the task status is stopped.
   * 
   * @example
   * UnknownError
   */
  taskInvalidReason?: string;
  /**
   * @remarks
   * The current status of the task.
   * 
   * *   0: not started.
   * *   1: running. Stream pulling and stream relay are normal.
   * *   2: abnormal.
   * *   3: stopped. It may be because exceptions occur during stream pulling or stream relay or you proactively call the StopLivePullToPush operation.
   * *   \\-1: exited.
   * 
   * @example
   * 1
   */
  taskStatus?: number;
  static names(): { [key: string]: string } {
    return {
      currentFileIndex: 'CurrentFileIndex',
      currentOffset: 'CurrentOffset',
      description: 'Description',
      requestId: 'RequestId',
      retCode: 'RetCode',
      taskExitReason: 'TaskExitReason',
      taskExitTime: 'TaskExitTime',
      taskId: 'TaskId',
      taskInfo: 'TaskInfo',
      taskInvalidReason: 'TaskInvalidReason',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentFileIndex: 'number',
      currentOffset: 'number',
      description: 'string',
      requestId: 'string',
      retCode: 'number',
      taskExitReason: 'string',
      taskExitTime: 'number',
      taskId: 'string',
      taskInfo: DescribeLivePullToPushResponseBodyTaskInfo,
      taskInvalidReason: 'string',
      taskStatus: 'number',
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

