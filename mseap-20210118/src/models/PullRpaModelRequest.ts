// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PullRpaModelRequest extends $dara.Model {
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
   * templateId
   * 
   * @example
   * 17
   */
  templateId?: number;
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
  static names(): { [key: string]: string } {
    return {
      aliyunKp: 'AliyunKp',
      apiType: 'ApiType',
      bid: 'Bid',
      lang: 'Lang',
      originalRequest: 'OriginalRequest',
      templateId: 'TemplateId',
      userAccessKeyId: 'UserAccessKeyId',
      userBid: 'UserBid',
      userCallerParentId: 'UserCallerParentId',
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
      lang: 'string',
      originalRequest: 'string',
      templateId: 'number',
      userAccessKeyId: 'string',
      userBid: 'string',
      userCallerParentId: 'number',
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

