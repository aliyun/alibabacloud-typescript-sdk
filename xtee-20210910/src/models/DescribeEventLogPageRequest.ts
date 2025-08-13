// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventLogPageRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 180650758xxxxxxx
   */
  accountIdPRP?: string;
  /**
   * @example
   * 1737101348000
   */
  beginTime?: number;
  /**
   * @example
   * rm0102
   */
  condition1AL?: string;
  /**
   * @example
   * rm0102
   */
  condition2AL?: string;
  /**
   * @example
   * rm0102
   */
  condition3AL?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * PC
   */
  deviceTypeLRP?: string;
  /**
   * @example
   * xxxx@123.com
   */
  emailPRP?: string;
  /**
   * @example
   * 1746669075000
   */
  endTime?: number;
  /**
   * @example
   * wrongPassword
   */
  failReasonLRP?: string;
  /**
   * @example
   * 168.168.168.168
   */
  ipPRP?: string;
  /**
   * @example
   * SUCCESS
   */
  loginResultARP?: string;
  /**
   * @example
   * PASSWORD
   */
  loginTypeLRP?: string;
  /**
   * @example
   * 00-1C-F0-1D-A7-81
   */
  macPRP?: string;
  /**
   * @example
   * 17600000000
   */
  mobilePRP?: string;
  nickNamePRP?: string;
  /**
   * @example
   * PC
   */
  operateSourceLRP?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * refer
   */
  referPRP?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @example
   * 168.168.168.168
   */
  registerIpPRP?: string;
  /**
   * @remarks
   * requestId。
   * 
   * @example
   * BD6B08EC-1B44-5378-8838-C76A36415C55
   */
  reqIdPBS?: string;
  /**
   * @example
   * 2
   */
  scoreEBS?: number;
  /**
   * @example
   * 1
   */
  scoreSBS?: number;
  /**
   * @example
   * de_afghcf6411
   */
  serviceABS?: string;
  /**
   * @example
   * rg0001
   */
  tagsLBS?: string;
  umidPDI?: string;
  /**
   * @example
   * 00-1C-F0-1D-A7-81
   */
  userAgentPRP?: string;
  /**
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

