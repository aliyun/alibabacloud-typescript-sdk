// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class QueryResultDataImages extends $dara.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultDataMetadata extends $dara.Model {
  averageSpend?: string;
  businessArea?: string;
  dailyOpeningHours?: string;
  mainTag?: string;
  phone?: string;
  score?: string;
  weeklyOpeningDays?: string;
  static names(): { [key: string]: string } {
    return {
      averageSpend: 'averageSpend',
      businessArea: 'businessArea',
      dailyOpeningHours: 'dailyOpeningHours',
      mainTag: 'mainTag',
      phone: 'phone',
      score: 'score',
      weeklyOpeningDays: 'weeklyOpeningDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageSpend: 'string',
      businessArea: 'string',
      dailyOpeningHours: 'string',
      mainTag: 'string',
      phone: 'string',
      score: 'string',
      weeklyOpeningDays: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultData extends $dara.Model {
  address?: string;
  cityCode?: string;
  cityName?: string;
  distanceMeter?: string;
  districtCode?: string;
  districtName?: string;
  id?: string;
  images?: QueryResultDataImages[];
  latitude?: string;
  longitude?: string;
  metadata?: QueryResultDataMetadata;
  name?: string;
  provinceCode?: string;
  provinceName?: string;
  typeCode?: string;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'cityCode',
      cityName: 'cityName',
      distanceMeter: 'distanceMeter',
      districtCode: 'districtCode',
      districtName: 'districtName',
      id: 'id',
      images: 'images',
      latitude: 'latitude',
      longitude: 'longitude',
      metadata: 'metadata',
      name: 'name',
      provinceCode: 'provinceCode',
      provinceName: 'provinceName',
      typeCode: 'typeCode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'string',
      cityName: 'string',
      distanceMeter: 'string',
      districtCode: 'string',
      districtName: 'string',
      id: 'string',
      images: { 'type': 'array', 'itemType': QueryResultDataImages },
      latitude: 'string',
      longitude: 'string',
      metadata: QueryResultDataMetadata,
      name: 'string',
      provinceCode: 'string',
      provinceName: 'string',
      typeCode: 'string',
      types: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBodyDataPathsCost extends $dara.Model {
  /**
   * @example
   * 39233
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  /**
   * @example
   * 4
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBodyDataPathsStepsCost extends $dara.Model {
  /**
   * @example
   * 2000
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBodyDataPathsSteps extends $dara.Model {
  cost?: BicyclingDirectionNovaResponseBodyDataPathsStepsCost;
  instruction?: string;
  orientation?: string;
  polyline?: string;
  roadName?: string;
  /**
   * @example
   * 3000
   */
  stepDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      instruction: 'instruction',
      orientation: 'orientation',
      polyline: 'polyline',
      roadName: 'roadName',
      stepDistanceMeter: 'stepDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: BicyclingDirectionNovaResponseBodyDataPathsStepsCost,
      instruction: 'string',
      orientation: 'string',
      polyline: 'string',
      roadName: 'string',
      stepDistanceMeter: 'string',
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBodyDataPaths extends $dara.Model {
  cost?: BicyclingDirectionNovaResponseBodyDataPathsCost;
  /**
   * @example
   * 96375
   */
  distanceMeter?: string;
  /**
   * @example
   * 300
   */
  durationSecond?: string;
  restriction?: string;
  steps?: BicyclingDirectionNovaResponseBodyDataPathsSteps[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      distanceMeter: 'distanceMeter',
      durationSecond: 'durationSecond',
      restriction: 'restriction',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: BicyclingDirectionNovaResponseBodyDataPathsCost,
      distanceMeter: 'string',
      durationSecond: 'string',
      restriction: 'string',
      steps: { 'type': 'array', 'itemType': BicyclingDirectionNovaResponseBodyDataPathsSteps },
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBodyData extends $dara.Model {
  count?: string;
  /**
   * @example
   * 39.995197
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  paths?: BicyclingDirectionNovaResponseBodyDataPaths[];
  /**
   * @example
   * 23
   */
  taxiCost?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      paths: 'paths',
      taxiCost: 'taxiCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      paths: { 'type': 'array', 'itemType': BicyclingDirectionNovaResponseBodyDataPaths },
      taxiCost: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBodyDataPathsCost extends $dara.Model {
  /**
   * @example
   * 39233
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  /**
   * @example
   * 3
   */
  trafficLights?: string;
  /**
   * @example
   * 10
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBodyDataPathsStepsCost extends $dara.Model {
  /**
   * @example
   * 1234
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBodyDataPathsSteps extends $dara.Model {
  cost?: DrivingDirectionNovaResponseBodyDataPathsStepsCost;
  instruction?: string;
  orientation?: string;
  polyline?: string;
  roadName?: string;
  /**
   * @example
   * 3000
   */
  stepDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      instruction: 'instruction',
      orientation: 'orientation',
      polyline: 'polyline',
      roadName: 'roadName',
      stepDistanceMeter: 'stepDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: DrivingDirectionNovaResponseBodyDataPathsStepsCost,
      instruction: 'string',
      orientation: 'string',
      polyline: 'string',
      roadName: 'string',
      stepDistanceMeter: 'string',
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBodyDataPaths extends $dara.Model {
  cost?: DrivingDirectionNovaResponseBodyDataPathsCost;
  /**
   * @example
   * 96375
   */
  distanceMeter?: string;
  /**
   * @example
   * 39223
   */
  durationSecond?: string;
  restriction?: string;
  steps?: DrivingDirectionNovaResponseBodyDataPathsSteps[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      distanceMeter: 'distanceMeter',
      durationSecond: 'durationSecond',
      restriction: 'restriction',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: DrivingDirectionNovaResponseBodyDataPathsCost,
      distanceMeter: 'string',
      durationSecond: 'string',
      restriction: 'string',
      steps: { 'type': 'array', 'itemType': DrivingDirectionNovaResponseBodyDataPathsSteps },
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBodyData extends $dara.Model {
  count?: string;
  /**
   * @example
   * 40.345456
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 117.466485
   */
  originLongitude?: string;
  paths?: DrivingDirectionNovaResponseBodyDataPaths[];
  /**
   * @example
   * 20
   */
  taxiCost?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      paths: 'paths',
      taxiCost: 'taxiCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      paths: { 'type': 'array', 'itemType': DrivingDirectionNovaResponseBodyDataPaths },
      taxiCost: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBodyDataPathsCost extends $dara.Model {
  /**
   * @example
   * 500
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  /**
   * @example
   * 4
   */
  trafficLights?: string;
  /**
   * @example
   * 4
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBodyDataPathsStepsCost extends $dara.Model {
  /**
   * @example
   * 2000
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  /**
   * @example
   * 5
   */
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBodyDataPathsSteps extends $dara.Model {
  cost?: ElectrobikeDirectionNovaResponseBodyDataPathsStepsCost;
  instruction?: string;
  orientation?: string;
  polyline?: string;
  roadName?: string;
  /**
   * @example
   * 3000
   */
  stepDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      instruction: 'instruction',
      orientation: 'orientation',
      polyline: 'polyline',
      roadName: 'roadName',
      stepDistanceMeter: 'stepDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: ElectrobikeDirectionNovaResponseBodyDataPathsStepsCost,
      instruction: 'string',
      orientation: 'string',
      polyline: 'string',
      roadName: 'string',
      stepDistanceMeter: 'string',
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBodyDataPaths extends $dara.Model {
  cost?: ElectrobikeDirectionNovaResponseBodyDataPathsCost;
  /**
   * @example
   * 12000
   */
  distanceMeter?: string;
  /**
   * @example
   * 300
   */
  durationSecond?: string;
  restriction?: string;
  steps?: ElectrobikeDirectionNovaResponseBodyDataPathsSteps[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      distanceMeter: 'distanceMeter',
      durationSecond: 'durationSecond',
      restriction: 'restriction',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: ElectrobikeDirectionNovaResponseBodyDataPathsCost,
      distanceMeter: 'string',
      durationSecond: 'string',
      restriction: 'string',
      steps: { 'type': 'array', 'itemType': ElectrobikeDirectionNovaResponseBodyDataPathsSteps },
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBodyData extends $dara.Model {
  count?: string;
  /**
   * @example
   * 40.345456
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.345456
   */
  originLongitude?: string;
  paths?: ElectrobikeDirectionNovaResponseBodyDataPaths[];
  /**
   * @example
   * 20
   */
  taxiCost?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      paths: 'paths',
      taxiCost: 'taxiCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      paths: { 'type': 'array', 'itemType': ElectrobikeDirectionNovaResponseBodyDataPaths },
      taxiCost: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeoCodeResponseBodyDataBuilding extends $dara.Model {
  /**
   * @example
   * timeliness_ms
   */
  name?: string;
  /**
   * @example
   * internal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeoCodeResponseBodyData extends $dara.Model {
  building?: GeoCodeResponseBodyDataBuilding;
  city?: string;
  cityCode?: string;
  district?: string;
  districtCode?: string;
  latitude?: string;
  level?: string;
  longitude?: string;
  /**
   * @example
   * 12201281024024
   */
  number?: string;
  province?: string;
  street?: string;
  static names(): { [key: string]: string } {
    return {
      building: 'building',
      city: 'city',
      cityCode: 'cityCode',
      district: 'district',
      districtCode: 'districtCode',
      latitude: 'latitude',
      level: 'level',
      longitude: 'longitude',
      number: 'number',
      province: 'province',
      street: 'street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      building: GeoCodeResponseBodyDataBuilding,
      city: 'string',
      cityCode: 'string',
      district: 'string',
      districtCode: 'string',
      latitude: 'string',
      level: 'string',
      longitude: 'string',
      number: 'string',
      province: 'string',
      street: 'string',
    };
  }

  validate() {
    if(this.building && typeof (this.building as any).validate === 'function') {
      (this.building as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaResponseBodyDataImages extends $dara.Model {
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * https://alidocs.dingtalk.com/i/team/nb9XJVAdyvMrOXyA/docs/b9XJlRRKq1BQaGyA
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaResponseBodyDataMetadata extends $dara.Model {
  /**
   * @example
   * 22.00
   */
  averageSpend?: string;
  businessArea?: string;
  /**
   * @example
   * 11:00-14:00 17:00-21:00
   */
  dailyOpeningHours?: string;
  mainTag?: string;
  /**
   * @example
   * 029-87983745
   */
  phone?: string;
  /**
   * @example
   * 4.5
   */
  score?: string;
  tag?: string;
  weeklyOpeningDays?: string;
  static names(): { [key: string]: string } {
    return {
      averageSpend: 'averageSpend',
      businessArea: 'businessArea',
      dailyOpeningHours: 'dailyOpeningHours',
      mainTag: 'mainTag',
      phone: 'phone',
      score: 'score',
      tag: 'tag',
      weeklyOpeningDays: 'weeklyOpeningDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageSpend: 'string',
      businessArea: 'string',
      dailyOpeningHours: 'string',
      mainTag: 'string',
      phone: 'string',
      score: 'string',
      tag: 'string',
      weeklyOpeningDays: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaResponseBodyData extends $dara.Model {
  address?: string;
  /**
   * @example
   * 010
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * 445
   */
  distanceMeter?: string;
  districtCode?: string;
  districtName?: string;
  /**
   * @example
   * 34360
   */
  id?: string;
  images?: NearbySearchNovaResponseBodyDataImages[];
  /**
   * @example
   * 39.994135
   */
  latitude?: string;
  /**
   * @example
   * 108.970162
   */
  longitude?: string;
  metadata?: NearbySearchNovaResponseBodyDataMetadata;
  name?: string;
  /**
   * @example
   * 110000
   */
  provinceCode?: string;
  provinceName?: string;
  /**
   * @example
   * 110200
   */
  typeCode?: string;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'cityCode',
      cityName: 'cityName',
      distanceMeter: 'distanceMeter',
      districtCode: 'districtCode',
      districtName: 'districtName',
      id: 'id',
      images: 'images',
      latitude: 'latitude',
      longitude: 'longitude',
      metadata: 'metadata',
      name: 'name',
      provinceCode: 'provinceCode',
      provinceName: 'provinceName',
      typeCode: 'typeCode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'string',
      cityName: 'string',
      distanceMeter: 'string',
      districtCode: 'string',
      districtName: 'string',
      id: 'string',
      images: { 'type': 'array', 'itemType': NearbySearchNovaResponseBodyDataImages },
      latitude: 'string',
      longitude: 'string',
      metadata: NearbySearchNovaResponseBodyDataMetadata,
      name: 'string',
      provinceCode: 'string',
      provinceName: 'string',
      typeCode: 'string',
      types: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaResponseBodyDataImages extends $dara.Model {
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * https://aos-comment.amap.com/B000A8UNZV/comment/f0a5ca9b58a31f63f8af51f459f75e4b_2048_2048_80.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaResponseBodyDataMetadata extends $dara.Model {
  /**
   * @example
   * 78
   */
  averageSpend?: string;
  businessArea?: string;
  dailyOpeningHours?: string;
  mainTag?: string;
  /**
   * @example
   * 010-83847583
   */
  phone?: string;
  score?: string;
  /**
   * @example
   * [{\\"value\\":\\"nttd\\",\\"key\\":\\"owner\\"}]
   */
  tag?: string;
  weeklyOpeningDays?: string;
  static names(): { [key: string]: string } {
    return {
      averageSpend: 'averageSpend',
      businessArea: 'businessArea',
      dailyOpeningHours: 'dailyOpeningHours',
      mainTag: 'mainTag',
      phone: 'phone',
      score: 'score',
      tag: 'tag',
      weeklyOpeningDays: 'weeklyOpeningDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageSpend: 'string',
      businessArea: 'string',
      dailyOpeningHours: 'string',
      mainTag: 'string',
      phone: 'string',
      score: 'string',
      tag: 'string',
      weeklyOpeningDays: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaResponseBodyData extends $dara.Model {
  address?: string;
  /**
   * @example
   * 010
   */
  cityCode?: string;
  cityName?: string;
  /**
   * @example
   * 445
   */
  distanceMeter?: string;
  /**
   * @example
   * 110105
   */
  districtCode?: string;
  districtName?: string;
  /**
   * @example
   * 34360
   */
  id?: string;
  images?: PlaceSearchNovaResponseBodyDataImages[];
  /**
   * @example
   * 39.990039
   */
  latitude?: string;
  /**
   * @example
   * 116.482145
   */
  longitude?: string;
  metadata?: PlaceSearchNovaResponseBodyDataMetadata;
  /**
   * @example
   * hydro-project/hydro-res-auth
   */
  name?: string;
  /**
   * @example
   * 110000
   */
  provinceCode?: string;
  provinceName?: string;
  /**
   * @example
   * 110200
   */
  typeCode?: string;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'cityCode',
      cityName: 'cityName',
      distanceMeter: 'distanceMeter',
      districtCode: 'districtCode',
      districtName: 'districtName',
      id: 'id',
      images: 'images',
      latitude: 'latitude',
      longitude: 'longitude',
      metadata: 'metadata',
      name: 'name',
      provinceCode: 'provinceCode',
      provinceName: 'provinceName',
      typeCode: 'typeCode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'string',
      cityName: 'string',
      distanceMeter: 'string',
      districtCode: 'string',
      districtName: 'string',
      id: 'string',
      images: { 'type': 'array', 'itemType': PlaceSearchNovaResponseBodyDataImages },
      latitude: 'string',
      longitude: 'string',
      metadata: PlaceSearchNovaResponseBodyDataMetadata,
      name: 'string',
      provinceCode: 'string',
      provinceName: 'string',
      typeCode: 'string',
      types: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBodyDataBuilding extends $dara.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBodyDataBusinessAreas extends $dara.Model {
  /**
   * @example
   * 110108
   */
  id?: string;
  /**
   * @example
   * 39.996850
   */
  latitude?: string;
  /**
   * @example
   * 116.294214
   */
  longitude?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      latitude: 'latitude',
      longitude: 'longitude',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      latitude: 'string',
      longitude: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBodyDataNeighborhood extends $dara.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBodyDataStreetNumber extends $dara.Model {
  direction?: string;
  /**
   * @example
   * 289.832
   */
  distanceMeter?: string;
  /**
   * @example
   * 39.986542
   */
  latitude?: string;
  /**
   * @example
   * 116.311943
   */
  longitude?: string;
  number?: string;
  street?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      distanceMeter: 'distanceMeter',
      latitude: 'latitude',
      longitude: 'longitude',
      number: 'number',
      street: 'street',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      distanceMeter: 'string',
      latitude: 'string',
      longitude: 'string',
      number: 'string',
      street: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBodyData extends $dara.Model {
  building?: RgeoCodeResponseBodyDataBuilding;
  businessAreas?: RgeoCodeResponseBodyDataBusinessAreas[];
  city?: string;
  /**
   * @example
   * 010
   */
  cityCode?: string;
  country?: string;
  district?: string;
  /**
   * @example
   * 110108
   */
  districtCode?: string;
  formattedAddress?: string;
  neighborhood?: RgeoCodeResponseBodyDataNeighborhood;
  province?: string;
  streetNumber?: RgeoCodeResponseBodyDataStreetNumber;
  /**
   * @example
   * 110108015000
   */
  townCode?: string;
  townShip?: string;
  static names(): { [key: string]: string } {
    return {
      building: 'building',
      businessAreas: 'businessAreas',
      city: 'city',
      cityCode: 'cityCode',
      country: 'country',
      district: 'district',
      districtCode: 'districtCode',
      formattedAddress: 'formattedAddress',
      neighborhood: 'neighborhood',
      province: 'province',
      streetNumber: 'streetNumber',
      townCode: 'townCode',
      townShip: 'townShip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      building: RgeoCodeResponseBodyDataBuilding,
      businessAreas: { 'type': 'array', 'itemType': RgeoCodeResponseBodyDataBusinessAreas },
      city: 'string',
      cityCode: 'string',
      country: 'string',
      district: 'string',
      districtCode: 'string',
      formattedAddress: 'string',
      neighborhood: RgeoCodeResponseBodyDataNeighborhood,
      province: 'string',
      streetNumber: RgeoCodeResponseBodyDataStreetNumber,
      townCode: 'string',
      townShip: 'string',
    };
  }

  validate() {
    if(this.building && typeof (this.building as any).validate === 'function') {
      (this.building as any).validate();
    }
    if(Array.isArray(this.businessAreas)) {
      $dara.Model.validateArray(this.businessAreas);
    }
    if(this.neighborhood && typeof (this.neighborhood as any).validate === 'function') {
      (this.neighborhood as any).validate();
    }
    if(this.streetNumber && typeof (this.streetNumber as any).validate === 'function') {
      (this.streetNumber as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataCost extends $dara.Model {
  /**
   * @example
   * 1231
   */
  durationSecond?: string;
  /**
   * @example
   * 6
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  /**
   * @example
   * 23
   */
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsCost extends $dara.Model {
  /**
   * @example
   * 39233
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  /**
   * @example
   * 2000
   */
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  /**
   * @example
   * 4
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStopExit extends $dara.Model {
  /**
   * @example
   * 900000028907015
   */
  id?: string;
  /**
   * @example
   * 116.468213,39.998876
   */
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      location: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStop extends $dara.Model {
  exit?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStopExit;
  /**
   * @example
   * 100935
   */
  id?: string;
  /**
   * @example
   * 119.82416178385417,30.27139702690972
   */
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      exit: 'exit',
      id: 'id',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exit: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStopExit,
      id: 'string',
      location: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.exit && typeof (this.exit as any).validate === 'function') {
      (this.exit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesCost extends $dara.Model {
  /**
   * @example
   * 1521
   */
  durationSecond?: string;
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStopEntrance extends $dara.Model {
  /**
   * @example
   * 99088345834
   */
  id?: string;
  /**
   * @example
   * 116.468213,39.998876
   */
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      location: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStop extends $dara.Model {
  entrance?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStopEntrance;
  /**
   * @example
   * 60852
   */
  id?: string;
  /**
   * @example
   * 116.468213,39.998876
   */
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      entrance: 'entrance',
      id: 'id',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrance: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStopEntrance,
      id: 'string',
      location: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.entrance && typeof (this.entrance as any).validate === 'function') {
      (this.entrance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesPolyline extends $dara.Model {
  /**
   * @example
   * 116.471544,39.991835
   */
  polyline?: string;
  static names(): { [key: string]: string } {
    return {
      polyline: 'polyline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polyline: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesViaStops extends $dara.Model {
  id?: string;
  location?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      location: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslines extends $dara.Model {
  arrivalStop?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStop;
  busTimeTips?: string;
  /**
   * @example
   * 0
   */
  bustimetag?: string;
  cost?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesCost;
  departureStop?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStop;
  /**
   * @example
   * 13322
   */
  distanceMeter?: string;
  /**
   * @example
   * 2259
   */
  endTime?: string;
  /**
   * @example
   * 900000028907
   */
  id?: string;
  name?: string;
  polyline?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesPolyline;
  /**
   * @example
   * 0509
   */
  startTime?: string;
  type?: string;
  /**
   * @example
   * 8
   */
  viaNum?: string;
  viaStops?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesViaStops[];
  static names(): { [key: string]: string } {
    return {
      arrivalStop: 'arrivalStop',
      busTimeTips: 'busTimeTips',
      bustimetag: 'bustimetag',
      cost: 'cost',
      departureStop: 'departureStop',
      distanceMeter: 'distanceMeter',
      endTime: 'endTime',
      id: 'id',
      name: 'name',
      polyline: 'polyline',
      startTime: 'startTime',
      type: 'type',
      viaNum: 'viaNum',
      viaStops: 'viaStops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalStop: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesArrivalStop,
      busTimeTips: 'string',
      bustimetag: 'string',
      cost: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesCost,
      departureStop: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesDepartureStop,
      distanceMeter: 'string',
      endTime: 'string',
      id: 'string',
      name: 'string',
      polyline: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesPolyline,
      startTime: 'string',
      type: 'string',
      viaNum: 'string',
      viaStops: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslinesViaStops },
    };
  }

  validate() {
    if(this.arrivalStop && typeof (this.arrivalStop as any).validate === 'function') {
      (this.arrivalStop as any).validate();
    }
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    if(this.departureStop && typeof (this.departureStop as any).validate === 'function') {
      (this.departureStop as any).validate();
    }
    if(this.polyline && typeof (this.polyline as any).validate === 'function') {
      (this.polyline as any).validate();
    }
    if(Array.isArray(this.viaStops)) {
      $dara.Model.validateArray(this.viaStops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsBus extends $dara.Model {
  buslines?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslines[];
  index?: string;
  static names(): { [key: string]: string } {
    return {
      buslines: 'buslines',
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buslines: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPathsSegmentsBusBuslines },
      index: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buslines)) {
      $dara.Model.validateArray(this.buslines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayArrivalStop extends $dara.Model {
  /**
   * @example
   * 023
   */
  adcode?: string;
  /**
   * @remarks
   * end
   * 
   * @example
   * 1699410466578
   */
  end?: string;
  /**
   * @example
   * 8234837534
   */
  id?: string;
  /**
   * @example
   * 101.45625135633681,25.08939480251736
   */
  location?: string;
  name?: string;
  /**
   * @example
   * 2024-10-28 10:10:32
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      end: 'end',
      id: 'id',
      location: 'location',
      name: 'name',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      end: 'string',
      id: 'string',
      location: 'string',
      name: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayDepartureStop extends $dara.Model {
  /**
   * @example
   * 029
   */
  adcode?: string;
  /**
   * @example
   * 100937
   */
  id?: string;
  /**
   * @example
   * 101.45625135633681,25.08939480251736
   */
  location?: string;
  name?: string;
  /**
   * @example
   * 1729440000000
   */
  start?: string;
  /**
   * @example
   * 2024-09-30 10:04:13
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      adcode: 'adcode',
      id: 'id',
      location: 'location',
      name: 'name',
      start: 'start',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adcode: 'string',
      id: 'string',
      location: 'string',
      name: 'string',
      start: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwaySpaces extends $dara.Model {
  code?: string;
  /**
   * @example
   * 150
   */
  cost?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      cost: 'cost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailway extends $dara.Model {
  arrivalStop?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayArrivalStop;
  departureStop?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayDepartureStop;
  /**
   * @example
   * 398734
   */
  distanceMeter?: string;
  /**
   * @example
   * 434508
   */
  id?: string;
  index?: string;
  name?: string;
  spaces?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwaySpaces[];
  /**
   * @example
   * 2024-09-28 10:07:22
   */
  time?: string;
  trip?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalStop: 'arrivalStop',
      departureStop: 'departureStop',
      distanceMeter: 'distanceMeter',
      id: 'id',
      index: 'index',
      name: 'name',
      spaces: 'spaces',
      time: 'time',
      trip: 'trip',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalStop: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayArrivalStop,
      departureStop: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwayDepartureStop,
      distanceMeter: 'string',
      id: 'string',
      index: 'string',
      name: 'string',
      spaces: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailwaySpaces },
      time: 'string',
      trip: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.arrivalStop && typeof (this.arrivalStop as any).validate === 'function') {
      (this.arrivalStop as any).validate();
    }
    if(this.departureStop && typeof (this.departureStop as any).validate === 'function') {
      (this.departureStop as any).validate();
    }
    if(Array.isArray(this.spaces)) {
      $dara.Model.validateArray(this.spaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsTaxi extends $dara.Model {
  /**
   * @example
   * xxx
   */
  destinationName?: string;
  /**
   * @example
   * 116.464297,39.896458
   */
  destinationPoint?: string;
  /**
   * @example
   * 1772
   */
  distanceMeter?: string;
  /**
   * @example
   * 720
   */
  driveTimeSecond?: string;
  index?: string;
  originName?: string;
  /**
   * @example
   * 116.476597,39.893420
   */
  originPoint?: string;
  /**
   * @example
   * 13.5
   */
  price?: string;
  static names(): { [key: string]: string } {
    return {
      destinationName: 'destinationName',
      destinationPoint: 'destinationPoint',
      distanceMeter: 'distanceMeter',
      driveTimeSecond: 'driveTimeSecond',
      index: 'index',
      originName: 'originName',
      originPoint: 'originPoint',
      price: 'price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationName: 'string',
      destinationPoint: 'string',
      distanceMeter: 'string',
      driveTimeSecond: 'string',
      index: 'string',
      originName: 'string',
      originPoint: 'string',
      price: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingCost extends $dara.Model {
  /**
   * @example
   * 468
   */
  durationSecond?: string;
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  /**
   * @example
   * 3
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsCost extends $dara.Model {
  /**
   * @example
   * 435
   */
  durationSecond?: string;
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsPolyline extends $dara.Model {
  /**
   * @example
   * 116.467751,39.997631;116.467430,39.997631
   */
  polyline?: string;
  static names(): { [key: string]: string } {
    return {
      polyline: 'polyline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polyline: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingSteps extends $dara.Model {
  cost?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsCost;
  instruction?: string;
  orientation?: string;
  polyline?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsPolyline;
  roadName?: string;
  stepDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      instruction: 'instruction',
      orientation: 'orientation',
      polyline: 'polyline',
      roadName: 'roadName',
      stepDistanceMeter: 'stepDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsCost,
      instruction: 'string',
      orientation: 'string',
      polyline: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingStepsPolyline,
      roadName: 'string',
      stepDistanceMeter: 'string',
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    if(this.polyline && typeof (this.polyline as any).validate === 'function') {
      (this.polyline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalking extends $dara.Model {
  cost?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingCost;
  /**
   * @example
   * 116.468208,39.998875
   */
  destination?: string;
  /**
   * @example
   * 546
   */
  distanceMeter?: string;
  index?: string;
  /**
   * @example
   * 116.466568,39.995552
   */
  origin?: string;
  steps?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingSteps[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      destination: 'destination',
      distanceMeter: 'distanceMeter',
      index: 'index',
      origin: 'origin',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingCost,
      destination: 'string',
      distanceMeter: 'string',
      index: 'string',
      origin: 'string',
      steps: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalkingSteps },
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPathsSegments extends $dara.Model {
  bus?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBus;
  railway?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailway;
  taxi?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsTaxi;
  walking?: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalking;
  static names(): { [key: string]: string } {
    return {
      bus: 'bus',
      railway: 'railway',
      taxi: 'taxi',
      walking: 'walking',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bus: TransitIntegratedDirectionResponseBodyDataPathsSegmentsBus,
      railway: TransitIntegratedDirectionResponseBodyDataPathsSegmentsRailway,
      taxi: TransitIntegratedDirectionResponseBodyDataPathsSegmentsTaxi,
      walking: TransitIntegratedDirectionResponseBodyDataPathsSegmentsWalking,
    };
  }

  validate() {
    if(this.bus && typeof (this.bus as any).validate === 'function') {
      (this.bus as any).validate();
    }
    if(this.railway && typeof (this.railway as any).validate === 'function') {
      (this.railway as any).validate();
    }
    if(this.taxi && typeof (this.taxi as any).validate === 'function') {
      (this.taxi as any).validate();
    }
    if(this.walking && typeof (this.walking as any).validate === 'function') {
      (this.walking as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyDataPaths extends $dara.Model {
  cost?: TransitIntegratedDirectionResponseBodyDataPathsCost;
  /**
   * @example
   * 12000
   */
  distanceMeter?: string;
  nightflag?: string;
  segments?: TransitIntegratedDirectionResponseBodyDataPathsSegments[];
  /**
   * @example
   * 23435
   */
  walkingDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      distanceMeter: 'distanceMeter',
      nightflag: 'nightflag',
      segments: 'segments',
      walkingDistanceMeter: 'walkingDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: TransitIntegratedDirectionResponseBodyDataPathsCost,
      distanceMeter: 'string',
      nightflag: 'string',
      segments: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPathsSegments },
      walkingDistanceMeter: 'string',
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    if(Array.isArray(this.segments)) {
      $dara.Model.validateArray(this.segments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBodyData extends $dara.Model {
  cost?: TransitIntegratedDirectionResponseBodyDataCost;
  /**
   * @example
   * 5
   */
  count?: string;
  /**
   * @example
   * 39.995197
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 445
   */
  distanceMeter?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  paths?: TransitIntegratedDirectionResponseBodyDataPaths[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      count: 'count',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      distanceMeter: 'distanceMeter',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      paths: 'paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: TransitIntegratedDirectionResponseBodyDataCost,
      count: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      distanceMeter: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      paths: { 'type': 'array', 'itemType': TransitIntegratedDirectionResponseBodyDataPaths },
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBodyDataPathsCost extends $dara.Model {
  /**
   * @example
   * 1232
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  /**
   * @example
   * 3
   */
  trafficLights?: string;
  /**
   * @example
   * 10
   */
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBodyDataPathsStepsCost extends $dara.Model {
  /**
   * @example
   * 13
   */
  durationSecond?: string;
  /**
   * @example
   * 20
   */
  taxiFee?: string;
  tollDistanceMeter?: string;
  tollRoads?: string;
  tolls?: string;
  trafficLights?: string;
  transitFee?: string;
  static names(): { [key: string]: string } {
    return {
      durationSecond: 'durationSecond',
      taxiFee: 'taxiFee',
      tollDistanceMeter: 'tollDistanceMeter',
      tollRoads: 'tollRoads',
      tolls: 'tolls',
      trafficLights: 'trafficLights',
      transitFee: 'transitFee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSecond: 'string',
      taxiFee: 'string',
      tollDistanceMeter: 'string',
      tollRoads: 'string',
      tolls: 'string',
      trafficLights: 'string',
      transitFee: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBodyDataPathsSteps extends $dara.Model {
  cost?: WalkingDirectionNovaResponseBodyDataPathsStepsCost;
  instruction?: string;
  orientation?: string;
  polyline?: string;
  roadName?: string;
  /**
   * @example
   * 1665
   */
  stepDistanceMeter?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      instruction: 'instruction',
      orientation: 'orientation',
      polyline: 'polyline',
      roadName: 'roadName',
      stepDistanceMeter: 'stepDistanceMeter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: WalkingDirectionNovaResponseBodyDataPathsStepsCost,
      instruction: 'string',
      orientation: 'string',
      polyline: 'string',
      roadName: 'string',
      stepDistanceMeter: 'string',
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBodyDataPaths extends $dara.Model {
  cost?: WalkingDirectionNovaResponseBodyDataPathsCost;
  /**
   * @example
   * 12000
   */
  distanceMeter?: string;
  /**
   * @example
   * 39223
   */
  durationSecond?: string;
  restriction?: string;
  steps?: WalkingDirectionNovaResponseBodyDataPathsSteps[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      distanceMeter: 'distanceMeter',
      durationSecond: 'durationSecond',
      restriction: 'restriction',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: WalkingDirectionNovaResponseBodyDataPathsCost,
      distanceMeter: 'string',
      durationSecond: 'string',
      restriction: 'string',
      steps: { 'type': 'array', 'itemType': WalkingDirectionNovaResponseBodyDataPathsSteps },
    };
  }

  validate() {
    if(this.cost && typeof (this.cost as any).validate === 'function') {
      (this.cost as any).validate();
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBodyData extends $dara.Model {
  count?: string;
  /**
   * @example
   * 40.020642
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  paths?: WalkingDirectionNovaResponseBodyDataPaths[];
  /**
   * @example
   * 8
   */
  taxiCost?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      paths: 'paths',
      taxiCost: 'taxiCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      paths: { 'type': 'array', 'itemType': WalkingDirectionNovaResponseBodyDataPaths },
      taxiCost: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentBaseQuery extends $dara.Model {
  query?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonAgentQuery extends $dara.Model {
  query?: string;
  querySceneEnumCode?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      querySceneEnumCode: 'querySceneEnumCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      querySceneEnumCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResult extends $dara.Model {
  data?: QueryResultData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryResultData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaRequest extends $dara.Model {
  /**
   * @example
   * 39.995197
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 117.466485
   */
  originLongitude?: string;
  static names(): { [key: string]: string } {
    return {
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BicyclingDirectionNovaResponseBody extends $dara.Model {
  code?: string;
  data?: BicyclingDirectionNovaResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * <title>502 Bad Gateway</title>
   */
  errorMessage?: string;
  message?: string;
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BicyclingDirectionNovaResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class BicyclingDirectionNovaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BicyclingDirectionNovaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BicyclingDirectionNovaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonQueryBySceneRequest extends $dara.Model {
  body?: CommonAgentQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CommonAgentQuery,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommonQueryBySceneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryResult,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaRequest extends $dara.Model {
  carType?: string;
  /**
   * @example
   * 43.345456
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  plate?: string;
  static names(): { [key: string]: string } {
    return {
      carType: 'carType',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
      plate: 'plate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carType: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
      plate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DrivingDirectionNovaResponseBody extends $dara.Model {
  code?: string;
  data?: DrivingDirectionNovaResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * Access was denied, message: No such namespace namespaces/general-perf-cn-shenzhen-e-default.
   */
  errorMessage?: string;
  message?: string;
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DrivingDirectionNovaResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class DrivingDirectionNovaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DrivingDirectionNovaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DrivingDirectionNovaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaRequest extends $dara.Model {
  /**
   * @example
   * 40.234564
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.345456
   */
  originLongitude?: string;
  static names(): { [key: string]: string } {
    return {
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectrobikeDirectionNovaResponseBody extends $dara.Model {
  code?: string;
  data?: ElectrobikeDirectionNovaResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * <title>502 Bad Gateway</title>
   */
  errorMessage?: string;
  message?: string;
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ElectrobikeDirectionNovaResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ElectrobikeDirectionNovaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ElectrobikeDirectionNovaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ElectrobikeDirectionNovaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeoCodeRequest extends $dara.Model {
  address?: string;
  city?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      city: 'city',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeoCodeResponseBody extends $dara.Model {
  code?: string;
  data?: GeoCodeResponseBodyData[];
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * Pop sign mismatch, please check log.
   */
  errorMessage?: string;
  message?: string;
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GeoCodeResponseBodyData },
      errorCode: 'number',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeoCodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GeoCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GeoCodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaRequest extends $dara.Model {
  cityLimit?: boolean;
  keywords?: string;
  /**
   * @example
   * 39.992873
   */
  latitude?: string;
  /**
   * @example
   * 116.310918
   */
  longitude?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 3000
   */
  radius?: number;
  /**
   * @example
   * 5
   */
  size?: number;
  sortRule?: string;
  /**
   * @example
   * GAS_STATION|RESTAURANT|HOTEL|ATTRACTION
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      cityLimit: 'cityLimit',
      keywords: 'keywords',
      latitude: 'latitude',
      longitude: 'longitude',
      page: 'page',
      radius: 'radius',
      size: 'size',
      sortRule: 'sortRule',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityLimit: 'boolean',
      keywords: 'string',
      latitude: 'string',
      longitude: 'string',
      page: 'number',
      radius: 'number',
      size: 'number',
      sortRule: 'string',
      types: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaResponseBody extends $dara.Model {
  code?: string;
  data?: NearbySearchNovaResponseBodyData[];
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * <title>502 Bad Gateway</title>
   */
  errorMessage?: string;
  message?: string;
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': NearbySearchNovaResponseBodyData },
      errorCode: 'number',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NearbySearchNovaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: NearbySearchNovaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: NearbySearchNovaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaRequest extends $dara.Model {
  cityLimit?: boolean;
  keywords?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  region?: string;
  /**
   * @example
   * 5
   */
  size?: number;
  /**
   * @example
   * GAS_STATION|RESTAURANT|HOTEL|ATTRACTION
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      cityLimit: 'cityLimit',
      keywords: 'keywords',
      page: 'page',
      region: 'region',
      size: 'size',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityLimit: 'boolean',
      keywords: 'string',
      page: 'number',
      region: 'string',
      size: 'number',
      types: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaResponseBody extends $dara.Model {
  code?: string;
  data?: PlaceSearchNovaResponseBodyData[];
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * Access was denied, message: Unauthorized.
   */
  errorMessage?: string;
  message?: string;
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': PlaceSearchNovaResponseBodyData },
      errorCode: 'number',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PlaceSearchNovaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PlaceSearchNovaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PlaceSearchNovaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAttractionsRequest extends $dara.Model {
  body?: AgentBaseQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AgentBaseQuery,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAttractionsResponseBody extends $dara.Model {
  queryResult?: QueryResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ECB2144C-E277-5434-80E6-12D26678D364
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResult: 'queryResult',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: QueryResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.queryResult && typeof (this.queryResult as any).validate === 'function') {
      (this.queryResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAttractionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAttractionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryAttractionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAttractionsNlRequest extends $dara.Model {
  body?: AgentBaseQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AgentBaseQuery,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAttractionsNlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryResult,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelsRequest extends $dara.Model {
  body?: AgentBaseQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AgentBaseQuery,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelsResponseBody extends $dara.Model {
  queryResult?: QueryResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 78032F8B-0157-53F9-B1A8-3BD86ADE38D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResult: 'queryResult',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: QueryResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.queryResult && typeof (this.queryResult as any).validate === 'function') {
      (this.queryResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryHotelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryHotelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelsNlRequest extends $dara.Model {
  body?: AgentBaseQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AgentBaseQuery,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelsNlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryResult,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRestaurantsRequest extends $dara.Model {
  body?: AgentBaseQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AgentBaseQuery,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRestaurantsResponseBody extends $dara.Model {
  queryResult?: QueryResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D78E16C0-4D44-5065-BFF7-127F7859F687
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResult: 'queryResult',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: QueryResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.queryResult && typeof (this.queryResult as any).validate === 'function') {
      (this.queryResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRestaurantsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRestaurantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryRestaurantsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRestaurantsNlRequest extends $dara.Model {
  body?: AgentBaseQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AgentBaseQuery,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRestaurantsNlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryResult;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryResult,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeRequest extends $dara.Model {
  /**
   * @example
   * 39.989027
   */
  latitude?: string;
  /**
   * @example
   * 116.310918
   */
  longitude?: string;
  static names(): { [key: string]: string } {
    return {
      latitude: 'latitude',
      longitude: 'longitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latitude: 'string',
      longitude: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RgeoCodeResponseBody extends $dara.Model {
  code?: string;
  data?: RgeoCodeResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: number;
  errorMessage?: string;
  message?: string;
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: RgeoCodeResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class RgeoCodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RgeoCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RgeoCodeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionRequest extends $dara.Model {
  destinationCity?: string;
  /**
   * @example
   * 40.345456
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  originCity?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCity: 'destinationCity',
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originCity: 'originCity',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCity: 'string',
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originCity: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransitIntegratedDirectionResponseBody extends $dara.Model {
  code?: string;
  data?: TransitIntegratedDirectionResponseBodyData;
  /**
   * @example
   * 400
   */
  errorCode?: number;
  /**
   * @example
   * <title>502 Bad Gateway</title>
   */
  errorMessage?: string;
  message?: string;
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TransitIntegratedDirectionResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class TransitIntegratedDirectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TransitIntegratedDirectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TransitIntegratedDirectionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaRequest extends $dara.Model {
  /**
   * @example
   * 40.345456
   */
  destinationLatitude?: string;
  /**
   * @example
   * 116.46424
   */
  destinationLongitude?: string;
  /**
   * @example
   * 39.995197
   */
  originLatitude?: string;
  /**
   * @example
   * 116.466485
   */
  originLongitude?: string;
  static names(): { [key: string]: string } {
    return {
      destinationLatitude: 'destinationLatitude',
      destinationLongitude: 'destinationLongitude',
      originLatitude: 'originLatitude',
      originLongitude: 'originLongitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationLatitude: 'string',
      destinationLongitude: 'string',
      originLatitude: 'string',
      originLongitude: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WalkingDirectionNovaResponseBody extends $dara.Model {
  code?: string;
  data?: WalkingDirectionNovaResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: number;
  /**
   * @example
   * Access was denied
   */
  errorMessage?: string;
  message?: string;
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: WalkingDirectionNovaResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class WalkingDirectionNovaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: WalkingDirectionNovaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WalkingDirectionNovaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("iqs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 根据起终点坐标检索符合条件的骑行路线规划方案
   * 
   * @param request - BicyclingDirectionNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BicyclingDirectionNovaResponse
   */
  async bicyclingDirectionNovaWithOptions(request: BicyclingDirectionNovaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<BicyclingDirectionNovaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationLatitude)) {
      query["destinationLatitude"] = request.destinationLatitude;
    }

    if (!$dara.isNull(request.destinationLongitude)) {
      query["destinationLongitude"] = request.destinationLongitude;
    }

    if (!$dara.isNull(request.originLatitude)) {
      query["originLatitude"] = request.originLatitude;
    }

    if (!$dara.isNull(request.originLongitude)) {
      query["originLongitude"] = request.originLongitude;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BicyclingDirectionNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/direction/bicycling`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BicyclingDirectionNovaResponse>(await this.callApi(params, req, runtime), new BicyclingDirectionNovaResponse({}));
    } else {
      return $dara.cast<BicyclingDirectionNovaResponse>(await this.execute(params, req, runtime), new BicyclingDirectionNovaResponse({}));
    }

  }

  /**
   * 根据起终点坐标检索符合条件的骑行路线规划方案
   * 
   * @param request - BicyclingDirectionNovaRequest
   * @returns BicyclingDirectionNovaResponse
   */
  async bicyclingDirectionNova(request: BicyclingDirectionNovaRequest): Promise<BicyclingDirectionNovaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bicyclingDirectionNovaWithOptions(request, headers, runtime);
  }

  /**
   * 自然语言通用查询
   * 
   * @param request - CommonQueryBySceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommonQueryBySceneResponse
   */
  async commonQueryBySceneWithOptions(request: CommonQueryBySceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CommonQueryBySceneResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CommonQueryByScene",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v2/nl/common`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CommonQueryBySceneResponse>(await this.callApi(params, req, runtime), new CommonQueryBySceneResponse({}));
    } else {
      return $dara.cast<CommonQueryBySceneResponse>(await this.execute(params, req, runtime), new CommonQueryBySceneResponse({}));
    }

  }

  /**
   * 自然语言通用查询
   * 
   * @param request - CommonQueryBySceneRequest
   * @returns CommonQueryBySceneResponse
   */
  async commonQueryByScene(request: CommonQueryBySceneRequest): Promise<CommonQueryBySceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.commonQueryBySceneWithOptions(request, headers, runtime);
  }

  /**
   * 根据起终点坐标检索符合条件的驾车路线规划方案
   * 
   * @param request - DrivingDirectionNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DrivingDirectionNovaResponse
   */
  async drivingDirectionNovaWithOptions(request: DrivingDirectionNovaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DrivingDirectionNovaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.carType)) {
      query["carType"] = request.carType;
    }

    if (!$dara.isNull(request.destinationLatitude)) {
      query["destinationLatitude"] = request.destinationLatitude;
    }

    if (!$dara.isNull(request.destinationLongitude)) {
      query["destinationLongitude"] = request.destinationLongitude;
    }

    if (!$dara.isNull(request.originLatitude)) {
      query["originLatitude"] = request.originLatitude;
    }

    if (!$dara.isNull(request.originLongitude)) {
      query["originLongitude"] = request.originLongitude;
    }

    if (!$dara.isNull(request.plate)) {
      query["plate"] = request.plate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DrivingDirectionNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/direction/driving`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DrivingDirectionNovaResponse>(await this.callApi(params, req, runtime), new DrivingDirectionNovaResponse({}));
    } else {
      return $dara.cast<DrivingDirectionNovaResponse>(await this.execute(params, req, runtime), new DrivingDirectionNovaResponse({}));
    }

  }

  /**
   * 根据起终点坐标检索符合条件的驾车路线规划方案
   * 
   * @param request - DrivingDirectionNovaRequest
   * @returns DrivingDirectionNovaResponse
   */
  async drivingDirectionNova(request: DrivingDirectionNovaRequest): Promise<DrivingDirectionNovaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.drivingDirectionNovaWithOptions(request, headers, runtime);
  }

  /**
   * 电动车路线规划方案V2
   * 
   * @param request - ElectrobikeDirectionNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ElectrobikeDirectionNovaResponse
   */
  async electrobikeDirectionNovaWithOptions(request: ElectrobikeDirectionNovaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ElectrobikeDirectionNovaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationLatitude)) {
      query["destinationLatitude"] = request.destinationLatitude;
    }

    if (!$dara.isNull(request.destinationLongitude)) {
      query["destinationLongitude"] = request.destinationLongitude;
    }

    if (!$dara.isNull(request.originLatitude)) {
      query["originLatitude"] = request.originLatitude;
    }

    if (!$dara.isNull(request.originLongitude)) {
      query["originLongitude"] = request.originLongitude;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ElectrobikeDirectionNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/direction/electrobike`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ElectrobikeDirectionNovaResponse>(await this.callApi(params, req, runtime), new ElectrobikeDirectionNovaResponse({}));
    } else {
      return $dara.cast<ElectrobikeDirectionNovaResponse>(await this.execute(params, req, runtime), new ElectrobikeDirectionNovaResponse({}));
    }

  }

  /**
   * 电动车路线规划方案V2
   * 
   * @param request - ElectrobikeDirectionNovaRequest
   * @returns ElectrobikeDirectionNovaResponse
   */
  async electrobikeDirectionNova(request: ElectrobikeDirectionNovaRequest): Promise<ElectrobikeDirectionNovaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.electrobikeDirectionNovaWithOptions(request, headers, runtime);
  }

  /**
   * 地理编码，将详细的结构化地址转换为高德经纬度坐标
   * 
   * @param request - GeoCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GeoCodeResponse
   */
  async geoCodeWithOptions(request: GeoCodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GeoCodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.address)) {
      query["address"] = request.address;
    }

    if (!$dara.isNull(request.city)) {
      query["city"] = request.city;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GeoCode",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v1/geocode/geo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GeoCodeResponse>(await this.callApi(params, req, runtime), new GeoCodeResponse({}));
    } else {
      return $dara.cast<GeoCodeResponse>(await this.execute(params, req, runtime), new GeoCodeResponse({}));
    }

  }

  /**
   * 地理编码，将详细的结构化地址转换为高德经纬度坐标
   * 
   * @param request - GeoCodeRequest
   * @returns GeoCodeResponse
   */
  async geoCode(request: GeoCodeRequest): Promise<GeoCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.geoCodeWithOptions(request, headers, runtime);
  }

  /**
   * 通过经纬度查询附近的地点
   * 
   * @param request - NearbySearchNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NearbySearchNovaResponse
   */
  async nearbySearchNovaWithOptions(request: NearbySearchNovaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<NearbySearchNovaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cityLimit)) {
      query["cityLimit"] = request.cityLimit;
    }

    if (!$dara.isNull(request.keywords)) {
      query["keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.latitude)) {
      query["latitude"] = request.latitude;
    }

    if (!$dara.isNull(request.longitude)) {
      query["longitude"] = request.longitude;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.radius)) {
      query["radius"] = request.radius;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.sortRule)) {
      query["sortRule"] = request.sortRule;
    }

    if (!$dara.isNull(request.types)) {
      query["types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "NearbySearchNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/pois/nearby`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<NearbySearchNovaResponse>(await this.callApi(params, req, runtime), new NearbySearchNovaResponse({}));
    } else {
      return $dara.cast<NearbySearchNovaResponse>(await this.execute(params, req, runtime), new NearbySearchNovaResponse({}));
    }

  }

  /**
   * 通过经纬度查询附近的地点
   * 
   * @param request - NearbySearchNovaRequest
   * @returns NearbySearchNovaResponse
   */
  async nearbySearchNova(request: NearbySearchNovaRequest): Promise<NearbySearchNovaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.nearbySearchNovaWithOptions(request, headers, runtime);
  }

  /**
   * 通过关键词搜索地点
   * 
   * @param request - PlaceSearchNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PlaceSearchNovaResponse
   */
  async placeSearchNovaWithOptions(request: PlaceSearchNovaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PlaceSearchNovaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cityLimit)) {
      query["cityLimit"] = request.cityLimit;
    }

    if (!$dara.isNull(request.keywords)) {
      query["keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.types)) {
      query["types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PlaceSearchNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/pois/place`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PlaceSearchNovaResponse>(await this.callApi(params, req, runtime), new PlaceSearchNovaResponse({}));
    } else {
      return $dara.cast<PlaceSearchNovaResponse>(await this.execute(params, req, runtime), new PlaceSearchNovaResponse({}));
    }

  }

  /**
   * 通过关键词搜索地点
   * 
   * @param request - PlaceSearchNovaRequest
   * @returns PlaceSearchNovaResponse
   */
  async placeSearchNova(request: PlaceSearchNovaRequest): Promise<PlaceSearchNovaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.placeSearchNovaWithOptions(request, headers, runtime);
  }

  /**
   * 景点查询
   * 
   * @param request - QueryAttractionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAttractionsResponse
   */
  async queryAttractionsWithOptions(request: QueryAttractionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryAttractionsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAttractions",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v1/nl/attractions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryAttractionsResponse>(await this.callApi(params, req, runtime), new QueryAttractionsResponse({}));
    } else {
      return $dara.cast<QueryAttractionsResponse>(await this.execute(params, req, runtime), new QueryAttractionsResponse({}));
    }

  }

  /**
   * 景点查询
   * 
   * @param request - QueryAttractionsRequest
   * @returns QueryAttractionsResponse
   */
  async queryAttractions(request: QueryAttractionsRequest): Promise<QueryAttractionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAttractionsWithOptions(request, headers, runtime);
  }

  /**
   * 景点查询
   * 
   * @param request - QueryAttractionsNlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAttractionsNlResponse
   */
  async queryAttractionsNlWithOptions(request: QueryAttractionsNlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryAttractionsNlResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAttractionsNl",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v2/nl/attractions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryAttractionsNlResponse>(await this.callApi(params, req, runtime), new QueryAttractionsNlResponse({}));
    } else {
      return $dara.cast<QueryAttractionsNlResponse>(await this.execute(params, req, runtime), new QueryAttractionsNlResponse({}));
    }

  }

  /**
   * 景点查询
   * 
   * @param request - QueryAttractionsNlRequest
   * @returns QueryAttractionsNlResponse
   */
  async queryAttractionsNl(request: QueryAttractionsNlRequest): Promise<QueryAttractionsNlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAttractionsNlWithOptions(request, headers, runtime);
  }

  /**
   * 酒店查询
   * 
   * @param request - QueryHotelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHotelsResponse
   */
  async queryHotelsWithOptions(request: QueryHotelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryHotelsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryHotels",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v1/nl/hotels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryHotelsResponse>(await this.callApi(params, req, runtime), new QueryHotelsResponse({}));
    } else {
      return $dara.cast<QueryHotelsResponse>(await this.execute(params, req, runtime), new QueryHotelsResponse({}));
    }

  }

  /**
   * 酒店查询
   * 
   * @param request - QueryHotelsRequest
   * @returns QueryHotelsResponse
   */
  async queryHotels(request: QueryHotelsRequest): Promise<QueryHotelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryHotelsWithOptions(request, headers, runtime);
  }

  /**
   * 酒店查询
   * 
   * @param request - QueryHotelsNlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHotelsNlResponse
   */
  async queryHotelsNlWithOptions(request: QueryHotelsNlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryHotelsNlResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryHotelsNl",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v2/nl/hotels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryHotelsNlResponse>(await this.callApi(params, req, runtime), new QueryHotelsNlResponse({}));
    } else {
      return $dara.cast<QueryHotelsNlResponse>(await this.execute(params, req, runtime), new QueryHotelsNlResponse({}));
    }

  }

  /**
   * 酒店查询
   * 
   * @param request - QueryHotelsNlRequest
   * @returns QueryHotelsNlResponse
   */
  async queryHotelsNl(request: QueryHotelsNlRequest): Promise<QueryHotelsNlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryHotelsNlWithOptions(request, headers, runtime);
  }

  /**
   * 餐厅查询
   * 
   * @param request - QueryRestaurantsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRestaurantsResponse
   */
  async queryRestaurantsWithOptions(request: QueryRestaurantsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryRestaurantsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRestaurants",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v1/nl/restaurants`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryRestaurantsResponse>(await this.callApi(params, req, runtime), new QueryRestaurantsResponse({}));
    } else {
      return $dara.cast<QueryRestaurantsResponse>(await this.execute(params, req, runtime), new QueryRestaurantsResponse({}));
    }

  }

  /**
   * 餐厅查询
   * 
   * @param request - QueryRestaurantsRequest
   * @returns QueryRestaurantsResponse
   */
  async queryRestaurants(request: QueryRestaurantsRequest): Promise<QueryRestaurantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRestaurantsWithOptions(request, headers, runtime);
  }

  /**
   * 餐厅查询
   * 
   * @param request - QueryRestaurantsNlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRestaurantsNlResponse
   */
  async queryRestaurantsNlWithOptions(request: QueryRestaurantsNlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<QueryRestaurantsNlResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRestaurantsNl",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v2/nl/restaurants`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryRestaurantsNlResponse>(await this.callApi(params, req, runtime), new QueryRestaurantsNlResponse({}));
    } else {
      return $dara.cast<QueryRestaurantsNlResponse>(await this.execute(params, req, runtime), new QueryRestaurantsNlResponse({}));
    }

  }

  /**
   * 餐厅查询
   * 
   * @param request - QueryRestaurantsNlRequest
   * @returns QueryRestaurantsNlResponse
   */
  async queryRestaurantsNl(request: QueryRestaurantsNlRequest): Promise<QueryRestaurantsNlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRestaurantsNlWithOptions(request, headers, runtime);
  }

  /**
   * 逆地理编码，将经纬度转换为详细结构化的地址信息
   * 
   * @param request - RgeoCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RgeoCodeResponse
   */
  async rgeoCodeWithOptions(request: RgeoCodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RgeoCodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.latitude)) {
      query["latitude"] = request.latitude;
    }

    if (!$dara.isNull(request.longitude)) {
      query["longitude"] = request.longitude;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RgeoCode",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v1/geocode/regeo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RgeoCodeResponse>(await this.callApi(params, req, runtime), new RgeoCodeResponse({}));
    } else {
      return $dara.cast<RgeoCodeResponse>(await this.execute(params, req, runtime), new RgeoCodeResponse({}));
    }

  }

  /**
   * 逆地理编码，将经纬度转换为详细结构化的地址信息
   * 
   * @param request - RgeoCodeRequest
   * @returns RgeoCodeResponse
   */
  async rgeoCode(request: RgeoCodeRequest): Promise<RgeoCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rgeoCodeWithOptions(request, headers, runtime);
  }

  /**
   * 公共交通路线规划方案
   * 
   * @param request - TransitIntegratedDirectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransitIntegratedDirectionResponse
   */
  async transitIntegratedDirectionWithOptions(request: TransitIntegratedDirectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<TransitIntegratedDirectionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCity)) {
      query["destinationCity"] = request.destinationCity;
    }

    if (!$dara.isNull(request.destinationLatitude)) {
      query["destinationLatitude"] = request.destinationLatitude;
    }

    if (!$dara.isNull(request.destinationLongitude)) {
      query["destinationLongitude"] = request.destinationLongitude;
    }

    if (!$dara.isNull(request.originCity)) {
      query["originCity"] = request.originCity;
    }

    if (!$dara.isNull(request.originLatitude)) {
      query["originLatitude"] = request.originLatitude;
    }

    if (!$dara.isNull(request.originLongitude)) {
      query["originLongitude"] = request.originLongitude;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransitIntegratedDirection",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/direction/transit/integrated`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TransitIntegratedDirectionResponse>(await this.callApi(params, req, runtime), new TransitIntegratedDirectionResponse({}));
    } else {
      return $dara.cast<TransitIntegratedDirectionResponse>(await this.execute(params, req, runtime), new TransitIntegratedDirectionResponse({}));
    }

  }

  /**
   * 公共交通路线规划方案
   * 
   * @param request - TransitIntegratedDirectionRequest
   * @returns TransitIntegratedDirectionResponse
   */
  async transitIntegratedDirection(request: TransitIntegratedDirectionRequest): Promise<TransitIntegratedDirectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transitIntegratedDirectionWithOptions(request, headers, runtime);
  }

  /**
   * 根据起终点坐标检索符合条件的步行路线规划方案
   * 
   * @param request - WalkingDirectionNovaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WalkingDirectionNovaResponse
   */
  async walkingDirectionNovaWithOptions(request: WalkingDirectionNovaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<WalkingDirectionNovaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationLatitude)) {
      query["destinationLatitude"] = request.destinationLatitude;
    }

    if (!$dara.isNull(request.destinationLongitude)) {
      query["destinationLongitude"] = request.destinationLongitude;
    }

    if (!$dara.isNull(request.originLatitude)) {
      query["originLatitude"] = request.originLatitude;
    }

    if (!$dara.isNull(request.originLongitude)) {
      query["originLongitude"] = request.originLongitude;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "WalkingDirectionNova",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/ipaas/v2/direction/walking`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<WalkingDirectionNovaResponse>(await this.callApi(params, req, runtime), new WalkingDirectionNovaResponse({}));
    } else {
      return $dara.cast<WalkingDirectionNovaResponse>(await this.execute(params, req, runtime), new WalkingDirectionNovaResponse({}));
    }

  }

  /**
   * 根据起终点坐标检索符合条件的步行路线规划方案
   * 
   * @param request - WalkingDirectionNovaRequest
   * @returns WalkingDirectionNovaResponse
   */
  async walkingDirectionNova(request: WalkingDirectionNovaRequest): Promise<WalkingDirectionNovaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.walkingDirectionNovaWithOptions(request, headers, runtime);
  }

}
