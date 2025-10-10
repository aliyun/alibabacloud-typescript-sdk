// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestLoadBalancerBillingConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance that is associated with the Internet-facing ALB instance.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * Set the value to **PostPay**, which specifies the pay-as-you-go billing method.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPay
   */
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      payType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestModificationProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The reason for enabling the configuration read-only mode.
   * 
   * The reason must be 2 to 128 characters in length, can contain letters, digits, periods (.), underscores (_), and hyphens (-), and must start with a letter.
   * 
   * >  This parameter takes effect only when **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: Disables the configuration read-only mode. In this case, the value of the **Reason** parameter that you specify does not take effect. If you specify **Reason**, the value of the parameter is cleared.
   * *   **ConsoleProtection**: Enables the configuration read-only mode. In this case, the value of the **Reason** parameter that you specify takes effect.****
   * 
   * >  If the parameter is set to **ConsoleProtection**, the configuration read-only mode is enabled. You cannot modify the configurations of the ALB instance in the ALB console. However, you can call API operations to modify the configurations of the ALB instance.
   * 
   * @example
   * ConsoleProtection
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
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

export class CreateLoadBalancerRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key can be up to 128 characters in length, and cannot start with acs: or aliyun. It cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value can be up to 128 characters in length, and cannot start with acs: or aliyun. It cannot contain http:// or https://.
   * 
   * @example
   * product
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

export class CreateLoadBalancerRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP to be associated with the Internet-facing ALB instance.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of EIP. Valid values:
   * 
   * *   **Common**: an EIP.
   * *   **Anycast**: an Anycast EIP.
   * 
   * >  For more information about the regions in which ALB supports Anycast EIPs, see [Limits](https://help.aliyun.com/document_detail/460727.html).
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The private IPv4 address.
   * 
   * @example
   * 192.168.10.1
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The vSwitch in the zone. You can specify only one vSwitch (subnet) in each zone. You can specify at most 10 zones. If the region supports two or more zones, specify at least two zones.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-sersdf****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the cluster. You can specify at most 10 zones. If the region supports two or more zones, specify at least two zones. You can call the [DescribeZones](https://help.aliyun.com/document_detail/36064.html) operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eipType: 'EipType',
      intranetAddress: 'IntranetAddress',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eipType: 'string',
      intranetAddress: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
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
   * The mode in which IP addresses are allocated to the ALB instance. Valid values:
   * 
   * *   **Fixed** (default): a fixed IP address is assigned to the ALB instance in each zone.
   * *   **Dynamic**: IP addresses are dynamically allocated to the ALB instance in each zone.
   * 
   * >  Starting from 00:00:00 on February 25, 2025 (UTC+8), when you call this operation to create an ALB instance, the instance is automatically the [upgraded version](https://help.aliyun.com/document_detail/2864070.html) regardless of the mode you specify. Upgraded ALB instances no longer differentiate between IP modes. Instead, they globally auto-scale IP addresses for providing load balancing services. The ALB instances you created before this date and time are not affected.
   * 
   * @example
   * Dynamic
   */
  addressAllocatedMode?: string;
  /**
   * @remarks
   * The protocol version. Valid values:
   * 
   * *   **IPv4:** IPv4.
   * *   **DualStack:** dual stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The type of the address of the ALB instance. Valid values:
   * 
   * *   **Internet:** The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. In this case, the ALB instance can be accessed over the Internet.
   * *   **Intranet:** The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. In this case, the ALB instance can be accessed over the VPC in which the ALB instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters.
   * 
   * >  If you do not specify this parameter, the system uses the value of **RequestId** as the value of **ClientToken**. The value of the **RequestId** parameter may be different for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Default value: false. Valid values:
   * 
   * *   **true:** enables deletion protection.
   * *   **false:** disables deletion protection.
   * 
   * @example
   * false
   */
  deletionProtectionEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Default value: false. Valid values:
   * 
   * *   **true:** performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false:** performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The billing method of the ALB instance.
   * 
   * This parameter is required.
   */
  loadBalancerBillingConfig?: CreateLoadBalancerRequestLoadBalancerBillingConfig;
  /**
   * @remarks
   * The edition of the ALB instance. The features and billing rules vary based on the edition of the ALB instance. Valid values:
   * 
   * *   **Basic:** basic.
   * *   **Standard:** standard.
   * *   **StandardWithWaf:** WAF-enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Standard
   */
  loadBalancerEdition?: string;
  /**
   * @remarks
   * The name of the ALB instance.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * alb1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The configuration read-only mode settings.
   */
  modificationProtectionConfig?: CreateLoadBalancerRequestModificationProtectionConfig;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateLoadBalancerRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which you want to create the ALB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcId?: string;
  /**
   * @remarks
   * The mappings between zones an vSwitches. You can specify at most 10 zones. If the selected region supports two or more zones, select at least two zones to ensure the high availability of your service.
   * 
   * This parameter is required.
   */
  zoneMappings?: CreateLoadBalancerRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressAllocatedMode: 'AddressAllocatedMode',
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      clientToken: 'ClientToken',
      deletionProtectionEnabled: 'DeletionProtectionEnabled',
      dryRun: 'DryRun',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerEdition: 'LoadBalancerEdition',
      loadBalancerName: 'LoadBalancerName',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressAllocatedMode: 'string',
      addressIpVersion: 'string',
      addressType: 'string',
      clientToken: 'string',
      deletionProtectionEnabled: 'boolean',
      dryRun: 'boolean',
      loadBalancerBillingConfig: CreateLoadBalancerRequestLoadBalancerBillingConfig,
      loadBalancerEdition: 'string',
      loadBalancerName: 'string',
      modificationProtectionConfig: CreateLoadBalancerRequestModificationProtectionConfig,
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateLoadBalancerRequestTag },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': CreateLoadBalancerRequestZoneMappings },
    };
  }

  validate() {
    if(this.loadBalancerBillingConfig && typeof (this.loadBalancerBillingConfig as any).validate === 'function') {
      (this.loadBalancerBillingConfig as any).validate();
    }
    if(this.modificationProtectionConfig && typeof (this.modificationProtectionConfig as any).validate === 'function') {
      (this.modificationProtectionConfig as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.zoneMappings)) {
      $dara.Model.validateArray(this.zoneMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

