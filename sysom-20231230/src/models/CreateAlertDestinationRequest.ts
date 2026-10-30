// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertDestinationRequestParams extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * xxx@email.com
   */
  email?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 1xxx
   */
  phone?: string;
  /**
   * @remarks
   * The secret key of the bot.
   * 
   * @example
   * SECxxx
   */
  sec?: string;
  /**
   * @remarks
   * The webhook URL of the bot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=xxx
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      phone: 'phone',
      sec: 'sec',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      phone: 'string',
      sec: 'string',
      webhook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertDestinationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IM bot.
   * 
   * @example
   * 0ab724ba952448eab4b5ed7ebe1d51ab
   */
  appId?: string;
  /**
   * @remarks
   * The secret key of the IM bot.
   * 
   * @example
   * cmxjamd2a2MwbzAweHgqZ2U4TH55RjNOP0RUOy8tVVo
   */
  appSecret?: string;
  /**
   * @remarks
   * The ID of the group.
   */
  groupId?: string[];
  /**
   * @remarks
   * Specifies whether the IM bot is enabled.
   * 
   * @example
   * true
   */
  imbot?: boolean;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * test_name
   */
  name?: string;
  /**
   * @remarks
   * The configuration parameters of the alert contact.
   */
  params?: CreateAlertDestinationRequestParams;
  /**
   * @remarks
   * The configuration source.
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * The push target. Currently, only DingTalk bots are supported.
   * 
   * @example
   * dingtalk
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'app_id',
      appSecret: 'app_secret',
      groupId: 'group_id',
      imbot: 'imbot',
      name: 'name',
      params: 'params',
      source: 'source',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
      groupId: { 'type': 'array', 'itemType': 'string' },
      imbot: 'boolean',
      name: 'string',
      params: CreateAlertDestinationRequestParams,
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupId)) {
      $dara.Model.validateArray(this.groupId);
    }
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

