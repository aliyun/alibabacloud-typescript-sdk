// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranscodeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The end time, which must be later than the start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-01-23T12:40:12Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Specify this parameter to return data starting from the specified page. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-01-23T12:35:12Z
   */
  startTime?: string;
  /**
   * @remarks
   * The audio or video ID. You can obtain the ID by using one of the following methods:
   * - For audio or video files uploaded in the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the ID.
   * - Obtain the video ID from the VideoId response parameter when you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential.
   * - After the audio or video file is uploaded, call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video ID, which is the VideoId value in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * d4860fcc6a5*****bce9fed52e893824
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
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

