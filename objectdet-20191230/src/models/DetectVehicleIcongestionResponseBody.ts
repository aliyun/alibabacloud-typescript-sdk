// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectVehicleICongestionResponseBodyDataElementsBoxes extends $dara.Model {
  /**
   * @example
   * 576
   */
  bottom?: number;
  /**
   * @example
   * 341
   */
  left?: number;
  /**
   * @example
   * 589
   */
  right?: number;
  /**
   * @example
   * 434
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

export class DetectVehicleICongestionResponseBodyDataElements extends $dara.Model {
  boxes?: DetectVehicleICongestionResponseBodyDataElementsBoxes[];
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 0.962890625
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
      boxes: { 'type': 'array', 'itemType': DetectVehicleICongestionResponseBodyDataElementsBoxes },
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

export class DetectVehicleICongestionResponseBodyDataRegionIntersectFeatures extends $dara.Model {
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

export class DetectVehicleICongestionResponseBodyDataRegionIntersectMatched extends $dara.Model {
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

export class DetectVehicleICongestionResponseBodyDataRegionIntersects extends $dara.Model {
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

export class DetectVehicleICongestionResponseBodyData extends $dara.Model {
  elements?: DetectVehicleICongestionResponseBodyDataElements[];
  regionIntersectFeatures?: DetectVehicleICongestionResponseBodyDataRegionIntersectFeatures[];
  regionIntersectMatched?: DetectVehicleICongestionResponseBodyDataRegionIntersectMatched[];
  regionIntersects?: DetectVehicleICongestionResponseBodyDataRegionIntersects[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      regionIntersectFeatures: 'RegionIntersectFeatures',
      regionIntersectMatched: 'RegionIntersectMatched',
      regionIntersects: 'RegionIntersects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectVehicleICongestionResponseBodyDataElements },
      regionIntersectFeatures: { 'type': 'array', 'itemType': DetectVehicleICongestionResponseBodyDataRegionIntersectFeatures },
      regionIntersectMatched: { 'type': 'array', 'itemType': DetectVehicleICongestionResponseBodyDataRegionIntersectMatched },
      regionIntersects: { 'type': 'array', 'itemType': DetectVehicleICongestionResponseBodyDataRegionIntersects },
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    if(Array.isArray(this.regionIntersectFeatures)) {
      $dara.Model.validateArray(this.regionIntersectFeatures);
    }
    if(Array.isArray(this.regionIntersectMatched)) {
      $dara.Model.validateArray(this.regionIntersectMatched);
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

export class DetectVehicleICongestionResponseBody extends $dara.Model {
  data?: DetectVehicleICongestionResponseBodyData;
  /**
   * @example
   * 4FC381BB-04F2-50F4-B54B-593042BCF3C6
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
      data: DetectVehicleICongestionResponseBodyData,
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

