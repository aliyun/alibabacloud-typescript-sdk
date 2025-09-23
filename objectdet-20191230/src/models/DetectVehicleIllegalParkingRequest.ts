// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectVehicleIllegalParkingRequestRoadRegionsRoadRegionPoint extends $dara.Model {
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

export class DetectVehicleIllegalParkingRequestRoadRegionsRoadRegion extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  point?: DetectVehicleIllegalParkingRequestRoadRegionsRoadRegionPoint;
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: DetectVehicleIllegalParkingRequestRoadRegionsRoadRegionPoint,
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

export class DetectVehicleIllegalParkingRequestRoadRegions extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  roadRegion?: DetectVehicleIllegalParkingRequestRoadRegionsRoadRegion[];
  static names(): { [key: string]: string } {
    return {
      roadRegion: 'RoadRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roadRegion: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingRequestRoadRegionsRoadRegion },
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

export class DetectVehicleIllegalParkingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectVehicleIllegalParking/DetectVehicleIllegalParking2.jpg
   */
  imageURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roadRegions?: DetectVehicleIllegalParkingRequestRoadRegions[];
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      roadRegions: 'RoadRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      roadRegions: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingRequestRoadRegions },
    };
  }

  validate() {
    if(Array.isArray(this.roadRegions)) {
      $dara.Model.validateArray(this.roadRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

