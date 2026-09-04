// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestWebhookContactRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * /
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The name of the caller application.
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
   * The security token.
   * 
   * @example
   * /
   */
  botSecurityToken?: string;
  /**
   * @remarks
   * The type of the request protocol.
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
   * 0
   */
  contactId?: number;
  /**
   * @remarks
   * The name of the webhook contact.
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
   * @remarks
   * The webhook server URL.
   * 
   * @example
   * /
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
   * The template code.
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
      serverUrl: 'ServerUrl',
      srcUrl: 'SrcUrl',
      templateCode: 'TemplateCode',
      tenantCode: 'TenantCode',
      uidType: 'UidType',
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
      serverUrl: 'string',
      srcUrl: 'string',
      templateCode: 'string',
      tenantCode: 'string',
      uidType: 'string',
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

