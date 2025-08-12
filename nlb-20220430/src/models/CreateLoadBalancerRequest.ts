// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestDeletionProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the deletion protection feature. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The reason why the deletion protection feature is enabled or disabled. The reason must be 2 to 128 characters in length, can contain letters, digits, periods (.), underscores (_), and hyphens (-), and must start with a letter.
   * 
   * @example
   * The instance is running
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestLoadBalancerBillingConfig extends $dara.Model {
  /**
   * @remarks
   * The billing method of the NLB instance.
   * 
   * Set the value to **PostPay**, which specifies the pay-as-you-go billing method.
   * 
   * @example
   * PostPay
   */
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * The reason for enabling the configuration read-only mode. The reason must be 2 to 128 characters in length, can contain letters, digits, periods (.), underscores (_), and hyphens (-), and must start with a letter.
   * 
   * >  This parameter takes effect only when **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * Service guarantee period
   */
  reason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: does not enable the configuration read-only mode. You cannot set the **Reason** parameter. If the **Reason** parameter is set, the value is cleared.
   * *   **ConsoleProtection**: enables the configuration read-only mode. You can set the **Reason** parameter.
   * 
   * >  If the parameter is set to **ConsoleProtection**, the configuration read-only mode is enabled. You cannot modify the configurations of the NLB instance in the NLB console. However, you can call API operations to modify the configurations of the NLB instance.
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
   * The key of the tag. The tag key can be up to 64 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. The tag key can contain letters, digits, and the following special characters: _ . : / = + - @
   * 
   * You can specify up to 20 tags in each call.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The tag value can be up to 128 characters in length, cannot start with `acs:` or `aliyun`, and cannot contain `http://` or `https://`. The tag value can contain letters, digits, and the following special characters: _ . : / = + - @
   * 
   * You can specify up to 20 tags in each call.
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
   * The ID of the elastic IP address (EIP) that is associated with the Internet-facing NLB instance. Each zone is assigned one EIP. An NLB instance can be deployed in up to 10 zones. If the region supports two or more zones, specify at least two zones.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The local IPv4 addresses. The IP addresses that the NLB instance uses to communicate with the backend servers. The number of IP addresses must be an even number, which must be at least 2 and at most 8.
   */
  ipv4LocalAddresses?: string[];
  /**
   * @remarks
   * The VIP of the IPv6 version. The IPv6 address that the NLB instance uses to provide external services.
   * 
   * @example
   * 2408:400a:d5:3080:b409:840a:ca:e8e5
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The local IPv6 addresses. The IP addresses that the NLB instance uses to communicate with the backend servers. The number of IP addresses must be an even number, which must be at least 2 and at most 8.
   */
  ipv6LocalAddresses?: string[];
  /**
   * @remarks
   * The private virtual IP address (VIP) of the IPv4 version. The private IPv4 address that the NLB instance uses to provide external services.
   * 
   * @example
   * 192.168.10.1
   */
  privateIPv4Address?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. You can specify only one vSwitch (subnet) in each zone of an NLB instance. An NLB instance can be deployed in up to 10 zones. If the region supports two or more zones, you must specify at least two zones.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-sersdf****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone where the NLB instance is deployed. An NLB instance can be deployed in up to 10 zones. If the region supports two or more zones, specify at least two zones.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the most recent zone list.
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
      ipv4LocalAddresses: 'Ipv4LocalAddresses',
      ipv6Address: 'Ipv6Address',
      ipv6LocalAddresses: 'Ipv6LocalAddresses',
      privateIPv4Address: 'PrivateIPv4Address',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipv4LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      ipv6Address: 'string',
      ipv6LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      privateIPv4Address: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4LocalAddresses)) {
      $dara.Model.validateArray(this.ipv4LocalAddresses);
    }
    if(Array.isArray(this.ipv6LocalAddresses)) {
      $dara.Model.validateArray(this.ipv6LocalAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequest extends $dara.Model {
  /**
   * @remarks
   * The version of IP addresses used for the NLB instance. Valid values:
   * 
   * *   **ipv4** (default)
   * *   **DualStack**
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The type of IPv4 addresses used for the NLB instance. Valid values are:
   * 
   * *   **Internet**: The nodes of an Internet-facing NLB instance have public IP addresses. The DNS name of an Internet-facing NLB instance is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing NLB instances can route requests from clients over the Internet.
   * *   **Intranet**: The nodes of an internal-facing NLB instance have only private IP addresses. The DNS name of an internal-facing NLB instance is publicly resolvable to the private IP addresses of the nodes. Therefore, internal-facing NLB instances can route requests only from clients with access to the virtual private cloud (VPC) for the NLB instance.
   * 
   * >  To enable a public IPv6 address for a dual-stack NLB instance, call the [EnableLoadBalancerIpv6Internet](https://help.aliyun.com/document_detail/445878.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance that is associated with the Internet-facing NLB instance.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.
   * 
   * >  If you do not specify this parameter, the value of **RequestId** is used.**** The value of **RequestId** is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration of the deletion protection feature.
   */
  deletionProtectionConfig?: CreateLoadBalancerRequestDeletionProtectionConfig;
  /**
   * @remarks
   * Perform a dry run without actually making the request. Valid values are:
   * 
   * *   **true**: Perform only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the check, an error message specifying the issue is returned. If the request passes, the `DryRunOperation` error code is returned.
   * *   **false** (default): Check the request and perform the operation. If the request passes the check, a 2xx HTTP status code is returned, and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The billing settings of the NLB instance.
   */
  loadBalancerBillingConfig?: CreateLoadBalancerRequestLoadBalancerBillingConfig;
  /**
   * @remarks
   * The name of the NLB instance.
   * 
   * It must be 2 to 128 characters in length, can contain letters, digits, periods (.), underscores (_), and hyphens (-), and must start with a letter.
   * 
   * @example
   * NLB1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The type of the Server Load Balancer (SLB) instance. Set the value to **network**, which indicates an NLB instance.
   * 
   * @example
   * network
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The configuration of the configuration read-only mode.
   */
  modificationProtectionConfig?: CreateLoadBalancerRequestModificationProtectionConfig;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateLoadBalancerRequestTag[];
  /**
   * @remarks
   * The ID of the VPC where you want to create the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcId?: string;
  /**
   * @remarks
   * The mappings between zones and vSwitches. An NLB instance can be deployed in up to 10 zones. If the region supports two or more zones, you must specify at least two zones.
   * 
   * This parameter is required.
   */
  zoneMappings?: CreateLoadBalancerRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      dryRun: 'DryRun',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerType: 'LoadBalancerType',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      clientToken: 'string',
      deletionProtectionConfig: CreateLoadBalancerRequestDeletionProtectionConfig,
      dryRun: 'boolean',
      loadBalancerBillingConfig: CreateLoadBalancerRequestLoadBalancerBillingConfig,
      loadBalancerName: 'string',
      loadBalancerType: 'string',
      modificationProtectionConfig: CreateLoadBalancerRequestModificationProtectionConfig,
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateLoadBalancerRequestTag },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': CreateLoadBalancerRequestZoneMappings },
    };
  }

  validate() {
    if(this.deletionProtectionConfig && typeof (this.deletionProtectionConfig as any).validate === 'function') {
      (this.deletionProtectionConfig as any).validate();
    }
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

