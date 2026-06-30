// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeAIAppJobResponseBodyResultAudioResult extends $dara.Model {
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 1a7852b032c371f0b64fe6f6c74b****
   */
  mediaId?: string;
  /**
   * @remarks
   * The output file URL.
   * 
   * @example
   * http://outin-***.oss-cn-shanghai.aliyuncs.com/stream/48555e8b-181dd5a8c07/48555e8b-181dd5a8c07.mp3
   */
  outputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      outputUrl: 'OutputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      outputUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYikeAIAppJobResponseBodyResultImageResult extends $dara.Model {
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 1a7852b032c371f0b64fe6f6c74b****
   */
  mediaId?: string;
  /**
   * @remarks
   * The output file URL.
   * 
   * @example
   * http://outin-***.oss-cn-shanghai.aliyuncs.com/stream/48555e8b-181dd5a8c07/48555e8b-181dd5a8c07.png
   */
  outputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      outputUrl: 'OutputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      outputUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYikeAIAppJobResponseBodyResultVideoResult extends $dara.Model {
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 1a7852b032c371f0b64fe6f6c74b****
   */
  mediaId?: string;
  /**
   * @remarks
   * The output file URL.
   * 
   * @example
   * http://outin-***.oss-cn-shanghai.aliyuncs.com/stream/48555e8b-181dd5a8c07/48555e8b-181dd5a8c07.mp4
   */
  outputUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      outputUrl: 'OutputUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      outputUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYikeAIAppJobResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The audio task result.
   */
  audioResult?: GetYikeAIAppJobResponseBodyResultAudioResult[];
  /**
   * @remarks
   * The image task result.
   */
  imageResult?: GetYikeAIAppJobResponseBodyResultImageResult[];
  /**
   * @remarks
   * The video task result.
   */
  videoResult?: GetYikeAIAppJobResponseBodyResultVideoResult[];
  static names(): { [key: string]: string } {
    return {
      audioResult: 'AudioResult',
      imageResult: 'ImageResult',
      videoResult: 'VideoResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResult: { 'type': 'array', 'itemType': GetYikeAIAppJobResponseBodyResultAudioResult },
      imageResult: { 'type': 'array', 'itemType': GetYikeAIAppJobResponseBodyResultImageResult },
      videoResult: { 'type': 'array', 'itemType': GetYikeAIAppJobResponseBodyResultVideoResult },
    };
  }

  validate() {
    if(Array.isArray(this.audioResult)) {
      $dara.Model.validateArray(this.audioResult);
    }
    if(Array.isArray(this.imageResult)) {
      $dara.Model.validateArray(this.imageResult);
    }
    if(Array.isArray(this.videoResult)) {
      $dara.Model.validateArray(this.videoResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYikeAIAppJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AI application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The input parameters for the AI application run. The value is a string obtained after JSON serialize.
   * 
   * @example
   * {\\"LoadImage.1.TargetImage\\":\\"MediaId1\\"}
   */
  appParams?: string;
  /**
   * @remarks
   * The time when the task ended. The time is in the yyyy-mm-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2026-02-06T18:53:18.809+08:00
   */
  executionFinishTime?: string;
  /**
   * @remarks
   * The time when the task started. The time is in the yyyy-mm-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2026-02-06T18:53:34.001+08:00
   */
  executionStartTime?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * folder-u3ilwhoc36ux9a****
   */
  folderId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  productionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0622C702-41BE-467E-AF2E-883D4517962E
   */
  requestId?: string;
  /**
   * @remarks
   * The task execution result.
   */
  result?: GetYikeAIAppJobResponseBodyResult;
  /**
   * @remarks
   * The task status. Valid values:
   * - Created: The task is created.
   * - Queuing: The task is queuing.
   * - Executing: The task is being executed.
   * - Finished: The task is finished.
   * - Failed: The task failed.
   * 
   * @example
   * Created
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appParams: 'AppParams',
      executionFinishTime: 'ExecutionFinishTime',
      executionStartTime: 'ExecutionStartTime',
      folderId: 'FolderId',
      jobId: 'JobId',
      productionId: 'ProductionId',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appParams: 'string',
      executionFinishTime: 'string',
      executionStartTime: 'string',
      folderId: 'string',
      jobId: 'string',
      productionId: 'string',
      requestId: 'string',
      result: GetYikeAIAppJobResponseBodyResult,
      status: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

