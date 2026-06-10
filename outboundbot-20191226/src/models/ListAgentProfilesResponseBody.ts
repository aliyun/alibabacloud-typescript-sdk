// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentProfilesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent configuration.
   * 
   * @example
   * 37ca3ca1ac4b4e57adf3da5b5d939d04
   */
  agentProfileId?: string;
  /**
   * @remarks
   * The ID of the agent template.
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
   * “”
   */
  agentType?: string;
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * 1721701525327
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 这是一个充满智慧的智能体。
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * e49ad122-15a1-443a-a102-84a78a93be79
   */
  instanceId?: string;
  /**
   * @remarks
   * The instruction configuration in JSON format.
   * 
   * @example
   * [{"type":"TransferToAgent","instructions":[{"code":"Transfer0","skillGroupId":"123","skillGroupName":"123"}],"timeoutEnable":false},{"type":"CollectNumber","instructions":[]}]
   */
  instructionJson?: string;
  /**
   * @remarks
   * The label definitions in JSON format.
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
   * The prompt for the professional pattern.
   * 
   * @example
   * “”
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
   * 43972417-0657-452a-81c2-c59d8245a9b2
   */
  scriptId?: string;
  /**
   * @remarks
   * Indicates whether this is a system template.
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
   * 1721701525327
   */
  updateTime?: string;
  /**
   * @remarks
   * The variable configuration in JSON format.
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
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      instructionJson: 'InstructionJson',
      labelsJson: 'LabelsJson',
      model: 'Model',
      modelConfig: 'ModelConfig',
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
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      instructionJson: 'string',
      labelsJson: 'string',
      model: 'string',
      modelConfig: 'string',
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

export class ListAgentProfilesResponseBody extends $dara.Model {
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
  data?: ListAgentProfilesResponseBodyData[];
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
   * The message returned for the request.
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
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
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
      data: { 'type': 'array', 'itemType': ListAgentProfilesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

