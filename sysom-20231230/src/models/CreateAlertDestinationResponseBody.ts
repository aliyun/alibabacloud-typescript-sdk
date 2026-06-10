// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertDestinationResponseBodyDataParams extends $dara.Model {
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
   * Phone
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
   * Robot address
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

export class CreateAlertDestinationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation Time.
   * 
   * @example
   * 1753669116286
   */
  createdAt?: number;
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Policy Name
   * 
   * @example
   * SysOM
   */
  name?: string;
  /**
   * @remarks
   * Configuration Parameter of alert contact
   */
  params?: CreateAlertDestinationResponseBodyDataParams;
  /**
   * @remarks
   * Configuration Source
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
  /**
   * @remarks
   * User ID
   * 
   * @example
   * 1222933234714935
   */
  uid?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 1751254826285
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      id: 'id',
      name: 'name',
      params: 'params',
      source: 'source',
      target: 'target',
      uid: 'uid',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      id: 'number',
      name: 'string',
      params: CreateAlertDestinationResponseBodyDataParams,
      source: 'string',
      target: 'string',
      uid: 'string',
      updatedAt: 'number',
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

export class CreateAlertDestinationResponseBody extends $dara.Model {
  /**
   * @remarks
   * error code
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: CreateAlertDestinationResponseBodyData;
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateAlertDestinationResponseBodyData,
      message: 'string',
      requestId: 'string',
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

