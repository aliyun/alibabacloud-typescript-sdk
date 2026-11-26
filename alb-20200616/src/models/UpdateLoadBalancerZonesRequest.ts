// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerZonesRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The type of the Internet-facing EIP. Valid values:
   * 
   * - **Common**: EIP.
   * - **Anycast**: Anycast EIP.
   * 
   * > For more information about the regions where ALB supports Anycast EIPs, see [Limits](https://help.aliyun.com/document_detail/460727.html).
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The IPv4 private endpoint of the private network. You must add at least two active zones and can add up to 10 active zones.
   * 
   * @example
   * 192.168.10.1
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The vSwitch that corresponds to the zone. By default, each zone uses one vSwitch and one subnet. You can add up to 10 zones. If the current region supports two or more zones, you must add at least two zones.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1rmcrwg3srh1fh8****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the zone. You can obtain the zone name by calling the [DescribeZones](https://help.aliyun.com/document_detail/189196.html) operation. You can add up to 10 zones. If the current region supports two or more zones, you must add at least two zones.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      eipType: 'EipType',
      intranetAddress: 'IntranetAddress',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateLoadBalancerZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value on your client to ensure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run and does not modify the active zone property of the application load balancing instance. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the dry run, the system returns an error. If the request passes the dry run, the system returns the `DryRunOperation` error code.
   * 
   * - **false** (default): performs a dry run and sends a Normal request. If the request passes the dry run, the system returns an `HTTP_2xx` status code and performs the operation.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the application load balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alb-o9ulmq5hfn68jk****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The types of resources that undergo automatic creation and attach to the ALB instance, which need to be retained. When you remove an active zone from an Internet-facing ALB instance, you can update the Settings to eip to retain the EIP that undergoes automatic creation and attach by ALB. Anycast EIPs do not support retention, and EIPs that users manually attach are automatically retained.
   */
  retainResourceType?: string[];
  /**
   * @remarks
   * The mappings between zones and vSwitches. You can specify up to 10 zones. If the current region supports two or more zones, you must specify at least two zones. If you specify this parameter, the previous zone configurations are replaced.
   * 
   * This parameter is required.
   */
  zoneMappings?: UpdateLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      retainResourceType: 'RetainResourceType',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      retainResourceType: { 'type': 'array', 'itemType': 'string' },
      zoneMappings: { 'type': 'array', 'itemType': UpdateLoadBalancerZonesRequestZoneMappings },
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

