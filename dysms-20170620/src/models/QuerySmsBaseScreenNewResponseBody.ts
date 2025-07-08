// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsBaseScreenNewResponseBody extends $dara.Model {
  accountBalance?: string;
  cardAbilityMark?: string;
  cardCustomerMark?: string;
  certifyType?: string;
  channelType?: string;
  childAccountAuth?: string;
  creditValue?: string;
  currentLocale?: string;
  custFrom?: number;
  custName?: string;
  dataAbilityMark?: string;
  dayuMigrateStatus?: number;
  invoiceBalance?: string;
  ipSmsAbilityMark?: string;
  isAccountMerged?: boolean;
  isAliInnerUser?: boolean;
  isChineseUser?: boolean;
  isDayuCustomer?: boolean;
  isDayuTopCust?: boolean;
  isMnsForceMigratingCustomer?: boolean;
  isMnsMigratingCustomer?: boolean;
  isNeedAuth?: boolean;
  isOldFisCust?: boolean;
  isOldSms?: boolean;
  isOpened?: boolean;
  isRemainMnsPackage?: boolean;
  isSendSmsToGlobeUser?: boolean;
  isShortUrlNormalUse?: boolean;
  isShortUrlOpened?: boolean;
  isSilentCust?: boolean;
  osStatus?: number;
  prodCode?: string;
  requestId?: string;
  shortUrlServeTag?: boolean;
  smsMarketingAssistantTag?: boolean;
  textAbilityMark?: string;
  voucherNum?: number;
  static names(): { [key: string]: string } {
    return {
      accountBalance: 'AccountBalance',
      cardAbilityMark: 'CardAbilityMark',
      cardCustomerMark: 'CardCustomerMark',
      certifyType: 'CertifyType',
      channelType: 'ChannelType',
      childAccountAuth: 'ChildAccountAuth',
      creditValue: 'CreditValue',
      currentLocale: 'CurrentLocale',
      custFrom: 'CustFrom',
      custName: 'CustName',
      dataAbilityMark: 'DataAbilityMark',
      dayuMigrateStatus: 'DayuMigrateStatus',
      invoiceBalance: 'InvoiceBalance',
      ipSmsAbilityMark: 'IpSmsAbilityMark',
      isAccountMerged: 'IsAccountMerged',
      isAliInnerUser: 'IsAliInnerUser',
      isChineseUser: 'IsChineseUser',
      isDayuCustomer: 'IsDayuCustomer',
      isDayuTopCust: 'IsDayuTopCust',
      isMnsForceMigratingCustomer: 'IsMnsForceMigratingCustomer',
      isMnsMigratingCustomer: 'IsMnsMigratingCustomer',
      isNeedAuth: 'IsNeedAuth',
      isOldFisCust: 'IsOldFisCust',
      isOldSms: 'IsOldSms',
      isOpened: 'IsOpened',
      isRemainMnsPackage: 'IsRemainMnsPackage',
      isSendSmsToGlobeUser: 'IsSendSmsToGlobeUser',
      isShortUrlNormalUse: 'IsShortUrlNormalUse',
      isShortUrlOpened: 'IsShortUrlOpened',
      isSilentCust: 'IsSilentCust',
      osStatus: 'OsStatus',
      prodCode: 'ProdCode',
      requestId: 'RequestId',
      shortUrlServeTag: 'ShortUrlServeTag',
      smsMarketingAssistantTag: 'SmsMarketingAssistantTag',
      textAbilityMark: 'TextAbilityMark',
      voucherNum: 'VoucherNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountBalance: 'string',
      cardAbilityMark: 'string',
      cardCustomerMark: 'string',
      certifyType: 'string',
      channelType: 'string',
      childAccountAuth: 'string',
      creditValue: 'string',
      currentLocale: 'string',
      custFrom: 'number',
      custName: 'string',
      dataAbilityMark: 'string',
      dayuMigrateStatus: 'number',
      invoiceBalance: 'string',
      ipSmsAbilityMark: 'string',
      isAccountMerged: 'boolean',
      isAliInnerUser: 'boolean',
      isChineseUser: 'boolean',
      isDayuCustomer: 'boolean',
      isDayuTopCust: 'boolean',
      isMnsForceMigratingCustomer: 'boolean',
      isMnsMigratingCustomer: 'boolean',
      isNeedAuth: 'boolean',
      isOldFisCust: 'boolean',
      isOldSms: 'boolean',
      isOpened: 'boolean',
      isRemainMnsPackage: 'boolean',
      isSendSmsToGlobeUser: 'boolean',
      isShortUrlNormalUse: 'boolean',
      isShortUrlOpened: 'boolean',
      isSilentCust: 'boolean',
      osStatus: 'number',
      prodCode: 'string',
      requestId: 'string',
      shortUrlServeTag: 'boolean',
      smsMarketingAssistantTag: 'boolean',
      textAbilityMark: 'string',
      voucherNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

