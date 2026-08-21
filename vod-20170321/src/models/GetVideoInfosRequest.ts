// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The list of custom IDs. Separate multiple IDs with commas (,). You can specify a maximum of 20 IDs.
   * 
   * @example
   * 123-123,1234-1234
   */
  referenceIds?: string;
  /**
   * @remarks
   * The list of audio or video IDs. Separate multiple IDs with commas (,). You can specify a maximum of 20 IDs. You can obtain the audio or video ID by using the following methods:
   * - If the video is uploaded by using the ApsaraVideo VOD console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the audio or video ID.
   * - Obtain the audio or video ID from the value of the VideoId response parameter when you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential.
   * - After the audio or video file is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video ID, which is the value of the VideoId response parameter.
   * 
   * @example
   * 7753d144efd8e649c6c45fe0579****,7753d144efd74d6c45fe0570****
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

