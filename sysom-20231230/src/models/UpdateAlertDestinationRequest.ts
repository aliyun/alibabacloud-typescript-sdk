// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertDestinationRequestParams extends $dara.Model {
  /**
   * @remarks
   * mailbox
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
   * Robot webhook address
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

export class UpdateAlertDestinationRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the alert contact
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * Name of the alert contact
   * 
   * @example
   * name1
   */
  name?: string;
  /**
   * @remarks
   * Configuration Parameter
   */
  params?: UpdateAlertDestinationRequestParams;
  /**
   * @remarks
   * Source of the configuration
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * Push Target for alerts. Currently, only DingTalk contacts are supported.
   * 
   * @example
   * dingtalk
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      params: 'params',
      source: 'source',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      params: UpdateAlertDestinationRequestParams,
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

