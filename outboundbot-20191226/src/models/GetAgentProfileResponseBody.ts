// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentProfileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent configuration.
   * 
   * @example
   * d31794e2a51f47d2901b4094d88311d7
   */
  agentProfileId?: string;
  /**
   * @remarks
   * The ID of the agent configuration template.
   * 
   * @example
   * default-survey
   */
  agentProfileTemplateId?: string;
  /**
   * @remarks
   * The agent type.
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
   * The time when the configuration was created.
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
   * 这是一个大模型机器人
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
   * The description of the labels.
   * 
   * @example
   * [{\\"name\\":\\"是否送达\\",\\"description\\":\\"购买的家电是否已经送达\\",\\"valueList\\":\\"[\\\\\\"是\\\\\\",\\\\\\"否\\\\\\"]\\"},{\\"name\\":\\"预约上门时间\\",\\"description\\":\\"收集客户期望的上门安装时间\\",\\"valueList\\":\\"[]\\"}]
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
   * The Natural Language Understanding (NLU) configuration. The parameters are described as follows:
   * 
   * - chatbotInstanceId: The instance ID of the ChatMe LLM agent.
   * 
   * - faqCategoryIds: The IDs of the attached FAQ categories.
   * 
   * - llmAgentId: The ID of the ChatMe LLM workspace.
   * 
   * - llmAgentKey: The key of the ChatMe LLM workspace.
   * 
   * - llmAgentInstanceId: The instance ID of the ChatMe LLM workspace.
   * 
   * @example
   * {"chatbotInstanceId":"chatbot-cn-j7eiVJZRmb","faqCategoryIds":[30000474726],"llmAgentId":"1246206","llmAgentInstanceId":"outbound_05efb75a-95df-438e-9b9b-8f2c857d5498","llmAgentKey":"d682716514814815ae77757c0bcbda01_p_outbound_public"}
   */
  nluConfigJson?: string;
  /**
   * @remarks
   * The prompt for the professional pattern.
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
   * {"name":"小x","gender":"男","age":18,"role":"游戏推广员","communicationStyle":["亲切"],"goals":"你好","background":"不是很好","openingPrompt":"你好，我是xxx"}
   */
  promptJson?: string;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * 测试场景
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
   * The time when the configuration was last modified.
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
   * [{\\"name\\":\\"name\\",\\"description\\":\\"客户姓名\\"},{\\"name\\":\\"gender\\",\\"description\\":\\"客户性别\\"}]
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
   * Indicates whether the request was successful.
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

