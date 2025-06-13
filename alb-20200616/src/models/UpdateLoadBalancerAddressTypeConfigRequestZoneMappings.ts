// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerAddressTypeConfigRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic IP address (EIP). You can specify a maximum of 10 zones.
   * 
   * >  This parameter is required if you want to change the network type from internal-facing to Internet-facing.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of the EIP. Valid values:
   * 
   * *   Common (default): indicates an EIP
   * *   Anycast: indicates an Anycast EIP
   * 
   * >  For more information about the regions in which ALB supports Anycast EIPs, see [Limits](https://help.aliyun.com/document_detail/460727.html).
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The vSwitch in the zone. You can specify only one vSwitch (subnet) in each zone of an ALB instance. You can specify a maximum of 10 zones. If the selected region supports two or more zones, select at least two zones to ensure the high availability of your service.
   * 
   * @example
   * vsw-bp10ttov87felojcn****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the ALB instance. You can specify a maximum of 10 zones. If the selected region supports two or more zones, select at least two zones to ensure the high availability of your service.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/189196.html) operation to query the information about the zone.
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

