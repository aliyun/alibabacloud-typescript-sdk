// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestZoneMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch in the zone. You can specify only one vSwitch (subnet) in each zone of a GWLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2f0eb020****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID. You can call the DescribeZones operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

