// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelProviderTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The Agent platform.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The Agent provider name.
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
   * The model provider configuration in JSON format, which contains connection information such as baseUrl, apiKey, and api. The apiKey is encrypted after creation. When ProviderType is set to WuyingCredit, this parameter is not required because the configuration is copied from the system template.
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
   * 阿里云百炼服务商
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the WUYING secure proxy. This parameter must be set to true when ProviderType is set to WuyingCredit.
   * 
   * @example
   * true
   */
  enableWuyingProxy?: boolean;
  /**
   * @remarks
   * The ID of the associated model template.
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
   * 阿里云百炼
   */
  name?: string;
  /**
   * @remarks
   * The model provider name. The name must be unique within the same model template. The naming rules vary based on the value of ProviderType. For more information, see the description of ProviderType.
   * 
   * This parameter is required.
   * 
   * @example
   * bailian
   */
  providerName?: string;
  /**
   * @remarks
   * The model provider type. Different types impose different constraints on ProviderName and Config. Valid values:
   * - WuyingCredit: WUYING credit plan. ProviderName must be set to wuying-credit. The template is created by copying from a system template, and Config is not required.
   * - Managed: managed provider. System-reserved names such as wuying-credit cannot be used. Config is required.
   * - Custom: user-defined provider. ProviderName must start with the prefix provider-. Config is required.
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

