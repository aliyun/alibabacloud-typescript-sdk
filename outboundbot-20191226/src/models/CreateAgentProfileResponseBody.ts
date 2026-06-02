// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAgentProfileResponseBodyData extends $dara.Model {
  /**
   * @example
   * 37ca3ca1ac4b4e57adf3da5b5d939d04
   */
  agentProfileId?: string;
  /**
   * @example
   * default-survey
   */
  agentProfileTemplateId?: string;
  /**
   * @remarks
   * agent type
   * 
   * @example
   * “”
   */
  agentType?: string;
  /**
   * @example
   * 1739333534000
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * 1e16c663-0339-4064-9d57-07f772e78f21
   */
  instanceId?: string;
  /**
   * @example
   * [{\\"type\\":\\"TransferToAgent\\",\\"instructions\\":[{\\"code\\":\\"Transfer0\\",\\"skillGroupId\\":\\"123\\",\\"skillGroupName\\":\\"123\\"}]
   */
  instructionJson?: string;
  labelsJson?: string;
  /**
   * @example
   * model_001
   */
  model?: string;
  /**
   * @example
   * ""
   */
  modelConfig?: string;
  /**
   * @example
   * prompt
   */
  prompt?: string;
  promptJson?: string;
  scenario?: string;
  /**
   * @example
   * d13ad2d3-3fe6-4352-b38b-bd6559047de8
   */
  scriptId?: string;
  /**
   * @example
   * True
   */
  system?: boolean;
  /**
   * @example
   * 1737077564000
   */
  updateTime?: string;
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

export class CreateAgentProfileResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateAgentProfileResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
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
      data: CreateAgentProfileResponseBodyData,
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

