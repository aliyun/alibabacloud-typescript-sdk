// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $dara.Model {
  /**
   * @example
   * true
   */
  vpcEnabled?: boolean;
  /**
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcEnabled: 'VpcEnabled',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcEnabled: 'boolean',
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

export class DescribeRegionsResponseBodyRegionsRegionZones extends $dara.Model {
  zone?: DescribeRegionsResponseBodyRegionsRegionZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegionZonesZone },
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

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      message: 'Message',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      errorCode: 'number',
      message: 'string',
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
      success: 'boolean',
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

