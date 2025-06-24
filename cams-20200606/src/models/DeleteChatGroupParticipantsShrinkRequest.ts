// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatGroupParticipantsShrinkRequest extends $dara.Model {
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

