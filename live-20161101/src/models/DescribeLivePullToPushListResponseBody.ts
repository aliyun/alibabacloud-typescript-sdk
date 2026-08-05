// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLivePullToPushListResponseBodyTaskListTaskInfo extends $dara.Model {
  /**
   * @remarks
   * HTTP callback URL.
   * 
   * @example
   * hahaha.com
   */
  callbackURL?: string;
  /**
   * @remarks
   * Destination push stream URL.
   * 
   * @example
   * rtmp://qd.push.lgg.alivecdn.com/testhsc/streamhsc?live_rtmp_*******
   */
  dstUrl?: string;
  /**
   * @remarks
   * Task end time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * 
   * @example
   * 2024-12-30T14:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * File index, starts playback from the nth file.
   * 
   * @example
   * 0
   */
  fileIndex?: number;
  /**
   * @remarks
   * Start offset, the starting offset value of the video file. Unit: seconds. Value: greater than 0.
   * > - Indicates the position to start reading from, relative to the first frame.
   * > - Only valid for VOD resources or video files.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * Number of times to repeat playback after completion. Valid values:
   * - 0 (default): No repeat playback.
   * - -1: Loop indefinitely.
   * - Other positive integers: Number of times to repeat playback after completion.
   * 
   * > This parameter only applies to VOD or third-party video streams.
   * 
   * @example
   * 0
   */
  repeatNumber?: number;
  /**
   * @remarks
   * Number of retries.
   * 
   * @example
   * 3
   */
  retryCount?: number;
  /**
   * @remarks
   * Retry interval, in seconds.
   * 
   * @example
   * 60
   */
  retryInterval?: number;
  /**
   * @remarks
   * Source stream protocol name.
   * 
   * @example
   * flv
   */
  sourceProtocol?: string;
  /**
   * @remarks
   * Source stream type. Valid values:
   * 
   * - live: Live stream.
   * - vod: Alibaba Cloud Video on Demand resource.
   * - url: Third-party video file resource.
   * 
   * @example
   * vod
   */
  sourceType?: string;
  /**
   * @remarks
   * Source stream URL addresses.
   */
  sourceUrls?: string[];
  /**
   * @remarks
   * Task start time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * 
   * @example
   * 2024-12-04T09:16:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * fb0d4ac7-c7e3-4978-9743-0bf2f6e8****
   */
  taskId?: string;
  /**
   * @remarks
   * Task name.
   * 
   * @example
   * taskname
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

export class DescribeLivePullToPushListResponseBodyTaskList extends $dara.Model {
  /**
   * @remarks
   * Currently effective playlist sequence offset.
   * 
   * @example
   * 0
   */
  currentFileIndex?: number;
  /**
   * @remarks
   * Currently effective video playback offset.
   * 
   * @example
   * 0
   */
  currentOffset?: number;
  /**
   * @remarks
   * Task exit reason:
   * 
   * - TriggerByUser: Actively ended by user.
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
   * Task exit time, Unix timestamp in seconds.
   * > Only returned when the task is in exited state.
   * 
   * @example
   * 1726354625
   */
  taskExitTime?: number;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * fb0d4ac7-c7e3-4978-9743-0bf2f6e8****
   */
  taskId?: string;
  /**
   * @remarks
   * Task information.
   */
  taskInfo?: DescribeLivePullToPushListResponseBodyTaskListTaskInfo;
  /**
   * @remarks
   * Reason for task stopping:
   * 
   * - PullStreamFailed: Source stream pulling exception, retrying.
   * - PushStreamFailed: Destination stream pushing exception, retrying.
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
   * Current task status:
   * - 0: Not started (start time has not been reached).
   * - 1: Running normally (stream pulling and pushing are normal).
   * - 2: Running abnormally.
   * - 3: Stopped (stream pulling or pushing is abnormal, or the task was actively stopped by calling the API).
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
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of query records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * a05e6b15-15af-405b-a4a2-0152245*****
   */
  requestId?: string;
  /**
   * @remarks
   * Task information list.
   */
  taskList?: DescribeLivePullToPushListResponseBodyTaskList[];
  /**
   * @remarks
   * Total number of query results.
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

