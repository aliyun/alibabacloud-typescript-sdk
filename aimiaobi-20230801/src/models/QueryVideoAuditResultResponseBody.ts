// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoAuditResultResponseBodyDataImageUrls extends $dara.Model {
  /**
   * @remarks
   * Image ID (Associate with Results[].DataId to get audit result information)
   * 
   * @example
   * img001
   */
  id?: string;
  /**
   * @remarks
   * Timestamp (milliseconds)
   * 
   * @example
   * 1000
   */
  timestamp?: number;
  /**
   * @remarks
   * Image URL
   * 
   * @example
   * https://example.com/image1.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      timestamp: 'Timestamp',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      timestamp: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoAuditResultResponseBodyDataResultsResult extends $dara.Model {
  /**
   * @remarks
   * From 0 to 100, retained to 2 decimal places. Some labels do not have a confidence score.
   * 
   * @example
   * 99.5
   */
  confidence?: number;
  /**
   * @remarks
   * Explanation of the Label field
   * 
   * @example
   * 未检测出风险
   */
  description?: string;
  /**
   * @remarks
   * Risk label
   * 
   * The label of the image content review result. For example: nonLabel (no risk detected).
   * 
   * The label can also be a risk level that is determined by the high-risk and low-risk thresholds that you set. Valid return values are:
   * ● high: high risk
   * ● medium: medium risk
   * ● low: low risk
   * ● none: no risk detected
   * 
   * @example
   * nonLabel
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      description: 'string',
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

export class QueryVideoAuditResultResponseBodyDataResults extends $dara.Model {
  /**
   * @remarks
   * Image ID (Associate with ImageUrls[].Id to get image information)
   * 
   * @example
   * d411ed15e8fc154fd0ef5addabfee04b
   */
  dataId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * B5D1CF9E-0404-51E3-A28E-A5C7D95B6C71
   */
  reqId?: string;
  /**
   * @remarks
   * Detection results
   */
  result?: QueryVideoAuditResultResponseBodyDataResultsResult[];
  /**
   * @remarks
   * Risk level
   * 
   * - high: High risk
   * 
   * - medium: Medium risk
   * 
   * - low: Low risk
   * 
   * - none: No risk
   * 
   * @example
   * none
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      reqId: 'ReqId',
      result: 'Result',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      reqId: 'string',
      result: { 'type': 'array', 'itemType': QueryVideoAuditResultResponseBodyDataResultsResult },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoAuditResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Video duration
   * 
   * @example
   * 120.5
   */
  duration?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * Video frame rate
   * 
   * @example
   * 30.0
   */
  fps?: number;
  /**
   * @remarks
   * Frames audited
   * 
   * @example
   * 120
   */
  frameAudited?: number;
  /**
   * @remarks
   * Video height
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * Image URL list
   */
  imageUrls?: QueryVideoAuditResultResponseBodyDataImageUrls[];
  /**
   * @remarks
   * Audit results list
   */
  results?: QueryVideoAuditResultResponseBodyDataResults[];
  /**
   * @remarks
   * Task status (PENDING: Queued, RUNNING: In progress, SUCCESSED: Successful, FAILED: Failed, CANCELED: Task canceled)
   * 
   * @example
   * SUCCESSED
   */
  status?: string;
  /**
   * @remarks
   * Reviewed text
   * 
   * @example
   * 视频审核完成
   */
  text?: string;
  /**
   * @remarks
   * Frames to audit
   * 
   * @example
   * 120
   */
  totalFrameAudit?: number;
  /**
   * @remarks
   * Total frames
   * 
   * @example
   * 3615
   */
  totalFrames?: number;
  /**
   * @remarks
   * Total shots
   * 
   * @example
   * 15
   */
  totalShots?: number;
  /**
   * @remarks
   * Video FileKey
   * 
   * @example
   * video/test.mp4
   */
  videoFileKey?: string;
  /**
   * @remarks
   * Video URL
   * 
   * @example
   * https://example.com/video.mp4
   */
  videoUrl?: string;
  /**
   * @remarks
   * Video width
   * 
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      errorMessage: 'ErrorMessage',
      fps: 'Fps',
      frameAudited: 'FrameAudited',
      height: 'Height',
      imageUrls: 'ImageUrls',
      results: 'Results',
      status: 'Status',
      text: 'Text',
      totalFrameAudit: 'TotalFrameAudit',
      totalFrames: 'TotalFrames',
      totalShots: 'TotalShots',
      videoFileKey: 'VideoFileKey',
      videoUrl: 'VideoUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      errorMessage: 'string',
      fps: 'number',
      frameAudited: 'number',
      height: 'number',
      imageUrls: { 'type': 'array', 'itemType': QueryVideoAuditResultResponseBodyDataImageUrls },
      results: { 'type': 'array', 'itemType': QueryVideoAuditResultResponseBodyDataResults },
      status: 'string',
      text: 'string',
      totalFrameAudit: 'number',
      totalFrames: 'number',
      totalShots: 'number',
      videoFileKey: 'string',
      videoUrl: 'string',
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVideoAuditResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Business status code
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Video audit result data
   */
  data?: QueryVideoAuditResultResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message
   * 
   * @example
   * 查询成功
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Is successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryVideoAuditResultResponseBodyData,
      httpStatusCode: 'number',
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

