// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatGroupInviteLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business number. You can call the [ListChatGroup](https://api.aliyun.com/document/cams/2020-06-06/ListChatGroup) operation to query the business number.
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
   * > Currently, only the WhatsApp channel type is supported.
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
   * cams-8***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The group ID. You can call the [ListChatGroup](https://api.aliyun.com/document/cams/2020-06-06/ListChatGroup) operation to query the group ID.
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

