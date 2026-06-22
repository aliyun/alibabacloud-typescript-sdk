// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatGroupParticipantsRequestPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatGroupParticipantsRequest extends $dara.Model {
  /**
   * @remarks
   * The business number. You can call the [ListChatGroup](https://help.aliyun.com/document_detail/2932629.html) operation to obtain the business number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800***
   */
  businessNumber?: string;
  /**
   * @remarks
   * The channel type. Valid value:
   * 
   * - **WHATSAPP**
   * 
   * > This operation supports only the WhatsApp channel.
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * This is the instance ID for direct customers or the SpaceId for ISV sub-customers. You can find the ID on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-k***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The group ID. You can call the [ListChatGroup](https://help.aliyun.com/document_detail/2932629.html) operation to obtain the group ID.
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
   * The paging information.
   */
  page?: ListChatGroupParticipantsRequestPage;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      page: 'Page',
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
      page: ListChatGroupParticipantsRequestPage,
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

