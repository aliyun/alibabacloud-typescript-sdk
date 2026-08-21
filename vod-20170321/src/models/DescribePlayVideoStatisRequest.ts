// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayVideoStatisRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * > The end time must be later than the start time, and the maximum time span between the start time and end time is 180 days.
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
   * The start time of the query. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-29T13:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the video to query. Only one video ID can be specified. You can obtain the video ID by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video**.
   * - Obtain the video ID from the response when you call the [CreateUploadVideo](~~CreateUploadVideo~~) operation to obtain the upload URL and credential.
   * - Obtain the video ID from the response when you call the [SearchMedia](~~SearchMedia~~) operation to query the video after it is uploaded.
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

