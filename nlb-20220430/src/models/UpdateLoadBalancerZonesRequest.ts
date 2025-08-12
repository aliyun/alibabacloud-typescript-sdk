// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerZonesRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic IP address (EIP) or Anycast EIP.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of the EIP. Valid values:
   * 
   * *   **Common**: an EIP
   * *   **Anycast**: an Anycast EIP
   * 
   * >  For regions that support Anycast EIPs, see [Limits](https://help.aliyun.com/document_detail/470000.html).This parameter is required if **AddressType** is set to **Internet**.
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.168.36.16
   */
  privateIPv4Address?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. By default, each zone uses one vSwitch and one subnet.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1rmcrwg3erh1fh8****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the most recent zone list.
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
      privateIPv4Address: 'PrivateIPv4Address',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eipType: 'string',
      privateIPv4Address: 'string',
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

export class UpdateLoadBalancerZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.
   * 
   * >  If you do not set this parameter, the value of **RequestId** is used.**** The value of **RequestId** is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: validates the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the validation, the corresponding error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
   * *   **false** (default): validates the request and performs the request. If the request passes the validation, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The ID of region where the NLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The mappings between the zones and the vSwitches. You can specify up to 10 zones.
   * 
   * This parameter is required.
   */
  zoneMappings?: UpdateLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': UpdateLoadBalancerZonesRequestZoneMappings },
    };
  }

  validate() {
    if(Array.isArray(this.zoneMappings)) {
      $dara.Model.validateArray(this.zoneMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

