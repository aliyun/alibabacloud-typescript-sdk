// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatGroupParticipantsRequestList extends $dara.Model {
  /**
   * @remarks
   * The participant number of the group member. You can obtain the participant numbers of group members by calling the [ListChatGroupParticipants](https://help.aliyun.com/document_detail/2932628.html) operation.
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

