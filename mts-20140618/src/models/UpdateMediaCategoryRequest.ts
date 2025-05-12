// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category. The value cannot be negative.
   * 
   * @example
   * 1
   */
  cateId?: number;
  /**
   * @remarks
   * The ID of the media file whose category you want to update.
   * 
   * > To obtain the ID of a media file, you can call the [AddMedia](https://help.aliyun.com/document_detail/44458.html) operation. Alternatively, perform the following operations in the ApsaraVideo Media Processing (MPS) console: In the left-side navigation pane, choose **Media Management > Media List**. Find the required video and click **Manage** in the Actions column. The ID of the video is displayed on the Basics tab.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e1cd21131a94525be55acf65888****
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
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

