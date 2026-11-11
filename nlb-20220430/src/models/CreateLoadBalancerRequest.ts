// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestDeletionProtectionConfig extends $dara.Model {
  /**
   * @remarks
   * The deletion protection status. Valid values:
   * 
   * - **true**: enabled.
   * - **false** (default): disabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The reason for changing the deletion protection status. The reason must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * Instance is running
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
   * The billing method of the Network Load Balancing (NLB) instance.
   * 
   * Valid value: **PostPay**, which indicates the pay-as-you-go billing method.
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
   * The reason for enabling modification protection. The reason must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * > This parameter is valid and takes effect only when **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * Business protection period
   */
  reason?: string;
  /**
   * @remarks
   * The modification protection status of the Network Load Balancing (NLB). Valid values:
   * 
   * - **NonProtection**: modification protection is disabled. You cannot specify the **Reason** parameter. If you specify the **Reason** parameter, the configuration is cleared.
   * - **ConsoleProtection**: console modification protection is enabled. You can specify the **Reason** parameter.
   * 
   * > If you set the value to **ConsoleProtection**, modification protection is enabled. You cannot modify the instance configurations in the load balancing console, but you can invoke API operations to modify the instance configurations.
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
   * The tag key. The key can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. The key can contain letters, digits, underscores (_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).
   * 
   * You can add up to 20 tags in a single call.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. The value can contain letters, digits, underscores (_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).
   * 
   * You can add up to 20 tags in a single call.
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
   * The EIP instance ID associated with the Internet-facing instance. Each zone corresponds to one EIP instance ID. You can add up to 10 zones. If the current region supports two or more zones, you must add at least two zones.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The list of IPv4 local addresses. These are the addresses used by the NLB to interact with backend services.
   * The number of addresses must be an even number, with a minimum of 2 and a maximum of 8.
   */
  ipv4LocalAddresses?: string[];
  /**
   * @remarks
   * The IPv6 VIP. This is the IPv6 address used by the NLB to provide services.
   * 
   * @example
   * 2408:400a:d5:3080:b409:840a:ca:e8e5
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The list of IPv6 local addresses. These are the addresses used by the NLB to interact with backend services.
   * The number of addresses must be an even number, with a minimum of 2 and a maximum of 8.
   */
  ipv6LocalAddresses?: string[];
  /**
   * @remarks
   * The private IPv4 virtual IP address (VIP). This is the private IPv4 address used by the NLB to provide services.
   * 
   * @example
   * 192.168.10.1
   */
  privateIPv4Address?: string;
  /**
   * @remarks
   * The vSwitch that corresponds to the zone. You can use only one vSwitch and one subnet in each zone. You can add up to 10 zones.
   * If the current region supports two or more zones, you must add at least two zones.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-sersdf****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone where the Network Load Balancing (NLB) instance is deployed. You can add up to 10 zones. If the current region supports two or more zones, you must add at least two zones.
   * 
   * You can invoke the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query zone IDs.
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
   * The IP version. Valid values:
   * 
   * - **ipv4** (default): IPv4.
   * - **DualStack**: dual-stack.
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The IPv4 address type of the Network Load Balancing (NLB) instance. Valid values:
   * 
   * - **Internet**: The load balancing instance has a public IP address. The DNS domain name is resolved to the public IP address, so it can be accessed over the Internet.
   * - **Intranet**: The load balancing instance has only a private IP address. The DNS domain name is resolved to the private IP address, so it can be accessed only over the internal network of the VPC where the load balancing instance is deployed.
   * 
   * > To enable IPv6 access over the Internet for a dual-stack Network Load Balancing (NLB) instance, invoke the [EnableLoadBalancerIpv6Internet](https://help.aliyun.com/document_detail/445878.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance that is associated with the Internet-facing instance.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The deletion protection configuration.
   */
  deletionProtectionConfig?: CreateLoadBalancerRequestDeletionProtectionConfig;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: prechecks the request without creating the instance. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The billing configuration of the Network Load Balancing (NLB) instance.
   */
  loadBalancerBillingConfig?: CreateLoadBalancerRequestLoadBalancerBillingConfig;
  /**
   * @remarks
   * The name of the Network Load Balancing (NLB) instance.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * NLB1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The type of load balancing. Valid value: **network**, which indicates Network Load Balancing (NLB).
   * 
   * @example
   * network
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The modification protection configuration.
   */
  modificationProtectionConfig?: CreateLoadBalancerRequestModificationProtectionConfig;
  /**
   * @remarks
   * The region ID of the Network Load Balancing (NLB) instance. 
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query region IDs.
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
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateLoadBalancerRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the Network Load Balancing (NLB) instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone and vSwitch mappings. You can add up to 10 zones. If the current region supports two or more zones, you must add at least two zones.
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

