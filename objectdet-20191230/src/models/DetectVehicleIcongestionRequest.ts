// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectVehicleICongestionRequestPreRegionIntersectFeatures extends $dara.Model {
  features?: string[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionRequestRoadRegionsRoadRegionPoint extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 400
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 400
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionRequestRoadRegionsRoadRegion extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  point?: DetectVehicleICongestionRequestRoadRegionsRoadRegionPoint;
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: DetectVehicleICongestionRequestRoadRegionsRoadRegionPoint,
    };
  }

  validate() {
    if(this.point && typeof (this.point as any).validate === 'function') {
      (this.point as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionRequestRoadRegions extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  roadRegion?: DetectVehicleICongestionRequestRoadRegionsRoadRegion[];
  static names(): { [key: string]: string } {
    return {
      roadRegion: 'RoadRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roadRegion: { 'type': 'array', 'itemType': DetectVehicleICongestionRequestRoadRegionsRoadRegion },
    };
  }

  validate() {
    if(Array.isArray(this.roadRegion)) {
      $dara.Model.validateArray(this.roadRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleICongestionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectVehicleICongestion/DetectVehicleICongestion1.jpg
   */
  imageURL?: string;
  preRegionIntersectFeatures?: DetectVehicleICongestionRequestPreRegionIntersectFeatures[];
  /**
   * @remarks
   * This parameter is required.
   */
  roadRegions?: DetectVehicleICongestionRequestRoadRegions[];
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      preRegionIntersectFeatures: 'PreRegionIntersectFeatures',
      roadRegions: 'RoadRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      preRegionIntersectFeatures: { 'type': 'array', 'itemType': DetectVehicleICongestionRequestPreRegionIntersectFeatures },
      roadRegions: { 'type': 'array', 'itemType': DetectVehicleICongestionRequestRoadRegions },
    };
  }

  validate() {
    if(Array.isArray(this.preRegionIntersectFeatures)) {
      $dara.Model.validateArray(this.preRegionIntersectFeatures);
    }
    if(Array.isArray(this.roadRegions)) {
      $dara.Model.validateArray(this.roadRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

