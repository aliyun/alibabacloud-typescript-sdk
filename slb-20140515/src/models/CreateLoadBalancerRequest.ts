// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the bastion host. Valid values of N: **1 to 20**. The tag key cannot be an empty string.
   * 
   * The tag key can be at most 64 characters in length, and cannot contain `http://` or `https://`. It must not start with `aliyun` or `acs:`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1 to 20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * value
   */
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

export class CreateLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The private IP address of the CLB instance. The private IP address must belong to the destination CIDR block of the vSwitch.
   * 
   * @example
   * 192.168.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The IP version of the CLB instance. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The network type of the CLB instance. Valid values:
   * 
   * *   **internet**: After an Internet-facing CLB instance is created, the system allocates a public IP address to the instance. The CLB instance can forward requests over the Internet.
   * *   **intranet**: After an internal-facing CLB instance is created, the system allocates a private IP address to the CLB instance. The CLB instance can forward requests only within the VPC.
   * 
   * @example
   * internet
   */
  addressType?: string;
  /**
   * @remarks
   * Specifies whether to automatically pay the subscription fee of the Internet-facing CLB instance. Valid values:
   * 
   * *   **true**: yes. The CLB instance is created after you call the API operation.
   * *   **false** (default): After you call the operation, the order is created but the payment is not completed. You can view pending orders in the console. The CLB instance will not be created until you complete the payment.
   * 
   * >  This parameter takes effect only for subscription CLB instances created on the Alibaba Cloud China site.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s.
   * 
   * Valid values: **1** to **5120**. For a pay-by-bandwidth Internet-facing CLB instance, you can specify a maximum bandwidth for each listener. The sum of the maximum bandwidth of all listeners cannot exceed the maximum bandwidth of the CLB instance.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * >  If you do not specify this parameter, the system uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the CLB instance. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  deleteProtection?: string;
  /**
   * @remarks
   * The subscription duration of the Internet-facing CLB instance. Valid values:
   * 
   * *   If **PricingCycle** is set to **month**, the valid values are **1 to 9**.
   * *   If **PricingCycle** is set to **year**, the valid values are **1 to 5**.
   * 
   * >  This parameter is supported only by subscription instances created on the Alibaba Cloud China site.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  duration?: number;
  /**
   * @remarks
   * The metering method of the CLB instance. Valid values:
   * 
   * *   **PayBySpec** (default)
   * *   **PayByCLCU**
   * 
   * >  This parameter is supported only by instances created on the Alibaba Cloud China site and only when **PayType** is set to **PayOnDemand**.
   * 
   * @example
   * PayBySpec
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the Internet-facing CLB instance. Valid values:
   * 
   * *   **paybytraffic** (default): pay-by-data-transfer
   * 
   *     >  If you set InternetChargeType to **paybytraffic**, you do not need to configure the **Bandwidth** parameter. The value of **Bandwidth** does not take effect even if you specify one.
   * 
   * *   **paybybandwidth**: pay-by-bandwidth
   * 
   * >  If you set **PayType** to **PayOnDemand** and **InstanceChargeType** to **PayByCLCU**, the only valid value for InternetChargeType is **paybytraffic**.
   * 
   * @example
   * paybytraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The CLB instance name.
   * 
   * The name must be 1 to 80 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * If you do not specify this parameter, the system automatically assigns a name to the CLB instance.
   * 
   * @example
   * lb-bp1o94dp5i6ea****
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The specification of the CLB instance. Valid values:
   * 
   * *   **slb.s1.small**
   * 
   * *   **slb.s2.small**
   * 
   * *   **slb.s2.medium**
   * 
   * *   **slb.s3.small**
   * 
   * *   **slb.s3.medium**
   * 
   * *   **slb.s3.large**
   * 
   *     
   *  >   If you do not specify this parameter, a shared-resource CLB instance is created. Shared-resource CLB instances are no longer available for purchase. Therefore, you must specify this parameter.
   * 
   * If **InstanceChargeType** is set to **PayByCLCU**, this parameter is invalid and you do not need to specify this parameter.
   * 
   * @example
   * slb.s1.small
   */
  loadBalancerSpec?: string;
  /**
   * @remarks
   * The ID of the primary zone to which the CLB instance belongs.
   * 
   * You can call the [DescribeZone](https://help.aliyun.com/document_detail/2401683.html) operation to query the primary and secondary zones in the region where you want to create the CLB instance.
   * 
   * @example
   * cn-hangzhou-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The reason for enabling the configuration read-only mode. The reason must be 1 to 80 characters in length. It must start with a letter and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * >  This parameter takes effect only when **ModificationProtectionStatus** is set to **ConsoleProtection**.
   * 
   * @example
   * Managed instance
   */
  modificationProtectionReason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: disables the configuration read-only mode. After you disable the configuration read-only mode, the value of **ModificationProtectionReason** is cleared.
   * *   **ConsoleProtection**: enables the configuration read-only mode.
   * 
   * >  If you set this parameter to **ConsoleProtection**, you cannot modify instance configurations in the CLB console. However, you can modify instance configurations by calling API operations.
   * 
   * @example
   * ConsoleProtection
   */
  modificationProtectionStatus?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the CLB instance. Valid values:
   * 
   * **PayOnDemand**: pay-as-you-go.
   * 
   * >  The Alibaba Cloud International site supports only pay-as-you-go CLB instances.
   * 
   * @example
   * PayOnDemand
   * 
   * @deprecated
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle of the subscription Internet-facing CLB instance. Valid values:
   * 
   * *   **month**
   * *   **year**
   * 
   * >  This parameter is supported only by subscription instances created on the Alibaba Cloud China site.
   * 
   * @example
   * month
   * 
   * @deprecated
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtopt****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the secondary zone to which the CLB instance belongs.
   * 
   * You can call the [DescribeZone](https://help.aliyun.com/document_detail/2401683.html) operation to query the primary and secondary zones in the region where you want to create the CLB instance.
   * 
   * @example
   * cn-hangzhou-d
   */
  slaveZoneId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateLoadBalancerRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the CLB instance belongs.
   * 
   * If you want to deploy the CLB instance in a VPC, this parameter is required. If this parameter is specified, **AddessType** is set to **intranet** by default.
   * 
   * @example
   * vsw-bp12mw1f8k3jgy****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the CLB instance belongs.
   * 
   * @example
   * vpc-bp1aevy8sofi8mh1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressIPVersion: 'AddressIPVersion',
      addressType: 'AddressType',
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      deleteProtection: 'DeleteProtection',
      duration: 'Duration',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerSpec: 'LoadBalancerSpec',
      masterZoneId: 'MasterZoneId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      slaveZoneId: 'SlaveZoneId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressIPVersion: 'string',
      addressType: 'string',
      autoPay: 'boolean',
      bandwidth: 'number',
      clientToken: 'string',
      deleteProtection: 'string',
      duration: 'number',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      loadBalancerName: 'string',
      loadBalancerSpec: 'string',
      masterZoneId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      slaveZoneId: 'string',
      tag: { 'type': 'array', 'itemType': CreateLoadBalancerRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

