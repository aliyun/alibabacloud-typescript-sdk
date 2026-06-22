// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddChatGroupInviteLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business phone number. To obtain this number, call the [ListChatGroup](https://help.aliyun.com/document_detail/2932629.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800***
   */
  businessNumber?: string;
  /**
   * @remarks
   * The type. Valid value:
   * 
   * - **WHATSAPP**.
   * 
   * > Currently, only the WhatsApp channel type is supported.
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * The SpaceId or instance ID of the ISV sub-customer. This is the channel ID. View the channel ID on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-x***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The group ID. To obtain this ID, call the [ListChatGroup](https://help.aliyun.com/document_detail/2932629.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * E93kdk****
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

