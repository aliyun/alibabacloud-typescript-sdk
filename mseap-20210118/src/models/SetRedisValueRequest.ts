// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRedisValueRequest extends $dara.Model {
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
   * part_config_data
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
  /**
   * @example
   * 1684967696495902
   */
  key?: string;
  /**
   * @remarks
   * lang
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * originalRequest
   * 
   * @example
   * 1
   */
  originalRequest?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * F864A883-AD76-53D5-9A24-A6DAD5177697
   */
  requestId?: string;
  /**
   * @remarks
   * timeout
   * 
   * @example
   * 5000
   */
  timeout?: number;
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
  /**
   * @example
   * 259200000
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunKp: 'AliyunKp',
      apiType: 'ApiType',
      bid: 'Bid',
      key: 'Key',
      lang: 'Lang',
      originalRequest: 'OriginalRequest',
      requestId: 'RequestId',
      timeout: 'Timeout',
      userAccessKeyId: 'UserAccessKeyId',
      userBid: 'UserBid',
      userCallerParentId: 'UserCallerParentId',
      userCallerType: 'UserCallerType',
      userClientIp: 'UserClientIp',
      userKp: 'UserKp',
      userMfaPresent: 'UserMfaPresent',
      userSecurityToken: 'UserSecurityToken',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunKp: 'string',
      apiType: 'string',
      bid: 'string',
      key: 'string',
      lang: 'string',
      originalRequest: 'string',
      requestId: 'string',
      timeout: 'number',
      userAccessKeyId: 'string',
      userBid: 'string',
      userCallerParentId: 'number',
      userCallerType: 'string',
      userClientIp: 'string',
      userKp: 'string',
      userMfaPresent: 'boolean',
      userSecurityToken: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

