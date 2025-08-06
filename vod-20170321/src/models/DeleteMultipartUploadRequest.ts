// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMultipartUploadRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media file (VideoId). You can use one of the following methods to obtain the ID:
   * 
   * *   After you upload a video in the [ApsaraVideo VOD console](https://vod.console.aliyun.com), you can log on to the ApsaraVideo VOD console and choose **Media Files** > **Audio/Video** to view the ID of the video.
   * *   Obtain the value of VideoId from the response to the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation that you called to obtain the upload URL and credential.
   * *   Obtain the value of VideoId from the response to the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation that you called to query media information after the audio or video file is uploaded.
   * 
   * This parameter is required.
   * 
   * @example
   * 61ccbdb06fa3012be4d8083f6****
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the media file. Set the value to **video**. video indicates audio and video files.
   * 
   * This parameter is required.
   * 
   * @example
   * video
   */
  mediaType?: string;
  ownerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      ownerAccount: 'OwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaType: 'string',
      ownerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

