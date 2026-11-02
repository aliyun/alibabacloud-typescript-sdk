// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIAgentVideoAuditTaskRequestCallbackConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication token for the callback.
   * 
   * @example
   * Bearer Token
   */
  token?: string;
  /**
   * @remarks
   * The URL where you want to receive callback notifications.
   * 
   * @example
   * https://yourcallback
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
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

export class SubmitAIAgentVideoAuditTaskRequestCapturePolicies extends $dara.Model {
  /**
   * @remarks
   * The duration of a single frame capture, in seconds.
   * 
   * @example
   * 10
   */
  duration?: number;
  /**
   * @remarks
   * The number of frames to capture.
   * 
   * @example
   * 2
   */
  frameCount?: number;
  /**
   * @remarks
   * The text parameter used when you call the multimodal large model.
   * 
   * @example
   * Please analyze the scene in the video
   */
  prompt?: string;
  /**
   * @remarks
   * The time when frame capture is triggered, in seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      frameCount: 'FrameCount',
      prompt: 'Prompt',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      frameCount: 'number',
      prompt: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIAgentVideoAuditTaskRequestInput extends $dara.Model {
  /**
   * @remarks
   * The information about the input file. OSS URLs are supported. The URL format is as follows:
   * 
   * http(s)://{BucketName}.{Endpoint}/{ObjectName}
   * 
   * Only OSS buckets in the same region as the service are supported. For example, the API service in the China (Shanghai) region supports only OSS buckets in the China (Shanghai) region.
   * 
   * @example
   * http://my-bucket.oss-cn-shanghai.aliyuncs.com/object-id.mp4
   */
  media?: string;
  /**
   * @remarks
   * The input type. Valid values:
   * 
   * - OSS: the URL of an OSS file.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAIAgentVideoAuditTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI agent.
   * 
   * This parameter is required.
   * 
   * @example
   * *******3b3d94abda22******
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The moderation interval, in milliseconds. Valid values: 0 to 5000. Default value: 3000. If you set this parameter to 0, all captured frame data specified in CapturePolicies is sent to the large model in the corresponding agent at a time. If you set this parameter to a non-zero value, such as 3000, all captured frame data is sent to the large model in sequence at an interval of 3,000 milliseconds.
   * 
   * @example
   * 3000
   */
  auditInterval?: number;
  /**
   * @remarks
   * The callback configuration.
   * 
   * @example
   * {"Url":"https://yourcallback","Token":"yourtoken"}
   */
  callbackConfig?: SubmitAIAgentVideoAuditTaskRequestCallbackConfig;
  /**
   * @remarks
   * The array of moderation policies. Each policy generates a model result.
   * 
   * This parameter is required.
   */
  capturePolicies?: SubmitAIAgentVideoAuditTaskRequestCapturePolicies[];
  /**
   * @remarks
   * The input file.
   * 
   * This parameter is required.
   */
  input?: SubmitAIAgentVideoAuditTaskRequestInput;
  /**
   * @remarks
   * The custom user data.
   * 
   * @example
   * {"Custom":"hello"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      auditInterval: 'AuditInterval',
      callbackConfig: 'CallbackConfig',
      capturePolicies: 'CapturePolicies',
      input: 'Input',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      auditInterval: 'number',
      callbackConfig: SubmitAIAgentVideoAuditTaskRequestCallbackConfig,
      capturePolicies: { 'type': 'array', 'itemType': SubmitAIAgentVideoAuditTaskRequestCapturePolicies },
      input: SubmitAIAgentVideoAuditTaskRequestInput,
      userData: 'string',
    };
  }

  validate() {
    if(this.callbackConfig && typeof (this.callbackConfig as any).validate === 'function') {
      (this.callbackConfig as any).validate();
    }
    if(Array.isArray(this.capturePolicies)) {
      $dara.Model.validateArray(this.capturePolicies);
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

