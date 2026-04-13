// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegionsDdsRegionZonesZone extends $dara.Model {
  vpcEnabled?: boolean;
  zoneId?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      vpcEnabled: 'VpcEnabled',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcEnabled: 'boolean',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsDdsRegionZones extends $dara.Model {
  zone?: DescribeRegionsResponseBodyRegionsDdsRegionZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsDdsRegionZonesZone },
    };
  }

  validate() {
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsDdsRegion extends $dara.Model {
  endPoint?: string;
  regionId?: string;
  regionName?: string;
  zones?: DescribeRegionsResponseBodyRegionsDdsRegionZones;
  static names(): { [key: string]: string } {
    return {
      endPoint: 'EndPoint',
      regionId: 'RegionId',
      regionName: 'RegionName',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPoint: 'string',
      regionId: 'string',
      regionName: 'string',
      zones: DescribeRegionsResponseBodyRegionsDdsRegionZones,
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

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  ddsRegion?: DescribeRegionsResponseBodyRegionsDdsRegion[];
  static names(): { [key: string]: string } {
    return {
      ddsRegion: 'DdsRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddsRegion: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsDdsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.ddsRegion)) {
      $dara.Model.validateArray(this.ddsRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E46C22C-D3B7-4DB8-9C76-63851BE68E20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

