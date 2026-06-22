// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatGroupRequestPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
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

export class ListChatGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The business number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800***
   */
  businessNumber?: string;
  /**
   * @remarks
   * The channel type. Valid value: **WHATSAPP**.
   * 
   * > Only the WhatsApp channel is supported.
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * The instance ID (or SpaceId) of an ISV sub-customer, which also serves as the channel ID. You can find it on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-x***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The Telegram group link.
   * 
   * @example
   * example
   */
  groupLink?: string;
  /**
   * @remarks
   * The group status. Valid values:
   * 
   * - ACTIVE: In use.
   * 
   * - INACTIVE: Not activated.
   * 
   * - SUSPENDED: Suspended.
   * 
   * - CREATING: Being created.
   * 
   * - DELETING: Being deleted.
   * 
   * - UPDATING: Being updated.
   * 
   * @example
   * ACTIVE
   */
  groupStatus?: string;
  /**
   * @remarks
   * The Telegram group type.
   * 
   * @example
   * example
   */
  groupType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The paging information.
   * 
   * This parameter is required.
   * 
   * @example
   * Example value
   */
  page?: ListChatGroupRequestPage;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The group title.
   * 
   * @example
   * test
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      groupLink: 'GroupLink',
      groupStatus: 'GroupStatus',
      groupType: 'GroupType',
      ownerId: 'OwnerId',
      page: 'Page',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessNumber: 'string',
      channelType: 'string',
      custSpaceId: 'string',
      groupLink: 'string',
      groupStatus: 'string',
      groupType: 'string',
      ownerId: 'number',
      page: ListChatGroupRequestPage,
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subject: 'string',
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

