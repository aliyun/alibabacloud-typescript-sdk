// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelProviderTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Agent platform.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * Agent provider name.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * Business type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * Model provider configuration JSON, containing connection information such as baseUrl, apiKey, and api. The apiKey is encrypted after creation. Not required when ProviderType is WuyingCredit, as it is copied from the system template.
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
   * Model provider template description.
   * 
   * @example
   * 阿里云百炼服务商
   */
  description?: string;
  /**
   * @remarks
   * Whether to enable Wuying security proxy. Must be true when ProviderType is WuyingCredit.
   * 
   * @example
   * true
   */
  enableWuyingProxy?: boolean;
  /**
   * @remarks
   * Associated model group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * Model provider template name.
   * 
   * @example
   * 阿里云百炼
   */
  name?: string;
  /**
   * @remarks
   * Model provider name. Must be unique within the same model template. Naming rules vary by ProviderType. For details, see the ProviderType description.
   * 
   * This parameter is required.
   * 
   * @example
   * bailian
   */
  providerName?: string;
  /**
   * @remarks
   * Model provider type. Different types impose different constraints on ProviderName and Config:
   * - WuyingCredit: Wuying credit package. ProviderName must be wuying-credit. Created by copying from the system template. Config is not required.
   * - Managed: Managed provider. System-reserved names such as wuying-credit cannot be used. Config is required.
   * - Custom: User-defined provider. ProviderName must start with the provider- prefix. Config is required.
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

