// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentRequestCallbackConfig extends $dara.Model {
  callbackArgs?: string;
  callbackPrompt?: string;
  callbackTime?: number;
  toolId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      callbackArgs: 'CallbackArgs',
      callbackPrompt: 'CallbackPrompt',
      callbackTime: 'CallbackTime',
      toolId: 'ToolId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackArgs: 'string',
      callbackPrompt: 'string',
      callbackTime: 'number',
      toolId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomAgentRequestExecutionConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable user inquiries during the process.
   * 
   * @example
   * true
   */
  skipAskHuman?: boolean;
  /**
   * @remarks
   * Specifies whether to skip the plan confirmation step.
   * 
   * @example
   * true
   */
  skipPlan?: boolean;
  /**
   * @remarks
   * Specifies whether to skip all SQL confirmations.
   * 
   * @example
   * true
   */
  skipSqlConfirm?: boolean;
  /**
   * @remarks
   * Specifies whether to skip the web report rendering confirmation.
   * 
   * @example
   * true
   */
  skipWebReportConfirm?: boolean;
  static names(): { [key: string]: string } {
    return {
      skipAskHuman: 'SkipAskHuman',
      skipPlan: 'SkipPlan',
      skipSqlConfirm: 'SkipSqlConfirm',
      skipWebReportConfirm: 'SkipWebReportConfirm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipAskHuman: 'boolean',
      skipPlan: 'boolean',
      skipSqlConfirm: 'boolean',
      skipWebReportConfirm: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomAgentRequestKnowledgeConfigList extends $dara.Model {
  /**
   * @remarks
   * The access type.
   * 
   * @example
   * mcp
   */
  accessType?: string;
  kbUuid?: string;
  /**
   * @remarks
   * The ID of the MCP Server.
   * 
   * @example
   * nhdpt9adf6ac**********ca
   */
  mcpServerId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      kbUuid: 'KbUuid',
      mcpServerId: 'McpServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      kbUuid: 'string',
      mcpServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomAgentRequestScheduleTaskConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression for the time-based scheduling.
   * 
   * @example
   * 0 0 0 ? * 1-7
   */
  cronExpression?: string;
  /**
   * @remarks
   * The query for the scheduled task.
   * 
   * @example
   * Analyze this data and provide a brief report.
   */
  query?: string;
  /**
   * @remarks
   * The ID of the referenced historical session.
   * 
   * @example
   * 4m24*****mg7j2v
   */
  relatedSessionId?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      query: 'Query',
      relatedSessionId: 'RelatedSessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      query: 'string',
      relatedSessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomAgentRequest extends $dara.Model {
  callbackConfig?: CreateCustomAgentRequestCallbackConfig;
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
  executionConfig?: CreateCustomAgentRequestExecutionConfig;
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
  knowledgeConfigList?: CreateCustomAgentRequestKnowledgeConfigList[];
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
  scheduleTaskConfig?: CreateCustomAgentRequestScheduleTaskConfig;
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
      callbackConfig: 'CallbackConfig',
      DMSUnit: 'DMSUnit',
      dataJson: 'DataJson',
      description: 'Description',
      executionConfig: 'ExecutionConfig',
      instruction: 'Instruction',
      knowledge: 'Knowledge',
      knowledgeConfigList: 'KnowledgeConfigList',
      name: 'Name',
      relatedSessionId: 'RelatedSessionId',
      scheduleTaskConfig: 'ScheduleTaskConfig',
      textReportConfig: 'TextReportConfig',
      webReportConfig: 'WebReportConfig',
      webReportTheme: 'WebReportTheme',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackConfig: CreateCustomAgentRequestCallbackConfig,
      DMSUnit: 'string',
      dataJson: 'string',
      description: 'string',
      executionConfig: CreateCustomAgentRequestExecutionConfig,
      instruction: 'string',
      knowledge: 'string',
      knowledgeConfigList: { 'type': 'array', 'itemType': CreateCustomAgentRequestKnowledgeConfigList },
      name: 'string',
      relatedSessionId: 'string',
      scheduleTaskConfig: CreateCustomAgentRequestScheduleTaskConfig,
      textReportConfig: 'string',
      webReportConfig: 'string',
      webReportTheme: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.callbackConfig && typeof (this.callbackConfig as any).validate === 'function') {
      (this.callbackConfig as any).validate();
    }
    if(this.executionConfig && typeof (this.executionConfig as any).validate === 'function') {
      (this.executionConfig as any).validate();
    }
    if(Array.isArray(this.knowledgeConfigList)) {
      $dara.Model.validateArray(this.knowledgeConfigList);
    }
    if(this.scheduleTaskConfig && typeof (this.scheduleTaskConfig as any).validate === 'function') {
      (this.scheduleTaskConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

