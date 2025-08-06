// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayVideoStatisRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time. The interval between the start time and the end time cannot exceed 180 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-30T13:00:00Z
   */
  endTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-29T13:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the video. You can specify only one ID. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Media Files** > **Audio/Video**. On the page that appears, view the video ID.
   * *   Obtain the video ID from the response to the [CreateUploadVideo](~~CreateUploadVideo~~) operation that you call to obtain the upload URL and credential.
   * *   Obtain the video ID from the response to the [SearchMedia](~~SearchMedia~~) operation that you call to query the audio or video file.
   * 
   * This parameter is required.
   * 
   * @example
   * 2a8d4cb9ecbb487681473****aba8fda
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ownerId: 'number',
      startTime: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

