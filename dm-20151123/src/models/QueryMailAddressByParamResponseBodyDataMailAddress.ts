// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMailAddressByParamResponseBodyDataMailAddress extends $dara.Model {
  /**
   * @remarks
   * Sending address
   * 
   * @example
   * 账户+@+域名
   */
  accountName?: string;
  /**
   * @remarks
   * Account status, frozen: 1, normal: 0.
   * 
   * @example
   * 0
   */
  accountStatus?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * Daily quota limit
   * 
   * @example
   * 10000
   */
  dailyCount?: string;
  /**
   * @remarks
   * Daily quota
   * 
   * @example
   * 100
   */
  dailyReqCount?: string;
  /**
   * @remarks
   * Domain status, 0 indicates normal, 1 indicates abnormal.
   * 
   * @example
   * 0
   */
  domainStatus?: string;
  /**
   * @remarks
   * Mail address ID
   * 
   * @example
   * 12122
   */
  mailAddressId?: string;
  /**
   * @remarks
   * Monthly quota limit
   * 
   * @example
   * 300000
   */
  monthCount?: string;
  /**
   * @remarks
   * Monthly quota
   * 
   * @example
   * 20000
   */
  monthReqCount?: string;
  /**
   * @remarks
   * Reply address
   * 
   * @example
   * test@example.com
   */
  replyAddress?: string;
  /**
   * @remarks
   * Reply address status
   * 
   * @example
   * 0
   */
  replyStatus?: string;
  /**
   * @remarks
   * Type of sending address. Values:
   * 
   * - batch: bulk email
   * - trigger: triggered email
   * 
   * @example
   * batch
   */
  sendtype?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      createTime: 'CreateTime',
      dailyCount: 'DailyCount',
      dailyReqCount: 'DailyReqCount',
      domainStatus: 'DomainStatus',
      mailAddressId: 'MailAddressId',
      monthCount: 'MonthCount',
      monthReqCount: 'MonthReqCount',
      replyAddress: 'ReplyAddress',
      replyStatus: 'ReplyStatus',
      sendtype: 'Sendtype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountStatus: 'string',
      createTime: 'string',
      dailyCount: 'string',
      dailyReqCount: 'string',
      domainStatus: 'string',
      mailAddressId: 'string',
      monthCount: 'string',
      monthReqCount: 'string',
      replyAddress: 'string',
      replyStatus: 'string',
      sendtype: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

