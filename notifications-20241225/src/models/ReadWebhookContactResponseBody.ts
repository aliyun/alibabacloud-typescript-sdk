// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadWebhookContactResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * ***
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
   * ***
   * 
   * @deprecated
   */
  securityToken?: string;
  /**
   * @remarks
   * The bot server URL.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=xxxxxx
   */
  serverUrl?: string;
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

export class ReadWebhookContactResponseBody extends $dara.Model {
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
  data?: ReadWebhookContactResponseBodyData;
  /**
   * @remarks
   * The business message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5F62766-1C2F-1F56-A39D-63E3D30F0633
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
      data: ReadWebhookContactResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

