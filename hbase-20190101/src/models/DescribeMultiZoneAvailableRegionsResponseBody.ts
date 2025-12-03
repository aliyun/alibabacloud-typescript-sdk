// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombineZones extends $dara.Model {
  zone?: string[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombine extends $dara.Model {
  /**
   * @example
   * cn-shenzhen-****-aliyun
   */
  id?: string;
  zones?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombineZones;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      zones: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombineZones,
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

export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombines extends $dara.Model {
  availableCombine?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombine[];
  static names(): { [key: string]: string } {
    return {
      availableCombine: 'AvailableCombine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCombine: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombinesAvailableCombine },
    };
  }

  validate() {
    if(Array.isArray(this.availableCombine)) {
      $dara.Model.validateArray(this.availableCombine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegion extends $dara.Model {
  availableCombines?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombines;
  localName?: string;
  /**
   * @example
   * hbase.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCombines: 'AvailableCombines',
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCombines: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegionAvailableCombines,
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.availableCombines && typeof (this.availableCombines as any).validate === 'function') {
      (this.availableCombines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMultiZoneAvailableRegionsResponseBodyRegions extends $dara.Model {
  region?: DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeMultiZoneAvailableRegionsResponseBodyRegionsRegion },
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

export class DescribeMultiZoneAvailableRegionsResponseBody extends $dara.Model {
  regions?: DescribeMultiZoneAvailableRegionsResponseBodyRegions;
  /**
   * @example
   * F03BB273-45EE-4B6C-A329-A6E6A8D15856
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
      regions: DescribeMultiZoneAvailableRegionsResponseBodyRegions,
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

