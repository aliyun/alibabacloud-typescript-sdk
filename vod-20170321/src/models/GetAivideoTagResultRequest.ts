// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAIVideoTagResultRequest extends $dara.Model {
  /**
   * @remarks
   * The media asset ID, which is the video ID. You can obtain the video ID by using the following methods:
   * - For videos uploaded through the console, logon to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the video ID.
   * - When you call the [CreateUploadVideo](https://help.aliyun.com/document_detail/55407.html) operation to obtain the upload URL and credential, the video ID is the value of the VideoId parameter in the response.
   * - After the video is uploaded, call the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation to query the video ID. The video ID is the value of the VideoId parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 595d020bad37421f37433451720****
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

