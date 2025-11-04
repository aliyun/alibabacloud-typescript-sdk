// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIAgentVideoAuditTaskRequestCallbackConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication token for callback.
   * 
   * @example
   * Bearer Token
   */
  token?: string;
  /**
   * @remarks
   * The URL for receiving callback notifications.
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
   * The duration over which to capture the specified number of frames. Unit: seconds.
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
   * The text prompt to send to the MLLM along with the captured frames.
   */
  prompt?: string;
  /**
   * @remarks
   * The timestamp in the video at which to start capturing frames. Unit: seconds.
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
   * The OSS URL of the input file. Format:
   * 
   * http(s)://{BucketName}.{Endpoint}/{ObjectName}
   * 
   * @example
   * http://my-bucket.cn-shanghai.aliyuncs.com/object-id.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the input file. Valid values:
   * 
   * *   OSS: an OSS object.
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
   * The interval, in milliseconds, at which to submit captured frames to the AI agent. Valid values: 0 to 5000. Default value: 3000. If it is set to 0, all captured frames are sent to the model in a single batch request. Otherwise, frames are sent sequentially with the specified interval between each request.
   * 
   * @example
   * 3000
   */
  auditInterval?: number;
  /**
   * @remarks
   * Callback configurations.
   * 
   * @example
   * {"Url":"https://yourcallback","Token":"yourtoken"}
   */
  callbackConfig?: SubmitAIAgentVideoAuditTaskRequestCallbackConfig;
  /**
   * @remarks
   * An array of frame-capturing policies. Each policy defines a set of frames to be analyzed and will generate a separate result from the model.
   * 
   * This parameter is required.
   */
  capturePolicies?: SubmitAIAgentVideoAuditTaskRequestCapturePolicies[];
  /**
   * @remarks
   * The details of the input file.
   * 
   * This parameter is required.
   */
  input?: SubmitAIAgentVideoAuditTaskRequestInput;
  /**
   * @remarks
   * The user-defined data.
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

