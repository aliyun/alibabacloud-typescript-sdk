// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegionsDdsRegionZonesZone extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a virtual private cloud (VPC) is supported. Valid values:
   * 
   * *   **true**: VPC is supported.
   * *   **false**: VPC is not supported.
   * 
   * @example
   * true
   */
  vpcEnabled?: boolean;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * The value of the ZoneName parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the ZoneId parameter in the response is **cn-hangzhou-h**, the following values are returned for the ZoneName parameter:
   * 
   * *   If the value of the **AcceptLanguage** parameter is **zh**, the value **H** is returned for the ZoneName parameter.
   * *   If the value of the **AcceptLanguage** parameter is **en**, the value **Hangzhou Zone H** is returned for the ZoneName parameter.
   * 
   * @example
   * Hangzhou Zone H
   */
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
  /**
   * @remarks
   * The public endpoint of the region.
   * 
   * For example, if the value of the RegionId parameter in the response is cn-hangzhou, the following value is returned for the EndPoint parameter:
   * 
   * *   mongodb.aliyuncs.com
   * 
   * @example
   * mongodb.aliyuncs.com
   */
  endPoint?: string;
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
   * The name of the region.
   * 
   * The value of the LocalName parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the RegionId parameter in the response is **cn-hangzhou**, the following values are returned for the LocalName parameter:
   * 
   * *   If the value of the **AcceptLanguage** parameter is **zh**, the value **华东1（杭州）** is returned for the LocalName parameter.
   * *   If the value of the **AcceptLanguage** parameter is **en**, the value **China (Hangzhou)** is returned for the LocalName parameter.
   * 
   * @example
   * China (Hangzhou)
   */
  regionName?: string;
  /**
   * @remarks
   * The zones.
   */
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
  /**
   * @remarks
   * The regions.
   */
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

