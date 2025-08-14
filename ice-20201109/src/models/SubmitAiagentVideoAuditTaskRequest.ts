// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAIAgentVideoAuditTaskRequestCallbackConfig extends $dara.Model {
  /**
   * @example
   * Bearer Token
   */
  token?: string;
  /**
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
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * 2
   */
  frameCount?: number;
  prompt?: string;
  /**
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
   * @example
   * http://my-bucket.cn-shanghai.aliyuncs.com/object-id.mp4
   */
  media?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * *******3b3d94abda22******
   */
  AIAgentId?: string;
  /**
   * @example
   * 3000
   */
  auditInterval?: number;
  /**
   * @example
   * {"Url":"https://yourcallback","Token":"yourtoken"}
   */
  callbackConfig?: SubmitAIAgentVideoAuditTaskRequestCallbackConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  capturePolicies?: SubmitAIAgentVideoAuditTaskRequestCapturePolicies[];
  /**
   * @remarks
   * This parameter is required.
   */
  input?: SubmitAIAgentVideoAuditTaskRequestInput;
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

