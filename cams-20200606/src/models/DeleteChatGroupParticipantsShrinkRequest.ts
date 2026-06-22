// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatGroupParticipantsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business number. You can obtain the business number by calling the [ListChatGroup](https://help.aliyun.com/document_detail/2932629.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800**
   */
  businessNumber?: string;
  /**
   * @remarks
   * The channel type. Valid value:
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
   * The space ID of the ISV sub-customer or the instance ID. This ID is also the channel ID. You can find the channel ID on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-**
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The group ID. You can obtain the group ID by calling the [ListChatGroup](https://help.aliyun.com/document_detail/2932629.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * EA93UU****
   */
  groupId?: string;
  /**
   * @remarks
   * A list of group members to remove.
   */
  listShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      groupId: 'GroupId',
      listShrink: 'List',
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
      listShrink: 'string',
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

