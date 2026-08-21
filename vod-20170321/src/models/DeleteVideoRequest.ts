// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVideoRequest extends $dara.Model {
  /**
   * @remarks
   * The list of custom IDs. Separate multiple IDs with commas (,). A maximum of 20 IDs are supported.
   * 
   * @example
   * 123-123,1234-1234
   */
  referenceIds?: string;
  /**
   * @remarks
   * The list of video IDs. Separate multiple IDs with commas (,). A maximum of 20 IDs are supported. You can obtain video IDs by using the following methods:
   * - For videos uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - When you upload a video by calling the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation, the video ID is the value of the VideoId parameter in the response.
   * - After a video is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID, which is the value of the VideoId parameter in the response.
   * 
   * @example
   * e44ebf1147hdsa2d2adbea8b****,e44ebf11oj984adbea8****,73ab850b4f6f4b6e91d24d81d54****
   */
  videoIds?: string;
  static names(): { [key: string]: string } {
    return {
      referenceIds: 'ReferenceIds',
      videoIds: 'VideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceIds: 'string',
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

