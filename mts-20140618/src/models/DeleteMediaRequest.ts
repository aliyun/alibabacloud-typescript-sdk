// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMediaRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media files that you want to remove. Separate multiple IDs with commas (,). You can remove up to 10 media files at a time.
   * 
   * > You can obtain the ID of the media file from the response parameters of the [AddMedia](https://help.aliyun.com/document_detail/44458.html) operation. Alternatively, you can log on to the MPS console. In the left-side navigation pane, choose **Media Management** > **Media List**. Find the required video and click **Manage** in the Actions column. The ID of the video is displayed on the Basics tab.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e1cd21131a94525be55acf65888****,3e6149d5a8c944c09b1a8d2dc3e4****
   */
  mediaIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: 'string',
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

