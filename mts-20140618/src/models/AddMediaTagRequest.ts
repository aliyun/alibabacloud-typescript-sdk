// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMediaTagRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media file to which you want to add tags.
   * 
   * > To obtain the ID of a media file, you can call the [AddMedia](https://help.aliyun.com/document_detail/44458.html) operation. Alternatively, perform the following operations in the ApsaraVideo Media Processing (MPS) console: In the left-side navigation pane, choose **Media Management** > **Media List**. Find the file that you want to manage and click **Manage** in the Actions column. The ID of the file is displayed on the Basics tab.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e6149d5a8c944c09b1a8d2dc3e4****
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag that you want to add to the medial file. The value is encoded in UTF-8 and can be up to 32 bytes in length.
   * 
   * @example
   * tag1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

