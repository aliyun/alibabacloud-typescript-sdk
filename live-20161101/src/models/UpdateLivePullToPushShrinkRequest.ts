// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLivePullToPushShrinkRequest extends $dara.Model {
  authKey?: string;
  /**
   * @remarks
   * The callback URL. Default value: empty.
   * > - The URL that receives task-related callbacks.
   * > - Maximum length: 2000 characters.
   * > - If this parameter is not specified, task events are not sent as callbacks.
   * > - The update takes effect only when the next event is triggered.
   * 
   * @example
   * https://callback*****.com
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The end time of the task.
   * > - Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > - EndTime must be later than StartTime.
   * > - EndTime must be later than the current time.
   * > - If the task has ended, the update does not take effect.
   * 
   * @example
   * 2024-08-27T14:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The video index. Default value: 0.
   * > The update must be performed when the task is stopped and takes effect after the task is restarted.
   * 
   * @example
   * 0
   */
  fileIndex?: number;
  notifyItemSwitch?: string;
  /**
   * @remarks
   * The start offset of the video file, in seconds. Valid values: greater than 0.
   * > - Specifies the position to start reading from, relative to the first frame.
   * > - This parameter applies only to video-on-demand or third-party video streams.
   * > - This parameter takes effect only when the first video in the playlist is played.
   * > - The update must be performed when the task is stopped and takes effect after the task is restarted.
   * 
   * @example
   * 2
   */
  offset?: number;
  ownerId?: number;
  /**
   * @remarks
   * The region where the task is started. Valid values:
   * 
   * - ap-southeast-1 (Singapore)
   * - ap-southeast-5 (Indonesia)
   * - cn-beijing (Beijing)
   * - cn-shanghai (Shanghai)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The number of times playback repeats after the playlist finishes. Valid values:
   * 
   * - 0 (default): No repeat playback.
   * - -1: Loops indefinitely.
   * - Other positive integers: The number of times playback repeats after the playlist finishes.
   * 
   * > - This parameter applies only to video-on-demand or third-party video streams.
   * > - The update takes effect immediately.
   * 
   * @example
   * 0
   */
  repeatNumber?: number;
  reqAuth?: string;
  /**
   * @remarks
   * The list of source stream URLs.
   * 
   * > - For the live type, only one complete live streaming URL is supported.
   * > - For the vod and url types, up to 30 URLs can be specified.
   * > - The live type supports RTMP, SRT, and HTTP-FLV protocols.
   * > - For the vod type, specify ApsaraVideo VOD media asset IDs.
   * > - The url type supports MP4 and HTTP-FLV protocols.
   * > - For live source streams, the update takes effect immediately. For video file source streams, the update takes effect after the currently playing video ends, and playback restarts from the beginning of the updated video list.
   * > - The update must be performed when the task is stopped and takes effect after the task is restarted.
   * 
   * @example
   * changedtesturl
   */
  sourceUrlsShrink?: string;
  /**
   * @remarks
   * The start time of the task.
   * > - Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > - If the task has already started running, the update does not take effect.
   * 
   * @example
   * 2024-08-23T15:30:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fd245384-4067-4f91-9d75-9666a6bc****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      callbackUrl: 'CallbackUrl',
      endTime: 'EndTime',
      fileIndex: 'FileIndex',
      notifyItemSwitch: 'NotifyItemSwitch',
      offset: 'Offset',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      repeatNumber: 'RepeatNumber',
      reqAuth: 'ReqAuth',
      sourceUrlsShrink: 'SourceUrls',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      callbackUrl: 'string',
      endTime: 'string',
      fileIndex: 'number',
      notifyItemSwitch: 'string',
      offset: 'number',
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
      repeatNumber: 'number',
      reqAuth: 'string',
      sourceUrlsShrink: 'string',
      startTime: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

