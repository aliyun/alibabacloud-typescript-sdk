// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomAgentResponseBodyDataCallbackConfig extends $dara.Model {
  /**
   * @remarks
   * The parameters to invoke callback tool calling.
   * 
   * @example
   * {"ID":"test"}
   */
  callbackArgs?: string;
  /**
   * @remarks
   * The prompt for generating parameters to invoke callback tool calling.
   * 
   * @example
   * send web report to 123456@163.com
   */
  callbackPrompt?: string;
  /**
   * @remarks
   * The timing to invoke callback tool calling.
   * 
   * @example
   * 0
   */
  callbackTime?: number;
  /**
   * @remarks
   * The callback tool identifier.
   * 
   * @example
   * Mcp serverId (6te...g7a)
   */
  toolId?: string;
  /**
   * @remarks
   * The callback tool type.
   * 
   * @example
   * Mcp
   */
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

export class ModifyCustomAgentResponseBodyDataExecutionConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to prohibit appending data sources in a session.
   * 
   * @example
   * true
   */
  forbiddenAppendDataSource?: boolean;
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
   * Specifies whether to skip the confirmation for generating a web report.
   * 
   * @example
   * true
   */
  skipWebReportConfirm?: boolean;
  static names(): { [key: string]: string } {
    return {
      forbiddenAppendDataSource: 'ForbiddenAppendDataSource',
      skipAskHuman: 'SkipAskHuman',
      skipPlan: 'SkipPlan',
      skipSqlConfirm: 'SkipSqlConfirm',
      skipWebReportConfirm: 'SkipWebReportConfirm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenAppendDataSource: 'boolean',
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

export class ModifyCustomAgentResponseBodyDataKnowledgeConfigList extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * - mcp: Access through MCP.
   * - dms_kb: Access through the DMS knowledge base.
   * 
   * @example
   * mcp
   */
  accessType?: string;
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * @example
   * kb-HZ-6anhdzx7hddf9*******obx
   */
  kbUuid?: string;
  /**
   * @remarks
   * The ID of the MCP server.
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

export class ModifyCustomAgentResponseBodyDataKnowledgeSemanticConfigList extends $dara.Model {
  /**
   * @remarks
   * The DMS database ID.
   * 
   * @example
   * 69305251
   */
  dbId?: string;
  /**
   * @remarks
   * The DMS instance ID.
   * 
   * @example
   * 2844854
   */
  instanceId?: string;
  /**
   * @remarks
   * The knowledge UUID.
   * 
   * @example
   * 7ca8f50d78234******e87
   */
  knowledgeUuid?: string;
  /**
   * @remarks
   * The knowledge semantic type. Valid values:
   * - sql_template: SQL template.
   * - ossie_model: Ossie semantic view.
   * 
   * @example
   * sql_template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      instanceId: 'InstanceId',
      knowledgeUuid: 'KnowledgeUuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      instanceId: 'string',
      knowledgeUuid: 'string',
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

export class ModifyCustomAgentResponseBodyDataScheduleTaskConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression for time-based scheduling.
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
   * Analyze this data and provide a brief report
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

export class ModifyCustomAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The custom agent type. Valid values:
   * - Default: The system-built-in custom agent. Each workspace can have at most one Default type, and it cannot be deleted.
   * - Common: A common custom agent.
   * 
   * @example
   * Common
   */
  agentType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud main account.
   * 
   * @example
   * 16738266********
   */
  aliyunParentUid?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 20372822********
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The callback feature configuration.
   */
  callbackConfig?: ModifyCustomAgentResponseBodyDataCallbackConfig;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * HaoY*****
   */
  creatorUserName?: string;
  /**
   * @remarks
   * The ID of the custom agent.
   * 
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
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
   * The specified data scope in JSON string format.
   * 
   * @example
   * {
   *   "tableFlag" : true,
   *   "scope" : "personal",
   *   "personal" : {
   *     "DataSourceType" : "remote_data_center",
   *     "FileId" : "f-5qlrwaw10********s3gpw1z",
   *     "Database" : "Test table******.xlsx",
   *     "Tables" : [ "Sheet1" ],
   *     "TableIds" : [ "******" ],
   *     "RegionId" : "cn-hangzhou"
   *   }
   * }
   */
  dataJson?: string;
  /**
   * @remarks
   * The description of the custom agent.
   * 
   * @example
   * Test agent description
   */
  description?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  dmsUnit?: string;
  /**
   * @remarks
   * The execution configuration.
   */
  executionConfig?: ModifyCustomAgentResponseBodyDataExecutionConfig;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The instruction.
   * 
   * @example
   * Analysis framework:
   * 1. Monitor core metrics (GMV, order volume, UV, conversion rate) on a daily, weekly, and monthly basis, and analyze trend changes and year-over-year or month-over-month fluctuations.
   * 2. Segment by new and existing customers, channels, and regions to identify growth drivers and weaknesses.
   * 3. Conduct funnel analysis based on user behavior paths (browse → add to cart → pay) to locate churn points
   */
  instruction?: string;
  /**
   * @remarks
   * Indicates whether a scheduled task is configured.
   * 
   * @example
   * false
   */
  isScheduleTask?: boolean;
  /**
   * @remarks
   * The knowledge.
   * 
   * @example
   * Core metric definitions:
   * 1. GMV (Gross Merchandise Volume) refers to the total order amount, including both successfully paid and unpaid orders.
   * 2. Order volume is the number of valid orders placed per day.
   * 3. UV (Unique Visitors) refers to the number of deduplicated users who visit the website or app.
   * 4. Conversion rate = Number of paid orders / UV, reflecting the traffic conversion efficiency
   */
  knowledge?: string;
  /**
   * @remarks
   * The external knowledge bases.
   */
  knowledgeConfigList?: ModifyCustomAgentResponseBodyDataKnowledgeConfigList[];
  /**
   * @remarks
   * The knowledge semantic configuration list.
   */
  knowledgeSemanticConfigList?: ModifyCustomAgentResponseBodyDataKnowledgeSemanticConfigList[];
  /**
   * @remarks
   * The modifier.
   * 
   * @example
   * 20372822********
   */
  modifier?: string;
  /**
   * @remarks
   * The name of the modifier.
   * 
   * @example
   * HaoY*****
   */
  modifierUserName?: string;
  /**
   * @remarks
   * The name of the custom agent.
   * 
   * @example
   * Test agent name
   */
  name?: string;
  /**
   * @remarks
   * The next run time of the scheduled task.
   * - Timestamp format.
   * 
   * @example
   * 1767715200
   */
  nextRuntime?: number;
  /**
   * @remarks
   * The offline time.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  offlineTime?: string;
  /**
   * @remarks
   * The list of recommended questions.
   * - You can configure up to 10 recommended questions.
   */
  recommendQuestionList?: string[];
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the referenced historical session.
   * 
   * @example
   * 99crainsjnv*******vynid
   */
  relatedSessionId?: string;
  /**
   * @remarks
   * The release time.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  releaseTime?: string;
  /**
   * @remarks
   * The scheduled task configuration.
   */
  scheduleTaskConfig?: ModifyCustomAgentResponseBodyDataScheduleTaskConfig;
  /**
   * @remarks
   * The status of the custom agent.
   * 
   * @example
   * RELEASED
   */
  status?: string;
  /**
   * @remarks
   * The text report format.
   * 
   * @example
   * The text report requires that all numbers be spelled out in words instead of using Arabic numerals
   */
  textReportConfig?: string;
  /**
   * @remarks
   * The list of user-specified skills.
   */
  userSpecifiedSkillList?: string[];
  /**
   * @remarks
   * The web report format.
   * 
   * @example
   * The web report requires that all numbers be spelled out in words instead of using Arabic numerals
   */
  webReportConfig?: string;
  /**
   * @remarks
   * The web report theme. Valid values:
   * - default: Default.
   * - journal: Journal.
   * - legacy: Legacy.
   * - neobrutalism: Neobrutalism.
   * - infographic: Infographic.
   * 
   * @example
   * default
   */
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
      agentType: 'AgentType',
      aliyunParentUid: 'AliyunParentUid',
      aliyunUid: 'AliyunUid',
      callbackConfig: 'CallbackConfig',
      creatorUserName: 'CreatorUserName',
      customAgentId: 'CustomAgentId',
      DMSUnit: 'DMSUnit',
      dataJson: 'DataJson',
      description: 'Description',
      dmsUnit: 'DmsUnit',
      executionConfig: 'ExecutionConfig',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      instruction: 'Instruction',
      isScheduleTask: 'IsScheduleTask',
      knowledge: 'Knowledge',
      knowledgeConfigList: 'KnowledgeConfigList',
      knowledgeSemanticConfigList: 'KnowledgeSemanticConfigList',
      modifier: 'Modifier',
      modifierUserName: 'ModifierUserName',
      name: 'Name',
      nextRuntime: 'NextRuntime',
      offlineTime: 'OfflineTime',
      recommendQuestionList: 'RecommendQuestionList',
      region: 'Region',
      relatedSessionId: 'RelatedSessionId',
      releaseTime: 'ReleaseTime',
      scheduleTaskConfig: 'ScheduleTaskConfig',
      status: 'Status',
      textReportConfig: 'TextReportConfig',
      userSpecifiedSkillList: 'UserSpecifiedSkillList',
      webReportConfig: 'WebReportConfig',
      webReportTheme: 'WebReportTheme',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      aliyunParentUid: 'string',
      aliyunUid: 'string',
      callbackConfig: ModifyCustomAgentResponseBodyDataCallbackConfig,
      creatorUserName: 'string',
      customAgentId: 'string',
      DMSUnit: 'string',
      dataJson: 'string',
      description: 'string',
      dmsUnit: 'string',
      executionConfig: ModifyCustomAgentResponseBodyDataExecutionConfig,
      gmtCreated: 'string',
      gmtModified: 'string',
      instruction: 'string',
      isScheduleTask: 'boolean',
      knowledge: 'string',
      knowledgeConfigList: { 'type': 'array', 'itemType': ModifyCustomAgentResponseBodyDataKnowledgeConfigList },
      knowledgeSemanticConfigList: { 'type': 'array', 'itemType': ModifyCustomAgentResponseBodyDataKnowledgeSemanticConfigList },
      modifier: 'string',
      modifierUserName: 'string',
      name: 'string',
      nextRuntime: 'number',
      offlineTime: 'string',
      recommendQuestionList: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
      relatedSessionId: 'string',
      releaseTime: 'string',
      scheduleTaskConfig: ModifyCustomAgentResponseBodyDataScheduleTaskConfig,
      status: 'string',
      textReportConfig: 'string',
      userSpecifiedSkillList: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.knowledgeSemanticConfigList)) {
      $dara.Model.validateArray(this.knowledgeSemanticConfigList);
    }
    if(Array.isArray(this.recommendQuestionList)) {
      $dara.Model.validateArray(this.recommendQuestionList);
    }
    if(this.scheduleTaskConfig && typeof (this.scheduleTaskConfig as any).validate === 'function') {
      (this.scheduleTaskConfig as any).validate();
    }
    if(Array.isArray(this.userSpecifiedSkillList)) {
      $dara.Model.validateArray(this.userSpecifiedSkillList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned struct.
   */
  data?: ModifyCustomAgentResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyCustomAgentResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

