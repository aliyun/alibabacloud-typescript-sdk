// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshUploadVideoRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens, and underscores are supported. The value must be 6 to 64 characters in length and is unique at the user level.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The audio or video ID. You can obtain the ID by using one of the following methods:
   * - For videos uploaded by using the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the audio or video ID.
   * - If the audio or video is uploaded by calling the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation, the audio or video ID is the value of the VideoId parameter in the response.
   * - After the audio or video is uploaded, you can call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the audio or video ID, which is the value of the VideoId parameter in the response.
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

