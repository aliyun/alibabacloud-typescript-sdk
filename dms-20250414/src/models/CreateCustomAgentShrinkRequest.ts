// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentShrinkRequest extends $dara.Model {
  callbackConfigShrink?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The specified data scope, in **JSON string format**.
   * 
   * @example
   * {
   */
  dataJson?: string;
  /**
   * @remarks
   * The description of the custom agent.
   * 
   * @example
   * AgentTestDescription.
   */
  description?: string;
  /**
   * @remarks
   * The execution configuration.
   */
  executionConfigShrink?: string;
  /**
   * @remarks
   * The instruction.
   * 
   * @example
   * Core metric definitions:
   */
  instruction?: string;
  /**
   * @remarks
   * The knowledge.
   * 
   * @example
   * Core metric definitions:
   */
  knowledge?: string;
  /**
   * @remarks
   * The external knowledge base configurations.
   */
  knowledgeConfigListShrink?: string;
  /**
   * @remarks
   * The name of the custom agent.
   * 
   * @example
   * AgentTestName.
   */
  name?: string;
  relatedSessionId?: string;
  /**
   * @remarks
   * The scheduled task configuration.
   */
  scheduleTaskConfigShrink?: string;
  /**
   * @remarks
   * The text report format.
   * 
   * @example
   * The text report requires all numbers to be written in Chinese characters instead of Arabic numerals.
   */
  textReportConfig?: string;
  /**
   * @remarks
   * The web report format.
   * 
   * @example
   * The web report requires all numbers to be written in Chinese characters instead of Arabic numerals.
   */
  webReportConfig?: string;
  webReportTheme?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 56kv1pvl9uvt9**********bb
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      callbackConfigShrink: 'CallbackConfig',
      DMSUnit: 'DMSUnit',
      dataJson: 'DataJson',
      description: 'Description',
      executionConfigShrink: 'ExecutionConfig',
      instruction: 'Instruction',
      knowledge: 'Knowledge',
      knowledgeConfigListShrink: 'KnowledgeConfigList',
      name: 'Name',
      relatedSessionId: 'RelatedSessionId',
      scheduleTaskConfigShrink: 'ScheduleTaskConfig',
      textReportConfig: 'TextReportConfig',
      webReportConfig: 'WebReportConfig',
      webReportTheme: 'WebReportTheme',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackConfigShrink: 'string',
      DMSUnit: 'string',
      dataJson: 'string',
      description: 'string',
      executionConfigShrink: 'string',
      instruction: 'string',
      knowledge: 'string',
      knowledgeConfigListShrink: 'string',
      name: 'string',
      relatedSessionId: 'string',
      scheduleTaskConfigShrink: 'string',
      textReportConfig: 'string',
      webReportConfig: 'string',
      webReportTheme: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

