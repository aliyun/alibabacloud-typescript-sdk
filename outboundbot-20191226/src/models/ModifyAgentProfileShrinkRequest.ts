// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAgentProfileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 37ca3ca1ac4b4e57adf3da5b5d939d04
   */
  agentProfileId?: string;
  /**
   * @example
   * []
   */
  apiPluginJson?: string;
  description?: string;
  faqCategoryIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  /**
   * @example
   * [{"type":"TransferToAgent","instructions":[{"code":"Transfer0","skillGroupId":"123","skillGroupName":"123"}],"timeoutEnable":false},{"type":"CollectNumber","instructions":[]}]
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
   * {}
   */
  modelConfig?: string;
  prompt?: string;
  promptJson?: string;
  scenario?: string;
  variablesJson?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileId: 'AgentProfileId',
      apiPluginJson: 'ApiPluginJson',
      description: 'Description',
      faqCategoryIdsShrink: 'FaqCategoryIds',
      instanceId: 'InstanceId',
      instructionJson: 'InstructionJson',
      labelsJson: 'LabelsJson',
      model: 'Model',
      modelConfig: 'ModelConfig',
      prompt: 'Prompt',
      promptJson: 'PromptJson',
      scenario: 'Scenario',
      variablesJson: 'VariablesJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
      apiPluginJson: 'string',
      description: 'string',
      faqCategoryIdsShrink: 'string',
      instanceId: 'string',
      instructionJson: 'string',
      labelsJson: 'string',
      model: 'string',
      modelConfig: 'string',
      prompt: 'string',
      promptJson: 'string',
      scenario: 'string',
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

