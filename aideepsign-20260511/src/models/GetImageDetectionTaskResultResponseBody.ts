// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageDetectionTaskResultResponseBodyLabels extends $dara.Model {
  /**
   * @remarks
   * The confidence level. Value range: 0 to 1.
   * 
   * @example
   * 0.9562
   */
  confidence?: number;
  /**
   * @remarks
   * The detection label. Valid values:
   * - ai_generated: AI-generated.
   * - non_ai_generated: not AI-generated.
   * 
   * @example
   * non_ai_generated
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDetectionTaskResultResponseBodyTamperBaseResultsAigc extends $dara.Model {
  /**
   * @remarks
   * The description of the AIGC detection result.
   * 
   * @example
   * 疑似AI生成图片
   */
  desc?: string;
  /**
   * @remarks
   * The AIGC detection score. Value range: 0 to 1. A higher value indicates a greater likelihood of AI generation.
   * 
   * @example
   * 0.47
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDetectionTaskResultResponseBodyTamperBaseResultsAips extends $dara.Model {
  /**
   * @remarks
   * The description of the AI post-processing detection result.
   * 
   * @example
   * 未发现AI后处理痕迹
   */
  desc?: string;
  /**
   * @remarks
   * The AI post-processing detection score. Value range: 0 to 1. A higher value indicates a greater likelihood of AI post-processing.
   * 
   * @example
   * 0.12
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDetectionTaskResultResponseBodyTamperBaseResultsPsLocItems extends $dara.Model {
  /**
   * @remarks
   * The bounding box coordinates of the tampered region in the format `[x1, y1, x2, y2]`.
   */
  bbox?: number[];
  /**
   * @remarks
   * The tamper confidence level for the region. Value range: `0 to 1`.
   * 
   * @example
   * 0.67
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      bbox: 'Bbox',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bbox: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bbox)) {
      $dara.Model.validateArray(this.bbox);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDetectionTaskResultResponseBodyTamperBaseResultsPsLoc extends $dara.Model {
  /**
   * @remarks
   * The description of the PS tamper localization result.
   * 
   * @example
   * 发现1处疑似PS修改区域
   */
  desc?: string;
  /**
   * @remarks
   * The list of tampered regions.
   */
  items?: GetImageDetectionTaskResultResponseBodyTamperBaseResultsPsLocItems[];
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      items: { 'type': 'array', 'itemType': GetImageDetectionTaskResultResponseBodyTamperBaseResultsPsLocItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDetectionTaskResultResponseBodyTamperBaseResults extends $dara.Model {
  /**
   * @remarks
   * The AIGC detection score.
   */
  aigc?: GetImageDetectionTaskResultResponseBodyTamperBaseResultsAigc;
  /**
   * @remarks
   * The AI post-processing detection score.
   */
  aips?: GetImageDetectionTaskResultResponseBodyTamperBaseResultsAips;
  /**
   * @remarks
   * The image type.
   * 
   * @example
   * natural
   */
  imgType?: string;
  /**
   * @remarks
   * The PS tamper localization results.
   */
  psLoc?: GetImageDetectionTaskResultResponseBodyTamperBaseResultsPsLoc;
  static names(): { [key: string]: string } {
    return {
      aigc: 'Aigc',
      aips: 'Aips',
      imgType: 'ImgType',
      psLoc: 'PsLoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aigc: GetImageDetectionTaskResultResponseBodyTamperBaseResultsAigc,
      aips: GetImageDetectionTaskResultResponseBodyTamperBaseResultsAips,
      imgType: 'string',
      psLoc: GetImageDetectionTaskResultResponseBodyTamperBaseResultsPsLoc,
    };
  }

  validate() {
    if(this.aigc && typeof (this.aigc as any).validate === 'function') {
      (this.aigc as any).validate();
    }
    if(this.aips && typeof (this.aips as any).validate === 'function') {
      (this.aips as any).validate();
    }
    if(this.psLoc && typeof (this.psLoc as any).validate === 'function') {
      (this.psLoc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDetectionTaskResultResponseBodyTamper extends $dara.Model {
  /**
   * @remarks
   * The basic detection results, including detection scores across multiple dimensions.
   */
  baseResults?: GetImageDetectionTaskResultResponseBodyTamperBaseResults;
  /**
   * @remarks
   * The comprehensive analysis result from the large language model.
   * 
   * @example
   * 该图片经检测存在AI生成痕迹，AIGC检测得分0.95，建议进一步核实图片来源。
   */
  llmResult?: string;
  /**
   * @remarks
   * The risk code. A value of `"0"` indicates no risk.
   * 
   * @example
   * 0
   */
  riskCode?: string;
  /**
   * @remarks
   * The list of risk reasons. An empty array is returned when no risk is detected.
   */
  riskReasons?: string[];
  static names(): { [key: string]: string } {
    return {
      baseResults: 'BaseResults',
      llmResult: 'LlmResult',
      riskCode: 'RiskCode',
      riskReasons: 'RiskReasons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseResults: GetImageDetectionTaskResultResponseBodyTamperBaseResults,
      llmResult: 'string',
      riskCode: 'string',
      riskReasons: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.baseResults && typeof (this.baseResults as any).validate === 'function') {
      (this.baseResults as any).validate();
    }
    if(Array.isArray(this.riskReasons)) {
      $dara.Model.validateArray(this.riskReasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDetectionTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. The value `"OK"` is returned when the request succeeds.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The detection mode that was actually executed. Valid values:
   * - aigc: AIGC only.
   * - tamper: tamper detection.
   * 
   * This parameter is returned only when `Status` is `succeeded`.
   * 
   * @example
   * tamper
   */
  detectMode?: string;
  /**
   * @remarks
   * The HTTP status code. The value `200` is returned when the request succeeds.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of AIGC detection result labels. This parameter is returned only when `Status` is `succeeded` and the task includes AIGC detection.
   */
  labels?: GetImageDetectionTaskResultResponseBodyLabels[];
  /**
   * @remarks
   * The additional information. The value `"success"` is returned when the request succeeds. An error message is returned when the task fails. This parameter is returned only when `Status` is `failed`.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - `pending`: waiting.
   * - `running`: in progress.
   * - `succeeded`: completed.
   * - `failed`: failed.
   * 
   * @example
   * succeeded
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The tamper detection results. This parameter is returned only when `DetectType` is `tamper` or `auto` (and the image is identified as a credential-type image).
   */
  tamper?: GetImageDetectionTaskResultResponseBodyTamper;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * f47ac10b-58cc-4372-a567-0e02b2c3d479
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detectMode: 'DetectMode',
      httpStatusCode: 'HttpStatusCode',
      labels: 'Labels',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
      tamper: 'Tamper',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detectMode: 'string',
      httpStatusCode: 'number',
      labels: { 'type': 'array', 'itemType': GetImageDetectionTaskResultResponseBodyLabels },
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
      tamper: GetImageDetectionTaskResultResponseBodyTamper,
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.tamper && typeof (this.tamper as any).validate === 'function') {
      (this.tamper as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

