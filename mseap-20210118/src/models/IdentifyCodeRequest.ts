// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdentifyCodeRequest extends $dara.Model {
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
  /**
   * @example
   * {\\"engine\\": \\"MySQL\\", \\"instanceId\\": \\"rm-2zes07949gc0febg6\\", \\"userId\\": \\"1204765431532768\\", \\"previousExistConfig\\": False, \\"engineVersion\\": \\"8.0\\", \\"autoResourceOptimize\\": 0, \\"dasProOn\\": False}
   */
  data?: string;
  /**
   * @example
   * 1551278
   */
  label?: string;
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
   * @example
   * CBWP
   */
  type?: string;
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
   * true
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
   * true
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
      data: 'Data',
      label: 'Label',
      lang: 'Lang',
      originalRequest: 'OriginalRequest',
      type: 'Type',
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
      data: 'string',
      label: 'string',
      lang: 'string',
      originalRequest: 'string',
      type: 'string',
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

