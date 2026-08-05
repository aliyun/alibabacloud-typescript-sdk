// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivePullToPushShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * HTTP callback URL. Default value: empty.
   * 
   * > - The URL that receives task-related callbacks.
   * > - Maximum length is 2000 characters.
   * > - If this parameter is not specified, no task event callbacks will be sent.
   * 
   * @example
   * https://callback*****.com
   */
  callbackUrl?: string;
  /**
   * @remarks
   * Destination URL address for pushing the stream.
   * 
   * > - The rtmp protocol is supported.
   * > - Maximum length is 2000 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://pushtest.********.aliyunlive.com/pulltest493/pulltest-w434
   */
  dstUrl?: string;
  /**
   * @remarks
   * Task end time.
   * 
   * > - Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * > - EndTime must be later than StartTime.
   * > - EndTime must be later than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-08-27T14:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * File index. Starts playback from the nth file.
   * 
   * @example
   * 0
   */
  fileIndex?: number;
  /**
   * @remarks
   * Start offset. The offset value from the beginning of the video file. Unit: seconds. Valid values: greater than 0.
   * 
   * > - Indicates the position to start reading from, relative to the first frame (applies to the first video).
   * > - This parameter applies only to VOD or third-party video streams.
   * 
   * @example
   * 2
   */
  offset?: number;
  ownerId?: number;
  /**
   * @remarks
   * Specifies the region where the task is launched. Valid values:
   * 
   * - ap-southeast-1 (Singapore)
   * - ap-southeast-5 (Indonesia)
   * - cn-beijing (Beijing)
   * - cn-shanghai (Shanghai)
   * - cn-shenzhen (Shenzhen)
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Number of times to repeat playback after the initial playback is complete. Valid values:
   * 
   * - 0 (default): no repeat playback.
   * - -1: loop indefinitely.
   * - Other positive integers: number of times to repeat playback after the initial playback is complete.
   * 
   * > This parameter applies only to VOD or third-party video streams.
   * 
   * @example
   * 0
   */
  repeatNumber?: number;
  /**
   * @remarks
   * Number of retries. Default value: 3.
   * 
   * @example
   * 3
   */
  retryCount?: number;
  /**
   * @remarks
   * Retry interval, in seconds. Valid values: [60, 300]. Default value: 60 seconds.
   * 
   * @example
   * 60
   */
  retryInterval?: number;
  /**
   * @remarks
   * Source stream protocol name.
   * 
   * Valid values:
   * - rtmp
   * - srt
   * - http-flv
   * - hls
   * > This parameter is **required only when the SourceType parameter is set to live**, and is invalid when the value is vod or url.
   * 
   * @example
   * rtmp
   */
  sourceProtocol?: string;
  /**
   * @remarks
   * Source stream type. Valid values:
   * 
   * - live: live stream.
   * - vod: ApsaraVideo VOD resource.
   * - url: third-party video file resource.
   * 
   * This parameter is required.
   * 
   * @example
   * live
   */
  sourceType?: string;
  /**
   * @remarks
   * List of source stream URL addresses.
   * 
   * > - For the live type, only one complete live playback URL is supported.
   * > - For the vod and url types, a maximum of 30 URLs can be specified.
   * > - The live type supports: rtmp, srt, and http-flv protocols.
   * > - For the vod type, specify ApsaraVideo VOD media asset IDs.
   * > - The url type supports: mp4 and http-flv protocols.
   * 
   * This parameter is required.
   */
  sourceUrlsShrink?: string;
  /**
   * @remarks
   * Task start time.
   * 
   * > - Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-08-26T10:30:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Task name, used to support fuzzy query. Default value: "".
   * 
   * @example
   * test
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      dstUrl: 'DstUrl',
      endTime: 'EndTime',
      fileIndex: 'FileIndex',
      offset: 'Offset',
      ownerId: 'OwnerId',
      region: 'Region',
      regionId: 'RegionId',
      repeatNumber: 'RepeatNumber',
      retryCount: 'RetryCount',
      retryInterval: 'RetryInterval',
      sourceProtocol: 'SourceProtocol',
      sourceType: 'SourceType',
      sourceUrlsShrink: 'SourceUrls',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      dstUrl: 'string',
      endTime: 'string',
      fileIndex: 'number',
      offset: 'number',
      ownerId: 'number',
      region: 'string',
      regionId: 'string',
      repeatNumber: 'number',
      retryCount: 'number',
      retryInterval: 'number',
      sourceProtocol: 'string',
      sourceType: 'string',
      sourceUrlsShrink: 'string',
      startTime: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

