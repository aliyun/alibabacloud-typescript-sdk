// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeInstanceType extends $dara.Model {
  cores?: number;
  generation?: string;
  instanceType?: string;
  instanceTypeFamily?: string;
  memory?: number;
  supportIoOptimized?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      generation: 'Generation',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      memory: 'Memory',
      supportIoOptimized: 'SupportIoOptimized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      generation: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      memory: 'number',
      supportIoOptimized: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZoneNetworkTypes extends $dara.Model {
  networkType?: string[];
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.networkType)) {
      $dara.Model.validateArray(this.networkType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZone extends $dara.Model {
  networkTypes?: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZoneNetworkTypes;
  zoneNo?: string;
  static names(): { [key: string]: string } {
    return {
      networkTypes: 'NetworkTypes',
      zoneNo: 'ZoneNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkTypes: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZoneNetworkTypes,
      zoneNo: 'string',
    };
  }

  validate() {
    if(this.networkTypes && typeof (this.networkTypes as any).validate === 'function') {
      (this.networkTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZones extends $dara.Model {
  zone?: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZonesZone },
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

export class DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceType extends $dara.Model {
  commodityCode?: string;
  instanceChargeType?: string;
  instanceType?: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeInstanceType;
  networkType?: string;
  priority?: number;
  regionId?: string;
  scene?: string;
  spotStrategy?: string;
  zoneId?: string;
  zones?: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZones;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      priority: 'Priority',
      regionId: 'RegionId',
      scene: 'Scene',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      instanceChargeType: 'string',
      instanceType: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeInstanceType,
      networkType: 'string',
      priority: 'number',
      regionId: 'string',
      scene: 'string',
      spotStrategy: 'string',
      zoneId: 'string',
      zones: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeZones,
    };
  }

  validate() {
    if(this.instanceType && typeof (this.instanceType as any).validate === 'function') {
      (this.instanceType as any).validate();
    }
    if(this.zones && typeof (this.zones as any).validate === 'function') {
      (this.zones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendInstanceTypeResponseBodyData extends $dara.Model {
  recommendInstanceType?: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceType[];
  static names(): { [key: string]: string } {
    return {
      recommendInstanceType: 'RecommendInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendInstanceType: { 'type': 'array', 'itemType': DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceType },
    };
  }

  validate() {
    if(Array.isArray(this.recommendInstanceType)) {
      $dara.Model.validateArray(this.recommendInstanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendInstanceTypeResponseBody extends $dara.Model {
  data?: DescribeRecommendInstanceTypeResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeRecommendInstanceTypeResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

