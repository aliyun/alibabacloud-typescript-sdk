// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAppAgentTemplateRequestAsrConfig } from "./ModifyAppAgentTemplateRequestAsrConfig";
import { ModifyAppAgentTemplateRequestLlmConfig } from "./ModifyAppAgentTemplateRequestLlmConfig";
import { ModifyAppAgentTemplateRequestTtsConfig } from "./ModifyAppAgentTemplateRequestTtsConfig";


export class ModifyAppAgentTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  asrConfig?: ModifyAppAgentTemplateRequestAsrConfig;
  /**
   * @example
   * 2
   */
  chatMode?: number;
  greeting?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1231231312312131231
   */
  id?: string;
  /**
   * @example
   * 2
   */
  interruptMode?: number;
  llmConfig?: ModifyAppAgentTemplateRequestLlmConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 智能体模版
   */
  name?: string;
  ttsConfig?: ModifyAppAgentTemplateRequestTtsConfig;
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
      id: 'Id',
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
      asrConfig: ModifyAppAgentTemplateRequestAsrConfig,
      chatMode: 'number',
      greeting: 'string',
      id: 'string',
      interruptMode: 'number',
      llmConfig: ModifyAppAgentTemplateRequestLlmConfig,
      name: 'string',
      ttsConfig: ModifyAppAgentTemplateRequestTtsConfig,
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

