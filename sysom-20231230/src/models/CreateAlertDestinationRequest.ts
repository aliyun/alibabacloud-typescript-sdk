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
   * The secret key of the chatbot.
   * 
   * @example
   * SECxxx
   */
  sec?: string;
  /**
   * @remarks
   * The webhook URL of the chatbot.
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
   * The notification target. Currently, only DingTalk chatbots are supported.
   * 
   * @example
   * dingtalk
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      params: 'params',
      source: 'source',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      params: CreateAlertDestinationRequestParams,
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

