// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserSiemOrderStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Agentic SOC Credits instance ID. If SiemOrderFrom is CREDITS_PRE_PAY, this field returns the Credits subscription instance ID for prepaid orders. If SiemOrderFrom is CREDITS_POST_PAY, this field returns the Credits pay-as-you-go instance ID. This field is empty if no Credits instance is found. For legacy orders, the Security Center instance ID is returned by SasInstanceId.
   * 
   * @example
   * asoc-instance-xxxxx
   */
  asocInstanceId?: string;
  /**
   * @remarks
   * The end time of the Agentic SOC Credits prepaid subscription, expressed as a 13-digit Unix timestamp in milliseconds. This field is returned only when SiemOrderFrom is CREDITS_PRE_PAY. In other cases, this field is empty.
   * 
   * @example
   * 1785542400456
   */
  asocSubscriptionInstanceEndTime?: number;
  /**
   * @remarks
   * The start time of the Agentic SOC Credits prepaid subscription, expressed as a 13-digit Unix timestamp in milliseconds. This field is returned only when SiemOrderFrom is CREDITS_PRE_PAY. In other cases, this field is empty.
   * 
   * @example
   * 1754006400123
   */
  asocSubscriptionInstanceStartTime?: number;
  /**
   * @remarks
   * Indicates whether the current account can perform order operations for threat detection and response. Valid values:
   * - true: The account can purchase, upgrade, or change specifications.
   * - false: The account cannot perform order operations for threat detection and response.
   * 
   * @example
   * true
   */
  canBuy?: boolean;
  /**
   * @remarks
   * The SLS log storage capacity purchased for threat detection and response, in GB.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The source of the log storage capacity order. Valid values:
   * - PRE_PAY_CAPACITY: a prepaid capacity order.
   * - POST_PAY_CAPACITY: a pay-as-you-go capacity order.
   * 
   * The capacity order source is independent of the traffic order source indicated by SiemOrderFrom.
   * 
   * @example
   * PRE_PAY_CAPACITY
   */
  capacityOrderFrom?: string;
  /**
   * @remarks
   * The SLS log storage capacity purchased for threat detection and response 1.0, in GB.
   * 
   * @example
   * 1024
   */
  deliveryCapacity?: number;
  /**
   * @remarks
   * The number of days until the threat detection and response service expires.
   * 
   * @example
   * 3
   */
  durationDays?: number;
  /**
   * @remarks
   * The expiration time of threat detection and response, expressed as a millisecond-level timestamp.
   * 
   * @example
   * 1669823999000
   */
  endTime?: number;
  /**
   * @remarks
   * The traffic capacity purchased for threat detection and response, in GB.
   * 
   * @example
   * 1024
   */
  flowCapacity?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID that purchased threat detection and response.
   * 
   * @example
   * 123XXXXXX
   */
  mainUserId?: number;
  /**
   * @remarks
   * The master account ID of the resource directory.
   * 
   * @example
   * 123XXXXXX
   */
  masterUserId?: number;
  /**
   * @remarks
   * The resource directory ID.
   * 
   * @example
   * rd-xxxxxx
   */
  rdId?: string;
  /**
   * @remarks
   * Indicates whether the order is a SIEM public preview order.
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
   * - PRE_PAY_FLOW: a prepaid traffic order for threat detection and response.
   * - POST_PAY_FLOW: a pay-as-you-go traffic order for threat detection and response.
   * - CREDITS_PRE_PAY: an Agentic SOC Credits prepaid subscription.
   * - CREDITS_POST_PAY: an Agentic SOC Credits pay-as-you-go instance.
   * 
   * This field describes the traffic order source. The log storage capacity order source is independently indicated by CapacityOrderFrom.
   * 
   * @example
   * CREDITS_PRE_PAY
   */
  siemOrderFrom?: string;
  /**
   * @remarks
   * Indicates whether a valid SIEM order exists. Valid values:
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
   * The request ID.
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

