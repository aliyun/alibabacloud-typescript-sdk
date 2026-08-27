// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAIAgentRequestHistory extends $dara.Model {
  /**
   * @example
   * 上一轮问题
   */
  content?: string;
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeAIAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * slsLogDiagnose
   */
  agentName?: string;
  bizParams?: { [key: string]: string };
  history?: InvokeAIAgentRequestHistory[];
  /**
   * @example
   * zh / en
   */
  outputLanguage?: string;
  /**
   * @example
   * 帮我诊断这个错误日志
   */
  prompt?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'agentName',
      bizParams: 'bizParams',
      history: 'history',
      outputLanguage: 'outputLanguage',
      prompt: 'prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      bizParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      history: { 'type': 'array', 'itemType': InvokeAIAgentRequestHistory },
      outputLanguage: 'string',
      prompt: 'string',
    };
  }

  validate() {
    if(this.bizParams) {
      $dara.Model.validateMap(this.bizParams);
    }
    if(Array.isArray(this.history)) {
      $dara.Model.validateArray(this.history);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

