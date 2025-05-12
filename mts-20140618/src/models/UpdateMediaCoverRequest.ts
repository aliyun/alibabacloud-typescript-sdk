// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaCoverRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the thumbnail that you want to specify for the media file. The URL complies with RFC 2396 and is encoded in UTF-8. The URL can be up to 3,200 bytes in length.
   * 
   * >  To obtain the thumbnail URL, you can find the image in the Object Storage Service (OSS) bucket and click the image to view details. In the View Details panel, copy the part before the question mark (?) from the URL field. You can enter only an HTTP URL.
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com//example-****.mp4
   */
  coverURL?: string;
  /**
   * @remarks
   * The ID of the media file whose thumbnail you want to update. To obtain the ID of a media file, you can call the [AddMedia](https://help.aliyun.com/document_detail/44458.html) operation. Alternatively, perform the following operations in the ApsaraVideo Media Processing (MPS) console: In the left-side navigation pane, choose **Media Management** > **Media List**. Find the required video and click **Manage**. The ID of the video is displayed on the Basics tab.
   * 
   * This parameter is required.
   * 
   * @example
   * 6cc3aa66d1cb4bb2adf14e726c0a****
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

