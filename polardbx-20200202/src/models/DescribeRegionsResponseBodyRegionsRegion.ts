// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionsResponseBodyRegionsRegionZones } from "./DescribeRegionsResponseBodyRegionsRegionZones";


export class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
  /**
   * @example
   * ch-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * true
   */
  supportPolarx10?: boolean;
  /**
   * @example
   * true
   */
  supportPolarx20?: boolean;
  zones?: DescribeRegionsResponseBodyRegionsRegionZones;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      supportPolarx10: 'SupportPolarx10',
      supportPolarx20: 'SupportPolarx20',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      supportPolarx10: 'boolean',
      supportPolarx20: 'boolean',
      zones: DescribeRegionsResponseBodyRegionsRegionZones,
    };
  }

  validate() {
    if(this.zones && typeof (this.zones as any).validate === 'function') {
      (this.zones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

