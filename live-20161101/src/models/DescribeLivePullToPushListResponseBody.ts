// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePullToPushListResponseBodyTaskListTaskInfo extends $dara.Model {
  authKey?: string;
  /**
   * @remarks
   * The HTTP callback URL.
   * 
   * @example
   * hahaha.com
   */
  callbackURL?: string;
  /**
   * @remarks
   * The destination ingest URL.
   * 
   * @example
   * rtmp://qd.push.lgg.alivecdn.com/testhsc/streamhsc?live_rtmp_*******
   */
  dstUrl?: string;
  /**
   * @remarks
   * The task end time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2024-12-30T14:30:00Z
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
   * The start offset, which is the start offset value of the video file. Unit: seconds. The value must be greater than 0.
   * > - Indicates the position to start reading from, relative to the first frame.
   * > - Valid only for video-on-demand resources or video files.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of times to repeat playback after the playlist finishes. Valid values:
   * - 0 (default): Do not repeat.
   * - -1: Loop indefinitely.
   * - Other positive integers: The number of times to repeat playback after the playlist finishes.
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
   * flv
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
   * The source stream URL addresses.
   */
  sourceUrls?: string[];
  /**
   * @remarks
   * The task start time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2024-12-04T09:16:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * fb0d4ac7-c7e3-4978-9743-0bf2f6e8****
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * taskname
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

export class DescribeLivePullToPushListResponseBodyTaskList extends $dara.Model {
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
   * The reason why the task exited. Valid values:
   * 
   * - TriggerByUser: Actively ended by the user.
   * - OverEndTime: Exceeded the preset end time.
   * 
   * > Returned only when the task is in the exited state.
   * 
   * @example
   * TriggerByUser
   */
  taskExitReason?: string;
  /**
   * @remarks
   * The task exit time, in Unix seconds timestamp.
   * > Returned only when the task is in the exited state.
   * 
   * @example
   * 1726354625
   */
  taskExitTime?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * fb0d4ac7-c7e3-4978-9743-0bf2f6e8****
   */
  taskId?: string;
  /**
   * @remarks
   * The task information.
   */
  taskInfo?: DescribeLivePullToPushListResponseBodyTaskListTaskInfo;
  /**
   * @remarks
   * The reason why the task stopped running. Valid values:
   * 
   * - PullStreamFailed: Source stream pulling exception. Retrying.
   * - PushStreamFailed: Destination stream pushing exception. Retrying.
   * - UnknownError: Unknown exception.
   * 
   * > Returned only when the task is in the stopped state.
   * 
   * @example
   * PullStreamFailed
   */
  taskInvalidReason?: string;
  /**
   * @remarks
   * The current task status. Valid values:
   * - 0: Not started (the start time has not been reached).
   * - 1: Running normally (stream pulling and pushing are normal).
   * - 2: Running abnormally.
   * - 3: Stopped (stream pulling or pushing is abnormal, or the task was actively stopped by calling an operation).
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
      taskExitReason: 'string',
      taskExitTime: 'number',
      taskId: 'string',
      taskInfo: DescribeLivePullToPushListResponseBodyTaskListTaskInfo,
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

export class DescribeLivePullToPushListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * a05e6b15-15af-405b-a4a2-0152245*****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of task information.
   */
  taskList?: DescribeLivePullToPushListResponseBodyTaskList[];
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskList: 'TaskList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskList: { 'type': 'array', 'itemType': DescribeLivePullToPushListResponseBodyTaskList },
      total: 'number',
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

