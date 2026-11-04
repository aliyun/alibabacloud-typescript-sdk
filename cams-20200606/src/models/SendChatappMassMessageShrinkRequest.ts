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
   * - **instagram**
   * 
   * <props="intl">- **viber**
   * 
   * This parameter is required.
   * 
   * @example
   * whatsapp
   */
  channelType?: string;
  /**
   * @remarks
   * The space ID of the ISV sub-customer, or the instance ID for direct customers. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-8c8*********
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WABA ID of the ISV customer. This parameter is deprecated. Use CustSpaceId instead, which is the instance ID for direct customers. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * @example
   * cams-8c8*********
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The custom fallback content. This parameter applies to the international site only and can be ignored on the China site.
   * 
   * @example
   * Fallback SMS
   */
  fallBackContent?: string;
  /**
   * @remarks
   * The fallback trigger duration. This parameter applies to the international site only and can be ignored on the China site. <props="intl">If no delivery receipt is returned within the specified duration, a fallback is triggered. If this parameter is not set, the fallback is not triggered based on this duration — a fallback occurs only when the message fails to send or a failure status report is received. Unit: seconds. Minimum value: 60. Maximum value: 43200.
   * 
   * @example
   * 120
   */
  fallBackDuration?: number;
  /**
   * @remarks
   * The fallback policy ID. This parameter applies to the international site only and can be ignored on the China site. <props="intl">You can view the policy ID on the [**Fallback Policy**](https://chatapp.console.alibabacloud.com/FallbackStrategy) page.
   * 
   * @example
   * S0****
   */
  fallBackId?: string;
  /**
   * @remarks
   * The fallback rule. This parameter applies to the international site only and can be ignored on the China site.
   * <props="intl">Valid values:
   * <props="intl">- **undelivered**: triggers a fallback when the message cannot be delivered to the endpoint. During the sending phase, the template and parameters must pass validation. Checks for blocked templates or blocked phone numbers are not performed. If this parameter is left empty, this rule is used by default.
   * <props="intl">- **sentFailed**: triggers a fallback when validation of the template, template variables, or other parameters fails. Only the following parameters are strictly validated: channelType, type, messageType, to, and from (whether they exist).
   * 
   * @example
   * undelivered
   */
  fallBackRule?: string;
  /**
   * @remarks
   * The sender\\"s phone number.
   * 
   * - If ChannelType is **whatsapp**, this is the phone number registered and bound to WhatsApp. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **WABA Management** > **Number Management** page.
   * - If ChannelType is **messenger**, this is the Page ID of the public page. You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Public Pages** page.
   * - If ChannelType is **instagram**, this is the Instagram professional account ID (Account ID). You can view it on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Professional Accounts** page.
   * <props="intl">- If ChannelType is **viber**, this is the Viber service number ID (Service ID). You can view it on the [**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Service Number Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 861387777****
   */
  from?: string;
  /**
   * @remarks
   * The ISV verification code used to verify whether a sub-account is authorized by an ISV. This parameter is deprecated and can be ignored.
   * 
   * @example
   * skdi3kksloslikd****
   * 
   * @deprecated
   */
  isvCode?: string;
  /**
   * @remarks
   * The Viber message type. This parameter applies to the international site only and can be ignored on the China site.
   * <props="intl">Valid values:
   * <props="intl">- **pormotion**: marketing and promotional messages.
   * <props="intl">- **transaction**: notification messages.
   * 
   * @example
   * promotion
   */
  label?: string;
  /**
   * @remarks
   * The language. For a list of language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
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
   * The list of recipient phone numbers.
   */
  senderListShrink?: string;
  /**
   * @remarks
   * The tag information. Specifies a custom tag for Viber messages.
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
   * The template code. You can view the template code on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Template Design** page.
   * 
   * @example
   * 1119***************
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name. You can view the template name on the <props="china">[**Channel Management**](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[**Channel Management**](https://chatapp.console.alibabacloud.com/CustomerList) > **Manage** > **Template Design** page.
   * 
   * @example
   * test_name
   */
  templateName?: string;
  /**
   * @remarks
   * The timeout period for sending Viber messages. This parameter applies to the international site only and can be ignored on the China site. <props="intl">Unit: seconds. Valid values: 30 to 1209600.
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

