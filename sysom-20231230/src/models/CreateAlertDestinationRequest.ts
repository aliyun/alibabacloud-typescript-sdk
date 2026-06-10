// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertDestinationRequestParams extends $dara.Model {
  /**
   * @remarks
   * Email
   * 
   * @example
   * xxx@email.com
   */
  email?: string;
  /**
   * @remarks
   * Phone number
   * 
   * @example
   * 1xxx
   */
  phone?: string;
  /**
   * @remarks
   * Robot key
   * 
   * @example
   * SECxxx
   */
  sec?: string;
  /**
   * @remarks
   * Robot link
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
   * Alert contact name
   * 
   * @example
   * test_name
   */
  name?: string;
  /**
   * @remarks
   * Configuration parameters for the alert contact
   */
  params?: CreateAlertDestinationRequestParams;
  /**
   * @remarks
   * Configuration source
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * Push Target. Currently, only DingTalk Robot is supported.
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

