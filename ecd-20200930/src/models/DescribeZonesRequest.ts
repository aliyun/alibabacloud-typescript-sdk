// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. Call [](t2167755.xdita#)to get the list of regions supported by EDS.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  vpcAccessZone?: boolean;
  /**
   * @remarks
   * The zone type to query. Default value: `AvailabilityZone`. This queries standard cloud zones.
   * 
   * @example
   * AvailabilityZone
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcAccessZone: 'VpcAccessZone',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcAccessZone: 'boolean',
      zoneType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

