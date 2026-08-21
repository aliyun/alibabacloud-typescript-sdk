// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens, and underscores are supported. The length is 6 to 64 characters. The ID is unique at the user level.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The audio or video ID. Only one audio or video ID is supported. You can obtain the ID by using one of the following methods:
   * - For videos uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the audio or video ID.
   * - Obtain the audio or video ID from the value of the VideoId response parameter when you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential.
   * - After the audio or video file is uploaded, call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video ID, which is the value of the VideoId response parameter.
   * 
   * @example
   * 9b73864d75f1d231e9001cd5f8****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      referenceId: 'ReferenceId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

