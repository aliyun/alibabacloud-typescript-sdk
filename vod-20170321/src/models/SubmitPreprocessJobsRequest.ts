// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitPreprocessJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The preprocessing type. Set the value to **LivePreprocess** (video preprocessing for the China Production Studio).
   * 
   * This parameter is required.
   * 
   * @example
   * LivePreprocess
   */
  preprocessType?: string;
  /**
   * @remarks
   * The video ID. You can obtain the video ID by using one of the following methods:
   * - For videos uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - When you upload a video by calling the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation, the video ID is the value of the VideoId parameter in the response.
   * - After the video is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID, which is the value of the VideoId parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * d3e680e618708efbf2cae7cc9312****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      preprocessType: 'PreprocessType',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preprocessType: 'string',
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

