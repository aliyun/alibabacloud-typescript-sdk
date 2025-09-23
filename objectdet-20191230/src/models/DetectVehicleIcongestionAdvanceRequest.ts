// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DetectVehicleICongestionAdvanceRequestPreRegionIntersectFeatures extends $dara.Model {
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

export class DetectVehicleICongestionAdvanceRequestRoadRegionsRoadRegionPoint extends $dara.Model {
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

export class DetectVehicleICongestionAdvanceRequestRoadRegionsRoadRegion extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  point?: DetectVehicleICongestionAdvanceRequestRoadRegionsRoadRegionPoint;
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: DetectVehicleICongestionAdvanceRequestRoadRegionsRoadRegionPoint,
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

export class DetectVehicleICongestionAdvanceRequestRoadRegions extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  roadRegion?: DetectVehicleICongestionAdvanceRequestRoadRegionsRoadRegion[];
  static names(): { [key: string]: string } {
    return {
      roadRegion: 'RoadRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roadRegion: { 'type': 'array', 'itemType': DetectVehicleICongestionAdvanceRequestRoadRegionsRoadRegion },
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

export class DetectVehicleICongestionAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectVehicleICongestion/DetectVehicleICongestion1.jpg
   */
  imageURLObject?: Readable;
  preRegionIntersectFeatures?: DetectVehicleICongestionAdvanceRequestPreRegionIntersectFeatures[];
  /**
   * @remarks
   * This parameter is required.
   */
  roadRegions?: DetectVehicleICongestionAdvanceRequestRoadRegions[];
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
      preRegionIntersectFeatures: 'PreRegionIntersectFeatures',
      roadRegions: 'RoadRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      preRegionIntersectFeatures: { 'type': 'array', 'itemType': DetectVehicleICongestionAdvanceRequestPreRegionIntersectFeatures },
      roadRegions: { 'type': 'array', 'itemType': DetectVehicleICongestionAdvanceRequestRoadRegions },
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

