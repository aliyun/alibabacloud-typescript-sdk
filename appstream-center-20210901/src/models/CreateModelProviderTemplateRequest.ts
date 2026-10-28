// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelProviderTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The agent platform.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The name of the agent provider.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The business type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The JSON configuration of the model provider, which includes connection information such as baseUrl, apiKey, and api. The apiKey is encrypted and stored after creation. When ProviderType is WuyingCredit, this parameter is not required and will be copied from the system template.
   * 
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
  /**
   * @remarks
   * The description of the model provider template.
   * 
   * @example
   * Alibaba Cloud Bailian provider
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the Wuying secure proxy. This parameter must be set to true when ProviderType is WuyingCredit.
   * 
   * @example
   * true
   */
  enableWuyingProxy?: boolean;
  /**
   * @remarks
   * The ID of the associated model group.
   * 
   * This parameter is required.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The name of the model provider template.
   * 
   * @example
   * Alibaba Cloud Bailian
   */
  name?: string;
  /**
   * @remarks
   * The name of the model provider. The name must be unique within the same model template. The naming conventions vary based on the ProviderType. For more information, see the description of ProviderType.
   * 
   * This parameter is required.
   * 
   * @example
   * bailian
   */
  providerName?: string;
  /**
   * @remarks
   * The type of the model provider. Different types have different constraints on ProviderName and Config:
   * - WuyingCredit: Wuying credit package. The ProviderName must be wuying-credit. The template is created by copying from a system template, and Config is not required.
   * - Managed: Managed provider. System-reserved names such as wuying-credit cannot be used, and Config is required.
   * - Custom: Custom provider. The ProviderName must start with the provider- prefix, and Config is required.
   * 
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

