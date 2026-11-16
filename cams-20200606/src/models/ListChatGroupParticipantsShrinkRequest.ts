// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatGroupParticipantsShrinkRequest extends $dara.Model {
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
   * > Only the WhatsApp channel type is currently supported.
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * The space ID or instance ID of the ISV sub-customer. This is the channel ID. You can view it on the [Channels Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-k***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The group ID. You can call the [ListChatGroup](https://api.aliyun.com/document/cams/2020-06-06/ListChatGroup) operation to query the group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EA939****
   */
  groupId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pagination information.
   */
  pageShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      pageShrink: 'Page',
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
      pageShrink: 'string',
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

