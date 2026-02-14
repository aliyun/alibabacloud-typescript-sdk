// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  dataJson?: string;
  description?: string;
  executionConfigShrink?: string;
  instruction?: string;
  knowledge?: string;
  knowledgeConfigListShrink?: string;
  name?: string;
  scheduleTaskConfigShrink?: string;
  textReportConfig?: string;
  webReportConfig?: string;
  /**
   * @example
   * 56kv1pvl9uvt9**********bb
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      DMSUnit: 'DMSUnit',
      dataJson: 'DataJson',
      description: 'Description',
      executionConfigShrink: 'ExecutionConfig',
      instruction: 'Instruction',
      knowledge: 'Knowledge',
      knowledgeConfigListShrink: 'KnowledgeConfigList',
      name: 'Name',
      scheduleTaskConfigShrink: 'ScheduleTaskConfig',
      textReportConfig: 'TextReportConfig',
      webReportConfig: 'WebReportConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      DMSUnit: 'string',
      dataJson: 'string',
      description: 'string',
      executionConfigShrink: 'string',
      instruction: 'string',
      knowledge: 'string',
      knowledgeConfigListShrink: 'string',
      name: 'string',
      scheduleTaskConfigShrink: 'string',
      textReportConfig: 'string',
      webReportConfig: 'string',
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

