// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertDestinationRequestParams extends $dara.Model {
  /**
   * @example
   * xxx@email.com
   */
  email?: string;
  /**
   * @example
   * 1xxx
   */
  phone?: string;
  /**
   * @example
   * SECxxx
   */
  sec?: string;
  /**
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
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * name1
   */
  name?: string;
  params?: UpdateAlertDestinationRequestParams;
  /**
   * @example
   * console
   */
  source?: string;
  /**
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

