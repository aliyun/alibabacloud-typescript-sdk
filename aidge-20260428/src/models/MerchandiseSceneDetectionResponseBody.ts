// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MerchandiseSceneDetectionResponseBodyDataResultGroundingRegions extends $dara.Model {
  /**
   * @remarks
   * The 2D bounding box in the format of [top-left x, top-left y, bottom-right x, bottom-right y]. Valid values: 0 to 1000. The left coordinate must be less than the right coordinate, and the top coordinate must be less than the bottom coordinate.
   */
  bbox2d?: number[];
  /**
   * @remarks
   * The label.
   * 
   * @example
   * shelf
   */
  label?: string;
  /**
   * @remarks
   * The recognized text.
   * 
   * @example
   * Multi-tier product display shelf
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      bbox2d: 'Bbox_2d',
      label: 'Label',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox2d: { 'type': 'array', 'itemType': 'number' },
      label: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bbox2d)) {
      $dara.Model.validateArray(this.bbox2d);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandiseSceneDetectionResponseBodyDataResultGrounding extends $dara.Model {
  /**
   * @remarks
   * The coverage.
   * 
   * @example
   * complete
   */
  coverage?: string;
  /**
   * @remarks
   * The list of regions.
   */
  regions?: MerchandiseSceneDetectionResponseBodyDataResultGroundingRegions[];
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      regions: { 'type': 'array', 'itemType': MerchandiseSceneDetectionResponseBodyDataResultGroundingRegions },
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandiseSceneDetectionResponseBodyDataResultScenesSceneLocation extends $dara.Model {
  /**
   * @remarks
   * The x-coordinate of the region point.
   * 
   * @example
   * 0.431
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate of the region point.
   * 
   * @example
   * 0.973
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

export class MerchandiseSceneDetectionResponseBodyDataResultScenes extends $dara.Model {
  /**
   * @remarks
   * Optional. The area proportion.
   * 
   * @example
   * 0.985
   */
  areaRate?: number;
  /**
   * @remarks
   * Optional. The purity metric for proprietary products. The specific business criteria are subject to the recognition service.
   * 
   * @example
   * 0
   */
  ownPurity?: number;
  /**
   * @remarks
   * Optional. The display plumpness metric.
   * 
   * @example
   * 0
   */
  plumpness?: number;
  /**
   * @remarks
   * The display name of the scene. If omitted, the value is an empty string.
   * 
   * @example
   * Air-cooled display cabinet
   */
  sceneActualName?: string;
  /**
   * @remarks
   * The center point of the scene, which retains the original normalized coordinates. If omitted, the value is an empty array.
   */
  sceneCenter?: number[];
  /**
   * @remarks
   * The list of region points. Each item is in the {x,y} format and retains the original normalized coordinates. If omitted, the value is an empty array.
   */
  sceneLocation?: MerchandiseSceneDetectionResponseBodyDataResultScenesSceneLocation[];
  /**
   * @remarks
   * The scene identifier. This parameter is required and cannot be empty.
   * 
   * @example
   * yl_cj_lfg
   */
  sceneName?: string;
  /**
   * @remarks
   * Optional. The shelf distribution proportion metric. The specific business criteria are subject to the recognition service.
   * 
   * @example
   * 0
   */
  shelfDistributionRate?: number;
  static names(): { [key: string]: string } {
    return {
      areaRate: 'AreaRate',
      ownPurity: 'OwnPurity',
      plumpness: 'Plumpness',
      sceneActualName: 'SceneActualName',
      sceneCenter: 'SceneCenter',
      sceneLocation: 'SceneLocation',
      sceneName: 'SceneName',
      shelfDistributionRate: 'ShelfDistributionRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaRate: 'number',
      ownPurity: 'number',
      plumpness: 'number',
      sceneActualName: 'string',
      sceneCenter: { 'type': 'array', 'itemType': 'number' },
      sceneLocation: { 'type': 'array', 'itemType': MerchandiseSceneDetectionResponseBodyDataResultScenesSceneLocation },
      sceneName: 'string',
      shelfDistributionRate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sceneCenter)) {
      $dara.Model.validateArray(this.sceneCenter);
    }
    if(Array.isArray(this.sceneLocation)) {
      $dara.Model.validateArray(this.sceneLocation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandiseSceneDetectionResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The positioning information.
   */
  grounding?: MerchandiseSceneDetectionResponseBodyDataResultGrounding;
  /**
   * @remarks
   * The list of recognized scenes.
   */
  scenes?: MerchandiseSceneDetectionResponseBodyDataResultScenes[];
  /**
   * @remarks
   * Fixed value: scene.
   * 
   * @example
   * scene
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      grounding: 'Grounding',
      scenes: 'Scenes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grounding: MerchandiseSceneDetectionResponseBodyDataResultGrounding,
      scenes: { 'type': 'array', 'itemType': MerchandiseSceneDetectionResponseBodyDataResultScenes },
      type: 'string',
    };
  }

  validate() {
    if(this.grounding && typeof (this.grounding as any).validate === 'function') {
      (this.grounding as any).validate();
    }
    if(Array.isArray(this.scenes)) {
      $dara.Model.validateArray(this.scenes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandiseSceneDetectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the display scene detection result.
   */
  result?: MerchandiseSceneDetectionResponseBodyDataResult;
  /**
   * @remarks
   * The usage information.
   * 
   * @example
   * {"ProcessingCount":1}
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: MerchandiseSceneDetectionResponseBodyDataResult,
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MerchandiseSceneDetectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The display scene detection result.
   */
  data?: MerchandiseSceneDetectionResponseBodyData;
  /**
   * @remarks
   * The response message or failure description.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 70CBEFDF-BB17-1EB3-8A21-569F3124738F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: MerchandiseSceneDetectionResponseBodyData,
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

