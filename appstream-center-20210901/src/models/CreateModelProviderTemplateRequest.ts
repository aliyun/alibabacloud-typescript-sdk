// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelProviderTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The business platform to which the agent belongs. This value must be consistent with the target model group. If this parameter is not provided or an unrecognized value is passed, `ENTERPRISE` is used.
   * 
   * Valid values:
   * 
   * - `COMMON`: common model group
   * - `JVS`: JVS Claw business
   * - `ENTERPRISE`: Enterprise Edition business
   * - `ENTERPRISE_JVS`: Enterprise Edition JVS Computer business
   * - `ENTERPRISE_SEAT`: Enterprise Edition seat business
   * - `ENTERPRISE_AGENTIC_COMPUTER`: AI cloud computer business
   * - `AGENTIC_COMPUTER`: Agentic Computer business
   * - `FIXED_API_KEY`: fixed API key call business
   * 
   * The platform identifier does not automatically supplement the configuration capabilities or system templates for the corresponding agent.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent type, which must be consistent with the target model group.
   * 
   * When you create a custom or managed model connection configuration, the following types are supported:
   * 
   * - `OpenClaw`: OpenClaw agent
   * - `HermesAgent`: Hermes agent
   * - `AgenticComputer`: Agentic Computer agent
   * - `Common`: common model group
   * 
   * The provider configuration for `Common` uses the same field format as `OpenClaw`. The presence of an agent name in other businesses does not mean that this operation supports its model connection configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The business type, which is used to identify the business to which the model provider template belongs. Set this parameter to `1` for Enterprise Edition. This operation does not provide a default value for this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The connection configuration of the model provider, passed as a JSON string.
   * 
   * **When `ProviderType` is `Managed` or `Custom`, you must provide the service endpoint and key.** The field names depend on `AgentProvider`:
   * 
   * - `OpenClaw`, `AgenticComputer`, and `Common`: use `baseUrl` and `apiKey`. The protocol configuration field is `api`.
   * - `HermesAgent`: use `base_url` and `api_key`. The protocol configuration field is `api_mode`.
   * 
   * Do not mix the two field formats. The key is encrypted and saved after creation. When `ProviderType` is `WuyingPlan` or `WuyingCredit`, the configuration is copied from the system template, and you do not need to pass this parameter.
   * 
   * ### Endpoint and key verification
   * 
   * - `Managed`: The service endpoint must exactly match the available endpoint configured by the platform for the provider. Bailian, Moonshot, and SiliconFlow use the provided key to request the `/models` API under the service endpoint. If the verification request fails, the creation fails and `ApiKey.Invalid` is returned. Invalid, inactive, or mismatched keys, as well as connection failures during the verification request, may trigger this error.
   * - `Custom`: The provider name must start with `provider-`, and the service endpoint must be a valid public HTTP or HTTPS address. The preceding online key verification for the model list API is not performed during creation.
   * 
   * Other supported managed providers do not perform the preceding `/models` online verification. Successful creation does not replace actual model call verification. The keys in the examples are desensitized. You must use valid keys for actual calls.
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
   * Specifies whether to enable the Wuying secure proxy.
   * 
   * - `true`: Yes.
   * - `false`: No.
   * 
   * When `ProviderType` is `Managed` or `Custom`, this parameter takes effect only when the service provides proxy capabilities. If the service does not provide proxy capabilities, setting this parameter to `true` does not enable the proxy.
   * 
   * When `ProviderType` is `WuyingPlan` or `WuyingCredit`, the actual proxy configuration is copied with the preset template and is not overridden by this parameter. Set this parameter to `true` when you use `WuyingCredit`. If the service requires the secure proxy to be enabled but the request is not set to `true`, `ModelProviderTemplate.WuyingProxyRequired` is returned.
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
   * The name of the model provider. The name must be unique within the same model group.
   * 
   * - If `ProviderType` is `WuyingPlan`, set this parameter to `wuying-plan`.
   * - If `ProviderType` is `WuyingCredit`, set this parameter to `wuying-credit`.
   * - If `ProviderType` is `Custom`, the name must start with `provider-`.
   * - If `ProviderType` is `Managed`, use one of the following provider names. `OpenClaw`, `AgenticComputer`, and `Common` use the values in the list. `HermesAgent` uses the names with the `wuying-` prefix, such as `wuying-bailian`.
   * 
   * - `bailian`: Alibaba Cloud Bailian
   * - `moonshot`: Moonshot
   * - `siliconflow`: SiliconFlow
   * - `bailian-coding`: Alibaba Cloud Bailian Coding Plan
   * - `bailian-token-plan`: Alibaba Cloud Bailian Token Plan
   * - `kimi-coding`: Kimi Coding Plan
   * - `zhipu`: Zhipu AI
   * - `zhipu-coding`: Zhipu AI Coding Plan
   * - `minimax-token-plan`: MiniMax Token Plan
   * 
   * Whether the provider can be created also depends on whether the corresponding service endpoint and business configuration are available.
   * 
   * This parameter is required.
   * 
   * @example
   * bailian
   */
  providerName?: string;
  /**
   * @remarks
   * The access type of the model provider. We recommend that you explicitly pass this parameter. The value is case-sensitive.
   * 
   * - `WuyingPlan`: Wuying plan model. `ProviderName` must be `wuying-plan`. The configuration is copied from the system template applicable to the current business and agent type. You do not need to provide `Config`.
   * - `WuyingCredit`: Wuying credit package model. `ProviderName` must be `wuying-credit`. The configuration is copied from the system template. You do not need to provide `Config`. Set `EnableWuyingProxy` to `true`.
   * - `Managed`: third-party model provider managed by the platform. You must provide `Config`, and the `ProviderName` and service endpoint must fall within the supported scope of the selected agent.
   * - `Custom`: custom model provider. `ProviderName` must start with `provider-`. You must provide `Config`.
   * 
   * `WuyingPlan` and `WuyingCredit` rely on the corresponding system templates being configured. If no template is found, `ModelProviderTemplate.NotFound` is returned. If this parameter is not provided, the preceding plan or credit package configuration is not automatically adopted.
   * 
   * `WuyingPreset` indicates the system-preset intelligent models in the common model group. Do not mistake it for the template copying method of `WuyingPlan` or `WuyingCredit`.
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

