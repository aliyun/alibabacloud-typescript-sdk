// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The audio or video IDs. You can specify a maximum of 10 IDs, separated by commas (,). You can obtain the audio or video ID by using the following methods:
   * - For audio or video files uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the audio or video ID.
   * - Obtain the video ID from the value of the VideoId parameter returned by the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation when you request an upload URL and credential.
   * - After the audio or video file is uploaded, call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video ID, which is the value of the VideoId parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * "d4860fcc6ae9fed52e8938244****,e1db68cc586644b83e562bcd94****,hhhhhhh"
   */
  videoIds?: string;
  static names(): { [key: string]: string } {
    return {
      videoIds: 'VideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

