// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomAgentResponseBodyDataCallbackConfig extends $dara.Model {
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

export class DescribeCustomAgentResponseBodyDataExecutionConfig extends $dara.Model {
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
   * Specifies whether to skip the web report rendering confirmation.
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
  accessType?: string;
  kbUuid?: string;
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
  dbId?: string;
  instanceId?: string;
  knowledgeUuid?: string;
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
   * The cron expression for timed scheduling.
   * 
   * @example
   * 0 0 0 ? * 1-7
   */
  cronExpression?: string;
  /**
   * @remarks
   * The query for the periodic task.
   * 
   * @example
   * Analyze this data and provide a brief report
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
   * The Alibaba Cloud primary account ID.
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
   *     "Database" : "TestTable******.xlsx",
   *     "Tables" : [ "Sheet1" ],
   *     "TableIds" : [ "******" ],
   *     "RegionId" : "cn-hangzhou"
   *   }
   * }
   */
  dataJson?: string;
  defaultAgent?: number;
  /**
   * @remarks
   * The description of the custom agent.
   * 
   * @example
   * AgentTestDescription
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
   * The instruction.
   * 
   * @example
   * Analysis framework:
   * 1. Monitor core metrics (GMV, order volume, UV, conversion rate) by day, week, and month dimensions, and analyze trends and year-over-year/month-over-month fluctuations;
   * 2. Segment by new/existing customers, channels, and regions to identify growth sources and weaknesses;
   * 3. Conduct funnel analysis based on user behavior paths (browse → add to cart → payment) to locate drop-off points;
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
   * 1. GMV (Gross Merchandise Volume) refers to the total order amount, including paid and unpaid orders;
   * 2. Order volume is the number of valid orders placed per day;
   * 3. UV (Unique Visitors) refers to the deduplicated number of users who visit the website or app;
   * 4. Conversion rate = paid orders / UV, reflecting traffic conversion efficiency;
   */
  knowledge?: string;
  knowledgeConfigList?: DescribeCustomAgentResponseBodyDataKnowledgeConfigList[];
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
   * The name of the custom agent.
   * 
   * @example
   * AgentTestName
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
   * The publish time.
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
   * The text report requires all numbers to be converted from Arabic numerals to Chinese numerals
   */
  textReportConfig?: string;
  /**
   * @remarks
   * The web report format.
   * 
   * @example
   * The web report requires all numbers to be converted from Arabic numerals to Chinese numerals
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
      region: 'Region',
      relatedSessionId: 'RelatedSessionId',
      releaseTime: 'ReleaseTime',
      scheduleTaskConfig: 'ScheduleTaskConfig',
      status: 'Status',
      textReportConfig: 'TextReportConfig',
      webReportConfig: 'WebReportConfig',
      webReportTheme: 'WebReportTheme',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      region: 'string',
      relatedSessionId: 'string',
      releaseTime: 'string',
      scheduleTaskConfig: DescribeCustomAgentResponseBodyDataScheduleTaskConfig,
      status: 'string',
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
    if(Array.isArray(this.knowledgeSemanticConfigList)) {
      $dara.Model.validateArray(this.knowledgeSemanticConfigList);
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
   * The error message returned if the request failed.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.                                 
   * - **false**: The request failed.
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

