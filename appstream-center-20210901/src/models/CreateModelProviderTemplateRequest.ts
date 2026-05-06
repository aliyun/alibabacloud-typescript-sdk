// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelProviderTemplateRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   * 	"api": "openai-completions",
   * 	"apiKey": "sk-xxxx",
   * 	"baseUrl": "https://dashscope.aliyuncs.com/compatible-mode/v1"
   * }
   */
  config?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enableWuyingProxy?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bailian
   */
  providerName?: string;
  /**
   * @example
   * Managed
   */
  providerType?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      bizType: 'BizType',
      config: 'Config',
      description: 'Description',
      enableWuyingProxy: 'EnableWuyingProxy',
      modelTemplateId: 'ModelTemplateId',
      name: 'Name',
      providerName: 'ProviderName',
      providerType: 'ProviderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      bizType: 'number',
      config: 'string',
      description: 'string',
      enableWuyingProxy: 'boolean',
      modelTemplateId: 'string',
      name: 'string',
      providerName: 'string',
      providerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

