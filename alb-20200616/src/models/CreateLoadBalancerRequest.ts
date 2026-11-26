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
   * The reason for enabling modification protection.
   * 
   * The value must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
   * 
   * >This parameter is valid only when **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * Managed Instance
   */
  reason?: string;
  /**
   * @remarks
   * The modification protection status of the Application Load Balancing (ALB) instance. Valid values:
   * 
   * - **NonProtection**: disables modification protection. If **Reason** is specified, it is forcibly cleared.
   * 
   * - **ConsoleProtection**: enables modification protection in the console. If **Reason** is specified, it takes effect.
   * 
   * > When this parameter is set to **ConsoleProtection**, users cannot modify the instance configurations in the load balancing console, but can invoke API operations to modify the instance configurations.
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

export class CreateLoadBalancerRequestSecurityGroupIds extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-gw82chzr7ru23iwbn9mu
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
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
   * The tag key. It can be up to 128 characters in length, and cannot start with aliyun or acs:, or contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag key. It can be up to 128 characters in length, and cannot start with aliyun or acs:, or contain http:// or https://.
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
   * The instance ID of the elastic IP address (EIP) that is attached to the Internet-facing instance.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of the EIP. Valid values:
   * 
   * - Common (default): EIP.
   * 
   * - Anycast: Anycast EIP.
   * 
   * > For more information about the regions where ALB supports Anycast EIPs, see [Limits](https://help.aliyun.com/document_detail/460727.html).
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The IPv4 private IP address.
   * 
   * @example
   * 192.168.10.1
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. You can use only one vSwitch and one subnet in each zone. You can add up to 10 zones. If the current region supports two or more zones, you must add at least two zones.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-sersdf****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID. You can add up to 10 zones. If the current region supports two or more zones, you must add at least two zones.
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/36064.html) operation to query the information about the zones.
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
   * The IP address allocation mode. Valid values:
   * 
   * - **Fixed** (default): fixed IP mode. A fixed IP address is allocated to each zone.
   * 
   * - **Dynamic**: dynamic IP mode. IP addresses are dynamically allocated to each zone.
   * 
   * > Starting from <props="china">00:00:00 on February 25, 2025 (UTC+8)<props="intl">00:00:00 on February 25, 2025 (UTC+8), when you create an instance by calling this operation, an [upgraded ALB instance](https://help.aliyun.com/document_detail/2864070.html) is created regardless of the mode you specify. The IP address allocation mode is no longer distinguished, and the allocated IP addresses are automatically scalable. Existing ALB instances created before the upgrade are not affected.
   * 
   * @example
   * Fixed
   */
  addressAllocatedMode?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **IPv4**: IPv4.
   * - **DualStack**: dual-stack.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The network type of the Application Load Balancing (ALB) instance. Valid values:
   * 
   * - **Internet**: The Application Load Balancing (ALB) instance uses a public IP address. The DNS domain name is parsed to the public IP address. Therefore, the instance can be accessed in the Internet environment.
   * 
   * - **Intranet**: The Application Load Balancing (ALB) instance uses only a private IP address. The DNS domain name is parsed to the private IP address. Therefore, the instance can be accessed only in the internal network environment of the VPC where the Application Load Balancing (ALB) instance is deployed.
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
   * You can generate a parameter value from your client to ensure that the value is unique among different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * - **true**: enables deletion protection.
   * - **false** (default): disables deletion protection.
   * 
   * @example
   * false
   */
  deletionProtectionEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * 
   * - **true**: performs a dry run without creating the Application Load Balancing (ALB) instance. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and sends a normal request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The billing configuration of the Application Load Balancing (ALB) instance.
   * 
   * This parameter is required.
   */
  loadBalancerBillingConfig?: CreateLoadBalancerRequestLoadBalancerBillingConfig;
  /**
   * @remarks
   * The edition of the Application Load Balancing (ALB) instance. Different editions have different feature limits and billing policy. Valid values:
   * 
   * - **Basic**: Basic Edition.
   * 
   * - **Standard**: Standard Edition.
   * 
   * - **StandardWithWaf**: WAF-enhanced Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * Standard
   */
  loadBalancerEdition?: string;
  /**
   * @remarks
   * The name of the Application Load Balancing (ALB) instance.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces. It must start with a letter or digit.
   * 
   * @example
   * alb1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The modification protection configuration.
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
   * The IDs of the security groups.
   */
  securityGroupIds?: CreateLoadBalancerRequestSecurityGroupIds[];
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateLoadBalancerRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the Application Load Balancing (ALB) instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of zone and vSwitch mappings. You can specify up to 10 zones. If the current region supports two or more zones, you must specify at least two zones.
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
      securityGroupIds: 'SecurityGroupIds',
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
      securityGroupIds: { 'type': 'array', 'itemType': CreateLoadBalancerRequestSecurityGroupIds },
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
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
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

