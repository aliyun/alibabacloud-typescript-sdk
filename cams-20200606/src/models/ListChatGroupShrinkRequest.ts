// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatGroupShrinkRequest extends $dara.Model {
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
   * The channel type. Valid values: **WHATSAPP**.
   * 
   * > Currently, only messages of the WhatsApp channel type are supported.
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * The space ID or instance ID of the ISV sub-customer, which is the channel ID. You can view the channel ID on the [Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement) page.
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
   * - ACTIVE: The group is in use.
   * 
   * - INACTIVE: The group is inactive.
   * 
   * - SUSPENDED: The group is suspended.
   * 
   * - CREATING: The group is being created.
   * 
   * - DELETING: The group is being deleted.
   * 
   * - UPDATING: The group is being updated.
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
   * The pagination information.
   * 
   * This parameter is required.
   */
  pageShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The group subject.
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
      pageShrink: 'Page',
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
      pageShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

