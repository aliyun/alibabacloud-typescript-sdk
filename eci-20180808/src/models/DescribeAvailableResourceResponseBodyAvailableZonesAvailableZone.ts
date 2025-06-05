// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources } from "./DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources";


export class DescribeAvailableResourceResponseBodyAvailableZonesAvailableZone extends $dara.Model {
  /**
   * @remarks
   * The resources that are available in the specified zone.
   */
  availableResources?: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources;
  /**
   * @remarks
   * The region ID of the resources.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The zone ID of the resources.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: DescribeAvailableResourceResponseBodyAvailableZonesAvailableZoneAvailableResources,
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.availableResources && typeof (this.availableResources as any).validate === 'function') {
      (this.availableResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

