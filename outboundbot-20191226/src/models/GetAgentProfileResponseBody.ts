// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentProfileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The agent profile ID.
   * 
   * @example
   * d31794e2a51f47d2901b4094d88311d7
   */
  agentProfileId?: string;
  /**
   * @remarks
   * The agent profile template ID.
   * 
   * @example
   * default-survey
   */
  agentProfileTemplateId?: string;
  /**
   * @remarks
   * agent type
   * 
   * @example
   * ""
   */
  agentType?: string;
  /**
   * @remarks
   * The API plugin configuration.
   * 
   * @example
   * []
   */
  apiPluginJson?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1741338619000
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a large language model chatbot
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 7f04f92c-ccfc-4f8f-a816-6902023be5c6
   */
  instanceId?: string;
  /**
   * @remarks
   * The instruction configuration.
   * 
   * @example
   * [{"type":"TransferToAgent","instructions":[{"code":"Transfer0","skillGroupId":"123","skillGroupName":"123"}],"timeoutEnable":false},{"type":"CollectNumber","instructions":[]}]
   */
  instructionJson?: string;
  /**
   * @remarks
   * The label descriptions.
   * 
   * @example
   * [{\\"name\\":\\"Delivered\\",\\"description\\":\\"Whether the purchased home appliance has been delivered\\",\\"valueList\\":\\"[\\\\\\"Yes\\\\\\",\\\\\\"No\\\\\\"]\\"},{\\"name\\":\\"On-site Appointment Time\\",\\"description\\":\\"Collect the customer\\"s expected on-site installation time\\",\\"valueList\\":\\"[]\\"}]
   */
  labelsJson?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * model_002
   */
  model?: string;
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * {}
   */
  modelConfig?: string;
  /**
   * @remarks
   * The NLU configuration. Parameter settings:
   * - chatbotInstanceId: the instance ID of the Chatbot large language model.
   * - faqCategoryIds: the IDs of the attached FAQ categories.
   * - llmAgentId: the workspace ID of the Chatbot large language model.
   * - llmAgentKey: the workspace key of the Chatbot large language model.
   * - llmAgentInstanceId: the workspace instance ID of the Chatbot large language model.
   * 
   * @example
   * {"chatbotInstanceId":"chatbot-cn-j7eiVJZRmb","faqCategoryIds":[30000474726],"llmAgentId":"1246206","llmAgentInstanceId":"outbound_05efb75a-95df-438e-9b9b-8f2c857d5498","llmAgentKey":"d682716514814815ae77757c0bcbda01_p_outbound_public"}
   */
  nluConfigJson?: string;
  /**
   * @remarks
   * The prompt in professional mode.
   * 
   * @example
   * ""
   */
  prompt?: string;
  /**
   * @remarks
   * The agent configuration.
   * 
   * @example
   * {"name":"Xiao X","gender":"Male","age":18,"role":"Game Promoter","communicationStyle":["Friendly"],"goals":"Hello","background":"Not very good","openingPrompt":"Hello, I am XXX"}
   */
  promptJson?: string;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * Test scenario
   */
  scenario?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * d13ad2d3-3fe6-4352-b38b-bd6559047de8
   */
  scriptId?: string;
  /**
   * @remarks
   * Indicates whether the template is a system template.
   * 
   * @example
   * false
   */
  system?: boolean;
  /**
   * @remarks
   * The update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1741338619000
   */
  updateTime?: string;
  /**
   * @remarks
   * The variable configuration.
   * 
   * @example
   * [{\\"name\\":\\"name\\",\\"description\\":\\"Customer name\\"},{\\"name\\":\\"gender\\",\\"description\\":\\"Customer gender\\"}]
   */
  variablesJson?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileId: 'AgentProfileId',
      agentProfileTemplateId: 'AgentProfileTemplateId',
      agentType: 'AgentType',
      apiPluginJson: 'ApiPluginJson',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      instructionJson: 'InstructionJson',
      labelsJson: 'LabelsJson',
      model: 'Model',
      modelConfig: 'ModelConfig',
      nluConfigJson: 'NluConfigJson',
      prompt: 'Prompt',
      promptJson: 'PromptJson',
      scenario: 'Scenario',
      scriptId: 'ScriptId',
      system: 'System',
      updateTime: 'UpdateTime',
      variablesJson: 'VariablesJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
      agentProfileTemplateId: 'string',
      agentType: 'string',
      apiPluginJson: 'string',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      instructionJson: 'string',
      labelsJson: 'string',
      model: 'string',
      modelConfig: 'string',
      nluConfigJson: 'string',
      prompt: 'string',
      promptJson: 'string',
      scenario: 'string',
      scriptId: 'string',
      system: 'boolean',
      updateTime: 'string',
      variablesJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentProfileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAgentProfileResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A573837-3AD3-54CF-930A-07A3287042C2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAgentProfileResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

