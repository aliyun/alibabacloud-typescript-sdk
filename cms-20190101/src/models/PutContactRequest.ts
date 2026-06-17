// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutContactRequestChannels extends $dara.Model {
  /**
   * @remarks
   * 旺旺联系人。
   * 
   * <props="china">手机号码、邮箱、钉钉机器人和旺旺最少添加一种联系方式。
   * <props="intl">邮箱和钉钉机器人最少添加一种联系方式。
   * <props="partner">邮箱和钉钉机器人最少添加一种联系方式。
   * 
   * @example
   * Jim
   */
  aliIM?: string;
  /**
   * @remarks
   * 钉钉机器人。
   * 
   * <props="china">手机号码、邮箱、钉钉机器人和旺旺最少添加一种联系方式。
   * <props="intl">邮箱和钉钉机器人最少添加一种联系方式。
   * <props="partner">邮箱和钉钉机器人最少添加一种联系方式。
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=7d49515e8ebf21106a80a9cc4bb3d247771305d52fb15d6201234565****
   */
  dingWebHook?: string;
  /**
   * @remarks
   * Email地址。Email会收到一个激活链接， 激活之后您才会被加入到联系人中。
   * 
   * <props="china">手机号码、邮箱、钉钉机器人和旺旺最少添加一种联系方式。
   * <props="intl">邮箱和钉钉机器人最少添加一种联系方式。
   * <props="partner">邮箱和钉钉机器人最少添加一种联系方式。
   * 
   * @example
   * test@aliyun.com
   */
  mail?: string;
  /**
   * @remarks
   * 手机号码。手机号码会收到一个激活链接， 激活之后您才会被加入到联系人中。
   * 
   * <props="china">手机号码、邮箱、钉钉机器人和旺旺最少添加一种联系方式。
   * <props="intl">邮箱和钉钉机器人最少添加一种联系方式。
   * <props="partner">邮箱和钉钉机器人最少添加一种联系方式。
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
   * The language in which alert notifications are sent. Valid values:
   * - zh-cn: simplified Chinese.
   * - en: English.
   * 
   * > If this parameter is not specified, the language is automatically determined based on the region of the account.
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

