// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteChatGroupParticipantsRequestList } from "./DeleteChatGroupParticipantsRequestList";


export class DeleteChatGroupParticipantsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8613800**
   */
  businessNumber?: string;
  /**
   * @example
   * WHATSAPP。
   */
  channelType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-**
   */
  custSpaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EA93UU****
   */
  groupId?: string;
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

