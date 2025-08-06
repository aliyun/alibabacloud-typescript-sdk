// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitPreprocessJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The preprocessing type. Set the value to **LivePreprocess**. LivePreprocess specifies that the video is preprocessed in the production studio.
   * 
   * This parameter is required.
   * 
   * @example
   * LivePreprocess
   */
  preprocessType?: string;
  /**
   * @remarks
   * The ID of the video. You can use one of the following methods to obtain the ID:
   * 
   * *   After you upload a video in the ApsaraVideo VOD console, you can log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the ID of the video.
   * *   Obtain the VideoId from the response to the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation that you call to upload videos.
   * *   Obtain the VideoId from the response to the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation that you call to query videos.
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

