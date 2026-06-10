// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertDestinationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation Time.
   * 
   * @example
   * 1751520976660
   */
  createdAt?: string;
  /**
   * @remarks
   * Alert contact ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Alert contact name
   * 
   * @example
   * name1
   */
  name?: string;
  /**
   * @remarks
   * Configuration Parameter
   * 
   * @example
   * {
   *     "webhook":"",
   *     "sec":"",
   * }
   */
  params?: any;
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
   * Alert push target. Currently, only DingTalk Robot is supported.
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
   * 1234123412352311
   */
  uid?: string;
  /**
   * @remarks
   * Update Time.
   * 
   * @example
   * 1751254826285
   */
  updatedAt?: string;
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
      createdAt: 'string',
      id: 'number',
      name: 'string',
      params: 'any',
      source: 'string',
      target: 'string',
      uid: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertDestinationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.  
   * - If `code == Success`, authorization succeeded.  
   * - Other status codes indicate authorization failed. When authorization fails, check the `message` field for detailed error information.
   * 
   * @example
   * Success or Sysom.ServerError
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetAlertDestinationResponseBodyData;
  /**
   * @remarks
   * Error message.  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
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
      data: GetAlertDestinationResponseBodyData,
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

