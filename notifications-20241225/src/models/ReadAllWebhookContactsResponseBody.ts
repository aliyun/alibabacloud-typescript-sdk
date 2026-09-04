// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadAllWebhookContactsResponseBodyData extends $dara.Model {
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
   * The security token (deprecated).
   * 
   * @example
   * /
   */
  securityToken?: string;
  /**
   * @remarks
   * The bot URL.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=xxxx
   */
  serverUrl?: string;
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
   * The webhook type.
   * 
   * @example
   * dingtalk
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      botSecurityToken: 'BotSecurityToken',
      contactId: 'ContactId',
      contactName: 'ContactName',
      securityToken: 'SecurityToken',
      serverUrl: 'ServerUrl',
      templateCode: 'TemplateCode',
      webhookType: 'WebhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botSecurityToken: 'string',
      contactId: 'number',
      contactName: 'string',
      securityToken: 'string',
      serverUrl: 'string',
      templateCode: 'string',
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

export class ReadAllWebhookContactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: ReadAllWebhookContactsResponseBodyData[];
  /**
   * @remarks
   * The business message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * /
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ReadAllWebhookContactsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

