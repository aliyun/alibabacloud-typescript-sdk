// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAppAgentTemplateRequestAsrConfig } from "./CreateAppAgentTemplateRequestAsrConfig";
import { CreateAppAgentTemplateRequestLlmConfig } from "./CreateAppAgentTemplateRequestLlmConfig";
import { CreateAppAgentTemplateRequestTtsConfig } from "./CreateAppAgentTemplateRequestTtsConfig";


export class CreateAppAgentTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  asrConfig?: CreateAppAgentTemplateRequestAsrConfig;
  /**
   * @example
   * 2
   */
  chatMode?: number;
  greeting?: string;
  /**
   * @example
   * 2
   */
  interruptMode?: number;
  llmConfig?: CreateAppAgentTemplateRequestLlmConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 智能体模版
   */
  name?: string;
  ttsConfig?: CreateAppAgentTemplateRequestTtsConfig;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      asrConfig: 'AsrConfig',
      chatMode: 'ChatMode',
      greeting: 'Greeting',
      interruptMode: 'InterruptMode',
      llmConfig: 'LlmConfig',
      name: 'Name',
      ttsConfig: 'TtsConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      asrConfig: CreateAppAgentTemplateRequestAsrConfig,
      chatMode: 'number',
      greeting: 'string',
      interruptMode: 'number',
      llmConfig: CreateAppAgentTemplateRequestLlmConfig,
      name: 'string',
      ttsConfig: CreateAppAgentTemplateRequestTtsConfig,
      type: 'number',
    };
  }

  validate() {
    if(this.asrConfig && typeof (this.asrConfig as any).validate === 'function') {
      (this.asrConfig as any).validate();
    }
    if(this.llmConfig && typeof (this.llmConfig as any).validate === 'function') {
      (this.llmConfig as any).validate();
    }
    if(this.ttsConfig && typeof (this.ttsConfig as any).validate === 'function') {
      (this.ttsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

