// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatGroupParticipantsRequestList extends $dara.Model {
  /**
   * @remarks
   * The group member. You can call the [ListChatGroupParticipants](https://api.aliyun.com/document/cams/2020-06-06/ListChatGroupParticipants) operation to obtain the group members.
   * 
   * @example
   * 86138***
   */
  participantNumber?: string;
  static names(): { [key: string]: string } {
    return {
      participantNumber: 'ParticipantNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      participantNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChatGroupParticipantsRequest extends $dara.Model {
  /**
   * @remarks
   * The business number. You can call the [ListChatGroup](https://api.aliyun.com/document/cams/2020-06-06/ListChatGroup) operation to view the business number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800**
   */
  businessNumber?: string;
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * - **WHATSAPP**
   * 
   * > Currently, only WhatsApp channel messages are supported.
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
   * cams-**
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The group ID. You can call the [ListChatGroup](https://api.aliyun.com/document/cams/2020-06-06/ListChatGroup) operation to obtain the group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * EA93UU****
   */
  groupId?: string;
  /**
   * @remarks
   * The list of group members.
   */
  list?: DeleteChatGroupParticipantsRequestList[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      groupId: 'GroupId',
      list: 'List',
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
      list: { 'type': 'array', 'itemType': DeleteChatGroupParticipantsRequestList },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

