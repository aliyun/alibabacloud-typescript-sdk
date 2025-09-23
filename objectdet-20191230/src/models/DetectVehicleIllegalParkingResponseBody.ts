// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectVehicleIllegalParkingResponseBodyDataElementsBoxes extends $dara.Model {
  /**
   * @example
   * 268
   */
  bottom?: number;
  /**
   * @example
   * 413
   */
  left?: number;
  /**
   * @example
   * 499
   */
  right?: number;
  /**
   * @example
   * 138
   */
  top?: number;
  static names(): { [key: string]: string } {
    return {
      bottom: 'Bottom',
      left: 'Left',
      right: 'Right',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottom: 'number',
      left: 'number',
      right: 'number',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingResponseBodyDataElements extends $dara.Model {
  boxes?: DetectVehicleIllegalParkingResponseBodyDataElementsBoxes[];
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 0.9599609375
   */
  score?: number;
  /**
   * @example
   * vehicle
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      id: 'Id',
      score: 'Score',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingResponseBodyDataElementsBoxes },
      id: 'number',
      score: 'number',
      typeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.boxes)) {
      $dara.Model.validateArray(this.boxes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingResponseBodyDataRegionIntersects extends $dara.Model {
  ids?: number[];
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingResponseBodyData extends $dara.Model {
  elements?: DetectVehicleIllegalParkingResponseBodyDataElements[];
  regionIntersects?: DetectVehicleIllegalParkingResponseBodyDataRegionIntersects[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      regionIntersects: 'RegionIntersects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingResponseBodyDataElements },
      regionIntersects: { 'type': 'array', 'itemType': DetectVehicleIllegalParkingResponseBodyDataRegionIntersects },
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    if(Array.isArray(this.regionIntersects)) {
      $dara.Model.validateArray(this.regionIntersects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectVehicleIllegalParkingResponseBody extends $dara.Model {
  data?: DetectVehicleIllegalParkingResponseBodyData;
  /**
   * @example
   * DB882EDD-991A-5A0C-A19B-CC7C4BA65E35
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
      data: DetectVehicleIllegalParkingResponseBodyData,
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

