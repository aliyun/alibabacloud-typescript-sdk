// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MilkPowderCanBottomCodeRephotographyDetectionResponseBodyDataResultGroundingRegions extends $dara.Model {
  /**
   * @remarks
   * The bounding box coordinates in the format of `[top-left x, top-left y, bottom-right x, bottom-right y]`. Valid values: 0 to 1000. The left value must be less than the right value, and the top value must be less than the bottom value.
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
   * The confirmed short name or text of up to 24 characters. If the text is unclear, an empty string is returned.
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

export class MilkPowderCanBottomCodeRephotographyDetectionResponseBodyDataResultGrounding extends $dara.Model {
  /**
   * @remarks
   * The coverage. Valid values:
   * - complete: The relevant visible targets are complete.
   * - partial: Only some targets are valid or recognizable.
   * 
   * @example
   * complete
   */
  coverage?: string;
  /**
   * @remarks
   * The list of regions.
   */
  regions?: MilkPowderCanBottomCodeRephotographyDetectionResponseBodyDataResultGroundingRegions[];
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      regions: { 'type': 'array', 'itemType': MilkPowderCanBottomCodeRephotographyDetectionResponseBodyDataResultGroundingRegions },
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

export class MilkPowderCanBottomCodeRephotographyDetectionResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The localization information.
   */
  grounding?: MilkPowderCanBottomCodeRephotographyDetectionResponseBodyDataResultGrounding;
  /**
   * @remarks
   * Specifies whether the image is recaptured.
   * 
   * @example
   * true
   */
  isFake?: boolean;
  /**
   * @remarks
   * The detection type. The value is fixed to canBottom.
   * 
   * @example
   * canBottom
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
      grounding: MilkPowderCanBottomCodeRephotographyDetectionResponseBodyDataResultGrounding,
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

export class MilkPowderCanBottomCodeRephotographyDetectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the recapture detection result.
   */
  result?: MilkPowderCanBottomCodeRephotographyDetectionResponseBodyDataResult;
  /**
   * @remarks
   * The usage information. If the call is successful, the value is `{"ProcessingCount":1}`. If the call fails, an empty object is returned.
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
      result: MilkPowderCanBottomCodeRephotographyDetectionResponseBodyDataResult,
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

export class MilkPowderCanBottomCodeRephotographyDetectionResponseBody extends $dara.Model {
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
  data?: MilkPowderCanBottomCodeRephotographyDetectionResponseBodyData;
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
   * Specifies whether the call is successful. A valid business conclusion does not mean that the review is passed.
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
      data: MilkPowderCanBottomCodeRephotographyDetectionResponseBodyData,
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

