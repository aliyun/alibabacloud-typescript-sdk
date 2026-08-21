// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertDestinationRequestParams extends $dara.Model {
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

export class UpdateAlertDestinationRequest extends $dara.Model {
  xDebugId?: string;
  appId?: string;
  appSecret?: string;
  groupId?: string[];
  /**
   * @remarks
   * The ID of the alert contact.
   * 
   * @example
   * 1
   */
  id?: string;
  imbot?: boolean;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * name1
   */
  name?: string;
  /**
   * @remarks
   * The configuration parameters.
   */
  params?: UpdateAlertDestinationRequestParams;
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
   * The alert notification target. Currently, only DingTalk contacts are supported.
   * 
   * @example
   * dingtalk
   */
  target?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      appId: 'app_id',
      appSecret: 'app_secret',
      groupId: 'group_id',
      id: 'id',
      imbot: 'imbot',
      name: 'name',
      params: 'params',
      source: 'source',
      target: 'target',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      appId: 'string',
      appSecret: 'string',
      groupId: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      imbot: 'boolean',
      name: 'string',
      params: UpdateAlertDestinationRequestParams,
      source: 'string',
      target: 'string',
      xSysomInvokeSource: 'string',
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

