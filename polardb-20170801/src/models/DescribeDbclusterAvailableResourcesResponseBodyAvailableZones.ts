// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines } from "./DescribeDbclusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines";


export class DescribeDBClusterAvailableResourcesResponseBodyAvailableZones extends $dara.Model {
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The database engines that the available resources support.
   */
  supportedEngines?: DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines[];
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      supportedEngines: 'SupportedEngines',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      supportedEngines: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedEngines)) {
      $dara.Model.validateArray(this.supportedEngines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

