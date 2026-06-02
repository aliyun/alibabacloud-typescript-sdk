// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentProfileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default-survey
   */
  agentProfileTemplateId?: string;
  /**
   * @example
   * 127.0.0.1
   */
  appIp?: string;
  description?: string;
  /**
   * @example
   * [30000474726]
   */
  faqCategoryIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @example
   * [{\\"type\\":\\"TransferToAgent\\",\\"instructions\\":[{\\"code\\":\\"Transfer0\\",\\"skillGroupId\\":\\"123\\",\\"skillGroupName\\":\\"123\\"}]
   */
  instructionJson?: string;
  labelsJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * model_001
   */
  model?: string;
  /**
   * @example
   * ""
   */
  modelConfig?: string;
  prompt?: string;
  promptJson?: string;
  scenario?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aa279896-64a6-4182-864c-4f2b04ec8d17
   */
  scriptId?: string;
  variablesJson?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileTemplateId: 'AgentProfileTemplateId',
      appIp: 'AppIp',
      description: 'Description',
      faqCategoryIds: 'FaqCategoryIds',
      instanceId: 'InstanceId',
      instructionJson: 'InstructionJson',
      labelsJson: 'LabelsJson',
      model: 'Model',
      modelConfig: 'ModelConfig',
      prompt: 'Prompt',
      promptJson: 'PromptJson',
      scenario: 'Scenario',
      scriptId: 'ScriptId',
      variablesJson: 'VariablesJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileTemplateId: 'string',
      appIp: 'string',
      description: 'string',
      faqCategoryIds: 'string',
      instanceId: 'string',
      instructionJson: 'string',
      labelsJson: 'string',
      model: 'string',
      modelConfig: 'string',
      prompt: 'string',
      promptJson: 'string',
      scenario: 'string',
      scriptId: 'string',
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

