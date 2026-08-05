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
   * The push stream destination address.
   * 
   * @example
   * rtmp://pushtest.********.aliyunlive.com/pulltest493/pulltest-w434
   */
  dstUrl?: string;
  /**
   * @remarks
   * The task end time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * 
   * @example
   * 2024-08-27T14:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The file index, starting playback from the nth file.
   * 
   * @example
   * 0
   */
  fileIndex?: number;
  /**
   * @remarks
   * The start offset, which is the starting offset value for the video file. Unit: seconds. Value: greater than 0.
   * > - Indicates starting to read from a position offset relative to the first frame.
   * > - Only valid for VOD resources or video files.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of times to repeat playback after completion. Valid values:
   * - 0 (default): No repeat playback.
   * - -1: Loop indefinitely.
   * - Other positive integers: The number of times to repeat playback after completion.
   * 
   * > This parameter only applies to VOD or third-party video streams.
   * 
   * @example
   * 0
   */
  repeatNumber?: number;
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
   * The retry interval, in seconds.
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
   * - live: Live stream.
   * - vod: Alibaba Cloud VOD resource.
   * - url: Third-party video file resource.
   * 
   * @example
   * vod
   */
  sourceType?: string;
  /**
   * @remarks
   * The source stream URL addresses.
   * 
   * @example
   * rtmp://pulltest.****.aliyunlive.com/pulltest493/pulltest-w434
   */
  sourceUrls?: string[];
  /**
   * @remarks
   * The task start time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
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
   * The currently effective playlist sequence offset.
   * 
   * @example
   * 0
   */
  currentFileIndex?: number;
  /**
   * @remarks
   * The currently effective video playback offset.
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
   * > - "0" is returned under normal circumstances.
   * > - For abnormal cases, refer to the error code list below.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * The reason for task exit:
   * 
   * - TriggerByUser: Actively ended by the user.
   * - OverEndTime: Exceeded the preset end time.
   * 
   * > Only returned when the task is in exited state.
   * 
   * @example
   * TriggerByUser
   */
  taskExitReason?: string;
  /**
   * @remarks
   * The task exit time, in Unix seconds timestamp.
   * > Only returned when the task is in exited state.
   * 
   * @example
   * 1726354625
   */
  taskExitTime?: number;
  /**
   * @remarks
   * The newly created task ID.
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
   * The reason why the task stopped running:
   * 
   * - PullStreamFailed: Source stream pull exception, retrying.
   * - PushStreamFailed: Destination stream push exception, retrying.
   * - UnknownError: Unknown exception.
   * 
   * > Only returned when the task is in stopped state.
   * 
   * @example
   * PullStreamFailed
   */
  taskInvalidReason?: string;
  /**
   * @remarks
   * The current task status:
   * - 0: Not started (the start time has not been reached).
   * - 1: Running normally (pull streaming and push streaming are normal).
   * - 2: Running abnormally.
   * - 3: Stopped (pull streaming or push streaming is abnormal, or the task was actively stopped by calling the API).
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

