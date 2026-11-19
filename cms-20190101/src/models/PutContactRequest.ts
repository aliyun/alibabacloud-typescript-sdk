// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutContactRequestChannels extends $dara.Model {
  /**
   * @remarks
   * The TradeManager contact.
   * 
   * <props="china">You must specify at least one of the following contact methods: mobile phone number, email address, DingTalk chatbot, and TradeManager.
   * <props="intl">You must specify at least one of the following contact methods: email address and DingTalk chatbot.
   * <props="partner">You must specify at least one of the following contact methods: email address and DingTalk chatbot.
   * 
   * @example
   * Jim
   */
  aliIM?: string;
  /**
   * @remarks
   * The DingTalk chatbot.
   * 
   * <props="china">You must specify at least one of the following contact methods: mobile phone number, email address, DingTalk chatbot, and TradeManager.
   * <props="intl">You must specify at least one of the following contact methods: email address and DingTalk chatbot.
   * <props="partner">You must specify at least one of the following contact methods: email address and DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=7d49515e8ebf21106a80a9cc4bb3d247771305d52fb15d6201234565****
   */
  dingWebHook?: string;
  /**
   * @remarks
   * The email address. The email address receives an activation link. The contact is added only after the link is activated.
   * 
   * <props="china">You must specify at least one of the following contact methods: mobile phone number, email address, DingTalk chatbot, and TradeManager.
   * <props="intl">You must specify at least one of the following contact methods: email address and DingTalk chatbot.
   * <props="partner">You must specify at least one of the following contact methods: email address and DingTalk chatbot.
   * 
   * @example
   * test@aliyun.com
   */
  mail?: string;
  /**
   * @remarks
   * The mobile phone number. The mobile phone number receives an activation link. The contact is added only after the link is activated.
   * 
   * <props="china">You must specify at least one of the following contact methods: mobile phone number, email address, DingTalk chatbot, and TradeManager.
   * <props="intl">You must specify at least one of the following contact methods: email address and DingTalk chatbot.
   * <props="partner">You must specify at least one of the following contact methods: email address and DingTalk chatbot.
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
   * Specifies whether to perform only a dry run.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The language of the alert notification. Valid values:
   * - zh-cn: Simplified Chinese.
   * - en: English.
   * 
   * > If you do not specify this parameter, the system automatically determines the language based on the region of the account.
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
      dryRun: 'DryRun',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: PutContactRequestChannels,
      contactName: 'string',
      describe: 'string',
      dryRun: 'boolean',
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

