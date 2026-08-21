// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStreamRequest extends $dara.Model {
  /**
   * @remarks
   * The list of job IDs for media stream transcoding, which consists of one or more job IDs.
   * - Separate multiple IDs with commas (,). A maximum of 20 job IDs under the same video are supported.
   * - You can obtain the JobId from the PlayInfo struct returned by the [GetPlayInfo](https://help.aliyun.com/document_detail/56124.html) operation. Each media stream has a different JobId.
   * 
   * This parameter is required.
   * 
   * @example
   * 35eb4dbda18c49cc0025df374b46****
   */
  jobIds?: string;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens (-), and underscores (_) are supported. The value must be 6 to 64 characters in length. The value is unique per user.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The video ID. You can obtain the video ID by using one of the following methods:
   * - For videos uploaded by using the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - When you upload a video by calling the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation, the video ID is the value of the VideoId parameter in the response.
   * - After a video is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID, which is the value of the VideoId parameter in the response.
   * 
   * @example
   * 95948ddba24446b6aed5db985e78****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      jobIds: 'JobIds',
      referenceId: 'ReferenceId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobIds: 'string',
      referenceId: 'string',
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

