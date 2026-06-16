// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventLogPageRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The account ID (request_param.accountId). The value can be up to 50 characters in length and supports the "\\*" and "?" wildcards.
   * 
   * @example
   * 180650758xxxxxxx
   */
  accountIdPRP?: string;
  /**
   * @remarks
   * The start timestamp of the log. Unit: milliseconds.
   * 
   * @example
   * 1737101348000
   */
  beginTime?: number;
  /**
   * @remarks
   * The first full-text match condition. The value can be up to 30 characters in length.
   * 
   * @example
   * rm0102
   */
  condition1AL?: string;
  /**
   * @remarks
   * The second full-text match condition. The value can be up to 30 characters in length.
   * 
   * @example
   * rm0102
   */
  condition2AL?: string;
  /**
   * @remarks
   * The third full-text match condition. The value can be up to 30 characters in length.
   * 
   * @example
   * rm0102
   */
  condition3AL?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The device type (request_param.deviceType). Example values: 1: PC. 2: MOBILE.
   * 
   * @example
   * PC
   */
  deviceTypeLRP?: string;
  /**
   * @remarks
   * The email address (request_param.email). The value can be up to 100 characters in length and supports the "\\*" and "?" wildcards.
   * 
   * @example
   * xxxx@123.com
   */
  emailPRP?: string;
  /**
   * @remarks
   * The end time. Unit: milliseconds.
   * 
   * @example
   * 1746669075000
   */
  endTime?: number;
  /**
   * @remarks
   * The logon failure reason (-request_param.failReason).
   * 
   * @example
   * wrongPassword
   */
  failReasonLRP?: string;
  /**
   * @remarks
   * The IP address (request_param.ip). The value can be up to 20 characters in length and supports the "\\*" and "?" wildcards.
   * 
   * @example
   * 168.168.168.168
   */
  ipPRP?: string;
  /**
   * @remarks
   * The logon success flag (request_param.loginResult).
   * 
   * @example
   * SUCCESS
   */
  loginResultARP?: string;
  /**
   * @remarks
   * The logon authentication method (-request_param.loginType).
   * 
   * @example
   * PASSWORD
   */
  loginTypeLRP?: string;
  /**
   * @remarks
   * The device MAC address (-request_param.mac). The value can be up to 30 characters in length and supports the "\\*" and "?" wildcards.
   * 
   * @example
   * 00-1C-F0-1D-A7-81
   */
  macPRP?: string;
  /**
   * @remarks
   * The phone number (supports MD5: request_param.mobile/request_param.mobileMd5). The value can be up to 30 characters in length and supports the "\\*" and "?" wildcards. The search is performed based on the mobile and mobileMd5 fields.
   * 
   * @example
   * 17600000000
   */
  mobilePRP?: string;
  /**
   * @remarks
   * The account nickname (request_param.nickName). The value can be up to 50 characters in length and supports the "\\*" and "?" wildcards.
   * 
   * @example
   * 测试xx
   */
  nickNamePRP?: string;
  /**
   * @remarks
   * The operation source (request_param.operateSource). Example values: 1: PC. 2: H5. 3: App.
   * 
   * @example
   * PC
   */
  operateSourceLRP?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The referer (-request_param.refer). The value can be up to 50 characters in length and supports the "\\*" and "?" wildcards.
   * 
   * @example
   * refer
   */
  referPRP?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The account registration IP address (request_param.registerIp). The value can be up to 20 characters in length and supports the "\\*" and "?" wildcards.
   * 
   * @example
   * 168.168.168.168
   */
  registerIpPRP?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD6B08EC-1B44-5378-8838-C76A36415C55
   */
  reqIdPBS?: string;
  /**
   * @remarks
   * The end value of the score range (score). Only non-negative integers are allowed. The end value must be greater than the start value. Both boundaries are inclusive.
   * 
   * @example
   * 2
   */
  scoreEBS?: number;
  /**
   * @remarks
   * The start value of the score range (score). Only non-negative integers are allowed. The end value must be greater than the start value. Both boundaries are inclusive.
   * 
   * @example
   * 1
   */
  scoreSBS?: number;
  /**
   * @remarks
   * The event name (instance_id).
   * 
   * @example
   * de_afghcf6411
   */
  serviceABS?: string;
  /**
   * @remarks
   * The risk label (tags). The data is obtained from DescribeTagsList.
   * 
   * @example
   * rg0001
   */
  tagsLBS?: string;
  /**
   * @remarks
   * The device ID (device_info.umid).
   * 
   * @example
   * 设备ID
   */
  umidPDI?: string;
  /**
   * @remarks
   * The user agent (-request_param.userAgent). The value can be up to 50 characters in length and supports the "\\*" and "?" wildcards.
   * 
   * @example
   * 00-1C-F0-1D-A7-81
   */
  userAgentPRP?: string;
  /**
   * @remarks
   * The account name type for the logon scenario (-request_param.userNameType).
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

