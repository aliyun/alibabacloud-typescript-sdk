// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVideoRequest extends $dara.Model {
  /**
   * @example
   * 123-123,1234-1234
   */
  referenceIds?: string;
  /**
   * @remarks
   * The list of video IDs. Separate multiple IDs with commas (,). A maximum of 20 IDs can be specified. You can obtain a video ID in one of the following ways:
   * 
   * *   If the video is uploaded by using the [ApsaraVideo VOD console](https://vod.console.aliyun.com), log on to the console and choose **Media Files** > **Audio/Video** to view the ID of the video.
   * *   If the video is uploaded by calling the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation, the video ID is the VideoId value in the response.
   * *   You can also call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to obtain the video ID, which is the VideoId value in the response.
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

