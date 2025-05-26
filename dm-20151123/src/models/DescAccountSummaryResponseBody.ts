// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescAccountSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Daily quota
   * 
   * @example
   * 2000
   */
  dailyQuota?: number;
  /**
   * @remarks
   * remaining amount of daily free quota
   * 
   * @example
   * 100
   */
  dailyRemainFreeQuota?: number;
  /**
   * @remarks
   * Dayu status (deprecated, retained for compatibility reasons.)
   * 
   * @example
   * 0
   */
  dayuStatus?: number;
  /**
   * @remarks
   * Number of domains
   * 
   * @example
   * 1
   */
  domains?: number;
  /**
   * @remarks
   * Effective time
   * 
   * @example
   * 0
   */
  enableTimes?: number;
  /**
   * @remarks
   * Number of sending addresses
   * 
   * @example
   * 0
   */
  mailAddresses?: number;
  /**
   * @remarks
   * Maximum level
   * 
   * @example
   * 10
   */
  maxQuotaLevel?: number;
  /**
   * @remarks
   * Monthly quota
   * 
   * @example
   * 60000
   */
  monthQuota?: number;
  /**
   * @remarks
   * Credit level
   * 
   * @example
   * 2
   */
  quotaLevel?: number;
  /**
   * @remarks
   * Number of recipients
   * 
   * @example
   * 0
   */
  receivers?: number;
  /**
   * @remarks
   * Remaining amount of total free quota
   * 
   * @example
   * 1910
   */
  remainFreeQuota?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 82B295BB-7E69-491F-9896-ECEAFF09E1A4
   */
  requestId?: string;
  /**
   * @remarks
   * Deprecated, retained for compatibility reasons.
   * 
   * @example
   * 0
   */
  smsRecord?: number;
  /**
   * @remarks
   * Deprecated, retained for compatibility reasons.
   * 
   * @example
   * 0
   */
  smsSign?: number;
  /**
   * @remarks
   * Deprecated, retained for compatibility reasons.
   * 
   * @example
   * 0
   */
  smsTemplates?: number;
  /**
   * @remarks
   * Number of tags
   * 
   * @example
   * 0
   */
  tags?: number;
  /**
   * @remarks
   * Number of templates
   * 
   * @example
   * 1
   */
  templates?: number;
  /**
   * @remarks
   * User status:
   * 1 Frozen
   * 2 In arrears
   * 4 Restricted from sending
   * 8 Logically deleted
   * 
   * @example
   * 0
   */
  userStatus?: number;
  static names(): { [key: string]: string } {
    return {
      dailyQuota: 'DailyQuota',
      dailyRemainFreeQuota: 'DailyRemainFreeQuota',
      dayuStatus: 'DayuStatus',
      domains: 'Domains',
      enableTimes: 'EnableTimes',
      mailAddresses: 'MailAddresses',
      maxQuotaLevel: 'MaxQuotaLevel',
      monthQuota: 'MonthQuota',
      quotaLevel: 'QuotaLevel',
      receivers: 'Receivers',
      remainFreeQuota: 'RemainFreeQuota',
      requestId: 'RequestId',
      smsRecord: 'SmsRecord',
      smsSign: 'SmsSign',
      smsTemplates: 'SmsTemplates',
      tags: 'Tags',
      templates: 'Templates',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyQuota: 'number',
      dailyRemainFreeQuota: 'number',
      dayuStatus: 'number',
      domains: 'number',
      enableTimes: 'number',
      mailAddresses: 'number',
      maxQuotaLevel: 'number',
      monthQuota: 'number',
      quotaLevel: 'number',
      receivers: 'number',
      remainFreeQuota: 'number',
      requestId: 'string',
      smsRecord: 'number',
      smsSign: 'number',
      smsTemplates: 'number',
      tags: 'number',
      templates: 'number',
      userStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

