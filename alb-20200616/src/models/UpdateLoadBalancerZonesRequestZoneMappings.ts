// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLoadBalancerZonesRequestZoneMappings extends $dara.Model {
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
   * The private IPv4 address. You must specify at least two zones. You can specify a maximum of 10 zones.
   * 
   * @example
   * 192.168.10.1
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. By default, each zone contains one vSwitch and one subnet. You can specify at most 10 zones. If the region supports two or more zones, specify at least two zones.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1rmcrwg3erh1fh8****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone name. You can call the [DescribeZones](https://help.aliyun.com/document_detail/189196.html) operation to query the most recent zone list. You can specify at most 10 zones. If the region supports two or more zones, specify at least two zones.
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

