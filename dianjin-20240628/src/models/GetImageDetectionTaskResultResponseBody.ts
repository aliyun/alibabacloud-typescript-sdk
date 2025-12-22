// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageDetectionTaskResultResponseBodyDataDetectionResultDetectionDetails extends $dara.Model {
  /**
   * @example
   * x
   */
  code?: string;
  /**
   * @example
   * xxx
   */
  confidence?: number;
  pass?: boolean;
  /**
   * @example
   * xxx
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      confidence: 'confidence',
      pass: 'pass',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      confidence: 'number',
      pass: 'boolean',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDetectionTaskResultResponseBodyDataDetectionResult extends $dara.Model {
  detectionDetails?: GetImageDetectionTaskResultResponseBodyDataDetectionResultDetectionDetails[];
  suggestions?: string[];
  static names(): { [key: string]: string } {
    return {
      detectionDetails: 'detectionDetails',
      suggestions: 'suggestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionDetails: { 'type': 'array', 'itemType': GetImageDetectionTaskResultResponseBodyDataDetectionResultDetectionDetails },
      suggestions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.detectionDetails)) {
      $dara.Model.validateArray(this.detectionDetails);
    }
    if(Array.isArray(this.suggestions)) {
      $dara.Model.validateArray(this.suggestions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDetectionTaskResultResponseBodyDataFileInfo extends $dara.Model {
  /**
   * @example
   * xx
   */
  fileId?: string;
  /**
   * @example
   * xxx
   */
  fileName?: string;
  /**
   * @example
   * xxx
   */
  fileTraceId?: string;
  /**
   * @example
   * xxx
   */
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      fileName: 'fileName',
      fileTraceId: 'fileTraceId',
      ossKey: 'ossKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      fileTraceId: 'string',
      ossKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDetectionTaskResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxx
   */
  detectionConclusion?: string;
  detectionResult?: GetImageDetectionTaskResultResponseBodyDataDetectionResult;
  fileInfo?: GetImageDetectionTaskResultResponseBodyDataFileInfo;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @example
   * xxx
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      detectionConclusion: 'detectionConclusion',
      detectionResult: 'detectionResult',
      fileInfo: 'fileInfo',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionConclusion: 'string',
      detectionResult: GetImageDetectionTaskResultResponseBodyDataDetectionResult,
      fileInfo: GetImageDetectionTaskResultResponseBodyDataFileInfo,
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    if(this.detectionResult && typeof (this.detectionResult as any).validate === 'function') {
      (this.detectionResult as any).validate();
    }
    if(this.fileInfo && typeof (this.fileInfo as any).validate === 'function') {
      (this.fileInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageDetectionTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetImageDetectionTaskResultResponseBodyData;
  /**
   * @example
   * 成功
   */
  message?: string;
  retryAble?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      retryAble: 'retryAble',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetImageDetectionTaskResultResponseBodyData,
      message: 'string',
      retryAble: 'boolean',
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

