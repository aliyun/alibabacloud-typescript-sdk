// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutContactRequestChannels extends $dara.Model {
  /**
   * @remarks
   * The TradeManager ID of the alert contact.
   * 
   * Specify at least one of the following alert notification methods: email address and DingTalk chatbot.
   * 
   * @example
   * Jim
   */
  aliIM?: string;
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.
   * 
   * Specify at least one of the following alert notification methods: email address and DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=7d49515e8ebf21106a80a9cc4bb3d247771305d52fb15d6201234565****
   */
  dingWebHook?: string;
  /**
   * @remarks
   * The email address. After you add or modify an email address, the recipient receives an email that contains an activation link. The system adds the recipient to the list of alert contacts only after the recipient activates the email address.
   * 
   * Specify at least one of the following alert notification methods: email address and DingTalk chatbot.
   * 
   * @example
   * test@aliyun.com
   */
  mail?: string;
  /**
   * @remarks
   * The phone number of the alert contact. After you add or modify a phone number, the recipient receives a text message that contains an activation link. The system adds the recipient to the list of alert contacts only after the recipient activates the phone number.
   * 
   * Specify at least one of the following alert notification methods: email address and DingTalk chatbot.
   * 
   * @example
   * 1333333****
   */
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactRequest extends $dara.Model {
  channels?: PutContactRequestChannels;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * This parameter is required.
   * 
   * @example
   * Alice
   */
  contactName?: string;
  /**
   * @remarks
   * The description of the alert contact.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Instance
   */
  describe?: string;
  /**
   * @remarks
   * The language in which the alert information is displayed. Valid values:
   * 
   * *   zh-cn: simplified Chinese
   * *   en: English
   * 
   * >  If you do not specify this parameter, CloudMonitor identifies the language of the alert information based on the region of your Alibaba Cloud account.
   * 
   * @example
   * zh-cn
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      contactName: 'ContactName',
      describe: 'Describe',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: PutContactRequestChannels,
      contactName: 'string',
      describe: 'string',
      lang: 'string',
    };
  }

  validate() {
    if(this.channels && typeof (this.channels as any).validate === 'function') {
      (this.channels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

