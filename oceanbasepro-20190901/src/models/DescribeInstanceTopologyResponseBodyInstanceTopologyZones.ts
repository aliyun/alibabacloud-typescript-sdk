// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodes } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodes";
import { DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResource } from "./DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResource";


export class DescribeInstanceTopologyResponseBodyInstanceTopologyZones extends $dara.Model {
  /**
   * @remarks
   * The information about the nodes.
   */
  nodes?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodes[];
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The storage capacity of the zone.
   * 
   * @example
   * 200 GB
   */
  zoneDisk?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  /**
   * @remarks
   * The information about zones.
   */
  zoneResource?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResource;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      region: 'Region',
      zoneDisk: 'ZoneDisk',
      zoneId: 'ZoneId',
      zoneResource: 'ZoneResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodes },
      region: 'string',
      zoneDisk: 'string',
      zoneId: 'string',
      zoneResource: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResource,
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(this.zoneResource && typeof (this.zoneResource as any).validate === 'function') {
      (this.zoneResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

