// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationMembersResponseBodyDataPackLimitInfo extends $dara.Model {
  availableLimit?: number;
  cycleEndTime?: number;
  cycleStartTime?: number;
  frozenCredits?: number;
  hasShareLimit?: boolean;
  isAvailable?: boolean;
  lastConfirmedTime?: number;
  upperLimit?: number;
  usedCredits?: number;
  static names(): { [key: string]: string } {
    return {
      availableLimit: 'AvailableLimit',
      cycleEndTime: 'CycleEndTime',
      cycleStartTime: 'CycleStartTime',
      frozenCredits: 'FrozenCredits',
      hasShareLimit: 'HasShareLimit',
      isAvailable: 'IsAvailable',
      lastConfirmedTime: 'LastConfirmedTime',
      upperLimit: 'UpperLimit',
      usedCredits: 'UsedCredits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableLimit: 'number',
      cycleEndTime: 'number',
      cycleStartTime: 'number',
      frozenCredits: 'number',
      hasShareLimit: 'boolean',
      isAvailable: 'boolean',
      lastConfirmedTime: 'number',
      upperLimit: 'number',
      usedCredits: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersResponseBodyDataSubscriptionInfoEquityList extends $dara.Model {
  cycleEndTime?: number;
  cycleStartTime?: number;
  cycleSurplusValue?: number;
  cycleTotalValue?: number;
  equityType?: string;
  equityUnit?: string;
  static names(): { [key: string]: string } {
    return {
      cycleEndTime: 'CycleEndTime',
      cycleStartTime: 'CycleStartTime',
      cycleSurplusValue: 'CycleSurplusValue',
      cycleTotalValue: 'CycleTotalValue',
      equityType: 'EquityType',
      equityUnit: 'EquityUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleEndTime: 'number',
      cycleStartTime: 'number',
      cycleSurplusValue: 'number',
      cycleTotalValue: 'number',
      equityType: 'string',
      equityUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersResponseBodyDataSubscriptionInfo extends $dara.Model {
  endTime?: number;
  equityList?: ListOrganizationMembersResponseBodyDataSubscriptionInfoEquityList[];
  instanceCode?: string;
  payMode?: string;
  productCode?: string;
  specType?: string;
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      equityList: 'EquityList',
      instanceCode: 'InstanceCode',
      payMode: 'PayMode',
      productCode: 'ProductCode',
      specType: 'SpecType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      equityList: { 'type': 'array', 'itemType': ListOrganizationMembersResponseBodyDataSubscriptionInfoEquityList },
      instanceCode: 'string',
      payMode: 'string',
      productCode: 'string',
      specType: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.equityList)) {
      $dara.Model.validateArray(this.equityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The member business ID.
   * 
   * @example
   * 112233
   */
  accountBizId?: string;
  /**
   * @remarks
   * The ID of the member accounts.
   * 
   * @example
   * acc_123456789
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the member accounts.
   * 
   * @example
   * test_001
   */
  accountName?: string;
  /**
   * @remarks
   * API Key ID
   * 
   * @example
   * key_123456789
   */
  apiKeyId?: string;
  /**
   * @remarks
   * The member email address.
   * 
   * @example
   * test@email.com
   */
  email?: string;
  /**
   * @remarks
   * The time when the member joined.
   * 
   * @example
   * 2026-06-10T11:57:42.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The masked API key.
   * 
   * @example
   * prefix.abc****456
   */
  maskedApiKey?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org_123456789
   */
  orgId?: string;
  packLimitInfo?: ListOrganizationMembersResponseBodyDataPackLimitInfo;
  /**
   * @remarks
   * The list of member roles.
   */
  roles?: string[];
  /**
   * @remarks
   * The seat resource allocate ID.
   * 
   * @example
   * seat_123456
   */
  seatId?: string;
  /**
   * @remarks
   * The seat specification type. Valid values:
   * - standard: Standard seat.
   * - pro: Pro seat.
   * - max: Max seat.
   * 
   * @example
   * standard
   */
  specType?: string;
  /**
   * @remarks
   * The member status.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  subscriptionInfo?: ListOrganizationMembersResponseBodyDataSubscriptionInfo;
  static names(): { [key: string]: string } {
    return {
      accountBizId: 'AccountBizId',
      accountId: 'AccountId',
      accountName: 'AccountName',
      apiKeyId: 'ApiKeyId',
      email: 'Email',
      gmtCreate: 'GmtCreate',
      maskedApiKey: 'MaskedApiKey',
      orgId: 'OrgId',
      packLimitInfo: 'PackLimitInfo',
      roles: 'Roles',
      seatId: 'SeatId',
      specType: 'SpecType',
      status: 'Status',
      subscriptionInfo: 'SubscriptionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountBizId: 'string',
      accountId: 'string',
      accountName: 'string',
      apiKeyId: 'string',
      email: 'string',
      gmtCreate: 'string',
      maskedApiKey: 'string',
      orgId: 'string',
      packLimitInfo: ListOrganizationMembersResponseBodyDataPackLimitInfo,
      roles: { 'type': 'array', 'itemType': 'string' },
      seatId: 'string',
      specType: 'string',
      status: 'string',
      subscriptionInfo: ListOrganizationMembersResponseBodyDataSubscriptionInfo,
    };
  }

  validate() {
    if(this.packLimitInfo && typeof (this.packLimitInfo as any).validate === 'function') {
      (this.packLimitInfo as any).validate();
    }
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    if(this.subscriptionInfo && typeof (this.subscriptionInfo as any).validate === 'function') {
      (this.subscriptionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: ListOrganizationMembersResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 18
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListOrganizationMembersResponseBodyData },
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      success: 'boolean',
      total: 'number',
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

