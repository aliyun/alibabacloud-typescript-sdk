// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventLogPageRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for request and response messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Account ID (request_param.accountId), up to 50 characters, supports “*” and “?” wildcards.
   * 
   * @example
   * 180650758xxxxxxx
   */
  accountIdPRP?: string;
  /**
   * @remarks
   * Start timestamp of the log. Unit: milliseconds.
   * 
   * @example
   * 1737101348000
   */
  beginTime?: number;
  /**
   * @remarks
   * Full-text match 1, cannot exceed 30 characters.
   * 
   * @example
   * rm0102
   */
  condition1AL?: string;
  /**
   * @remarks
   * Full-text match 2, cannot exceed 30 characters.
   * 
   * @example
   * rm0102
   */
  condition2AL?: string;
  /**
   * @remarks
   * Full-text match 3, cannot exceed 30 characters.
   * 
   * @example
   * rm0102
   */
  condition3AL?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Device type (request_param.deviceType), examples: 1. PC, 2. MOBILE.
   * 
   * @example
   * PC
   */
  deviceTypeLRP?: string;
  /**
   * @remarks
   * Email (request_param.email), up to 100 characters, supports “*” and “?” wildcards.
   * 
   * @example
   * xxxx@123.com
   */
  emailPRP?: string;
  /**
   * @remarks
   * End time, accurate to milliseconds (ms).
   * 
   * @example
   * 1746669075000
   */
  endTime?: number;
  /**
   * @remarks
   * Login failure reason (-request_param.failReason).
   * 
   * @example
   * wrongPassword
   */
  failReasonLRP?: string;
  /**
   * @remarks
   * IP (request_param.ip), up to 20 characters, supports “*” and “?” wildcards.
   * 
   * @example
   * 168.168.168.168
   */
  ipPRP?: string;
  /**
   * @remarks
   * Login success indicator (request_param.loginResult).
   * 
   * @example
   * SUCCESS
   */
  loginResultARP?: string;
  /**
   * @remarks
   * Login verification method (-request_param.loginType).
   * 
   * @example
   * PASSWORD
   */
  loginTypeLRP?: string;
  /**
   * @remarks
   * Device MAC address (-request_param.mac), up to 30 characters, supports “*” and “?” wildcards.
   * 
   * @example
   * 00-1C-F0-1D-A7-81
   */
  macPRP?: string;
  /**
   * @remarks
   * Phone number (supports MD5 request_param.mobile/request_param.mobileMd5), up to 30 characters, supports “*” and “?” wildcards, searchable by mobile and mobileMd5 fields.
   * 
   * @example
   * 17600000000
   */
  mobilePRP?: string;
  /**
   * @remarks
   * Account nickname (request_param.nickName), up to 50 characters, supports “*” and “?” wildcards.
   * 
   * @example
   * 测试xx
   */
  nickNamePRP?: string;
  /**
   * @remarks
   * Operation source (request_param.operateSource), examples: 1. PC, 2. H5, 3. App.
   * 
   * @example
   * PC
   */
  operateSourceLRP?: string;
  /**
   * @remarks
   * Number of items per page, default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Referer (-request_param.refer), up to 50 characters, supports “*” and “?” wildcards.
   * 
   * @example
   * refer
   */
  referPRP?: string;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Account registration IP (request_param.registerIp), up to 20 characters, supports “*” and “?” wildcards.
   * 
   * @example
   * 168.168.168.168
   */
  registerIpPRP?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BD6B08EC-1B44-5378-8838-C76A36415C55
   */
  reqIdPBS?: string;
  /**
   * @remarks
   * End value of the score range (score), only non-negative integers are allowed, and the right interval must be greater than the left interval, with both intervals being closed.
   * 
   * @example
   * 2
   */
  scoreEBS?: number;
  /**
   * @remarks
   * Starting value of the score range (score), only non-negative integers are allowed, the right interval must be greater than the left interval, both intervals are inclusive.
   * 
   * @example
   * 1
   */
  scoreSBS?: number;
  /**
   * @remarks
   * Event name (instance_id).
   * 
   * @example
   * de_afghcf6411
   */
  serviceABS?: string;
  /**
   * @remarks
   * Risk tags (tags), data source DescribeTagsList.
   * 
   * @example
   * rg0001
   */
  tagsLBS?: string;
  /**
   * @remarks
   * Device ID (device_info.umid).
   * 
   * @example
   * 设备ID
   */
  umidPDI?: string;
  /**
   * @remarks
   * User agent (-request_param.userAgent), up to 50 characters, supports “*” and “?” wildcards.
   * 
   * @example
   * 00-1C-F0-1D-A7-81
   */
  userAgentPRP?: string;
  /**
   * @remarks
   * Username type, login scenario (-request_param.userNameType).
   * 
   * @example
   * type
   */
  userNameTypeLRP?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      accountIdPRP: 'accountIdPRP',
      beginTime: 'beginTime',
      condition1AL: 'condition1AL',
      condition2AL: 'condition2AL',
      condition3AL: 'condition3AL',
      currentPage: 'currentPage',
      deviceTypeLRP: 'deviceTypeLRP',
      emailPRP: 'emailPRP',
      endTime: 'endTime',
      failReasonLRP: 'failReasonLRP',
      ipPRP: 'ipPRP',
      loginResultARP: 'loginResultARP',
      loginTypeLRP: 'loginTypeLRP',
      macPRP: 'macPRP',
      mobilePRP: 'mobilePRP',
      nickNamePRP: 'nickNamePRP',
      operateSourceLRP: 'operateSourceLRP',
      pageSize: 'pageSize',
      referPRP: 'referPRP',
      regId: 'regId',
      registerIpPRP: 'registerIpPRP',
      reqIdPBS: 'reqIdPBS',
      scoreEBS: 'scoreEBS',
      scoreSBS: 'scoreSBS',
      serviceABS: 'serviceABS',
      tagsLBS: 'tagsLBS',
      umidPDI: 'umidPDI',
      userAgentPRP: 'userAgentPRP',
      userNameTypeLRP: 'userNameTypeLRP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      accountIdPRP: 'string',
      beginTime: 'number',
      condition1AL: 'string',
      condition2AL: 'string',
      condition3AL: 'string',
      currentPage: 'number',
      deviceTypeLRP: 'string',
      emailPRP: 'string',
      endTime: 'number',
      failReasonLRP: 'string',
      ipPRP: 'string',
      loginResultARP: 'string',
      loginTypeLRP: 'string',
      macPRP: 'string',
      mobilePRP: 'string',
      nickNamePRP: 'string',
      operateSourceLRP: 'string',
      pageSize: 'number',
      referPRP: 'string',
      regId: 'string',
      registerIpPRP: 'string',
      reqIdPBS: 'string',
      scoreEBS: 'number',
      scoreSBS: 'number',
      serviceABS: 'string',
      tagsLBS: 'string',
      umidPDI: 'string',
      userAgentPRP: 'string',
      userNameTypeLRP: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

