// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeAIAgentRequestHistory extends $dara.Model {
  /**
   * @remarks
   * The content of the message. The returned data is in rich text format.
   * 
   * @example
   * Previous question
   */
  content?: string;
  /**
   * @remarks
   * The role.
   * 
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
   * The agent name.
   * 
   * This parameter is required.
   * 
   * @example
   * slsLogDiagnose
   */
  agentName?: string;
  /**
   * @remarks
   * The business parameters. Each agent performs custom validation on these parameters, such as the SLS context passed for log diagnostics.
   */
  bizParams?: { [key: string]: string };
  /**
   * @remarks
   * The conversation history. Each element contains role (user/assistant) and content. The role and content fields in each element cannot be empty.
   */
  history?: InvokeAIAgentRequestHistory[];
  /**
   * @remarks
   * The output language. When set to en, fallback error messages are displayed in English.
   * 
   * @example
   * zh / en
   */
  outputLanguage?: string;
  /**
   * @remarks
   * The user input for the current turn. If left empty, a default prompt is used based on the scenario, such as "Start".
   * 
   * @example
   * Help me diagnose this error log
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

