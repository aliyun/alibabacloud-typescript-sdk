// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLivePullToPushRequest extends $dara.Model {
  /**
   * @remarks
   * The callback URL. Default value: empty.
   * > - The URL that receives task-related callbacks.
   * > - Maximum length: 2000 characters.
   * > - If this parameter is not specified, task events are not sent as callbacks.
   * > - The update takes effect when the next event is triggered.
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
   * > - If the task has already ended, this update does not take effect.
   * 
   * @example
   * 2024-08-27T14:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The video index. Default value: 0.
   * > Update this parameter while the task is stopped. The update takes effect after the task is restarted.
   * 
   * @example
   * 0
   */
  fileIndex?: number;
  /**
   * @remarks
   * The start offset of the video file, in seconds. The value must be greater than 0.
   * > - Specifies the position relative to the first frame from which to start reading.
   * > - This parameter applies only to video-on-demand or third-party video streams.
   * > - This parameter takes effect only when the first video in the playlist is played.
   * > - Update this parameter while the task is stopped. The update takes effect after the task is restarted.
   * 
   * @example
   * 2
   */
  offset?: number;
  ownerId?: number;
  /**
   * @remarks
   * The region where the task is launched. Valid values:
   * 
   * - ap-southeast-1 (Singapore)
   * - ap-southeast-5 (Indonesia)
   * - cn-beijing (Beijing)
   * - cn-shanghai (Shanghai).
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
   * - 0 (default): no repeat.
   * - -1: loop indefinitely.
   * - Other positive integers: the number of times playback repeats after the playlist finishes.
   * 
   * > - This parameter applies only to video-on-demand or third-party video streams.
   * > - The update takes effect immediately.
   * 
   * @example
   * 0
   */
  repeatNumber?: number;
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
   * > - Update this parameter while the task is stopped. The update takes effect after the task is restarted.
   * 
   * @example
   * changedtesturl
   */
  sourceUrls?: string[];
  /**
   * @remarks
   * The start time of the task.
   * > - Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * > - If the task has already started running, this update does not take effect.
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
      callbackUrl: 'CallbackUrl',
      endTime: 'EndTime',
      fileIndex: 'FileIndex',
      offset: 'Offset',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      repeatNumber: 'RepeatNumber',
      sourceUrls: 'SourceUrls',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      endTime: 'string',
      fileIndex: 'number',
      offset: 'number',
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
      repeatNumber: 'number',
      sourceUrls: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      taskId: 'string',
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

