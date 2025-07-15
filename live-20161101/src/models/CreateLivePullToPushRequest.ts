// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivePullToPushRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP callback URL. By default, this parameter is left empty.
   * 
   * > 
   * 
   * *   The URL is used to receive callbacks related to the task.
   * 
   * *   The URL can be up to 2,000 characters in length.
   * 
   * *   If you do not specify this parameter, no callbacks are returned for events related to the task.
   * 
   * @example
   * https://callback*****.com
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The destination URL to which the stream is relayed.
   * 
   * > 
   * 
   * *   The supported protocol for the URL is RTMP.
   * 
   * *   The URL can be up to 2,000 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp://pushtest.********.aliyunlive.com/pulltest493/pulltest-w434
   */
  dstUrl?: string;
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
   * This parameter is required.
   * 
   * @example
   * 2024-08-27T14:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The file index, which specifies the sequence of the file where the playback starts.
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
   * *   This parameter indicates an offset from the first frame of the first video resource in the list.
   * 
   * *   This parameter is applicable to only video resources from ApsaraVideo VOD or a third party.
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
   * >  This parameter is applicable to only video resources from ApsaraVideo VOD or a third party.
   * 
   * @example
   * 0
   */
  repeatNumber?: number;
  /**
   * @remarks
   * The number of retries allowed. Default value: 3.
   * 
   * @example
   * 3
   */
  retryCount?: number;
  /**
   * @remarks
   * The retry interval. Unit: seconds. Valid values: [60,300]. Default value: 60.
   * 
   * @example
   * 60
   */
  retryInterval?: number;
  /**
   * @remarks
   * The protocol of the source stream.
   * 
   * Valid values:
   * 
   * *   rtmp
   * *   rtsp
   * *   srt
   * *   http-flv
   * *   flv
   * 
   * >  This parameter is required if you set the **SourceType** parameter to live, but does not take effect if you set the SourceType parameter to vod or url.
   * 
   * @example
   * rtmp
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
   * This parameter is required.
   * 
   * @example
   * live
   */
  sourceType?: string;
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
   * This parameter is required.
   * 
   * @example
   * testurls
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
   * This parameter is required.
   * 
   * @example
   * 2024-08-26T10:30:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the task. Default value: "". Fuzzy search for task names is supported.
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
      sourceUrls: 'SourceUrls',
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
      sourceUrls: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
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

