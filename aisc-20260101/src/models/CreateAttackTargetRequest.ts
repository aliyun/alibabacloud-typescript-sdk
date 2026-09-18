// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAttackTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The API key for the target model service, used to authenticate with the endpoint. The key is encrypted and stored after submission. Subsequent queries do not return the plaintext value. When ConnectionMethod is set to enterprise_relay, the actual credentials are held by the corporate internal network agent. Transmit the key over HTTPS and avoid exposing it in plaintext in logs, URLs, or client code.
   * 
   * This parameter is required.
   * 
   * @example
   * sk-abcd1234****
   */
  apiKey?: string;
  /**
   * @remarks
   * The advanced connection configuration in JSON string format. Common fields: authType (authentication type. custom_header: custom request header authentication. none: no authentication), customAuthHeaderName (custom authentication header name, such as X-API-Key), and requestHeaders (additional HTTP request header key-value pairs).
   * 
   * Common provider configuration templates ({{prompt}} is a prompt placeholder that you replace with the actual service value. When authType is set to bearer, the token is injected from ApiKey and the template does not contain credentials):
   * - Bailian: {"httpMethod":"POST","authType":"bearer","timeoutMs":30000,"requestTemplate":"{\\"input\\":{\\"prompt\\":\\"{{prompt}}\\"},\\"parameters\\":{\\"incremental_output\\":true},\\"debug\\":{}}","messageJsonPath":"$.output.text","requestHeaders":"{\\"X-DashScope-SSE\\": \\"enable\\" }","stream":true,"customAuthHeaderName":""}
   * - PAI: {"httpMethod":"POST","authType":"bearer","timeoutMs":60000,"requestTemplate":"{\\"inputs\\":{\\"question\\":\\"{{prompt}}\\",\\"chat_history\\":[]},\\"stream\\":true}","messageJsonPath":"$.outputs.answer","requestHeaders":"","stream":true,"customAuthHeaderName":""}
   * - Dify: {"httpMethod":"POST","authType":"bearer","timeoutMs":30000,"requestTemplate":"{\\"inputs\\":{},\\"query\\":\\"{{prompt}}\\",\\"response_mode\\":\\"streaming\\",\\"conversation_id\\":\\"\\",\\"user\\":\\"scanner\\"}","messageJsonPath":"$.answer","requestHeaders":"","stream":true,"customAuthHeaderName":""}
   * - AgentRun: {"httpMethod":"POST","authType":"custom_header","timeoutMs":30000,"requestTemplate":"{\\"messages\\":[{\\"role\\":\\"user\\",\\"content\\":\\"{{prompt}}\\"}],\\"stream\\":true}","messageJsonPath":"$.choices[0].delta.content","requestHeaders":"","customAuthHeaderName":"X-API-Key","stream":true}
   * - AgentKit: {"httpMethod":"POST","authType":"bearer","timeoutMs":30000,"requestTemplate":"{\\"messages\\":[{\\"role\\":\\"user\\",\\"content\\":\\"{{prompt}}\\"}]}","messageJsonPath":"$.content.parts[0].text","requestHeaders":"","stream":true,"customAuthHeaderName":""}
   * When ConnectionMethod is set to enterprise_relay, you can use the protocol field to specify the tunnel protocol (defaults to openai). The provider configuration templates above apply only to non-enterprise_relay connections.
   * 
   * @example
   * {\\"httpMethod\\":\\"POST\\",\\"authType\\":\\"bearer\\",\\"timeoutMs\\":30000,\\"requestTemplate\\":\\"{\\\\\\"input\\\\\\":{\\\\\\"prompt\\\\\\":\\\\\\"{{prompt}}\\\\\\"},\\\\\\"parameters\\\\\\":{\\\\\\"incremental_output\\\\\\":true},\\\\\\"debug\\\\\\":{}}\\",\\"messageJsonPath\\":\\"$.output.text\\",\\"requestHeaders\\":\\"{\\\\\\"X-DashScope-SSE\\\\\\": \\\\\\"enable\\\\\\" }\\",\\"stream\\":true,\\"customAuthHeaderName\\":\\"\\"}
   */
  connectionConfig?: string;
  /**
   * @remarks
   * The connection protocol type for the target service. The system selects the corresponding protocol adapter based on this value.
   * 
   * This parameter is required.
   * 
   * @example
   * openai
   */
  connectionMethod?: string;
  /**
   * @remarks
   * An optional description of the scan target usage.
   * 
   * @example
   * Bailian application in the production environment
   */
  description?: string;
  /**
   * @remarks
   * The HTTP or HTTPS endpoint address of the target model service. When ConnectionMethod is set to enterprise_relay, this value is ignored and the platform uses a fixed internal endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the target model. When ConnectionMethod is set to openai, specify the model ID under the OpenAI compatible protocol. When ConnectionMethod is set to anthropic, specify the model ID for the Anthropic Messages API. When ConnectionMethod is set to enterprise_relay, this value is ignored and the platform uses a fixed value.
   * 
   * @example
   * qwen-flash
   */
  modelName?: string;
  /**
   * @remarks
   * The business label of the model or agent provider, used for UI filtering and form display. This is decoupled from ConnectionMethod (technical protocol): the same Provider may use multiple protocols, and vice versa.
   * 
   * @example
   * bailian
   */
  provider?: string;
  /**
   * @remarks
   * The display name of the scan target, used for list display and filtering. Use a distinguishable name within the same tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * My Bailian Target
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the scan target, which determines the sampling dimension for scan tasks. Valid values:
   * - agent: agent-type samples.
   * - model: model-type samples.
   * 
   * This parameter is required.
   * 
   * @example
   * model
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      connectionConfig: 'ConnectionConfig',
      connectionMethod: 'ConnectionMethod',
      description: 'Description',
      endpoint: 'Endpoint',
      modelName: 'ModelName',
      provider: 'Provider',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      connectionConfig: 'string',
      connectionMethod: 'string',
      description: 'string',
      endpoint: 'string',
      modelName: 'string',
      provider: 'string',
      targetName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

