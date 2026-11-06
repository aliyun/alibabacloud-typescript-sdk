// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of callable sub-agent references. For non-empty references, the referenced sub-agents must be visible. The agent cannot reference itself or form a call loop. Omit this parameter if no modification is required. Do not use an empty array to express general retention or clearing semantics.
   * 
   * @example
   * [{"Name":"data-analysis"}]
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
   * The agent definition version used for concurrency control. We recommend that you explicitly specify the AgentVersion just obtained from GetAgent for each call. The update is rejected if the version does not match the current version on the server. To ensure compatibility with different deployment versions, do not rely on the server-side processing when this parameter is omitted.
   * 
   * @example
   * 2
   */
  expectedVersion?: number;
  /**
   * @remarks
   * The list of expert suite references. If omitted, existing references are retained. An explicit empty array clears the references. For official suites, specify only Source=OFFICIAL and SuiteId. Version, VersionSelector, or client artifact fields are not accepted. For custom suites, use SuiteId, and you can explicitly specify an existing integer Version.
   * 
   * @example
   * [{"SuiteId":"suite_example","Version":3}]
   */
  expertSuitesShrink?: string;
  /**
   * @remarks
   * The extended metadata. If omitted, existing metadata is retained. If passed, business metadata is updated, and the server retains protected system metadata.
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
   * The name of the agent to be updated. Use the Name returned by GetAgent. This field is used to locate the target agent and cannot be used to rename the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to publish the agent immediately after the update. Valid values: true: saves a new draft version first and then requests publishing. false or omitted: saves only the definition. Saving and publishing are not atomic operations. If the operation fails, call GetAgent to read the current version back before retrying, to avoid blindly repeating the update.
   * 
   * @example
   * false
   */
  publishImmediately?: boolean;
  /**
   * @remarks
   * The list of skill references. Omit this parameter if no modification is required. Do not use an empty array to indicate retention or clearing. For official skills, specify only Source=OFFICIAL and SkillId. Name, Version, VersionSelector, or client artifact fields are not accepted. For custom skills, specify Name, and you can explicitly specify an existing integer Version.
   * 
   * @example
   * [{"Source":"OFFICIAL","SkillId":"dataworks-semantic"}]
   */
  skillsShrink?: string;
  /**
   * @remarks
   * The system prompt.
   * 
   * @example
   * You are an excellent ETL engineer
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The list of tool references. Omit this parameter if no modification is required. The current new backend retains existing tools even if an empty array is passed. A non-empty array replaces the references. Each item must include Kind and the corresponding configuration, and cannot include only Name. Replace the MCP service and tool names in the example with actual values available to the current identity.
   * 
   * @example
   * [{"Kind":"MCP_TOOLSET","McpServerName":"mcp-a","McpItems":["only-this-tool"]}]
   */
  toolsShrink?: string;
  /**
   * @remarks
   * The visibility level. Valid values: <br>`TENANT`: visible within the account. <br>`PROJECT`: visible to specified projects. <br>`USER`: visible to specified users.
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The visibility scope. The corresponding field is used based on the Visibility parameter.
   */
  visibilityScopeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      callableAgentsShrink: 'CallableAgents',
      description: 'Description',
      displayName: 'DisplayName',
      expectedVersion: 'ExpectedVersion',
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
      expectedVersion: 'number',
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

