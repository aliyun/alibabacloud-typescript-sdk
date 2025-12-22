// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoCreationTaskResultResponseBodyDataFileInfo extends $dara.Model {
  /**
   * @example
   * xxx
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

export class GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResultDetectionResultDetectionDetails extends $dara.Model {
  /**
   * @example
   * xxx
   */
  code?: string;
  /**
   * @example
   * 0.8
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

export class GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResultDetectionResult extends $dara.Model {
  detectionDetails?: GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResultDetectionResultDetectionDetails[];
  suggestions?: string[];
  static names(): { [key: string]: string } {
    return {
      detectionDetails: 'detectionDetails',
      suggestions: 'suggestions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionDetails: { 'type': 'array', 'itemType': GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResultDetectionResultDetectionDetails },
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

export class GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResultFileInfo extends $dara.Model {
  /**
   * @example
   * xxx
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

export class GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResult extends $dara.Model {
  /**
   * @example
   * xxx
   */
  detectionConclusion?: string;
  detectionResult?: GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResultDetectionResult;
  fileInfo?: GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResultFileInfo;
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
      detectionResult: GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResultDetectionResult,
      fileInfo: GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResultFileInfo,
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

export class GetVideoCreationTaskResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  estimatedWaitTimeInSeconds?: number;
  fileInfo?: GetVideoCreationTaskResultResponseBodyDataFileInfo;
  /**
   * @example
   * xxx
   */
  finishTime?: string;
  mediaDetectionTaskResult?: GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResult;
  /**
   * @example
   * xxx
   */
  startTime?: string;
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
  /**
   * @example
   * xxx
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      estimatedWaitTimeInSeconds: 'estimatedWaitTimeInSeconds',
      fileInfo: 'fileInfo',
      finishTime: 'finishTime',
      mediaDetectionTaskResult: 'mediaDetectionTaskResult',
      startTime: 'startTime',
      taskId: 'taskId',
      taskStatus: 'taskStatus',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimatedWaitTimeInSeconds: 'number',
      fileInfo: GetVideoCreationTaskResultResponseBodyDataFileInfo,
      finishTime: 'string',
      mediaDetectionTaskResult: GetVideoCreationTaskResultResponseBodyDataMediaDetectionTaskResult,
      startTime: 'string',
      taskId: 'string',
      taskStatus: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    if(this.fileInfo && typeof (this.fileInfo as any).validate === 'function') {
      (this.fileInfo as any).validate();
    }
    if(this.mediaDetectionTaskResult && typeof (this.mediaDetectionTaskResult as any).validate === 'function') {
      (this.mediaDetectionTaskResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoCreationTaskResultResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetVideoCreationTaskResultResponseBodyData;
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
      data: GetVideoCreationTaskResultResponseBodyData,
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

