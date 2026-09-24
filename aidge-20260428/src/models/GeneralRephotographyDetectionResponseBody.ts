// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GeneralRephotographyDetectionResponseBodyDataResultGroundingRegions extends $dara.Model {
  /**
   * @remarks
   * The bounding box coordinates.
   */
  bbox2d?: number[];
  /**
   * @remarks
   * The target category. For valid values, see the table below.
   * 
   * @example
   * product
   */
  label?: string;
  /**
   * @remarks
   * The confirmed short name or text of up to 24 characters. This value is an empty string if the text is unreadable.
   * 
   * @example
   * Product
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

export class GeneralRephotographyDetectionResponseBodyDataResultGrounding extends $dara.Model {
  /**
   * @remarks
   * The coverage of the localization. Valid values:
   * - complete: All relevant visible targets are fully covered.
   * - partial: Only some targets are valid or recognizable.
   * 
   * @example
   * complete
   */
  coverage?: string;
  /**
   * @remarks
   * The array of targets. A maximum of 12 items are returned. This value can be empty if no relevant targets exist.
   */
  regions?: GeneralRephotographyDetectionResponseBodyDataResultGroundingRegions[];
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      regions: { 'type': 'array', 'itemType': GeneralRephotographyDetectionResponseBodyDataResultGroundingRegions },
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

export class GeneralRephotographyDetectionResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The supplementary element localization result.
   */
  grounding?: GeneralRephotographyDetectionResponseBodyDataResultGrounding;
  /**
   * @remarks
   * Indicates whether the image is a recaptured photo.
   * 
   * @example
   * true
   */
  isFake?: boolean;
  /**
   * @remarks
   * The detection type. The value is fixed as general.
   * 
   * @example
   * general
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      grounding: 'Grounding',
      isFake: 'IsFake',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grounding: GeneralRephotographyDetectionResponseBodyDataResultGrounding,
      isFake: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.grounding && typeof (this.grounding as any).validate === 'function') {
      (this.grounding as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GeneralRephotographyDetectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business result. This value is an empty object if the request fails.
   */
  result?: GeneralRephotographyDetectionResponseBodyDataResult;
  /**
   * @remarks
   * The usage information. The value is `{"ProcessingCount":1}` on success, or an empty object on failure.
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
      result: GeneralRephotographyDetectionResponseBodyDataResult,
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

export class GeneralRephotographyDetectionResponseBody extends $dara.Model {
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
   * The recapture detection result.
   */
  data?: GeneralRephotographyDetectionResponseBodyData;
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
      data: GeneralRephotographyDetectionResponseBodyData,
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

