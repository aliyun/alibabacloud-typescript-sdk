// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshUploadVideoRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the audio or video file. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** in the left-side navigation pane to view the ID.
   * *   View the value of the VideoId parameter returned by the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation that you called to upload the audio or video file.
   * *   After an audio or video file is uploaded, obtain the value of VideoId from the response to the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation that you call to query the audio or video ID.
   * 
   * @example
   * c6a23a870c8c4ffcd40cbd381333****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      referenceId: 'ReferenceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      referenceId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

