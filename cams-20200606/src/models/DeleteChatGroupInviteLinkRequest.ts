// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatGroupInviteLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business number. Call the [ListChatGroup](https://help.aliyun.com/document_detail/2932629.html) operation to obtain the business number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800***
   */
  businessNumber?: string;
  /**
   * @remarks
   * The channel type. Set this parameter to the following value:
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
   * The space ID or instance ID for an ISV\\"s sub-customer. This ID also serves as the channel ID. You can find this ID on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-8***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The group ID. Call the [ListChatGroup](https://help.aliyun.com/document_detail/2932629.html) operation to obtain the group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * E398****
   */
  groupId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessNumber: 'string',
      channelType: 'string',
      custSpaceId: 'string',
      groupId: 'string',
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

