// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatappMessageRequestPage extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 49
   */
  index?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 78
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

export class ListChatappMessageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8613800****
   */
  businessNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @example
   * success
   */
  clientAcceptStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  custSpaceId?: string;
  /**
   * @example
   * 1727057232686
   */
  endTime?: number;
  /**
   * @example
   * UP
   */
  eventAction?: string;
  /**
   * @example
   * 9292****
   */
  groupMessageId?: string;
  /**
   * @example
   * success
   */
  messageStatus?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  page?: ListChatappMessageRequestPage;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 1727057232686
   */
  startTime?: number;
  /**
   * @example
   * 9938***
   */
  templateCode?: string;
  /**
   * @example
   * 86138***
   */
  userNumber?: string;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      channelType: 'ChannelType',
      clientAcceptStatus: 'ClientAcceptStatus',
      custSpaceId: 'CustSpaceId',
      endTime: 'EndTime',
      eventAction: 'EventAction',
      groupMessageId: 'GroupMessageId',
      messageStatus: 'MessageStatus',
      ownerId: 'OwnerId',
      page: 'Page',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      templateCode: 'TemplateCode',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessNumber: 'string',
      channelType: 'string',
      clientAcceptStatus: 'string',
      custSpaceId: 'string',
      endTime: 'number',
      eventAction: 'string',
      groupMessageId: 'string',
      messageStatus: 'string',
      ownerId: 'number',
      page: ListChatappMessageRequestPage,
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'number',
      templateCode: 'string',
      userNumber: 'string',
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

