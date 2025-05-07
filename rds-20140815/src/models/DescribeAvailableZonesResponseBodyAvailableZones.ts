// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines } from "./DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines";


export class DescribeAvailableZonesResponseBodyAvailableZones extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The database engines that are available for purchase.
   */
  supportedEngines?: DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines[];
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-e
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
      supportedEngines: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines },
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

