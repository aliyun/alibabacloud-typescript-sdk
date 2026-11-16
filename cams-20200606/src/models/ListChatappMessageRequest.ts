// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatappMessageRequestPage extends $dara.Model {
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
   * 10
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
   * The business number.
   * 
   * - For a WhatsApp channel, you can view the business number on the [**Channel Management**](https://chatapp.console.aliyun.com/CustomerList) > **Management** > **WABA Management** > **Number Management** page.
   * 
   * <props="intl">- For a Viber channel, you can view the Service ID on the [**Channel Management**](https://chatapp.console.aliyun.com/CustomerList) > **Management** > **Service Account Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800****
   */
  businessNumber?: string;
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * - **whatsapp**
   * 
   * - **viber**
   * 
   * This parameter is required.
   * 
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * The user reception status.
   * 
   * @example
   * success
   */
  clientAcceptStatus?: string;
  /**
   * @remarks
   * The space ID of the ISV sub-customer or the instance ID of the direct customer. You can view the space ID on the [Channel Management](https://chatapp.console.aliyun.com/CustomerList) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-************
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The end time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1727057232686
   */
  endTime?: number;
  /**
   * @remarks
   * The end time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-01-30 00:00:00
   */
  endTimeStr?: string;
  /**
   * @remarks
   * The message type. Valid values:
   * - DOWN: downstream message.
   * - UP: upstream message.
   * 
   * @example
   * UP
   */
  eventAction?: string;
  /**
   * @remarks
   * The batch message ID. You can view the batch message ID on the [**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Management** > **Message List** > **Batch Sending List** page.
   * 
   * @example
   * 9292****
   */
  groupMessageId?: string;
  /**
   * @remarks
   * The message status.
   * 
   * @example
   * success
   */
  messageStatus?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pagination parameter object.
   * 
   * This parameter is required.
   */
  page?: ListChatappMessageRequestPage;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1727057232686
   */
  startTime?: number;
  /**
   * @remarks
   * The start time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  startTimeStr?: string;
  /**
   * @remarks
   * The template code. You can view the template code on the [**Channel Management**](https://chatapp.console.aliyun.com/CustomerList) > **Management** > **Template Design** page.
   * 
   * @example
   * 9938***
   */
  templateCode?: string;
  /**
   * @remarks
   * The user phone number. This refers to the user phone number that you imported when sending messages on the [**Channel Management**](https://chatapp.console.aliyun.com/CustomerList) > **Management** > **Message Sending** page.
   * 
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
      endTimeStr: 'EndTimeStr',
      eventAction: 'EventAction',
      groupMessageId: 'GroupMessageId',
      messageStatus: 'MessageStatus',
      ownerId: 'OwnerId',
      page: 'Page',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      startTimeStr: 'StartTimeStr',
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
      endTimeStr: 'string',
      eventAction: 'string',
      groupMessageId: 'string',
      messageStatus: 'string',
      ownerId: 'number',
      page: ListChatappMessageRequestPage,
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'number',
      startTimeStr: 'string',
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

