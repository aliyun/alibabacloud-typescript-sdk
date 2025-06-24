// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8613800***
   */
  businessNumber?: string;
  /**
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-x***
   */
  custSpaceId?: string;
  /**
   * @example
   * ACTIVE
   */
  groupStatus?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * test
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      groupStatus: 'GroupStatus',
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
      groupStatus: 'string',
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

