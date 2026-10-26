// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of child agents that can be called by this agent.
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
   * Agent 绑定的已发布专家套件。个人或企业套件使用 SuiteId，可选 Version；官方套件必须显式指定 Source=OFFICIAL 和官方目录中的 SuiteId，不传 Version。未传时创建为空，不会默认加载所有官方套件。
   * 
   * @example
   * [{"Source":"OFFICIAL","SuiteId":"dataworks-data-analysis-extension"},{"SuiteId":"suite_example","Version":1}]
   */
  expertSuitesShrink?: string;
  /**
   * @remarks
   * The extended metadata in key-value pairs.
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
   * The name of the agent. The name must be unique within the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  name?: string;
  /**
   * @remarks
   * 是否在创建 Agent 后立即发布。true 发布创建的版本；false 或省略保持原有仅创建草稿行为。保存与发布不是原子操作，发布失败时草稿可能已存在；重试前应先查询 Agent，避免重复创建。
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
   * You are a data analytics assistant
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
   * The visibility scope. The corresponding field is used based on the visibility level.
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

