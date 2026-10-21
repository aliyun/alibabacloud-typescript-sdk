// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomAgentResponseBodyDataCallbackConfig extends $dara.Model {
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

export class DescribeCustomAgentResponseBodyDataExecutionConfig extends $dara.Model {
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
   * false
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
   * Specifies whether to skip the confirmation for drawing a web report.
   * 
   * @example
   * false
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

export class DescribeCustomAgentResponseBodyDataKnowledgeConfigList extends $dara.Model {
  /**
   * @remarks
   * The access type. Valid values:
   * - mcp: MCP access
   * - dms_kb: DMS knowledge base access
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
   * The MCP server ID.
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

export class DescribeCustomAgentResponseBodyDataKnowledgeSemanticConfigList extends $dara.Model {
  /**
   * @remarks
   * The DMS database ID.
   * 
   * @example
   * 71991648
   */
  dbId?: string;
  /**
   * @remarks
   * The DMS instance ID.
   * 
   * @example
   * 2190779
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
   * - sql_template: SQL template
   * - ossie_model: Ossie semantic view
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

export class DescribeCustomAgentResponseBodyDataScheduleTaskConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression for time-based periodic scheduling.
   * 
   * @example
   * 0 0 0 ? * 1-7
   */
  cronExpression?: string;
  /**
   * @remarks
   * The question for the periodic task.
   * 
   * @example
   * Analyze the data and provide the report
   */
  query?: string;
  /**
   * @remarks
   * The referenced historical session ID.
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

export class DescribeCustomAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The custom agent type. Valid values:
   * - Default: system-built-in custom agent
   * - Common: common custom agent
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
  callbackConfig?: DescribeCustomAgentResponseBodyDataCallbackConfig;
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
   * The custom agent ID.
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
   *     "Database" : "test-table******.xlsx",
   *     "Tables" : [ "Sheet1" ],
   *     "TableIds" : [ "******" ],
   *     "RegionId" : "cn-hangzhou"
   *   }
   * }
   */
  dataJson?: string;
  /**
   * @remarks
   * Specifies whether the agent is displayed by default.
   * 
   * @example
   * 1
   */
  defaultAgent?: number;
  /**
   * @remarks
   * The custom agent description.
   * 
   * @example
   * Description for the test agent
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
  executionConfig?: DescribeCustomAgentResponseBodyDataExecutionConfig;
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
   * The instructions.
   * 
   * @example
   * Analytical framework:
   * 
   * Monitor core metrics (GMV, order volume, UV, and conversion rate) on a daily, weekly, and monthly basis to analyze trends and identify year-over-year and month-over-month fluctuations.
   * Segment by new vs. returning customers, channels, and regions to identify growth drivers and areas of weakness.
   * Conduct funnel analysis based on user behavior paths (browse → add to cart → purchase) to pinpoint stages where user drop-off occurs.
   */
  instruction?: string;
  /**
   * @remarks
   * Specifies whether a periodic task is configured.
   * 
   * @example
   * true
   */
  isScheduleTask?: boolean;
  /**
   * @remarks
   * The knowledge.
   * 
   * @example
   * Core metric definitions:
   * 
   * GMV (Gross Merchandise Volume) refers to the total sum of order amounts, including both paid and unpaid orders.
   * Order volume refers to the number of valid orders placed per day.
   * UV (Unique Visitors) refers to the deduplicated number of users who visit the website or app.
   * Conversion rate = paid orders / UV, reflecting the efficiency of traffic conversion.
   */
  knowledge?: string;
  /**
   * @remarks
   * The external knowledge bases.
   */
  knowledgeConfigList?: DescribeCustomAgentResponseBodyDataKnowledgeConfigList[];
  /**
   * @remarks
   * The knowledge semantic configuration list.
   */
  knowledgeSemanticConfigList?: DescribeCustomAgentResponseBodyDataKnowledgeSemanticConfigList[];
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
   * The custom agent name.
   * 
   * @example
   * Test agent name
   */
  name?: string;
  /**
   * @remarks
   * The next run time of the periodic task.
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
   * The list of recommended questions. You can configure up to 10 recommended questions.
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
   * The referenced historical session ID.
   * 
   * @example
   * 5xyz...
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
   * The periodic task configuration.
   */
  scheduleTaskConfig?: DescribeCustomAgentResponseBodyDataScheduleTaskConfig;
  /**
   * @remarks
   * The custom agent status.
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
   * The text report requires that all numbers be written in Chinese numerals rather than Arabic numerals.
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
   * The web report requires that all numbers be written in Chinese numerals rather than Arabic numerals.
   */
  webReportConfig?: string;
  /**
   * @remarks
   * The web report theme. Valid values:
   * - default: default
   * - journal: journal
   * - legacy: classic
   * - neobrutalism: stylized
   * - infographic: infographic
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
      defaultAgent: 'DefaultAgent',
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
      callbackConfig: DescribeCustomAgentResponseBodyDataCallbackConfig,
      creatorUserName: 'string',
      customAgentId: 'string',
      DMSUnit: 'string',
      dataJson: 'string',
      defaultAgent: 'number',
      description: 'string',
      dmsUnit: 'string',
      executionConfig: DescribeCustomAgentResponseBodyDataExecutionConfig,
      gmtCreated: 'string',
      gmtModified: 'string',
      instruction: 'string',
      isScheduleTask: 'boolean',
      knowledge: 'string',
      knowledgeConfigList: { 'type': 'array', 'itemType': DescribeCustomAgentResponseBodyDataKnowledgeConfigList },
      knowledgeSemanticConfigList: { 'type': 'array', 'itemType': DescribeCustomAgentResponseBodyDataKnowledgeSemanticConfigList },
      modifier: 'string',
      modifierUserName: 'string',
      name: 'string',
      nextRuntime: 'number',
      offlineTime: 'string',
      recommendQuestionList: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
      relatedSessionId: 'string',
      releaseTime: 'string',
      scheduleTaskConfig: DescribeCustomAgentResponseBodyDataScheduleTaskConfig,
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

export class DescribeCustomAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: DescribeCustomAgentResponseBodyData;
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
   * Specifies whether the request is successful. Valid values:
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
      data: DescribeCustomAgentResponseBodyData,
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

