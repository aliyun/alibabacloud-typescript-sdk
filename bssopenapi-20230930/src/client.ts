// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddCouponDeductTagRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCouponDeductTagRequestTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DeleteCouponDeductTagRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1501603440974415
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponResponseBodyDataShareUidList extends $dara.Model {
  /**
   * @example
   * 1902671110151254
   */
  uid?: string;
  userNick?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
      userNick: 'UserNick',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
      userNick: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponResponseBodyData extends $dara.Model {
  /**
   * @example
   * 9929.750000
   */
  amount?: string;
  /**
   * @example
   * 59243658
   */
  couponId?: number;
  /**
   * @example
   * 731074910070
   */
  couponNo?: string;
  /**
   * @example
   * CERTAIN
   */
  couponType?: string;
  couponTypeName?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 2021-03-06T15:12Z
   */
  endTime?: string;
  /**
   * @example
   * 2021-03-02T15:12Z
   */
  gmtCreate?: string;
  itemNames?: string[];
  moneyLimit?: string;
  orderTimeRule?: string;
  /**
   * @example
   * 100.00
   */
  remainAmount?: string;
  remark?: string;
  shareUidList?: DescribeCouponResponseBodyDataShareUidList[];
  /**
   * @example
   * true
   */
  showSetDeductTagButton?: boolean;
  /**
   * @example
   * CHINA
   */
  site?: string;
  siteName?: string;
  /**
   * @example
   * 2021-03-02T15:12Z
   */
  startTime?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @example
   * 1902671110151254
   */
  suitAccount?: string;
  /**
   * @example
   * all
   */
  suitItemType?: string;
  /**
   * @example
   * UNIVERSAL
   */
  universalType?: string;
  yhOrderTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      couponId: 'CouponId',
      couponNo: 'CouponNo',
      couponType: 'CouponType',
      couponTypeName: 'CouponTypeName',
      currency: 'Currency',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      itemNames: 'ItemNames',
      moneyLimit: 'MoneyLimit',
      orderTimeRule: 'OrderTimeRule',
      remainAmount: 'RemainAmount',
      remark: 'Remark',
      shareUidList: 'ShareUidList',
      showSetDeductTagButton: 'ShowSetDeductTagButton',
      site: 'Site',
      siteName: 'SiteName',
      startTime: 'StartTime',
      status: 'Status',
      suitAccount: 'SuitAccount',
      suitItemType: 'SuitItemType',
      universalType: 'UniversalType',
      yhOrderTypes: 'YhOrderTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      couponId: 'number',
      couponNo: 'string',
      couponType: 'string',
      couponTypeName: 'string',
      currency: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      itemNames: { 'type': 'array', 'itemType': 'string' },
      moneyLimit: 'string',
      orderTimeRule: 'string',
      remainAmount: 'string',
      remark: 'string',
      shareUidList: { 'type': 'array', 'itemType': DescribeCouponResponseBodyDataShareUidList },
      showSetDeductTagButton: 'boolean',
      site: 'string',
      siteName: 'string',
      startTime: 'string',
      status: 'string',
      suitAccount: 'string',
      suitItemType: 'string',
      universalType: 'string',
      yhOrderTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.itemNames)) {
      $dara.Model.validateArray(this.itemNames);
    }
    if(Array.isArray(this.shareUidList)) {
      $dara.Model.validateArray(this.shareUidList);
    }
    if(Array.isArray(this.yhOrderTypes)) {
      $dara.Model.validateArray(this.yhOrderTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponItemListRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1004064243473974
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponItemListResponseBodyData extends $dara.Model {
  /**
   * @example
   * vm
   */
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountAvailableAmountResponseBodyExtendLedgerList extends $dara.Model {
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 应付对冲账本
   */
  ledgerName?: string;
  /**
   * @example
   * 50
   */
  originalAmount?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      ledgerName: 'LedgerName',
      originalAmount: 'OriginalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      ledgerName: 'string',
      originalAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountAvailableAmountResponseBodyOriginalCashAmountList extends $dara.Model {
  /**
   * @example
   * 10
   */
  amount?: string;
  /**
   * @example
   * USD
   */
  currency?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanRecycleAmountResponseBodyRecycleToFundAccountList extends $dara.Model {
  /**
   * @example
   * 122323121
   */
  fundAccountId?: string;
  /**
   * @example
   * 云某的账户
   */
  fundAccountName?: string;
  /**
   * @example
   * 183221321
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @example
   * 120
   */
  maxRecyclableAmount?: string;
  /**
   * @example
   * 120
   */
  originalTransferRemainAmount?: string;
  static names(): { [key: string]: string } {
    return {
      fundAccountId: 'FundAccountId',
      fundAccountName: 'FundAccountName',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      maxRecyclableAmount: 'MaxRecyclableAmount',
      originalTransferRemainAmount: 'OriginalTransferRemainAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAccountId: 'string',
      fundAccountName: 'string',
      fundAccountOwnerAccountId: 'string',
      maxRecyclableAmount: 'string',
      originalTransferRemainAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountTransactionDetailsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 5
   */
  balance?: string;
  /**
   * @example
   * 2323203243
   */
  billNumber?: string;
  /**
   * @example
   * 20244389232
   */
  channelTransactionNumber?: string;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
   * @example
   * 23473943
   */
  fundAccountEcid?: string;
  /**
   * @example
   * 1232121
   */
  fundAccountId?: number;
  /**
   * @example
   * 云某的名称
   */
  fundAccountName?: string;
  /**
   * @example
   * 32343231
   */
  fundAccountOwnerAccountId?: number;
  /**
   * @example
   * ACCT_BOOK
   */
  fundType?: string;
  /**
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @example
   * 订单备注
   */
  remark?: string;
  /**
   * @example
   * 26842
   */
  site?: string;
  /**
   * @example
   * 186****3975
   */
  transactionAccount?: string;
  /**
   * @example
   * 10
   */
  transactionAmount?: string;
  /**
   * @example
   * ALIPAY
   */
  transactionChannel?: string;
  /**
   * @example
   * IN
   */
  transactionDirection?: string;
  /**
   * @example
   * 5423121
   */
  transactionNumber?: number;
  /**
   * @example
   * 2024-12-01 12:00:00
   */
  transactionTime?: string;
  /**
   * @example
   * CHARGE
   */
  transactionType?: string;
  static names(): { [key: string]: string } {
    return {
      balance: 'Balance',
      billNumber: 'BillNumber',
      channelTransactionNumber: 'ChannelTransactionNumber',
      currency: 'Currency',
      fundAccountEcid: 'FundAccountEcid',
      fundAccountId: 'FundAccountId',
      fundAccountName: 'FundAccountName',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      fundType: 'FundType',
      nbid: 'Nbid',
      remark: 'Remark',
      site: 'Site',
      transactionAccount: 'TransactionAccount',
      transactionAmount: 'TransactionAmount',
      transactionChannel: 'TransactionChannel',
      transactionDirection: 'TransactionDirection',
      transactionNumber: 'TransactionNumber',
      transactionTime: 'TransactionTime',
      transactionType: 'TransactionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balance: 'string',
      billNumber: 'string',
      channelTransactionNumber: 'string',
      currency: 'string',
      fundAccountEcid: 'string',
      fundAccountId: 'number',
      fundAccountName: 'string',
      fundAccountOwnerAccountId: 'number',
      fundType: 'string',
      nbid: 'string',
      remark: 'string',
      site: 'string',
      transactionAccount: 'string',
      transactionAmount: 'string',
      transactionChannel: 'string',
      transactionDirection: 'string',
      transactionNumber: 'number',
      transactionTime: 'string',
      transactionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponDeductTagRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponDeductTagResponseBodyData extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListFundAccountResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-12-30 12:00:00
   */
  createDate?: string;
  /**
   * @example
   * 1232121
   */
  fundAccountAdminAccountId?: string;
  /**
   * @example
   * 云某的账户
   */
  fundAccountAdminAccountName?: string;
  /**
   * @example
   * 1022231
   */
  fundAccountId?: string;
  /**
   * @example
   * 云某的账户
   */
  fundAccountName?: string;
  /**
   * @example
   * 132123211
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @example
   * VALID
   */
  fundAccountStatus?: string;
  /**
   * @example
   * DIRECT_USER
   */
  fundAccountType?: string;
  /**
   * @example
   * 2684210001
   */
  nbid?: string;
  permissions?: string[];
  /**
   * @example
   * 26842
   */
  site?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      fundAccountAdminAccountId: 'FundAccountAdminAccountId',
      fundAccountAdminAccountName: 'FundAccountAdminAccountName',
      fundAccountId: 'FundAccountId',
      fundAccountName: 'FundAccountName',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      fundAccountStatus: 'FundAccountStatus',
      fundAccountType: 'FundAccountType',
      nbid: 'Nbid',
      permissions: 'Permissions',
      site: 'Site',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      fundAccountAdminAccountId: 'string',
      fundAccountAdminAccountName: 'string',
      fundAccountId: 'string',
      fundAccountName: 'string',
      fundAccountOwnerAccountId: 'string',
      fundAccountStatus: 'string',
      fundAccountType: 'string',
      nbid: 'string',
      permissions: { 'type': 'array', 'itemType': 'string' },
      site: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFundAccountPayRelationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 32812132121
   */
  accountId?: string;
  /**
   * @example
   * 云某的名称
   */
  accountName?: string;
  /**
   * @example
   * 213231232
   */
  ecid?: string;
  /**
   * @example
   * 2024-12-01 12:00:10
   */
  effectiveTime?: string;
  /**
   * @example
   * 123231213
   */
  fundAccountId?: string;
  /**
   * @example
   * 312328912
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @example
   * 2025-01-01 12:12:12
   */
  ineffectiveTime?: string;
  /**
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @example
   * 云某的名称
   */
  operatorName?: string;
  /**
   * @example
   * 1232343423
   */
  operatorNo?: string;
  /**
   * @example
   * aliyun_pk
   */
  operatorType?: string;
  /**
   * @example
   * PAYMENT
   */
  relationType?: string;
  /**
   * @example
   * 26842
   */
  site?: string;
  /**
   * @example
   * valid
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      ecid: 'Ecid',
      effectiveTime: 'EffectiveTime',
      fundAccountId: 'FundAccountId',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      ineffectiveTime: 'IneffectiveTime',
      nbid: 'Nbid',
      operatorName: 'OperatorName',
      operatorNo: 'OperatorNo',
      operatorType: 'OperatorType',
      relationType: 'RelationType',
      site: 'Site',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      ecid: 'string',
      effectiveTime: 'string',
      fundAccountId: 'string',
      fundAccountOwnerAccountId: 'string',
      ineffectiveTime: 'string',
      nbid: 'string',
      operatorName: 'string',
      operatorNo: 'string',
      operatorType: 'string',
      relationType: 'string',
      site: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSavingPlanUserDeductRuleRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSavingPlanUserDeductRuleRequestUserDeductRules extends $dara.Model {
  commodityCode?: string;
  moduleCode?: string;
  skipDeduct?: boolean;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      moduleCode: 'ModuleCode',
      skipDeduct: 'SkipDeduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      moduleCode: 'string',
      skipDeduct: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCouponDeductTagRequest extends $dara.Model {
  couponId?: string;
  ecIdAccountIds?: AddCouponDeductTagRequestEcIdAccountIds[];
  nbid?: string;
  tags?: AddCouponDeductTagRequestTags[];
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': AddCouponDeductTagRequestEcIdAccountIds },
      nbid: 'string',
      tags: { 'type': 'array', 'itemType': AddCouponDeductTagRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCouponDeductTagShrinkRequest extends $dara.Model {
  couponId?: string;
  ecIdAccountIdsShrink?: string;
  nbid?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      nbid: 'Nbid',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      ecIdAccountIdsShrink: 'string',
      nbid: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCouponDeductTagResponseBody extends $dara.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCouponDeductTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCouponDeductTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCouponDeductTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelFundAccountLowAvailableAmountAlarmRequest extends $dara.Model {
  /**
   * @example
   * 123321123
   */
  fundAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelFundAccountLowAvailableAmountAlarmResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * DFC1F7F9-3BA9-BA4D-2F2E653
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      metadata: 'any',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelFundAccountLowAvailableAmountAlarmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelFundAccountLowAvailableAmountAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelFundAccountLowAvailableAmountAlarmResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFundAccountTransferRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  amount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cash
   */
  financeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123212323
   */
  fromFundAccountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 转账的备注
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11112231
   */
  toFundAccountId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * grant
   */
  transferType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
      financeType: 'FinanceType',
      fromFundAccountId: 'FromFundAccountId',
      remark: 'Remark',
      toFundAccountId: 'ToFundAccountId',
      transferType: 'TransferType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
      financeType: 'string',
      fromFundAccountId: 'number',
      remark: 'string',
      toFundAccountId: 'number',
      transferType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFundAccountTransferResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 1BB79-5B23-3EA-BB4F-352F93E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFundAccountTransferResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFundAccountTransferResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFundAccountTransferResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCouponDeductTagRequest extends $dara.Model {
  couponId?: string;
  ecIdAccountIds?: DeleteCouponDeductTagRequestEcIdAccountIds[];
  nbid?: string;
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': DeleteCouponDeductTagRequestEcIdAccountIds },
      nbid: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCouponDeductTagShrinkRequest extends $dara.Model {
  couponId?: string;
  ecIdAccountIdsShrink?: string;
  nbid?: string;
  tagKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      nbid: 'Nbid',
      tagKeysShrink: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      ecIdAccountIdsShrink: 'string',
      nbid: 'string',
      tagKeysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCouponDeductTagResponseBody extends $dara.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCouponDeductTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCouponDeductTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCouponDeductTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponRequest extends $dara.Model {
  /**
   * @example
   * 351430260343
   */
  couponId?: number;
  /**
   * @example
   * 554863270150
   */
  couponNo?: string;
  /**
   * @example
   * CERTAIN
   */
  couponType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ecIdAccountIds?: DescribeCouponRequestEcIdAccountIds[];
  /**
   * @example
   * 1708423156000
   */
  effectiveEndTime?: number;
  /**
   * @example
   * 1684750028000
   */
  effectiveStartTime?: number;
  /**
   * @example
   * 1708423156000
   */
  expireEndDate?: number;
  /**
   * @example
   * 1684750028000
   */
  expireStartDate?: number;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      couponNo: 'CouponNo',
      couponType: 'CouponType',
      currentPage: 'CurrentPage',
      ecIdAccountIds: 'EcIdAccountIds',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      expireEndDate: 'ExpireEndDate',
      expireStartDate: 'ExpireStartDate',
      nbid: 'Nbid',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'number',
      couponNo: 'string',
      couponType: 'string',
      currentPage: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': DescribeCouponRequestEcIdAccountIds },
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      expireEndDate: 'number',
      expireStartDate: 'number',
      nbid: 'string',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponShrinkRequest extends $dara.Model {
  /**
   * @example
   * 351430260343
   */
  couponId?: number;
  /**
   * @example
   * 554863270150
   */
  couponNo?: string;
  /**
   * @example
   * CERTAIN
   */
  couponType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  ecIdAccountIdsShrink?: string;
  /**
   * @example
   * 1708423156000
   */
  effectiveEndTime?: number;
  /**
   * @example
   * 1684750028000
   */
  effectiveStartTime?: number;
  /**
   * @example
   * 1708423156000
   */
  expireEndDate?: number;
  /**
   * @example
   * 1684750028000
   */
  expireStartDate?: number;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * AVAILABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      couponNo: 'CouponNo',
      couponType: 'CouponType',
      currentPage: 'CurrentPage',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      expireEndDate: 'ExpireEndDate',
      expireStartDate: 'ExpireStartDate',
      nbid: 'Nbid',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'number',
      couponNo: 'string',
      couponType: 'string',
      currentPage: 'number',
      ecIdAccountIdsShrink: 'string',
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      expireEndDate: 'number',
      expireStartDate: 'number',
      nbid: 'string',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: DescribeCouponResponseBodyData[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * C880B065-A781-4F19-B6DD-3E0E3B715C64
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': DescribeCouponResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCouponResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCouponResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponItemListRequest extends $dara.Model {
  /**
   * @example
   * 59104570
   */
  couponId?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  ecIdAccountIds?: DescribeCouponItemListRequestEcIdAccountIds[];
  name?: string;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      currentPage: 'CurrentPage',
      ecIdAccountIds: 'EcIdAccountIds',
      name: 'Name',
      nbid: 'Nbid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'number',
      currentPage: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': DescribeCouponItemListRequestEcIdAccountIds },
      name: 'string',
      nbid: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponItemListShrinkRequest extends $dara.Model {
  /**
   * @example
   * 59104570
   */
  couponId?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  ecIdAccountIdsShrink?: string;
  name?: string;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      currentPage: 'CurrentPage',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      name: 'Name',
      nbid: 'Nbid',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'number',
      currentPage: 'number',
      ecIdAccountIdsShrink: 'string',
      name: 'string',
      nbid: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponItemListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: DescribeCouponItemListResponseBodyData[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * EAE08A27-386C-579E-966D-8853EC3C5D0E
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': DescribeCouponItemListResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponItemListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCouponItemListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCouponItemListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountAvailableAmountRequest extends $dara.Model {
  /**
   * @example
   * 12332112
   */
  fundAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountAvailableAmountResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  availableAmount?: string;
  /**
   * @example
   * 50
   */
  availableCreditAmount?: string;
  /**
   * @example
   * 0
   */
  bankAcceptanceAmount?: string;
  /**
   * @example
   * 50
   */
  cashAmount?: string;
  /**
   * @example
   * 100
   */
  creditAmount?: string;
  /**
   * @example
   * 0
   */
  creditRefundAmount?: string;
  creditUser?: boolean;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 20
   */
  currentMonthUnclearedAmount?: string;
  extendLedgerList?: GetFundAccountAvailableAmountResponseBodyExtendLedgerList[];
  /**
   * @example
   * 12332112
   */
  fundAccountId?: string;
  /**
   * @example
   * 1344312434
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @example
   * valid
   */
  fundAccountStatus?: string;
  /**
   * @example
   * REDIRECT_USER
   */
  fundAccountType?: string;
  /**
   * @example
   * 30
   */
  historyMonthUnclearedAmount?: string;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 0
   */
  negativeBillAmount?: string;
  originalCashAmountList?: GetFundAccountAvailableAmountResponseBodyOriginalCashAmountList[];
  /**
   * @example
   * 20
   */
  quotaAmount?: string;
  /**
   * @example
   * 10
   */
  quotaConsumedAmount?: string;
  /**
   * @example
   * F96A2D13-7509-5DF9-A60E-E7E3A3CB68E8
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  unclearedAmount?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      availableCreditAmount: 'AvailableCreditAmount',
      bankAcceptanceAmount: 'BankAcceptanceAmount',
      cashAmount: 'CashAmount',
      creditAmount: 'CreditAmount',
      creditRefundAmount: 'CreditRefundAmount',
      creditUser: 'CreditUser',
      currency: 'Currency',
      currentMonthUnclearedAmount: 'CurrentMonthUnclearedAmount',
      extendLedgerList: 'ExtendLedgerList',
      fundAccountId: 'FundAccountId',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      fundAccountStatus: 'FundAccountStatus',
      fundAccountType: 'FundAccountType',
      historyMonthUnclearedAmount: 'HistoryMonthUnclearedAmount',
      metadata: 'Metadata',
      negativeBillAmount: 'NegativeBillAmount',
      originalCashAmountList: 'OriginalCashAmountList',
      quotaAmount: 'QuotaAmount',
      quotaConsumedAmount: 'QuotaConsumedAmount',
      requestId: 'RequestId',
      unclearedAmount: 'UnclearedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'string',
      availableCreditAmount: 'string',
      bankAcceptanceAmount: 'string',
      cashAmount: 'string',
      creditAmount: 'string',
      creditRefundAmount: 'string',
      creditUser: 'boolean',
      currency: 'string',
      currentMonthUnclearedAmount: 'string',
      extendLedgerList: { 'type': 'array', 'itemType': GetFundAccountAvailableAmountResponseBodyExtendLedgerList },
      fundAccountId: 'string',
      fundAccountOwnerAccountId: 'string',
      fundAccountStatus: 'string',
      fundAccountType: 'string',
      historyMonthUnclearedAmount: 'string',
      metadata: 'any',
      negativeBillAmount: 'string',
      originalCashAmountList: { 'type': 'array', 'itemType': GetFundAccountAvailableAmountResponseBodyOriginalCashAmountList },
      quotaAmount: 'string',
      quotaConsumedAmount: 'string',
      requestId: 'string',
      unclearedAmount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendLedgerList)) {
      $dara.Model.validateArray(this.extendLedgerList);
    }
    if(Array.isArray(this.originalCashAmountList)) {
      $dara.Model.validateArray(this.originalCashAmountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountAvailableAmountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFundAccountAvailableAmountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFundAccountAvailableAmountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanAllocateCreditAmountRequest extends $dara.Model {
  /**
   * @example
   * 1233231
   */
  fundAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanAllocateCreditAmountResponseBody extends $dara.Model {
  /**
   * @example
   * 2032123221
   */
  ecid?: string;
  /**
   * @example
   * 300
   */
  ecidAllocatedCreditAmount?: string;
  /**
   * @example
   * 1000
   */
  ecidCreditAmount?: string;
  /**
   * @example
   * 202321232
   */
  fundAccountEcid?: string;
  /**
   * @example
   * 12332112
   */
  fundAccountId?: number;
  /**
   * @example
   * 云某的名称
   */
  fundAccountName?: string;
  /**
   * @example
   * 123433121
   */
  fundAccountOwnerAccountId?: number;
  /**
   * @example
   * 1500
   */
  maxCanAllocateCreditAmount?: string;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 200
   */
  minCanAllocateCreditAmount?: string;
  /**
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @example
   * CC706AAC-75A6-55B5-9AB7-7D171C6C7655
   */
  requestId?: string;
  /**
   * @example
   * 26842
   */
  site?: string;
  static names(): { [key: string]: string } {
    return {
      ecid: 'Ecid',
      ecidAllocatedCreditAmount: 'EcidAllocatedCreditAmount',
      ecidCreditAmount: 'EcidCreditAmount',
      fundAccountEcid: 'FundAccountEcid',
      fundAccountId: 'FundAccountId',
      fundAccountName: 'FundAccountName',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      maxCanAllocateCreditAmount: 'MaxCanAllocateCreditAmount',
      metadata: 'Metadata',
      minCanAllocateCreditAmount: 'MinCanAllocateCreditAmount',
      nbid: 'Nbid',
      requestId: 'RequestId',
      site: 'Site',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecid: 'string',
      ecidAllocatedCreditAmount: 'string',
      ecidCreditAmount: 'string',
      fundAccountEcid: 'string',
      fundAccountId: 'number',
      fundAccountName: 'string',
      fundAccountOwnerAccountId: 'number',
      maxCanAllocateCreditAmount: 'string',
      metadata: 'any',
      minCanAllocateCreditAmount: 'string',
      nbid: 'string',
      requestId: 'string',
      site: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanAllocateCreditAmountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFundAccountCanAllocateCreditAmountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFundAccountCanAllocateCreditAmountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanRecycleAmountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 122321223
   */
  recycleFromFundAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      recycleFromFundAccountId: 'RecycleFromFundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      recycleFromFundAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanRecycleAmountResponseBody extends $dara.Model {
  /**
   * @example
   * 300
   */
  availableAmount?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 1232122132
   */
  recycleFromFundAccountId?: string;
  recycleToFundAccountList?: GetFundAccountCanRecycleAmountResponseBodyRecycleToFundAccountList[];
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  transferAmount?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      currency: 'Currency',
      metadata: 'Metadata',
      recycleFromFundAccountId: 'RecycleFromFundAccountId',
      recycleToFundAccountList: 'RecycleToFundAccountList',
      requestId: 'RequestId',
      transferAmount: 'TransferAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'string',
      currency: 'string',
      metadata: 'any',
      recycleFromFundAccountId: 'string',
      recycleToFundAccountList: { 'type': 'array', 'itemType': GetFundAccountCanRecycleAmountResponseBodyRecycleToFundAccountList },
      requestId: 'string',
      transferAmount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recycleToFundAccountList)) {
      $dara.Model.validateArray(this.recycleToFundAccountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanRecycleAmountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFundAccountCanRecycleAmountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFundAccountCanRecycleAmountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanTransferAmountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 123212
   */
  fundAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      fundAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanTransferAmountResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  availableAmount?: string;
  /**
   * @example
   * 500
   */
  cashAmount?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 2032121324
   */
  fundAccountEcid?: string;
  /**
   * @example
   * 12332112
   */
  fundAccountId?: number;
  /**
   * @example
   * 云某的账户
   */
  fundAccountName?: string;
  /**
   * @example
   * 154738212323
   */
  fundAccountOwnerAccountId?: number;
  /**
   * @example
   * 100
   */
  maxTransferableAmount?: string;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @example
   * 26842
   */
  site?: string;
  /**
   * @example
   * 100
   */
  transferAmount?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      cashAmount: 'CashAmount',
      currency: 'Currency',
      fundAccountEcid: 'FundAccountEcid',
      fundAccountId: 'FundAccountId',
      fundAccountName: 'FundAccountName',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      maxTransferableAmount: 'MaxTransferableAmount',
      metadata: 'Metadata',
      nbid: 'Nbid',
      requestId: 'RequestId',
      site: 'Site',
      transferAmount: 'TransferAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'string',
      cashAmount: 'string',
      currency: 'string',
      fundAccountEcid: 'string',
      fundAccountId: 'number',
      fundAccountName: 'string',
      fundAccountOwnerAccountId: 'number',
      maxTransferableAmount: 'string',
      metadata: 'any',
      nbid: 'string',
      requestId: 'string',
      site: 'string',
      transferAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanTransferAmountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFundAccountCanTransferAmountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFundAccountCanTransferAmountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanWithdrawAmountRequest extends $dara.Model {
  /**
   * @example
   * 123212232
   */
  fundAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanWithdrawAmountResponseBody extends $dara.Model {
  /**
   * @example
   * 400
   */
  canOriginalWithdrawAmount?: string;
  /**
   * @example
   * 500
   */
  canWithdrawAmount?: string;
  /**
   * @example
   * 100
   */
  cannotOriginalWithdrawAmount?: string;
  /**
   * @example
   * 1000
   */
  cashAmount?: string;
  /**
   * @example
   * 100
   */
  creditMemoAmount?: string;
  /**
   * @example
   * 200
   */
  currentMonthUnclearedAmount?: string;
  /**
   * @example
   * 100
   */
  historyMonthUnclearedAmount?: string;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 100
   */
  payAsYouGoReversedAmount?: string;
  /**
   * @example
   * DF58589C-A06C-4224-8615-7797E6474FA3
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  transferAmount?: string;
  static names(): { [key: string]: string } {
    return {
      canOriginalWithdrawAmount: 'CanOriginalWithdrawAmount',
      canWithdrawAmount: 'CanWithdrawAmount',
      cannotOriginalWithdrawAmount: 'CannotOriginalWithdrawAmount',
      cashAmount: 'CashAmount',
      creditMemoAmount: 'CreditMemoAmount',
      currentMonthUnclearedAmount: 'CurrentMonthUnclearedAmount',
      historyMonthUnclearedAmount: 'HistoryMonthUnclearedAmount',
      metadata: 'Metadata',
      payAsYouGoReversedAmount: 'PayAsYouGoReversedAmount',
      requestId: 'RequestId',
      transferAmount: 'TransferAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canOriginalWithdrawAmount: 'string',
      canWithdrawAmount: 'string',
      cannotOriginalWithdrawAmount: 'string',
      cashAmount: 'string',
      creditMemoAmount: 'string',
      currentMonthUnclearedAmount: 'string',
      historyMonthUnclearedAmount: 'string',
      metadata: 'any',
      payAsYouGoReversedAmount: 'string',
      requestId: 'string',
      transferAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountCanWithdrawAmountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFundAccountCanWithdrawAmountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFundAccountCanWithdrawAmountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountLowAvailableAmountAlarmRequest extends $dara.Model {
  /**
   * @example
   * 12332112
   */
  fundAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountLowAvailableAmountAlarmResponseBody extends $dara.Model {
  alarmEnabled?: boolean;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  thresholdAmount?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEnabled: 'AlarmEnabled',
      metadata: 'Metadata',
      requestId: 'RequestId',
      thresholdAmount: 'ThresholdAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEnabled: 'boolean',
      metadata: 'any',
      requestId: 'string',
      thresholdAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountLowAvailableAmountAlarmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFundAccountLowAvailableAmountAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFundAccountLowAvailableAmountAlarmResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountTransactionDetailsRequest extends $dara.Model {
  /**
   * @example
   * 2023212312321
   */
  billNumber?: string;
  /**
   * @example
   * 20250312334312322
   */
  channelTransactionNumber?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1735664561000
   */
  endTime?: number;
  /**
   * @example
   * 123221232
   */
  fundAccountId?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1735664461000
   */
  startTime?: number;
  transactionChannelList?: string[];
  /**
   * @example
   * IN
   */
  transactionDirection?: string;
  /**
   * @example
   * 543231231
   */
  transactionNumber?: number;
  /**
   * @example
   * CHARGE
   */
  transactionType?: string;
  transactionTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      billNumber: 'BillNumber',
      channelTransactionNumber: 'ChannelTransactionNumber',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      fundAccountId: 'FundAccountId',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      transactionChannelList: 'TransactionChannelList',
      transactionDirection: 'TransactionDirection',
      transactionNumber: 'TransactionNumber',
      transactionType: 'TransactionType',
      transactionTypeList: 'TransactionTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billNumber: 'string',
      channelTransactionNumber: 'string',
      currentPage: 'number',
      endTime: 'number',
      fundAccountId: 'number',
      pageSize: 'number',
      startTime: 'number',
      transactionChannelList: { 'type': 'array', 'itemType': 'string' },
      transactionDirection: 'string',
      transactionNumber: 'number',
      transactionType: 'string',
      transactionTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.transactionChannelList)) {
      $dara.Model.validateArray(this.transactionChannelList);
    }
    if(Array.isArray(this.transactionTypeList)) {
      $dara.Model.validateArray(this.transactionTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountTransactionDetailsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 2023212312321
   */
  billNumber?: string;
  /**
   * @example
   * 20250312334312322
   */
  channelTransactionNumber?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1735664561000
   */
  endTime?: number;
  /**
   * @example
   * 123221232
   */
  fundAccountId?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1735664461000
   */
  startTime?: number;
  transactionChannelListShrink?: string;
  /**
   * @example
   * IN
   */
  transactionDirection?: string;
  /**
   * @example
   * 543231231
   */
  transactionNumber?: number;
  /**
   * @example
   * CHARGE
   */
  transactionType?: string;
  transactionTypeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      billNumber: 'BillNumber',
      channelTransactionNumber: 'ChannelTransactionNumber',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      fundAccountId: 'FundAccountId',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      transactionChannelListShrink: 'TransactionChannelList',
      transactionDirection: 'TransactionDirection',
      transactionNumber: 'TransactionNumber',
      transactionType: 'TransactionType',
      transactionTypeListShrink: 'TransactionTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billNumber: 'string',
      channelTransactionNumber: 'string',
      currentPage: 'number',
      endTime: 'number',
      fundAccountId: 'number',
      pageSize: 'number',
      startTime: 'number',
      transactionChannelListShrink: 'string',
      transactionDirection: 'string',
      transactionNumber: 'number',
      transactionType: 'string',
      transactionTypeListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountTransactionDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: GetFundAccountTransactionDetailsResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * D6E068C3-25BC-455A-85FE-45F0B22ECB1F
   */
  requestId?: string;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      metadata: 'Metadata',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': GetFundAccountTransactionDetailsResponseBodyData },
      metadata: 'any',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFundAccountTransactionDetailsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFundAccountTransactionDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFundAccountTransactionDetailsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponDeductTagRequest extends $dara.Model {
  couponId?: string;
  ecIdAccountIds?: ListCouponDeductTagRequestEcIdAccountIds[];
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      ecIdAccountIds: { 'type': 'array', 'itemType': ListCouponDeductTagRequestEcIdAccountIds },
      nbid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponDeductTagShrinkRequest extends $dara.Model {
  couponId?: string;
  ecIdAccountIdsShrink?: string;
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      ecIdAccountIdsShrink: 'string',
      nbid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponDeductTagResponseBody extends $dara.Model {
  data?: ListCouponDeductTagResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListCouponDeductTagResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCouponDeductTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCouponDeductTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCouponDeductTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFundAccountRequest extends $dara.Model {
  /**
   * @example
   * 2084210001
   */
  nbid?: string;
  queryOnlyInUse?: boolean;
  queryOnlyManage?: boolean;
  static names(): { [key: string]: string } {
    return {
      nbid: 'Nbid',
      queryOnlyInUse: 'QueryOnlyInUse',
      queryOnlyManage: 'QueryOnlyManage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nbid: 'string',
      queryOnlyInUse: 'boolean',
      queryOnlyManage: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFundAccountResponseBody extends $dara.Model {
  data?: ListFundAccountResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListFundAccountResponseBodyData },
      metadata: 'any',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFundAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFundAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFundAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFundAccountPayRelationRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12323123
   */
  fundAccountId?: string;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * valid
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      fundAccountId: 'FundAccountId',
      nbid: 'Nbid',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      fundAccountId: 'string',
      nbid: 'string',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFundAccountPayRelationResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListFundAccountPayRelationResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      metadata: 'Metadata',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListFundAccountPayRelationResponseBodyData },
      metadata: 'any',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFundAccountPayRelationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFundAccountPayRelationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFundAccountPayRelationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFundAccountCreditAmountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 500
   */
  creditAmount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 1232312
   */
  fundAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      creditAmount: 'CreditAmount',
      currency: 'Currency',
      fundAccountId: 'FundAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creditAmount: 'string',
      currency: 'string',
      fundAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFundAccountCreditAmountResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFundAccountCreditAmountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetFundAccountCreditAmountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetFundAccountCreditAmountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFundAccountLowAvailableAmountAlarmRequest extends $dara.Model {
  /**
   * @example
   * 12321213
   */
  fundAccountId?: number;
  /**
   * @example
   * 100
   */
  thresholdAmount?: string;
  static names(): { [key: string]: string } {
    return {
      fundAccountId: 'FundAccountId',
      thresholdAmount: 'ThresholdAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fundAccountId: 'number',
      thresholdAmount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFundAccountLowAvailableAmountAlarmResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 08108BF5-1AA3-518E-9986-95A3616E8DA9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      metadata: 'any',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFundAccountLowAvailableAmountAlarmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetFundAccountLowAvailableAmountAlarmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetFundAccountLowAvailableAmountAlarmResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSavingPlanUserDeductRuleRequest extends $dara.Model {
  ecIdAccountIds?: SetSavingPlanUserDeductRuleRequestEcIdAccountIds[];
  nbid?: string;
  spnInstanceCode?: string;
  userDeductRules?: SetSavingPlanUserDeductRuleRequestUserDeductRules[];
  static names(): { [key: string]: string } {
    return {
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
      spnInstanceCode: 'SpnInstanceCode',
      userDeductRules: 'UserDeductRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecIdAccountIds: { 'type': 'array', 'itemType': SetSavingPlanUserDeductRuleRequestEcIdAccountIds },
      nbid: 'string',
      spnInstanceCode: 'string',
      userDeductRules: { 'type': 'array', 'itemType': SetSavingPlanUserDeductRuleRequestUserDeductRules },
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(Array.isArray(this.userDeductRules)) {
      $dara.Model.validateArray(this.userDeductRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSavingPlanUserDeductRuleShrinkRequest extends $dara.Model {
  ecIdAccountIdsShrink?: string;
  nbid?: string;
  spnInstanceCode?: string;
  userDeductRulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      nbid: 'Nbid',
      spnInstanceCode: 'SpnInstanceCode',
      userDeductRulesShrink: 'UserDeductRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecIdAccountIdsShrink: 'string',
      nbid: 'string',
      spnInstanceCode: 'string',
      userDeductRulesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSavingPlanUserDeductRuleResponseBody extends $dara.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSavingPlanUserDeductRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetSavingPlanUserDeductRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetSavingPlanUserDeductRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "business.aliyuncs.com",
      'cn-shanghai': "business.aliyuncs.com",
      'ap-southeast-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "business.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2-pop': "business.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "business.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "business.ap-southeast-1.aliyuncs.com",
      'cn-beijing': "business.aliyuncs.com",
      'cn-beijing-finance-1': "business.aliyuncs.com",
      'cn-beijing-finance-pop': "business.aliyuncs.com",
      'cn-beijing-gov-1': "business.aliyuncs.com",
      'cn-beijing-nu16-b01': "business.aliyuncs.com",
      'cn-chengdu': "business.aliyuncs.com",
      'cn-edge-1': "business.aliyuncs.com",
      'cn-fujian': "business.aliyuncs.com",
      'cn-haidian-cm12-c01': "business.aliyuncs.com",
      'cn-hangzhou-bj-b01': "business.aliyuncs.com",
      'cn-hangzhou-finance': "business.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "business.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "business.aliyuncs.com",
      'cn-hangzhou-test-306': "business.aliyuncs.com",
      'cn-hongkong': "business.aliyuncs.com",
      'cn-hongkong-finance-pop': "business.aliyuncs.com",
      'cn-huhehaote': "business.aliyuncs.com",
      'cn-huhehaote-nebula-1': "business.aliyuncs.com",
      'cn-north-2-gov-1': "business.aliyuncs.com",
      'cn-qingdao': "business.aliyuncs.com",
      'cn-qingdao-nebula': "business.aliyuncs.com",
      'cn-shanghai-et15-b01': "business.aliyuncs.com",
      'cn-shanghai-et2-b01': "business.aliyuncs.com",
      'cn-shanghai-finance-1': "business.aliyuncs.com",
      'cn-shanghai-inner': "business.aliyuncs.com",
      'cn-shanghai-internal-test-1': "business.aliyuncs.com",
      'cn-shenzhen': "business.aliyuncs.com",
      'cn-shenzhen-finance-1': "business.aliyuncs.com",
      'cn-shenzhen-inner': "business.aliyuncs.com",
      'cn-shenzhen-st4-d01': "business.aliyuncs.com",
      'cn-shenzhen-su18-b01': "business.aliyuncs.com",
      'cn-wuhan': "business.aliyuncs.com",
      'cn-wulanchabu': "business.aliyuncs.com",
      'cn-yushanfang': "business.aliyuncs.com",
      'cn-zhangbei': "business.aliyuncs.com",
      'cn-zhangbei-na61-b01': "business.aliyuncs.com",
      'cn-zhangjiakou': "business.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "business.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "business.aliyuncs.com",
      'eu-central-1': "business.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "business.ap-southeast-1.aliyuncs.com",
      'eu-west-1-oxs': "business.ap-southeast-1.aliyuncs.com",
      'me-east-1': "business.ap-southeast-1.aliyuncs.com",
      'rus-west-1-pop': "business.ap-southeast-1.aliyuncs.com",
      'us-east-1': "business.ap-southeast-1.aliyuncs.com",
      'us-west-1': "business.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("bssopenapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 添加优惠券抵扣标签
   * 
   * @param tmpReq - AddCouponDeductTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCouponDeductTagResponse
   */
  async addCouponDeductTagWithOptions(tmpReq: AddCouponDeductTagRequest, runtime: $dara.RuntimeOptions): Promise<AddCouponDeductTagResponse> {
    tmpReq.validate();
    let request = new AddCouponDeductTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.couponId)) {
      query["CouponId"] = request.couponId;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCouponDeductTag",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddCouponDeductTagResponse>(await this.callApi(params, req, runtime), new AddCouponDeductTagResponse({}));
    } else {
      return $dara.cast<AddCouponDeductTagResponse>(await this.execute(params, req, runtime), new AddCouponDeductTagResponse({}));
    }

  }

  /**
   * 添加优惠券抵扣标签
   * 
   * @param request - AddCouponDeductTagRequest
   * @returns AddCouponDeductTagResponse
   */
  async addCouponDeductTag(request: AddCouponDeductTagRequest): Promise<AddCouponDeductTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCouponDeductTagWithOptions(request, runtime);
  }

  /**
   * 取消资金账户低额预警
   * 
   * @param request - CancelFundAccountLowAvailableAmountAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelFundAccountLowAvailableAmountAlarmResponse
   */
  async cancelFundAccountLowAvailableAmountAlarmWithOptions(request: CancelFundAccountLowAvailableAmountAlarmRequest, runtime: $dara.RuntimeOptions): Promise<CancelFundAccountLowAvailableAmountAlarmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelFundAccountLowAvailableAmountAlarm",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelFundAccountLowAvailableAmountAlarmResponse>(await this.callApi(params, req, runtime), new CancelFundAccountLowAvailableAmountAlarmResponse({}));
    } else {
      return $dara.cast<CancelFundAccountLowAvailableAmountAlarmResponse>(await this.execute(params, req, runtime), new CancelFundAccountLowAvailableAmountAlarmResponse({}));
    }

  }

  /**
   * 取消资金账户低额预警
   * 
   * @param request - CancelFundAccountLowAvailableAmountAlarmRequest
   * @returns CancelFundAccountLowAvailableAmountAlarmResponse
   */
  async cancelFundAccountLowAvailableAmountAlarm(request: CancelFundAccountLowAvailableAmountAlarmRequest): Promise<CancelFundAccountLowAvailableAmountAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelFundAccountLowAvailableAmountAlarmWithOptions(request, runtime);
  }

  /**
   * 创建资金账户划拨/回收
   * 
   * @param request - CreateFundAccountTransferRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFundAccountTransferResponse
   */
  async createFundAccountTransferWithOptions(request: CreateFundAccountTransferRequest, runtime: $dara.RuntimeOptions): Promise<CreateFundAccountTransferResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amount)) {
      body["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.financeType)) {
      body["FinanceType"] = request.financeType;
    }

    if (!$dara.isNull(request.fromFundAccountId)) {
      body["FromFundAccountId"] = request.fromFundAccountId;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.toFundAccountId)) {
      body["ToFundAccountId"] = request.toFundAccountId;
    }

    if (!$dara.isNull(request.transferType)) {
      body["TransferType"] = request.transferType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFundAccountTransfer",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFundAccountTransferResponse>(await this.callApi(params, req, runtime), new CreateFundAccountTransferResponse({}));
    } else {
      return $dara.cast<CreateFundAccountTransferResponse>(await this.execute(params, req, runtime), new CreateFundAccountTransferResponse({}));
    }

  }

  /**
   * 创建资金账户划拨/回收
   * 
   * @param request - CreateFundAccountTransferRequest
   * @returns CreateFundAccountTransferResponse
   */
  async createFundAccountTransfer(request: CreateFundAccountTransferRequest): Promise<CreateFundAccountTransferResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFundAccountTransferWithOptions(request, runtime);
  }

  /**
   * 删除优惠券的抵扣标签
   * 
   * @param tmpReq - DeleteCouponDeductTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCouponDeductTagResponse
   */
  async deleteCouponDeductTagWithOptions(tmpReq: DeleteCouponDeductTagRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCouponDeductTagResponse> {
    tmpReq.validate();
    let request = new DeleteCouponDeductTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "TagKeys", "json");
    }

    let query = { };
    if (!$dara.isNull(request.couponId)) {
      query["CouponId"] = request.couponId;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.tagKeysShrink)) {
      query["TagKeys"] = request.tagKeysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCouponDeductTag",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCouponDeductTagResponse>(await this.callApi(params, req, runtime), new DeleteCouponDeductTagResponse({}));
    } else {
      return $dara.cast<DeleteCouponDeductTagResponse>(await this.execute(params, req, runtime), new DeleteCouponDeductTagResponse({}));
    }

  }

  /**
   * 删除优惠券的抵扣标签
   * 
   * @param request - DeleteCouponDeductTagRequest
   * @returns DeleteCouponDeductTagResponse
   */
  async deleteCouponDeductTag(request: DeleteCouponDeductTagRequest): Promise<DeleteCouponDeductTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCouponDeductTagWithOptions(request, runtime);
  }

  /**
   * 查询优惠券列表
   * 
   * @param tmpReq - DescribeCouponRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCouponResponse
   */
  async describeCouponWithOptions(tmpReq: DescribeCouponRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCouponResponse> {
    tmpReq.validate();
    let request = new DescribeCouponShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCoupon",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCouponResponse>(await this.callApi(params, req, runtime), new DescribeCouponResponse({}));
    } else {
      return $dara.cast<DescribeCouponResponse>(await this.execute(params, req, runtime), new DescribeCouponResponse({}));
    }

  }

  /**
   * 查询优惠券列表
   * 
   * @param request - DescribeCouponRequest
   * @returns DescribeCouponResponse
   */
  async describeCoupon(request: DescribeCouponRequest): Promise<DescribeCouponResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCouponWithOptions(request, runtime);
  }

  /**
   * 查询优惠券可用商品列表
   * 
   * @param tmpReq - DescribeCouponItemListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCouponItemListResponse
   */
  async describeCouponItemListWithOptions(tmpReq: DescribeCouponItemListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCouponItemListResponse> {
    tmpReq.validate();
    let request = new DescribeCouponItemListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCouponItemList",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCouponItemListResponse>(await this.callApi(params, req, runtime), new DescribeCouponItemListResponse({}));
    } else {
      return $dara.cast<DescribeCouponItemListResponse>(await this.execute(params, req, runtime), new DescribeCouponItemListResponse({}));
    }

  }

  /**
   * 查询优惠券可用商品列表
   * 
   * @param request - DescribeCouponItemListRequest
   * @returns DescribeCouponItemListResponse
   */
  async describeCouponItemList(request: DescribeCouponItemListRequest): Promise<DescribeCouponItemListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCouponItemListWithOptions(request, runtime);
  }

  /**
   * 查询资金账户可用金
   * 
   * @param request - GetFundAccountAvailableAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountAvailableAmountResponse
   */
  async getFundAccountAvailableAmountWithOptions(request: GetFundAccountAvailableAmountRequest, runtime: $dara.RuntimeOptions): Promise<GetFundAccountAvailableAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountAvailableAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFundAccountAvailableAmountResponse>(await this.callApi(params, req, runtime), new GetFundAccountAvailableAmountResponse({}));
    } else {
      return $dara.cast<GetFundAccountAvailableAmountResponse>(await this.execute(params, req, runtime), new GetFundAccountAvailableAmountResponse({}));
    }

  }

  /**
   * 查询资金账户可用金
   * 
   * @param request - GetFundAccountAvailableAmountRequest
   * @returns GetFundAccountAvailableAmountResponse
   */
  async getFundAccountAvailableAmount(request: GetFundAccountAvailableAmountRequest): Promise<GetFundAccountAvailableAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountAvailableAmountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户可分配信控额度
   * 
   * @param request - GetFundAccountCanAllocateCreditAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountCanAllocateCreditAmountResponse
   */
  async getFundAccountCanAllocateCreditAmountWithOptions(request: GetFundAccountCanAllocateCreditAmountRequest, runtime: $dara.RuntimeOptions): Promise<GetFundAccountCanAllocateCreditAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountCanAllocateCreditAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFundAccountCanAllocateCreditAmountResponse>(await this.callApi(params, req, runtime), new GetFundAccountCanAllocateCreditAmountResponse({}));
    } else {
      return $dara.cast<GetFundAccountCanAllocateCreditAmountResponse>(await this.execute(params, req, runtime), new GetFundAccountCanAllocateCreditAmountResponse({}));
    }

  }

  /**
   * 查询资金账户可分配信控额度
   * 
   * @param request - GetFundAccountCanAllocateCreditAmountRequest
   * @returns GetFundAccountCanAllocateCreditAmountResponse
   */
  async getFundAccountCanAllocateCreditAmount(request: GetFundAccountCanAllocateCreditAmountRequest): Promise<GetFundAccountCanAllocateCreditAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanAllocateCreditAmountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户可回收金额
   * 
   * @param request - GetFundAccountCanRecycleAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountCanRecycleAmountResponse
   */
  async getFundAccountCanRecycleAmountWithOptions(request: GetFundAccountCanRecycleAmountRequest, runtime: $dara.RuntimeOptions): Promise<GetFundAccountCanRecycleAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.recycleFromFundAccountId)) {
      body["RecycleFromFundAccountId"] = request.recycleFromFundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountCanRecycleAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFundAccountCanRecycleAmountResponse>(await this.callApi(params, req, runtime), new GetFundAccountCanRecycleAmountResponse({}));
    } else {
      return $dara.cast<GetFundAccountCanRecycleAmountResponse>(await this.execute(params, req, runtime), new GetFundAccountCanRecycleAmountResponse({}));
    }

  }

  /**
   * 查询资金账户可回收金额
   * 
   * @param request - GetFundAccountCanRecycleAmountRequest
   * @returns GetFundAccountCanRecycleAmountResponse
   */
  async getFundAccountCanRecycleAmount(request: GetFundAccountCanRecycleAmountRequest): Promise<GetFundAccountCanRecycleAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanRecycleAmountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户的可转出金额
   * 
   * @param request - GetFundAccountCanTransferAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountCanTransferAmountResponse
   */
  async getFundAccountCanTransferAmountWithOptions(request: GetFundAccountCanTransferAmountRequest, runtime: $dara.RuntimeOptions): Promise<GetFundAccountCanTransferAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountCanTransferAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFundAccountCanTransferAmountResponse>(await this.callApi(params, req, runtime), new GetFundAccountCanTransferAmountResponse({}));
    } else {
      return $dara.cast<GetFundAccountCanTransferAmountResponse>(await this.execute(params, req, runtime), new GetFundAccountCanTransferAmountResponse({}));
    }

  }

  /**
   * 查询资金账户的可转出金额
   * 
   * @param request - GetFundAccountCanTransferAmountRequest
   * @returns GetFundAccountCanTransferAmountResponse
   */
  async getFundAccountCanTransferAmount(request: GetFundAccountCanTransferAmountRequest): Promise<GetFundAccountCanTransferAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanTransferAmountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户可提现金额
   * 
   * @param request - GetFundAccountCanWithdrawAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountCanWithdrawAmountResponse
   */
  async getFundAccountCanWithdrawAmountWithOptions(request: GetFundAccountCanWithdrawAmountRequest, runtime: $dara.RuntimeOptions): Promise<GetFundAccountCanWithdrawAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountCanWithdrawAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFundAccountCanWithdrawAmountResponse>(await this.callApi(params, req, runtime), new GetFundAccountCanWithdrawAmountResponse({}));
    } else {
      return $dara.cast<GetFundAccountCanWithdrawAmountResponse>(await this.execute(params, req, runtime), new GetFundAccountCanWithdrawAmountResponse({}));
    }

  }

  /**
   * 查询资金账户可提现金额
   * 
   * @param request - GetFundAccountCanWithdrawAmountRequest
   * @returns GetFundAccountCanWithdrawAmountResponse
   */
  async getFundAccountCanWithdrawAmount(request: GetFundAccountCanWithdrawAmountRequest): Promise<GetFundAccountCanWithdrawAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountCanWithdrawAmountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户低额预警
   * 
   * @param request - GetFundAccountLowAvailableAmountAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountLowAvailableAmountAlarmResponse
   */
  async getFundAccountLowAvailableAmountAlarmWithOptions(request: GetFundAccountLowAvailableAmountAlarmRequest, runtime: $dara.RuntimeOptions): Promise<GetFundAccountLowAvailableAmountAlarmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountLowAvailableAmountAlarm",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFundAccountLowAvailableAmountAlarmResponse>(await this.callApi(params, req, runtime), new GetFundAccountLowAvailableAmountAlarmResponse({}));
    } else {
      return $dara.cast<GetFundAccountLowAvailableAmountAlarmResponse>(await this.execute(params, req, runtime), new GetFundAccountLowAvailableAmountAlarmResponse({}));
    }

  }

  /**
   * 查询资金账户低额预警
   * 
   * @param request - GetFundAccountLowAvailableAmountAlarmRequest
   * @returns GetFundAccountLowAvailableAmountAlarmResponse
   */
  async getFundAccountLowAvailableAmountAlarm(request: GetFundAccountLowAvailableAmountAlarmRequest): Promise<GetFundAccountLowAvailableAmountAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountLowAvailableAmountAlarmWithOptions(request, runtime);
  }

  /**
   * 查询资金账户收支明细
   * 
   * @param tmpReq - GetFundAccountTransactionDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFundAccountTransactionDetailsResponse
   */
  async getFundAccountTransactionDetailsWithOptions(tmpReq: GetFundAccountTransactionDetailsRequest, runtime: $dara.RuntimeOptions): Promise<GetFundAccountTransactionDetailsResponse> {
    tmpReq.validate();
    let request = new GetFundAccountTransactionDetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.transactionChannelList)) {
      request.transactionChannelListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transactionChannelList, "TransactionChannelList", "json");
    }

    if (!$dara.isNull(tmpReq.transactionTypeList)) {
      request.transactionTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transactionTypeList, "TransactionTypeList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billNumber)) {
      body["BillNumber"] = request.billNumber;
    }

    if (!$dara.isNull(request.channelTransactionNumber)) {
      body["ChannelTransactionNumber"] = request.channelTransactionNumber;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.transactionChannelListShrink)) {
      body["TransactionChannelList"] = request.transactionChannelListShrink;
    }

    if (!$dara.isNull(request.transactionDirection)) {
      body["TransactionDirection"] = request.transactionDirection;
    }

    if (!$dara.isNull(request.transactionNumber)) {
      body["TransactionNumber"] = request.transactionNumber;
    }

    if (!$dara.isNull(request.transactionType)) {
      body["TransactionType"] = request.transactionType;
    }

    if (!$dara.isNull(request.transactionTypeListShrink)) {
      body["TransactionTypeList"] = request.transactionTypeListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFundAccountTransactionDetails",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFundAccountTransactionDetailsResponse>(await this.callApi(params, req, runtime), new GetFundAccountTransactionDetailsResponse({}));
    } else {
      return $dara.cast<GetFundAccountTransactionDetailsResponse>(await this.execute(params, req, runtime), new GetFundAccountTransactionDetailsResponse({}));
    }

  }

  /**
   * 查询资金账户收支明细
   * 
   * @param request - GetFundAccountTransactionDetailsRequest
   * @returns GetFundAccountTransactionDetailsResponse
   */
  async getFundAccountTransactionDetails(request: GetFundAccountTransactionDetailsRequest): Promise<GetFundAccountTransactionDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFundAccountTransactionDetailsWithOptions(request, runtime);
  }

  /**
   * 查询优惠券设置的抵扣标签
   * 
   * @param tmpReq - ListCouponDeductTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCouponDeductTagResponse
   */
  async listCouponDeductTagWithOptions(tmpReq: ListCouponDeductTagRequest, runtime: $dara.RuntimeOptions): Promise<ListCouponDeductTagResponse> {
    tmpReq.validate();
    let request = new ListCouponDeductTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.couponId)) {
      query["CouponId"] = request.couponId;
    }

    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCouponDeductTag",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCouponDeductTagResponse>(await this.callApi(params, req, runtime), new ListCouponDeductTagResponse({}));
    } else {
      return $dara.cast<ListCouponDeductTagResponse>(await this.execute(params, req, runtime), new ListCouponDeductTagResponse({}));
    }

  }

  /**
   * 查询优惠券设置的抵扣标签
   * 
   * @param request - ListCouponDeductTagRequest
   * @returns ListCouponDeductTagResponse
   */
  async listCouponDeductTag(request: ListCouponDeductTagRequest): Promise<ListCouponDeductTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCouponDeductTagWithOptions(request, runtime);
  }

  /**
   * 查询资金账户列表
   * 
   * @param request - ListFundAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFundAccountResponse
   */
  async listFundAccountWithOptions(request: ListFundAccountRequest, runtime: $dara.RuntimeOptions): Promise<ListFundAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queryOnlyInUse)) {
      body["QueryOnlyInUse"] = request.queryOnlyInUse;
    }

    if (!$dara.isNull(request.queryOnlyManage)) {
      body["QueryOnlyManage"] = request.queryOnlyManage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFundAccount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFundAccountResponse>(await this.callApi(params, req, runtime), new ListFundAccountResponse({}));
    } else {
      return $dara.cast<ListFundAccountResponse>(await this.execute(params, req, runtime), new ListFundAccountResponse({}));
    }

  }

  /**
   * 查询资金账户列表
   * 
   * @param request - ListFundAccountRequest
   * @returns ListFundAccountResponse
   */
  async listFundAccount(request: ListFundAccountRequest): Promise<ListFundAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFundAccountWithOptions(request, runtime);
  }

  /**
   * 查询资金账户的付款关系
   * 
   * @param request - ListFundAccountPayRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFundAccountPayRelationResponse
   */
  async listFundAccountPayRelationWithOptions(request: ListFundAccountPayRelationRequest, runtime: $dara.RuntimeOptions): Promise<ListFundAccountPayRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFundAccountPayRelation",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFundAccountPayRelationResponse>(await this.callApi(params, req, runtime), new ListFundAccountPayRelationResponse({}));
    } else {
      return $dara.cast<ListFundAccountPayRelationResponse>(await this.execute(params, req, runtime), new ListFundAccountPayRelationResponse({}));
    }

  }

  /**
   * 查询资金账户的付款关系
   * 
   * @param request - ListFundAccountPayRelationRequest
   * @returns ListFundAccountPayRelationResponse
   */
  async listFundAccountPayRelation(request: ListFundAccountPayRelationRequest): Promise<ListFundAccountPayRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFundAccountPayRelationWithOptions(request, runtime);
  }

  /**
   * 设置资金账户的信控限额
   * 
   * @param request - SetFundAccountCreditAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFundAccountCreditAmountResponse
   */
  async setFundAccountCreditAmountWithOptions(request: SetFundAccountCreditAmountRequest, runtime: $dara.RuntimeOptions): Promise<SetFundAccountCreditAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creditAmount)) {
      body["CreditAmount"] = request.creditAmount;
    }

    if (!$dara.isNull(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFundAccountCreditAmount",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetFundAccountCreditAmountResponse>(await this.callApi(params, req, runtime), new SetFundAccountCreditAmountResponse({}));
    } else {
      return $dara.cast<SetFundAccountCreditAmountResponse>(await this.execute(params, req, runtime), new SetFundAccountCreditAmountResponse({}));
    }

  }

  /**
   * 设置资金账户的信控限额
   * 
   * @param request - SetFundAccountCreditAmountRequest
   * @returns SetFundAccountCreditAmountResponse
   */
  async setFundAccountCreditAmount(request: SetFundAccountCreditAmountRequest): Promise<SetFundAccountCreditAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFundAccountCreditAmountWithOptions(request, runtime);
  }

  /**
   * 设置资金账户低额预警
   * 
   * @param request - SetFundAccountLowAvailableAmountAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetFundAccountLowAvailableAmountAlarmResponse
   */
  async setFundAccountLowAvailableAmountAlarmWithOptions(request: SetFundAccountLowAvailableAmountAlarmRequest, runtime: $dara.RuntimeOptions): Promise<SetFundAccountLowAvailableAmountAlarmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fundAccountId)) {
      body["FundAccountId"] = request.fundAccountId;
    }

    if (!$dara.isNull(request.thresholdAmount)) {
      body["ThresholdAmount"] = request.thresholdAmount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetFundAccountLowAvailableAmountAlarm",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetFundAccountLowAvailableAmountAlarmResponse>(await this.callApi(params, req, runtime), new SetFundAccountLowAvailableAmountAlarmResponse({}));
    } else {
      return $dara.cast<SetFundAccountLowAvailableAmountAlarmResponse>(await this.execute(params, req, runtime), new SetFundAccountLowAvailableAmountAlarmResponse({}));
    }

  }

  /**
   * 设置资金账户低额预警
   * 
   * @param request - SetFundAccountLowAvailableAmountAlarmRequest
   * @returns SetFundAccountLowAvailableAmountAlarmResponse
   */
  async setFundAccountLowAvailableAmountAlarm(request: SetFundAccountLowAvailableAmountAlarmRequest): Promise<SetFundAccountLowAvailableAmountAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setFundAccountLowAvailableAmountAlarmWithOptions(request, runtime);
  }

  /**
   * 设置节省计划用户级抵扣规则
   * 
   * @param tmpReq - SetSavingPlanUserDeductRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSavingPlanUserDeductRuleResponse
   */
  async setSavingPlanUserDeductRuleWithOptions(tmpReq: SetSavingPlanUserDeductRuleRequest, runtime: $dara.RuntimeOptions): Promise<SetSavingPlanUserDeductRuleResponse> {
    tmpReq.validate();
    let request = new SetSavingPlanUserDeductRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ecIdAccountIds)) {
      request.ecIdAccountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ecIdAccountIds, "EcIdAccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.userDeductRules)) {
      request.userDeductRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userDeductRules, "UserDeductRules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ecIdAccountIdsShrink)) {
      query["EcIdAccountIds"] = request.ecIdAccountIdsShrink;
    }

    if (!$dara.isNull(request.nbid)) {
      query["Nbid"] = request.nbid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.spnInstanceCode)) {
      body["SpnInstanceCode"] = request.spnInstanceCode;
    }

    if (!$dara.isNull(request.userDeductRulesShrink)) {
      body["UserDeductRules"] = request.userDeductRulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSavingPlanUserDeductRule",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetSavingPlanUserDeductRuleResponse>(await this.callApi(params, req, runtime), new SetSavingPlanUserDeductRuleResponse({}));
    } else {
      return $dara.cast<SetSavingPlanUserDeductRuleResponse>(await this.execute(params, req, runtime), new SetSavingPlanUserDeductRuleResponse({}));
    }

  }

  /**
   * 设置节省计划用户级抵扣规则
   * 
   * @param request - SetSavingPlanUserDeductRuleRequest
   * @returns SetSavingPlanUserDeductRuleResponse
   */
  async setSavingPlanUserDeductRule(request: SetSavingPlanUserDeductRuleRequest): Promise<SetSavingPlanUserDeductRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSavingPlanUserDeductRuleWithOptions(request, runtime);
  }

}
