// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullTaskRequest extends $dara.Model {
  /**
   * @remarks
   * aliyunKp
   * 
   * @example
   * 1
   */
  aliyunKp?: string;
  /**
   * @remarks
   * apiType
   * 
   * @example
   * openAPI
   */
  apiType?: string;
  /**
   * @remarks
   * bid
   * 
   * @example
   * 26842
   */
  bid?: string;
  bizCode?: string;
  /**
   * @remarks
   * lang
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 1672369049358
   */
  orderId?: string;
  /**
   * @remarks
   * originalRequest
   * 
   * @example
   * 1
   */
  originalRequest?: string;
  principalKey?: string;
  /**
   * @remarks
   * taskType
   * 
   * @example
   * PATENT_CHECK
   */
  taskType?: string;
  /**
   * @remarks
   * userAccessKeyId
   * 
   * @example
   * 1
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * userBid
   * 
   * @example
   * 1
   */
  userBid?: string;
  /**
   * @remarks
   * userCallerParentId
   * 
   * @example
   * 1
   */
  userCallerParentId?: number;
  /**
   * @remarks
   * userCallerSecurityTransport
   * 
   * @example
   * 1
   */
  userCallerSecurityTransport?: boolean;
  /**
   * @remarks
   * userCallerType
   * 
   * @example
   * 1
   */
  userCallerType?: string;
  /**
   * @remarks
   * userClientIp
   * 
   * @example
   * 1
   */
  userClientIp?: string;
  /**
   * @remarks
   * userKp
   * 
   * @example
   * 1
   */
  userKp?: string;
  /**
   * @remarks
   * userMfaPresent
   * 
   * @example
   * 1
   */
  userMfaPresent?: boolean;
  /**
   * @remarks
   * userSecurityToken
   * 
   * @example
   * 1
   */
  userSecurityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunKp: 'AliyunKp',
      apiType: 'ApiType',
      bid: 'Bid',
      bizCode: 'BizCode',
      lang: 'Lang',
      orderId: 'OrderId',
      originalRequest: 'OriginalRequest',
      principalKey: 'PrincipalKey',
      taskType: 'TaskType',
      userAccessKeyId: 'UserAccessKeyId',
      userBid: 'UserBid',
      userCallerParentId: 'UserCallerParentId',
      userCallerSecurityTransport: 'UserCallerSecurityTransport',
      userCallerType: 'UserCallerType',
      userClientIp: 'UserClientIp',
      userKp: 'UserKp',
      userMfaPresent: 'UserMfaPresent',
      userSecurityToken: 'UserSecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunKp: 'string',
      apiType: 'string',
      bid: 'string',
      bizCode: 'string',
      lang: 'string',
      orderId: 'string',
      originalRequest: 'string',
      principalKey: 'string',
      taskType: 'string',
      userAccessKeyId: 'string',
      userBid: 'string',
      userCallerParentId: 'number',
      userCallerSecurityTransport: 'boolean',
      userCallerType: 'string',
      userClientIp: 'string',
      userKp: 'string',
      userMfaPresent: 'boolean',
      userSecurityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

