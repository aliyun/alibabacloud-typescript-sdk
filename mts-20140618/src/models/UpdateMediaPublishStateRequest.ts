// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaPublishStateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media file whose publishing status you want to update. You can obtain the ID of a media file from the response of the [AddMedia](https://help.aliyun.com/document_detail/44458.html) operation. Alternatively, perform the following operations in the ApsaraVideo Media Processing (MPS) console: In the left-side navigation pane, choose **Media Management** > **Media List**. Find the required video and click **Manage**. The ID of the video is displayed on the Basics tab.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e6149d5a8c944c09b1a8d2dc3e4****
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The publishing status. Default value: **Initialed**. Valid values:
   * 
   * *   **true**: published.
   * *   **false**: unpublished.
   * 
   * @example
   * true
   */
  publish?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      publish: 'Publish',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      publish: 'boolean',
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

