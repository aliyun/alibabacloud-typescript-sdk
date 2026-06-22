// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The business number. To view the business numbers, call the [ListChatGroup](https://help.aliyun.com/document_detail/2932629.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800***
   */
  businessNumber?: string;
  /**
   * @remarks
   * The channel type. Valid value:
   * 
   * - **WHATSAPP**.
   * 
   * > Only the WhatsApp channel is supported.
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * The Space ID of the ISV sub-customer, or the instance ID of the direct customer. View the Space ID on the
   * 
   * <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The group description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The group ID. To view the group IDs, call the [ListChatGroup](https://help.aliyun.com/document_detail/2932629.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * EA303***
   */
  groupId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The group profile picture.
   * 
   * > Image requirements
   * >
   * > - Supported MIME type: image/jpeg.
   * >
   * > - Maximum file size: 5 MB.
   * >
   * > - The image must be square. Minimum dimensions: 192x192 pixels.
   */
  profilePictureFile?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The group title.
   * 
   * @example
   * This is a test title.
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      description: 'Description',
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      profilePictureFile: 'ProfilePictureFile',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessNumber: 'string',
      channelType: 'string',
      custSpaceId: 'string',
      description: 'string',
      groupId: 'string',
      ownerId: 'number',
      profilePictureFile: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

