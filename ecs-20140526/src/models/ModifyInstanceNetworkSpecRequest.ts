// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNetworkSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to assign a public IP address. Valid values:
   * 
   * - true: A public IP address is assigned.
   * - false: No public IP address is assigned.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  allocatePublicIp?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically complete the payment. Valid values: 
   * 
   * - true: The payment is automatically completed after the bandwidth configuration is changed. Make sure that your account balance is sufficient. If your account balance is insufficient, an abnormal order is generated. You cannot pay for this order through the ECS console. You can only void the order.  
   * 
   * <props="china">
   * - false: An order is generated but the payment is not completed after the bandwidth configuration is changed. If your payment method has an insufficient balance, you can set the Autopay parameter to false to cancel automatic payment. In this case, an unpaid order is generated. You can log on to the [ECS console](https://ecs.console.aliyun.com) to complete the payment.
   * 
   * 
   * 
   * <props="intl">
   * - false: An order is generated but the payment is not completed after the bandwidth configuration is changed. If your payment method has an insufficient balance, you can set the Autopay parameter to false to cancel automatic payment. In this case, an unpaid order is generated. You can log on to the [ECS console](https://ecs.console.aliyun.com) to complete the payment.
   * 
   * 
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The end time of the temporary bandwidth upgrade. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHHZ format. The time must be in UTC+0. The value is accurate to the **hour** (HH).
   * 
   * > The interval between the end time and the start time of the temporary bandwidth upgrade must be greater than or equal to 3 hours.
   * 
   * @example
   * 2017-12-06T22Z
   */
  endTime?: string;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  ISP?: string;
  /**
   * @remarks
   * The instance ID of the instance for which you want to modify the network configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s (Megabit per second). Valid values:
   * 
   * - If the purchased outbound public bandwidth is less than or equal to 10 Mbit/s: 1 to 10. Default value: 10.
   * - If the purchased outbound public bandwidth is greater than 10 Mbit/s: 1 to the value of `InternetMaxBandwidthOut`. Default value: the value of `InternetMaxBandwidthOut`.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s (Megabit per second). Valid values:
   * 
   * - Pay-by-traffic billing: 0 to 100.
   * 
   * - Pay-by-bandwidth billing:
   *   - Subscription instances: 0 to 200.
   *   - Pay-as-you-go instances: 0 to 100.
   * 
   * 
   * > The maximum outbound bandwidth per instance is also limited by the **Network bandwidth baseline/burst (Gbit/s)** metric of the ECS instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Transforms the network billing method. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * > In the **pay-by-traffic** mode, the peak inbound and outbound bandwidths are used as upper limits of bandwidths instead of guaranteed performance metrics. When resource contention occurs, the peak bandwidths may be limited. If you require guaranteed bandwidth, use the **pay-by-bandwidth** mode.
   * 
   * @example
   * PayByTraffic
   */
  networkChargeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time of the temporary bandwidth upgrade. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC+0. The value is accurate to the **minute** (mm).
   * 
   * @example
   * 2017-12-05T22:40Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      allocatePublicIp: 'AllocatePublicIp',
      autoPay: 'AutoPay',
      clientToken: 'ClientToken',
      endTime: 'EndTime',
      ISP: 'ISP',
      instanceId: 'InstanceId',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      networkChargeType: 'NetworkChargeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatePublicIp: 'boolean',
      autoPay: 'boolean',
      clientToken: 'string',
      endTime: 'string',
      ISP: 'string',
      instanceId: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      networkChargeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

