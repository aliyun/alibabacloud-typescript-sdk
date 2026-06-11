// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomAgentResponseBodyDataCallbackConfig extends $dara.Model {
  /**
   * @remarks
   * The callback arguments.
   */
  callbackArgs?: string;
  /**
   * @remarks
   * The callback prompt.
   */
  callbackPrompt?: string;
  /**
   * @remarks
   * The callback time.
   */
  callbackTime?: number;
  /**
   * @remarks
   * The tool ID.
   */
  toolId?: string;
  /**
   * @remarks
   * The callback type.
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
   * Specifies whether to disable prompts that require human intervention.
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
   * Specifies whether to skip confirmation before a web report is generated.
   * 
   * @example
   * false
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

export class DescribeCustomAgentResponseBodyDataKnowledgeConfigList extends $dara.Model {
  /**
   * @remarks
   * The access type.
   */
  accessType?: string;
  /**
   * @remarks
   * The UUID of the knowledge base.
   */
  kbUuid?: string;
  /**
   * @remarks
   * The ID of the MCP server.
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

export class DescribeCustomAgentResponseBodyDataScheduleTaskConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression for the scheduled task.
   * 
   * @example
   * 0 0 0 ? * 1-7
   */
  cronExpression?: string;
  /**
   * @remarks
   * The task query.
   * 
   * @example
   * 分析一下这份数据，给出简报
   */
  query?: string;
  /**
   * @remarks
   * The ID of the related historical session.
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
   * The ID of the parent Alibaba Cloud account.
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
   * The callback configuration.
   */
  callbackConfig?: DescribeCustomAgentResponseBodyDataCallbackConfig;
  /**
   * @remarks
   * The username of the creator.
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
   * The data scope, formatted as a JSON string.
   * 
   * @example
   * {
   *   "tableFlag" : true,
   *   "scope" : "personal",
   *   "personal" : {
   *     "DataSourceType" : "remote_data_center",
   *     "FileId" : "f-5qlrwaw10********s3gpw1z",
   *     "Database" : "测试表格******.xlsx",
   *     "Tables" : [ "Sheet1" ],
   *     "TableIds" : [ "******" ],
   *     "RegionId" : "cn-hangzhou"
   *   }
   * }
   */
  dataJson?: string;
  /**
   * @remarks
   * Indicates whether this is the default agent.
   */
  defaultAgent?: number;
  /**
   * @remarks
   * The description of the custom agent.
   * 
   * @example
   * Agent测试描述
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
   * The time when the agent was created.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the agent was last modified.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The instruction for the agent\\"s analysis.
   * 
   * @example
   * 分析框架：
   * 1、需按日、周、月维度监控核心指标（GMV、订单量、UV、转化率），分析趋势变化及同比/环比波动；
   * 2、划分新老客、渠道、地域进行拆解，识别增长来源与短板；
   * 3、结合用户行为路径（浏览→加购→支付）开展漏斗分析，定位流失环节；
   */
  instruction?: string;
  /**
   * @remarks
   * Indicates whether a scheduled task is configured.
   * 
   * @example
   * true
   */
  isScheduleTask?: boolean;
  /**
   * @remarks
   * The domain knowledge for the agent.
   * 
   * @example
   * 核心指标定义：
   * 1、GMV（成交总额）指订单金额总和，含已支付及未支付成功订单；
   * 2、订单量为每日有效下单笔数；
   * 3、UV（独立访客）指访问网站或APP的去重用户数；
   * 4、转化率=支付订单数 / UV，反映流量转化效率；
   */
  knowledge?: string;
  /**
   * @remarks
   * The knowledge configurations.
   */
  knowledgeConfigList?: DescribeCustomAgentResponseBodyDataKnowledgeConfigList[];
  /**
   * @remarks
   * The ID of the user who last modified the agent.
   * 
   * @example
   * 20372822********
   */
  modifier?: string;
  /**
   * @remarks
   * The username of the modifier.
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
   * Agent测试名称
   */
  name?: string;
  /**
   * @remarks
   * The next scheduled execution time.
   * 
   * @example
   * 1767715200
   */
  nextRuntime?: number;
  /**
   * @remarks
   * The time when the agent was taken offline.
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
   * The ID of the related historical session.
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
   * The configuration of the scheduled task.
   */
  scheduleTaskConfig?: DescribeCustomAgentResponseBodyDataScheduleTaskConfig;
  /**
   * @remarks
   * The status of the custom agent. Valid values:
   * 
   * @example
   * RELEASED
   */
  status?: string;
  /**
   * @remarks
   * The formatting requirements for the text report.
   * 
   * @example
   * 文字报告要求所有数字不使用阿拉伯数字，全部转为中文数字
   */
  textReportConfig?: string;
  /**
   * @remarks
   * The formatting requirements for the web report.
   * 
   * @example
   * 网页报告要求所有数字不使用阿拉伯数字，全部转为中文数字
   */
  webReportConfig?: string;
  /**
   * @remarks
   * The ID of the workspace.
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

export class DescribeCustomAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the custom agent.
   */
  data?: DescribeCustomAgentResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
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
   * 
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

