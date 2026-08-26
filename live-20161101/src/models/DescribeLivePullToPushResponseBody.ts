// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePullToPushResponseBodyTaskInfo extends $dara.Model {
  authKey?: string;
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
   * The destination ingest URL.
   * 
   * @example
   * rtmp://pushtest.********.aliyunlive.com/pulltest493/pulltest-w434
   */
  dstUrl?: string;
  /**
   * @remarks
   * The end time of the task. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2024-08-27T14:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The file index. Playback starts from the nth file.
   * 
   * @example
   * 0
   */
  fileIndex?: number;
  notifyItemSwitch?: string;
  /**
   * @remarks
   * The start offset of the video file. Unit: seconds. The value must be greater than 0.
   * > - Indicates the position from which reading starts, relative to the first frame.
   * > - This parameter is valid only for video-on-demand resources or video files.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of times playback repeats after completion. Valid values:
   * - 0 (default): No repeat playback.
   * - -1: Infinite loop.
   * - Other positive integers: the number of times playback repeats after completion.
   * 
   * > This parameter applies only to video-on-demand or third-party video streams.
   * 
   * @example
   * 0
   */
  repeatNumber?: number;
  reqAuth?: string;
  /**
   * @remarks
   * The number of retries.
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
   * The source stream protocol name.
   * 
   * @example
   * RTMP
   */
  sourceProtocol?: string;
  /**
   * @remarks
   * The source stream type. Valid values:
   * 
   * - live: live stream.
   * - vod: ApsaraVideo VOD resource.
   * - url: third-party video file resource.
   * 
   * @example
   * vod
   */
  sourceType?: string;
  /**
   * @remarks
   * The source stream URL.
   * 
   * @example
   * rtmp://pulltest.****.aliyunlive.com/pulltest493/pulltest-w434
   */
  sourceUrls?: string[];
  /**
   * @remarks
   * The start time of the task. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
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
      authKey: 'AuthKey',
      callbackURL: 'CallbackURL',
      dstUrl: 'DstUrl',
      endTime: 'EndTime',
      fileIndex: 'FileIndex',
      notifyItemSwitch: 'NotifyItemSwitch',
      offset: 'Offset',
      repeatNumber: 'RepeatNumber',
      reqAuth: 'ReqAuth',
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
      authKey: 'string',
      callbackURL: 'string',
      dstUrl: 'string',
      endTime: 'string',
      fileIndex: 'number',
      notifyItemSwitch: 'string',
      offset: 'number',
      repeatNumber: 'number',
      reqAuth: 'string',
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
   * The current effective playlist sequence offset.
   * 
   * @example
   * 0
   */
  currentFileIndex?: number;
  /**
   * @remarks
   * The current effective video playback offset.
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
   * a05e6b15-15af-405b-a4a2-0152245d****
   */
  requestId?: string;
  /**
   * @remarks
   * The return code.
   * > - "0" is returned in normal cases.
   * > - For error cases, refer to the error code list below.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * The reason why the task exited. Valid values:
   * 
   * - TriggerByUser: The task was actively ended by the user.
   * - OverEndTime: The preset end time was exceeded.
   * 
   * > This parameter is returned only when the task is in the exited state.
   * 
   * @example
   * TriggerByUser
   */
  taskExitReason?: string;
  /**
   * @remarks
   * The time when the task exited. The value is a UNIX timestamp in seconds.
   * > This parameter is returned only when the task is in the exited state.
   * 
   * @example
   * 1726354625
   */
  taskExitTime?: number;
  /**
   * @remarks
   * The ID of the node returned when you create task.
   * 
   * @example
   * fb0d4ac7-c7e3-4978-9743-0bf2f6e8****
   */
  taskId?: string;
  /**
   * @remarks
   * The task information.
   */
  taskInfo?: DescribeLivePullToPushResponseBodyTaskInfo;
  /**
   * @remarks
   * The reason why the task stopped running. Valid values:
   * 
   * - PullStreamFailed: Source stream pulling is abnormal. Retrying.
   * - PushStreamFailed: Destination stream pushing is abnormal. Retrying.
   * - UnknownError: Unknown error.
   * 
   * > This parameter is returned only when the task is in the stopped state.
   * 
   * @example
   * PullStreamFailed
   */
  taskInvalidReason?: string;
  /**
   * @remarks
   * The current status of the task. Valid values:
   * - 0: Not started (the start time has not been reached).
   * - 1: Running normally (stream pulling and pushing are both normal).
   * - 2: Running abnormally.
   * - 3: Stopped (stream pulling or pushing is abnormal, or the task was actively stopped by calling an API operation).
   * - -1: Exited.
   * 
   * @example
   * 0
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

