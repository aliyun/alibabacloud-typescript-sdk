// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The business phone number. You can call the [ListChatGroup](https://api.aliyun.com/document/cams/2020-06-06/ListChatGroup) operation to query the business phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800***
   */
  businessNumber?: string;
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * - **WHATSAPP**
   * 
   * > Currently, only the WhatsApp channel is supported.
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * The space ID or instance ID of the ISV sub-customer, which is the channel ID. You can view the channel ID on the [Channels Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
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
   * test
   */
  description?: string;
  /**
   * @remarks
   * The group ID. You can call the [ListChatGroup](https://api.aliyun.com/document/cams/2020-06-06/ListChatGroup) operation to query the group ID.
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
   * > Image limits:
   * > - Supported MIME type: image/jpeg.
   * > - Maximum image size: 5 MB.
   * > - The image must be square, with a minimum width and height of 192 × 192 pixels.
   */
  profilePictureFile?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The group subject.
   * 
   * @example
   * test title
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

