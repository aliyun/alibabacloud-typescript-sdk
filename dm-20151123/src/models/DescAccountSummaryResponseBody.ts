// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescAccountSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The daily quota.
   * 
   * @example
   * 2000
   */
  dailyQuota?: number;
  /**
   * @remarks
   * The remaining daily free quota.
   * 
   * @example
   * 100
   */
  dailyRemainFreeQuota?: number;
  /**
   * @remarks
   * The status of Dayu. This parameter is deprecated and retained for compatibility.
   * 
   * @example
   * 0
   */
  dayuStatus?: number;
  /**
   * @remarks
   * The number of domain names.
   * 
   * @example
   * 1
   */
  domains?: number;
  /**
   * @remarks
   * The effective period.
   * 
   * @example
   * 0
   */
  enableTimes?: number;
  /**
   * @remarks
   * The type of the outbound IP channel.
   * 
   * 1. backup: A backup IP channel that is not actively maintained. Customers using this channel are advised to purchase a dedicated IP for better stability.
   * 
   * 2. normal: A normal IP channel that is continuously maintained by the email delivery team to ensure stable and reliable service.
   * 
   * @example
   * normal
   * 
   * **if can be null:**
   * true
   */
  ipChannelType?: string;
  /**
   * @remarks
   * The number of sender addresses.
   * 
   * @example
   * 0
   */
  mailAddresses?: number;
  /**
   * @remarks
   * The maximum reputation level.
   * 
   * @example
   * 10
   */
  maxQuotaLevel?: number;
  /**
   * @remarks
   * The monthly quota.
   * 
   * @example
   * 60000
   */
  monthQuota?: number;
  /**
   * @remarks
   * The reputation level.
   * 
   * @example
   * 2
   */
  quotaLevel?: number;
  /**
   * @remarks
   * The number of recipients.
   * 
   * @example
   * 0
   */
  receivers?: number;
  /**
   * @remarks
   * The remaining free quota.
   * 
   * @example
   * 1910
   */
  remainFreeQuota?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 82B295BB-7E69-491F-9896-ECEAFF09E1A4
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is deprecated. It is retained for compatibility.
   * 
   * @example
   * 0
   */
  smsRecord?: number;
  /**
   * @remarks
   * This parameter is deprecated. It is retained for compatibility.
   * 
   * @example
   * 0
   */
  smsSign?: number;
  /**
   * @remarks
   * This parameter is deprecated. It is retained for compatibility.
   * 
   * @example
   * 0
   */
  smsTemplates?: number;
  /**
   * @remarks
   * The number of tags.
   * 
   * @example
   * 0
   */
  tags?: number;
  /**
   * @remarks
   * The number of templates.
   * 
   * @example
   * 1
   */
  templates?: number;
  /**
   * @remarks
   * The status of the user. Valid values: 0: Normal. 1: Freeze. 2: Overdue payment. 4: Outbound messages are restricted. 8: The user is logically deleted.
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
      ipChannelType: 'IpChannelType',
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
      ipChannelType: 'string',
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

