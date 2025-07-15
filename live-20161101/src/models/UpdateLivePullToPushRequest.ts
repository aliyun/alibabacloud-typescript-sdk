// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLivePullToPushRequest extends $dara.Model {
  /**
   * @remarks
   * The callback URL. By default, this parameter is left empty.
   * 
   * > 
   * 
   * *   The URL is used to receive callbacks related to the task.
   * 
   * *   The URL can be up to 2,000 characters in length.
   * 
   * *   If you do not specify this parameter, no callbacks are returned for events related to the task.
   * 
   * *   The update takes effect for subsequent events that occur.
   * 
   * @example
   * https://callback*****.com
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The end time of the task.
   * 
   * > 
   * 
   * *   Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * *   The time range specified by the StartTime and EndTime parameters cannot exceed seven days.
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The end time must be later than the current time.
   * 
   * *   If the task has ended, the update does not take effect.
   * 
   * @example
   * 2024-08-27T14:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The file index. Default value: 0.
   * 
   * >  You can modify this parameter only if the task is stopped. The update takes effect after you restart the task.
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
   * *   The update takes effect only for the first video in a video list.
   * 
   * *   You can modify this parameter only if the task is stopped. The update takes effect immediately.
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
   * *   ap-southeast-1: Singapore
   * *   ap-southeast-5: Indonesia (Jakarta)
   * *   cn-beijing: China (Beijing)
   * *   cn-shanghai: China (Shanghai)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  regionId?: string;
  /**
   * @remarks
   * The number of playbacks after the first playback is complete. Valid values:
   * 
   * *   0 (default): specifies that the video list is played only once.
   * *   \\-1: specifies that the video list is played in loop mode.
   * *   Positive integer: specifies the number of times the video list repeats after the first playback is complete.
   * 
   * > 
   * 
   * *   This parameter is applicable to only video resources from ApsaraVideo VOD or a third party.
   * 
   * *   The update can take effect immediately.
   * 
   * @example
   * 0
   */
  repeatNumber?: number;
  /**
   * @remarks
   * The source URLs.
   * 
   * > 
   * 
   * *   If SourceType is set to live, you can specify only one streaming URL.
   * 
   * *   If SourceType is set to vod or url, you can specify up to 30 IDs or URLs.
   * 
   * *   If SourceType is set to live, the supported protocols for URLs are Real-Time Messaging Protocol (RTMP), Real-Time Streaming Protocol (RTSP), Secure Reliable Transport Protocol (SRT), and HTTP-FLV.
   * 
   * *   If SourceType is set to vod, specify the IDs of media assets from ApsaraVideo VOD.
   * 
   * *   If SourceType is set to url, the supported protocols for URLs are MP4 and HTTP-FLV.
   * 
   * *   If the source is a live stream, the update takes effect immediately. If the source is a list of video resources from ApsaraVideo VOD or a third party, the update does not take effect until the playback of the current video ends. After the update takes effect, the video list starts to play from the beginning.
   * 
   * *   You can modify this parameter only if the task is stopped. The update takes effect immediately.
   * 
   * @example
   * changedtesturl
   */
  sourceUrls?: string[];
  /**
   * @remarks
   * The start time of the task.
   * 
   * > 
   * 
   * *   Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * *   The time range specified by the StartTime and EndTime parameters cannot exceed seven days.
   * 
   * *   If the task has already started, the update does not take effect.
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

