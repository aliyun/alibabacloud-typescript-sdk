// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWebhookContactRequest extends $dara.Model {
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
   * The application name of the caller.
   * 
   * @example
   * /
   */
  appName?: string;
  /**
   * @remarks
   * The business line of the caller.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * The security signature.
   * 
   * @example
   * ***
   */
  botSecurityToken?: string;
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
   * The source of the operation terminal.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * webhook id
   * 
   * @example
   * 3
   */
  contactId?: number;
  /**
   * @remarks
   * The webhook name.
   * 
   * @example
   * test
   */
  contactName?: string;
  /**
   * @remarks
   * The user cookies.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @deprecated
   */
  securityToken?: string;
  /**
   * @remarks
   * The webhook server URL.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=xxxxx
   */
  serverUrl?: string;
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
   * The template code. This parameter is required only for custom webhooks.
   * 
   * @example
   * lark
   */
  templateCode?: string;
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
   * The verification code.
   * 
   * @example
   * 123456
   */
  verificationCode?: string;
  /**
   * @remarks
   * The webhook type.
   * 
   * @example
   * dingtalk
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      bizName: 'BizName',
      botSecurityToken: 'BotSecurityToken',
      callerProtocol: 'CallerProtocol',
      clientSource: 'ClientSource',
      contactId: 'ContactId',
      contactName: 'ContactName',
      cookies: 'Cookies',
      securityToken: 'SecurityToken',
      serverUrl: 'ServerUrl',
      srcUrl: 'SrcUrl',
      templateCode: 'TemplateCode',
      tenantCode: 'TenantCode',
      uidType: 'UidType',
      verificationCode: 'VerificationCode',
      webhookType: 'WebhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      bizName: 'string',
      botSecurityToken: 'string',
      callerProtocol: 'string',
      clientSource: 'string',
      contactId: 'number',
      contactName: 'string',
      cookies: 'string',
      securityToken: 'string',
      serverUrl: 'string',
      srcUrl: 'string',
      templateCode: 'string',
      tenantCode: 'string',
      uidType: 'string',
      verificationCode: 'string',
      webhookType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

