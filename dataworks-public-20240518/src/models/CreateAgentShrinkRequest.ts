// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of child Agents that can be called by this Agent.
   * 
   * @example
   * -
   */
  callableAgentsShrink?: string;
  /**
   * @remarks
   * The description of the Agent.
   * 
   * @example
   * Data analytics assistant
   */
  description?: string;
  /**
   * @remarks
   * The display name of the Agent.
   * 
   * @example
   * MyAssistant.
   */
  displayName?: string;
  /**
   * @remarks
   * The extended metadata (key-value pairs).
   * 
   * @example
   * {}
   */
  metadataShrink?: string;
  /**
   * @remarks
   * The model configuration.
   * 
   * @example
   * {
   *           "modelName": "dataworks-public-bailian/qwen-max"
   *         }
   */
  modelShrink?: string;
  /**
   * @remarks
   * The Agent name, which must be unique within the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * The list of skills.
   * 
   * @example
   * -
   */
  skillsShrink?: string;
  /**
   * @remarks
   * The system prompt.
   * 
   * @example
   * You are a data analytics assistant.
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The list of tools.
   * 
   * @example
   * -
   */
  toolsShrink?: string;
  /**
   * @remarks
   * The visibility level.<br>
   * `TENANT`: Visible within the account.<br>
   * `PROJECT`: Visible to specified projects.<br>
   * `USER`: Visible to specified users.
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The visibility scope. The corresponding field is determined by the Visibility parameter.
   */
  visibilityScopeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      callableAgentsShrink: 'CallableAgents',
      description: 'Description',
      displayName: 'DisplayName',
      metadataShrink: 'Metadata',
      modelShrink: 'Model',
      name: 'Name',
      skillsShrink: 'Skills',
      systemPrompt: 'SystemPrompt',
      toolsShrink: 'Tools',
      visibility: 'Visibility',
      visibilityScopeShrink: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callableAgentsShrink: 'string',
      description: 'string',
      displayName: 'string',
      metadataShrink: 'string',
      modelShrink: 'string',
      name: 'string',
      skillsShrink: 'string',
      systemPrompt: 'string',
      toolsShrink: 'string',
      visibility: 'string',
      visibilityScopeShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

