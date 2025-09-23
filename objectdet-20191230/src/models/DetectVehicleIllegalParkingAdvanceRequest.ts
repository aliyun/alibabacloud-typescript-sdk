// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class DetectVehicleIllegalParkingAdvanceRequestRoadRegionsRoadRegionPoint extends $dara.Model {
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

export class DetectVehicleIllegalParkingAdvanceRequestRoadRegionsRoadRegion extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  point?: DetectVehicleIllegalParkingAdvanceRequestRoadRegionsRoadRegionPoint;
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: DetectVehicleIllegalParkingAdvanceRequestRoadRegionsRoadRegionPoint,
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

export class DetectVehicleIllegalParkingAdvanceRequestRoadRegions extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  roadRegion?: DetectVehicleIllegalParkingAdvanceRequestRoadRegionsRoadRegion[];
  static names(): { [key: string]: string } {
    return {
      roadRegion: 'RoadRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roadRegion: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingAdvanceRequestRoadRegionsRoadRegion },
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

export class DetectVehicleIllegalParkingAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectVehicleIllegalParking/DetectVehicleIllegalParking2.jpg
   */
  imageURLObject?: Readable;
  /**
   * @remarks
   * This parameter is required.
   */
  roadRegions?: DetectVehicleIllegalParkingAdvanceRequestRoadRegions[];
  static names(): { [key: string]: string } {
    return {
      imageURLObject: 'ImageURL',
      roadRegions: 'RoadRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURLObject: 'Readable',
      roadRegions: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingAdvanceRequestRoadRegions },
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

