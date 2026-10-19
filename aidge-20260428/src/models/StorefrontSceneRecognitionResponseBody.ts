// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StorefrontSceneRecognitionResponseBodyDataResultDetails extends $dara.Model {
  /**
   * @remarks
   * The non-empty category name.
   * 
   * @example
   * oppo vivo smartphone specialty store
   */
  clazz?: string;
  /**
   * @remarks
   * A finite numerical value. The source document does not specify a value range.
   * 
   * @example
   * 0.99
   */
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      clazz: 'Clazz',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clazz: 'string',
      confidence: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StorefrontSceneRecognitionResponseBodyDataResultGroundingRegions extends $dara.Model {
  /**
   * @remarks
   * The bounding box coordinates.
   */
  bbox2d?: number[];
  /**
   * @remarks
   * The label.
   * 
   * @example
   * store_sign
   */
  label?: string;
  /**
   * @remarks
   * The recognized text.
   * 
   * @example
   * oppo
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      bbox2d: 'Bbox2d',
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

export class StorefrontSceneRecognitionResponseBodyDataResultGrounding extends $dara.Model {
  /**
   * @remarks
   * The coverage.
   * 
   * @example
   * partial
   */
  coverage?: string;
  /**
   * @remarks
   * The region list.
   */
  regions?: StorefrontSceneRecognitionResponseBodyDataResultGroundingRegions[];
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      regions: { 'type': 'array', 'itemType': StorefrontSceneRecognitionResponseBodyDataResultGroundingRegions },
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

export class StorefrontSceneRecognitionResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The classification details. This can be an empty array.
   */
  details?: StorefrontSceneRecognitionResponseBodyDataResultDetails[];
  /**
   * @remarks
   * The localization information.
   */
  grounding?: StorefrontSceneRecognitionResponseBodyDataResultGrounding;
  /**
   * @remarks
   * The non-empty scene classification array.
   */
  scenes?: string[];
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      grounding: 'Grounding',
      scenes: 'Scenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': StorefrontSceneRecognitionResponseBodyDataResultDetails },
      grounding: StorefrontSceneRecognitionResponseBodyDataResultGrounding,
      scenes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
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

export class StorefrontSceneRecognitionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The scene recognition result details.
   */
  result?: StorefrontSceneRecognitionResponseBodyDataResult;
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
      result: StorefrontSceneRecognitionResponseBodyDataResult,
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

export class StorefrontSceneRecognitionResponseBody extends $dara.Model {
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
   * The scene recognition result.
   */
  data?: StorefrontSceneRecognitionResponseBodyData;
  /**
   * @remarks
   * The returned message or failure description.
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
      data: StorefrontSceneRecognitionResponseBodyData,
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

