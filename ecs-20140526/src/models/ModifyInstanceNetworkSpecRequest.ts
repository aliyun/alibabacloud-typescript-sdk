// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceNetworkSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to assign a public IP address. Valid values:
   * 
   * *   true
   * *   false
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
   * *   true: After you modify the bandwidth configurations, the payment is automatically completed. Make sure that your account balance is sufficient before you set AutoPay to true. If your account balance is insufficient, your order cannot be paid in the ECS console and becomes invalid. You must cancel the order.
   * *   false: After you modify the bandwidth configurations, an order is generated but the payment is not automatically completed. If your account balance is insufficient, you can set AutoPay to false to generate an unpaid order. Then, you can log on to the [ECS console](https://ecs.console.aliyun.com) to pay for the order.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The end time of the temporary bandwidth upgrade. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddThhZ format. The time must be in UTC and accurate to **hours** (hh).
   * 
   * >  The interval between the end time and start time of temporary bandwidth upgrade must be greater than or equal to 3 hours.
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
   * The ID of the instance for which you want to modify network configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum inbound bandwidth from the Internet. Unit: Mbit/s. Valid values:
   * 
   * *   If the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of this parameter are 1 to 10 and the default value is 10.
   * *   If the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the `InternetMaxBandwidthOut` value and the default value is the `InternetMaxBandwidthOut` value.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * *   Valid values when the pay-by-traffic billing method for network usage is used: 0 to 100.
   * 
   * *   Valid values when the pay-by-bandwidth billing method for network usage is used:
   * 
   *     *   Valid values for subscription instances: 0 to 200.
   *     *   Valid values for pay-as-you-go instances: 0 to 100.
   * 
   * >  The maximum outbound bandwidth of a single instance is also limited by the **network baseline bandwidth (Gbit/s) and network burst bandwidth (Gbit/s)** of the instance type. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   PayByBandwidth
   * *   PayByTraffic
   * 
   * > When the **pay-by-traffic** billing method for network usage is used, the maximum inbound and outbound bandwidth values are used as the upper limits of bandwidths instead of guaranteed values. In scenarios where demand outstrips resource supplies, these maximum bandwidths may be limited. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.
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
   * The start time of the temporary bandwidth upgrade. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddThh:mmZ format. The time must be in UTC and accurate to **minutes (mm)**.
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

