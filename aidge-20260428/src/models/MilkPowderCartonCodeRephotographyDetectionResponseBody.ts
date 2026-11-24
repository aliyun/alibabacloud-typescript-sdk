// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MilkPowderCartonCodeRephotographyDetectionResponseBodyDataResultGroundingRegions extends $dara.Model {
  /**
   * @remarks
   * The bounding box coordinates.
   * - `[top-left x, top-left y, bottom-right x, bottom-right y]`
   * - Value range: 0–1000.
   * - Left < right, top < bottom.
   */
  bbox2d?: number[];
  /**
   * @remarks
   * The target category. For valid values, see the following table.
   * 
   * @example
   * milk_powder
   */
  label?: string;
  /**
   * @remarks
   * The recognized text. It contains up to 24 characters of a confirmed short name or text. It is an empty string if the text is unclear.
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
   * The coverage. Valid values:
   * - `complete`: The relevant visible targets are complete.
   * - `partial`: Only some targets are valid or recognizable.
   * 
   * @example
   * complete
   */
  coverage?: string;
  /**
   * @remarks
   * The target array. It contains up to 12 items. It can be empty if no relevant targets are found.
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
   * The supplementary element localization result.
   */
  grounding?: MilkPowderCartonCodeRephotographyDetectionResponseBodyDataResultGrounding;
  /**
   * @remarks
   * Indicates whether the image is a recapture.
   * 
   * @example
   * true
   */
  isFake?: boolean;
  /**
   * @remarks
   * Indicates whether the image is suspected to be a recapture.
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
   * The recapture confidence score.
   * 
   * @example
   * 0.89
   */
  score?: number;
  /**
   * @remarks
   * The detection type. Fixed to `boxCode`.
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
   * The usage information. It is `{"ProcessingCount":1}` if the call is successful, or an empty object if the call fails.
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

