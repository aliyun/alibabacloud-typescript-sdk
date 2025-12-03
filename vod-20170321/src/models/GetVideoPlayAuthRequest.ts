// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoPlayAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The API version. Set the value to **1.0.0**.
   * 
   * @example
   * 1.0.0
   */
  apiVersion?: string;
  /**
   * @remarks
   * The validity period of the playback credential. Unit: **seconds**. You cannot obtain the playback URL of a video by using a credential that has expired. A new credential is required.
   * 
   * *   Default value: **100**.
   * *   Valid values: `[100,3000]`.
   * 
   * @example
   * 100
   */
  authInfoTimeout?: number;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The ID of the media file. You can specify only one ID. You can use one of the following methods to obtain the ID of the file:
   * 
   * *   Log on to the [ApsaraVideo VOD](https://vod.console.aliyun.com) console. In the left-side navigation pane, choose **Media Files** > **Audio/Video**. On the Video and Audio page, view the ID of the media file. This method is applicable to files that are uploaded by using the ApsaraVideo VOD console.
   * *   Obtain the value of the VideoId parameter from the response to the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation.
   * *   Obtain the value of the VideoId parameter from the response to the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation. This method is applicable to files that have been uploaded.
   * 
   * @example
   * dfde02284a5c46622a097adaf44a****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      authInfoTimeout: 'AuthInfoTimeout',
      referenceId: 'ReferenceId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      authInfoTimeout: 'number',
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

