// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestConnectivityRequest extends $dara.Model {
  /**
   * @remarks
   * The API key for the target model service, used to authenticate with the Endpoint. If TargetId is specified, the system reads the key from the encrypted target configuration. This parameter is required if TargetId is empty. Transmit the key over HTTPS and avoid exposing it in plaintext in logs, URLs, or client code.
   * 
   * @example
   * sk-abcd1234****
   */
  apiKey?: string;
  /**
   * @remarks
   * The tracking identifier of the connectivity test. Do not specify this parameter for the first call. The system generates and returns it in the response. For subsequent calls, specify this value to query the latest status of the corresponding test.
   * 
   * @example
   * conn-a1b2c3d4e5f67890
   */
  checkId?: string;
  /**
   * @remarks
   * The advanced connection configuration in JSON string format. Common fields: authType (authentication type. custom_header indicates custom request header authentication. none indicates no authentication), customAuthHeaderName (custom authentication header name, such as X-API-Key), and requestHeaders (additional HTTP request header key-value pairs).
   * 
   * Common provider configuration templates ({{prompt}} is the prompt placeholder. Replace it with the actual service value. When authType is set to bearer, the token is injected from ApiKey, and the template does not contain credentials):
   * - Bailian: {"httpMethod":"POST","authType":"bearer","timeoutMs":30000,"requestTemplate":"{\\"input\\":{\\"prompt\\":\\"{{prompt}}\\"},\\"parameters\\":{\\"incremental_output\\":true},\\"debug\\":{}}","messageJsonPath":"$.output.text","requestHeaders":"{\\"X-DashScope-SSE\\": \\"enable\\" }","stream":true,"customAuthHeaderName":""}
   * - PAI: {"httpMethod":"POST","authType":"bearer","timeoutMs":60000,"requestTemplate":"{\\"inputs\\":{\\"question\\":\\"{{prompt}}\\",\\"chat_history\\":[]},\\"stream\\":true}","messageJsonPath":"$.outputs.answer","requestHeaders":"","stream":true,"customAuthHeaderName":""}
   * - Dify: {"httpMethod":"POST","authType":"bearer","timeoutMs":30000,"requestTemplate":"{\\"inputs\\":{},\\"query\\":\\"{{prompt}}\\",\\"response_mode\\":\\"streaming\\",\\"conversation_id\\":\\"\\",\\"user\\":\\"scanner\\"}","messageJsonPath":"$.answer","requestHeaders":"","stream":true,"customAuthHeaderName":""}
   * - AgentRun: {"httpMethod":"POST","authType":"custom_header","timeoutMs":30000,"requestTemplate":"{\\"messages\\":[{\\"role\\":\\"user\\",\\"content\\":\\"{{prompt}}\\"}],\\"stream\\":true}","messageJsonPath":"$.choices[0].delta.content","requestHeaders":"","customAuthHeaderName":"X-API-Key","stream":true}
   * - AgentKit: {"httpMethod":"POST","authType":"bearer","timeoutMs":30000,"requestTemplate":"{\\"messages\\":[{\\"role\\":\\"user\\",\\"content\\":\\"{{prompt}}\\"}]}","messageJsonPath":"$.content.parts[0].text","requestHeaders":"","stream":true,"customAuthHeaderName":""}
   * 
   * @example
   * {\\"httpMethod\\":\\"POST\\",\\"authType\\":\\"bearer\\",\\"timeoutMs\\":30000,\\"requestTemplate\\":\\"{\\\\\\"input\\\\\\":{\\\\\\"prompt\\\\\\":\\\\\\"{{prompt}}\\\\\\"},\\\\\\"parameters\\\\\\":{\\\\\\"incremental_output\\\\\\":true},\\\\\\"debug\\\\\\":{}}\\",\\"messageJsonPath\\":\\"$.output.text\\",\\"requestHeaders\\":\\"{\\\\\\"X-DashScope-SSE\\\\\\": \\\\\\"enable\\\\\\" }\\",\\"stream\\":true,\\"customAuthHeaderName\\":\\"\\"}
   */
  connectionConfig?: string;
  /**
   * @remarks
   * The connection protocol type of the target service. The system selects the corresponding protocol adapter to initiate the test based on this value. Default value: openai.
   * 
   * @example
   * openai
   */
  connectionMethod?: string;
  /**
   * @remarks
   * The HTTP or HTTPS endpoint address of the target model service. This parameter is required if TargetId is empty.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the target model. If ConnectionMethod is set to openai, specify the model ID under the OpenAI compatible protocol. If ConnectionMethod is set to anthropic, specify the model ID for the Anthropic Messages API. This parameter is required if the scan target is a model and TargetId is empty.
   * 
   * @example
   * qwen-flash
   */
  modelName?: string;
  /**
   * @remarks
   * The unique identifier of the attack target. If specified, the system reads Endpoint, ApiKey, ModelName, ConnectionMethod, and ConnectionConfig from the target configuration and ignores any parameters with the same names in the request. If not specified, provide the connection parameters directly in the request.
   * 
   * @example
   * target-abc123def4567
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      checkId: 'CheckId',
      connectionConfig: 'ConnectionConfig',
      connectionMethod: 'ConnectionMethod',
      endpoint: 'Endpoint',
      modelName: 'ModelName',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      checkId: 'string',
      connectionConfig: 'string',
      connectionMethod: 'string',
      endpoint: 'string',
      modelName: 'string',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

