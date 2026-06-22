// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatappMassMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * - **whatsapp**
   * 
   * - **messenger**
   * 
   * - **instagram**
   * 
   * <props="intl">
   * 
   * - **viber**
   * 
   * This parameter is required.
   * 
   * @example
   * whatsapp
   */
  channelType?: string;
  /**
   * @remarks
   * The Space ID of the ISV sub-customer, or the instance ID for a direct customer. View it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-8c8*********
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business Account (WABA) ID of the Independent Software Vendor (ISV) customer. This is a deprecated parameter. Use CustSpaceId instead, which is the direct customer\\"s instance ID. View the ID on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-8c8*********
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The custom fallback content. This parameter is for the international site (alibabacloud.com). You can ignore it for the China site (aliyun.com).
   * 
   * @example
   * Fallback SMS
   */
  fallBackContent?: string;
  /**
   * @remarks
   * The time to trigger a fallback. This parameter is for the international site (alibabacloud.com). You can ignore it for the China site (aliyun.com).<props="intl">If a delivery receipt is not returned within the specified time, a fallback is triggered. If you leave this parameter empty, the fallback is not determined by time. A fallback is triggered only when the message fails to be sent or a failed status report is received. Unit: seconds. Minimum value: 60. Maximum value: 43200.
   * 
   * @example
   * 120
   */
  fallBackDuration?: number;
  /**
   * @remarks
   * The fallback policy ID. This parameter is for the international site (alibabacloud.com). You can ignore it for the China site (aliyun.com).<props="intl">View the policy ID on the [**Fallback Policy**](https://chatapp.console.alibabacloud.com/FallbackStrategy) page.
   * 
   * @example
   * S0****
   */
  fallBackId?: string;
  /**
   * @remarks
   * The fallback rule. This parameter is for the international site (alibabacloud.com). You can ignore it for the China site (aliyun.com). <props="intl">Valid values:
   * 
   * <props="intl">
   * 
   * - **undelivered**: A fallback is triggered if the message cannot be delivered to the recipient. This rule requires that the template and parameters pass verification before sending. The rule does not apply if the message is blocked from sending, for example, due to a blacklisted template or phone number. This is the default rule if this parameter is empty.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **sentFailed**: A fallback is triggered if the template, template variables, or other parameters fail verification. Only the channelType, type, messageType, to, and the existence of the from parameter are strictly verified.
   * 
   * @example
   * undelivered
   */
  fallBackRule?: string;
  /**
   * @remarks
   * The sender\\"s number.
   * 
   * - If ChannelType is **whatsapp**, this is the phone number registered and bound with WhatsApp. View the number on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **WABA Management** > **Phone Number Management** page.
   * 
   * - If ChannelType is **messenger**, this is the Page ID. View the ID on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Facebook Homepage** page.
   * 
   * - If ChannelType is **instagram**, this is the Instagram professional account ID. View the ID on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Professional Account** page.
   * 
   * <props="intl">
   * 
   * - If ChannelType is **viber**, this is the Viber service ID. View the ID on the [**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Service Number Management&#x20;**&#x70;age.
   * 
   * This parameter is required.
   * 
   * @example
   * 861387777****
   */
  from?: string;
  /**
   * @remarks
   * ISV verification code, used to verify if the user is authorized by an ISV. This parameter is deprecated.
   * 
   * @example
   * skdi3kksloslikd****
   * 
   * @deprecated
   */
  isvCode?: string;
  /**
   * @remarks
   * The Viber message type. This parameter is for the international site (alibabacloud.com). You can ignore it for the China site (aliyun.com). <props="intl">Valid values:
   * 
   * <props="intl">
   * 
   * - **promotion**: marketing messages.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **transaction**: notification messages.
   * 
   * @example
   * promotion
   */
  label?: string;
  /**
   * @remarks
   * The language. For language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  language?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A list of recipients.
   */
  senderListShrink?: string;
  /**
   * @remarks
   * A custom tag for a Viber message.
   * 
   * @example
   * Tag
   */
  tag?: string;
  /**
   * @remarks
   * The custom task ID.
   * 
   * @example
   * 10000****
   */
  taskId?: string;
  /**
   * @remarks
   * The template code. View the template code on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Template Design** page.
   * 
   * @example
   * 1119***************
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name. View the template name on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Template Design** page.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The timeout period for sending a Viber message. This parameter is for the international site (alibabacloud.com). You can ignore it for the China site (aliyun.com).<props="intl">Unit: seconds. Valid values: 30 to 1209600.
   * 
   * @example
   * 46
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      fallBackContent: 'FallBackContent',
      fallBackDuration: 'FallBackDuration',
      fallBackId: 'FallBackId',
      fallBackRule: 'FallBackRule',
      from: 'From',
      isvCode: 'IsvCode',
      label: 'Label',
      language: 'Language',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      senderListShrink: 'SenderList',
      tag: 'Tag',
      taskId: 'TaskId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      fallBackContent: 'string',
      fallBackDuration: 'number',
      fallBackId: 'string',
      fallBackRule: 'string',
      from: 'string',
      isvCode: 'string',
      label: 'string',
      language: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      senderListShrink: 'string',
      tag: 'string',
      taskId: 'string',
      templateCode: 'string',
      templateName: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

