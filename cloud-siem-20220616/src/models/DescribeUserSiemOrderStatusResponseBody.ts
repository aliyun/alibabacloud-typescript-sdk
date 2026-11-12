// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserSiemOrderStatusResponseBodyDataCreditsPostpaidInfo extends $dara.Model {
  /**
   * @remarks
   * The billing status of the instance. Valid values:
   * - 1: Normal.
   * - 2: Suspended due to overdue payment.
   * 
   * @example
   * 2
   */
  billingStatus?: number;
  /**
   * @remarks
   * The source of the instance. Valid values:
   * - POSTPAID: Independent pay-as-you-go instance.
   * - SUBSCRIPTION_DEFAULT_PAYG: Default pay-as-you-go instance for subscription.
   * 
   * @example
   * POSTPAID
   */
  instanceSource?: string;
  /**
   * @remarks
   * The user switch status. Valid values:
   * - 1: Enabled.
   * - 0: Disabled.
   * 
   * @example
   * 1
   */
  userSwitchStatus?: number;
  static names(): { [key: string]: string } {
    return {
      billingStatus: 'BillingStatus',
      instanceSource: 'InstanceSource',
      userSwitchStatus: 'UserSwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingStatus: 'number',
      instanceSource: 'string',
      userSwitchStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserSiemOrderStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Agentic SOC Credits instance. If SiemOrderFrom is CREDITS_PRE_PAY, the ID of the Credits subscription instance is returned. If SiemOrderFrom is CREDITS_POST_PAY, the ID of the Credits pay-as-you-go instance is returned. If no Credits instance is found, this field is empty. The Security Center instance ID for legacy orders is returned by SasInstanceId.
   * 
   * @example
   * asoc-instance-xxxxx
   */
  asocInstanceId?: string;
  /**
   * @remarks
   * The end time of the Agentic SOC Credits subscription. The value is a UNIX timestamp in milliseconds (13 digits). This field is returned only when SiemOrderFrom is CREDITS_PRE_PAY. Otherwise, this field is empty.
   * 
   * @example
   * 1785542400456
   */
  asocSubscriptionInstanceEndTime?: number;
  /**
   * @remarks
   * The start time of the Agentic SOC Credits subscription. The value is a UNIX timestamp in milliseconds (13 digits). This field is returned only when SiemOrderFrom is CREDITS_PRE_PAY. Otherwise, this field is empty.
   * 
   * @example
   * 1754006400123
   */
  asocSubscriptionInstanceStartTime?: number;
  /**
   * @remarks
   * Specifies whether the current account can perform operations on threat analysis orders. Valid values:
   * - true: The account can purchase, upgrade, or change the configuration of threat analysis.
   * - false: The account cannot perform operations on threat analysis orders.
   * 
   * @example
   * true
   */
  canBuy?: boolean;
  /**
   * @remarks
   * The purchased Simple Log Service (SLS) capacity for threat analysis. Unit: GB.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The source of the log storage capacity order. Valid values:
   * - PRE_PAY_CAPACITY: Prepaid capacity order.
   * - POST_PAY_CAPACITY: Pay-as-you-go capacity order.
   * 
   * The source of the capacity order is independent of the traffic order source represented by SiemOrderFrom.
   * 
   * @example
   * PRE_PAY_CAPACITY
   */
  capacityOrderFrom?: string;
  /**
   * @remarks
   * The information about the Credits pay-as-you-go instance. This field is returned when a Credits pay-as-you-go instance is found, and can be returned simultaneously with a valid legacy traffic order.
   */
  creditsPostpaidInfo?: DescribeUserSiemOrderStatusResponseBodyDataCreditsPostpaidInfo;
  /**
   * @remarks
   * The purchased SLS capacity for Threat Analysis 1.0. Unit: GB.
   * 
   * @example
   * 1024
   */
  deliveryCapacity?: number;
  /**
   * @remarks
   * The number of days until the threat analysis service expires.
   * 
   * @example
   * 3
   */
  durationDays?: number;
  /**
   * @remarks
   * The expiration time of threat analysis. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1669823999000
   */
  endTime?: number;
  /**
   * @remarks
   * The purchased traffic for threat analysis. Unit: GB.
   * 
   * @example
   * 1024
   */
  flowCapacity?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID that purchased threat analysis.
   * 
   * @example
   * 123XXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The ID of the master account in the resource directory.
   * 
   * @example
   * 123XXXXXX
   */
  masterUserId?: number;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-xxxxxx
   */
  rdId?: string;
  /**
   * @remarks
   * Specifies whether the order is a SIEM public preview order.
   * 
   * @example
   * 1
   */
  rdOrder?: number;
  /**
   * @remarks
   * The Security Center instance ID.
   * 
   * @example
   * sas-instance-xxxxx
   */
  sasInstanceId?: string;
  /**
   * @remarks
   * The source of the traffic order. Valid values:
   * - PRE_PAY_FLOW: Prepaid traffic order for threat analysis.
   * - POST_PAY_FLOW: Pay-as-you-go traffic order for threat analysis.
   * - CREDITS_PRE_PAY: Agentic SOC Credits subscription.
   * - CREDITS_POST_PAY: Agentic SOC Credits pay-as-you-go instance.
   * 
   * This field describes the source of the traffic order. The source of the log storage capacity order is independently represented by CapacityOrderFrom.
   * 
   * @example
   * CREDITS_PRE_PAY
   */
  siemOrderFrom?: string;
  /**
   * @remarks
   * Specifies whether there is a valid SIEM order. Valid values:
   * - 1: The SIEM order is valid.
   * - 0: The SIEM order is invalid.
   * 
   * @example
   * 1
   */
  siemOrderStatus?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the current logon.
   * 
   * @example
   * 123XXXXXX
   */
  subUserId?: number;
  /**
   * @remarks
   * The user type.
   * 
   * @example
   * normal
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      asocInstanceId: 'AsocInstanceId',
      asocSubscriptionInstanceEndTime: 'AsocSubscriptionInstanceEndTime',
      asocSubscriptionInstanceStartTime: 'AsocSubscriptionInstanceStartTime',
      canBuy: 'CanBuy',
      capacity: 'Capacity',
      capacityOrderFrom: 'CapacityOrderFrom',
      creditsPostpaidInfo: 'CreditsPostpaidInfo',
      deliveryCapacity: 'DeliveryCapacity',
      durationDays: 'DurationDays',
      endTime: 'EndTime',
      flowCapacity: 'FlowCapacity',
      mainUserId: 'MainUserId',
      masterUserId: 'MasterUserId',
      rdId: 'RdId',
      rdOrder: 'RdOrder',
      sasInstanceId: 'SasInstanceId',
      siemOrderFrom: 'SiemOrderFrom',
      siemOrderStatus: 'SiemOrderStatus',
      subUserId: 'SubUserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asocInstanceId: 'string',
      asocSubscriptionInstanceEndTime: 'number',
      asocSubscriptionInstanceStartTime: 'number',
      canBuy: 'boolean',
      capacity: 'number',
      capacityOrderFrom: 'string',
      creditsPostpaidInfo: DescribeUserSiemOrderStatusResponseBodyDataCreditsPostpaidInfo,
      deliveryCapacity: 'number',
      durationDays: 'number',
      endTime: 'number',
      flowCapacity: 'number',
      mainUserId: 'number',
      masterUserId: 'number',
      rdId: 'string',
      rdOrder: 'number',
      sasInstanceId: 'string',
      siemOrderFrom: 'string',
      siemOrderStatus: 'number',
      subUserId: 'number',
      userType: 'string',
    };
  }

  validate() {
    if(this.creditsPostpaidInfo && typeof (this.creditsPostpaidInfo as any).validate === 'function') {
      (this.creditsPostpaidInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserSiemOrderStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeUserSiemOrderStatusResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeUserSiemOrderStatusResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

