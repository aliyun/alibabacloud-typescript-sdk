// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of sub-agents that can be called by this agent.
   * 
   * @example
   * -
   */
  callableAgentsShrink?: string;
  /**
   * @remarks
   * The description of the agent.
   * 
   * @example
   * Data analytics assistant
   */
  description?: string;
  /**
   * @remarks
   * The display name of the agent.
   * 
   * @example
   * My Assistant
   */
  displayName?: string;
  /**
   * @remarks
   * The released expert suites bound to the agent. For personal or enterprise suites, use SuiteId and optionally specify a fixed Version or VersionSelector. For official suites, you must explicitly set Source to OFFICIAL and specify the SuiteId from the official catalog. Do not specify Version or VersionSelector. If this parameter is not specified, an empty list is created, and official suites are not loaded by default.
   * 
   * @example
   * [{"Source":"OFFICIAL","SuiteId":"dataworks-data-analysis-extension"},{"SuiteId":"suite_example","Version":1}]
   */
  expertSuitesShrink?: string;
  /**
   * @remarks
   * The extended metadata as key-value pairs.
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
   * The name of the agent. It must be unique within the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to publish the agent immediately after creation. Valid values:
   * - true: Publishes the created version.
   * - false or omitted: Retains the original behavior of creating a draft only.
   * Saving and publishing are not atomic operations. If publishing fails, the draft may already exist. Query the agent before retrying to avoid duplicate creation.
   * 
   * @example
   * false
   */
  publishImmediately?: boolean;
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
   * The visibility level. Valid values:<br>
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
   * The visibility scope. The corresponding fields are used based on the Visibility parameter.
   */
  visibilityScopeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      callableAgentsShrink: 'CallableAgents',
      description: 'Description',
      displayName: 'DisplayName',
      expertSuitesShrink: 'ExpertSuites',
      metadataShrink: 'Metadata',
      modelShrink: 'Model',
      name: 'Name',
      publishImmediately: 'PublishImmediately',
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
      expertSuitesShrink: 'string',
      metadataShrink: 'string',
      modelShrink: 'string',
      name: 'string',
      publishImmediately: 'boolean',
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

