// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerAddressTypeConfigRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the EIP. You can add up to 10 active zones.
   * 
   * > This parameter is required when you invoke this operation to transform the network type from private network to public network.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of the EIP. Valid values:
   * 
   * - Common (default): a standard EIP.
   * 
   * - Anycast: an Anycast EIP.
   * 
   * > For the regions that support binding Anycast EIPs to ALB instances, see [Limits](https://help.aliyun.com/document_detail/460727.html).
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The vSwitch that corresponds to the zone. Each zone can use only one vSwitch and one subnet. You can add up to 10 zones. If the current region supports two or more zones, you must add at least two zones.
   * 
   * @example
   * vsw-bp10ttov87felojcn****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the load balancing instance. You can add up to 10 zones. If the current region supports two or more zones, you must add at least two zones.
   * 
   * You can invoke [DescribeZones](https://help.aliyun.com/document_detail/189196.html) to query the active zone information that corresponds to a zone ID.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eipType: 'EipType',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eipType: 'string',
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

export class UpdateLoadBalancerAddressTypeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The target network type. Valid values:
   * 
   * - **Internet**: The load balancing instance has a public IP address, and its DNS domain name is resolved to the public IP address. The load balancing instance can be accessed over the Internet.
   * 
   * - **Intranet**: The load balancing instance has only a private IP address, and its DNS domain name is resolved to the private IP address. The load balancing instance can be accessed only within the internal network environment of the VPC where it resides.
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
   * Generate a unique value from your client for this parameter. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: Sends a dry run request. The network type of the instance is not changed. The system checks whether the required parameters are specified, the request format is valid, and the business limits are met. If the check fails, the corresponding error is returned. If the check passes, the error code `DryRunOperation` is returned.
   * - **false** (default): Sends a regular request. If the check passes, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * The instance ID of the load balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-bp1o94dp5i6ea****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The types of resources that are automatically created by ALB and need to be retained. Settings can currently be configured as eip, which indicates EIPs. Automatic creation and attach operations apply to these resource types.
   */
  retainResourceType?: string[];
  /**
   * @remarks
   * The list of zone and vSwitch mappings. You can add up to 10 zones. If the current region supports two or more zones, you must add at least two zones.
   */
  zoneMappings?: UpdateLoadBalancerAddressTypeConfigRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      retainResourceType: 'RetainResourceType',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      clientToken: 'string',
      dryRun: 'string',
      loadBalancerId: 'string',
      retainResourceType: { 'type': 'array', 'itemType': 'string' },
      zoneMappings: { 'type': 'array', 'itemType': UpdateLoadBalancerAddressTypeConfigRequestZoneMappings },
    };
  }

  validate() {
    if(Array.isArray(this.retainResourceType)) {
      $dara.Model.validateArray(this.retainResourceType);
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

