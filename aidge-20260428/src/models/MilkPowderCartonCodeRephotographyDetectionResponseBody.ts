// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MilkPowderCartonCodeRephotographyDetectionResponseBodyDataResultGroundingRegions extends $dara.Model {
  /**
   * @remarks
   * The coordinates of the bounding box in the `[top-left x, top-left y, bottom-right x, bottom-right y]` format. The value range is 0 to 1000. The left value must be less than the right value, and the top value must be less than the bottom value.
   */
  bbox2d?: number[];
  /**
   * @remarks
   * The category of the target. For enumerated values, see the following table.
   * 
   * @example
   * milk_powder
   */
  label?: string;
  /**
   * @remarks
   * The confirmed short name or text, which contains up to 24 characters. This field is an empty string if the text is unclear.
   * 
   * @example
   * Milk powder
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

export class MilkPowderCartonCodeRephotographyDetectionResponseBodyDataResultGrounding extends $dara.Model {
  /**
   * @remarks
   * The coverage of the grounding. Valid values:
   * - `complete`: The relevant visible targets are complete.
   * - `partial`: Only some targets are valid or recognizable.
   * 
   * @example
   * complete
   */
  coverage?: string;
  /**
   * @remarks
   * The array of targets, which contains up to 12 items. This array can be empty if no relevant targets are found.
   */
  regions?: MilkPowderCartonCodeRephotographyDetectionResponseBodyDataResultGroundingRegions[];
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      regions: { 'type': 'array', 'itemType': MilkPowderCartonCodeRephotographyDetectionResponseBodyDataResultGroundingRegions },
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

export class MilkPowderCartonCodeRephotographyDetectionResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The supplementary element grounding results.
   */
  grounding?: MilkPowderCartonCodeRephotographyDetectionResponseBodyDataResultGrounding;
  /**
   * @remarks
   * Indicates whether the image is recaptured.
   * 
   * @example
   * true
   */
  isFake?: boolean;
  /**
   * @remarks
   * Indicates whether the image is suspected to be recaptured.
   * 
   * @example
   * true
   */
  isSuspect?: boolean;
  /**
   * @remarks
   * The recapture status. Valid values:
   * - `0`: Non-recapture.
   * - `1`: Recapture.
   * - `2`: Suspected recapture.
   * 
   * @example
   * 1
   */
  photoStatus?: number;
  /**
   * @remarks
   * The confidence score for recapture detection.
   * 
   * @example
   * 0.89
   */
  score?: number;
  /**
   * @remarks
   * The detection type. The value is fixed to `boxCode`.
   * 
   * @example
   * boxCode
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      grounding: 'Grounding',
      isFake: 'IsFake',
      isSuspect: 'IsSuspect',
      photoStatus: 'PhotoStatus',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grounding: MilkPowderCartonCodeRephotographyDetectionResponseBodyDataResultGrounding,
      isFake: 'boolean',
      isSuspect: 'boolean',
      photoStatus: 'number',
      score: 'number',
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

export class MilkPowderCartonCodeRephotographyDetectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the recapture detection result.
   */
  result?: MilkPowderCartonCodeRephotographyDetectionResponseBodyDataResult;
  /**
   * @remarks
   * The usage information. The value is `{"ProcessingCount":1}` if the call is successful, or an empty object if the call fails.
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
      result: MilkPowderCartonCodeRephotographyDetectionResponseBodyDataResult,
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

export class MilkPowderCartonCodeRephotographyDetectionResponseBody extends $dara.Model {
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
  data?: MilkPowderCartonCodeRephotographyDetectionResponseBodyData;
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
      data: MilkPowderCartonCodeRephotographyDetectionResponseBodyData,
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

