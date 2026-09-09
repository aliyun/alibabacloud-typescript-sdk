// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserSubscriptionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application name of the requester.
   * 
   * @example
   * yunge-user
   */
  appName?: string;
  /**
   * @remarks
   * The business line of the requester.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * The request protocol type.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * The list of categories.
   */
  categoryCodesShrink?: string;
  /**
   * @remarks
   * The list of channels.
   */
  channelConfigsShrink?: string;
  /**
   * @remarks
   * The channel group. Valid values:
   * - tts: Voice channel group.
   * - webhook: Chatbot channel group.
   * - base: Basic channel group.
   * 
   * @example
   * base
   */
  channelGroupCode?: string;
  /**
   * @remarks
   * The source of the operation terminal.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * The common contacts.
   */
  commonContactsShrink?: string;
  /**
   * @remarks
   * The user cookies.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * The revision type. Valid values:
   * - receive_contact: Receive contact.
   * - receive_channel: Receive channel.
   * 
   * @example
   * receive_channel
   */
  operationItemCode?: string;
  /**
   * @remarks
   * Not supported.
   */
  receiveTimeListShrink?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * /
   */
  remarks?: string;
  /**
   * @remarks
   * The URL of the source page.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * The tenant information.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * The user type.
   * 
   * @example
   * /
   */
  uidType?: string;
  /**
   * @remarks
   * The list of chatbot contacts.
   */
  webhookContactsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      bizName: 'BizName',
      callerProtocol: 'CallerProtocol',
      categoryCodesShrink: 'CategoryCodes',
      channelConfigsShrink: 'ChannelConfigs',
      channelGroupCode: 'ChannelGroupCode',
      clientSource: 'ClientSource',
      commonContactsShrink: 'CommonContacts',
      cookies: 'Cookies',
      operationItemCode: 'OperationItemCode',
      receiveTimeListShrink: 'ReceiveTimeList',
      remarks: 'Remarks',
      srcUrl: 'SrcUrl',
      tenantCode: 'TenantCode',
      uidType: 'UidType',
      webhookContactsShrink: 'WebhookContacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      bizName: 'string',
      callerProtocol: 'string',
      categoryCodesShrink: 'string',
      channelConfigsShrink: 'string',
      channelGroupCode: 'string',
      clientSource: 'string',
      commonContactsShrink: 'string',
      cookies: 'string',
      operationItemCode: 'string',
      receiveTimeListShrink: 'string',
      remarks: 'string',
      srcUrl: 'string',
      tenantCode: 'string',
      uidType: 'string',
      webhookContactsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

