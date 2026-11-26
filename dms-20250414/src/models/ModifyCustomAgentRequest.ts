// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomAgentRequestCallbackConfig extends $dara.Model {
  /**
   * @remarks
   * The callback tool calling parameters used to invoke the callback tool.
   * 
   * @example
   * {"ID":"test"}
   */
  callbackArgs?: string;
  /**
   * @remarks
   * The prompt for generating callback tool calling parameters to invoke the callback tool.
   * 
   * @example
   * send web report to 123456@163.com
   */
  callbackPrompt?: string;
  /**
   * @remarks
   * The timing of callback tool calling to invoke the callback tool.
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

export class ModifyCustomAgentRequestExecutionConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable appending data sources during the session.
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
   * Specifies whether to skip the web report generation confirmation.
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

export class ModifyCustomAgentRequestKnowledgeConfigList extends $dara.Model {
  /**
   * @remarks
   * The access type. If you do not specify this parameter, the default value is mcp. Valid values:
   * - mcp: Access through MCP. You must specify the McpServerId parameter.
   * - dms_kb: Access through DMS knowledge base. You must specify the KbUuid parameter.
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

export class ModifyCustomAgentRequestKnowledgeSemanticConfigList extends $dara.Model {
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
   * 2086427
   */
  instanceId?: string;
  /**
   * @remarks
   * The knowledge UUID.
   * 
   * @example
   * 7ca8f50d78*****1f4b8410f02e87
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

export class ModifyCustomAgentRequestScheduleTaskConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression for time-based scheduling.
   * 
   * @example
   * 0 0 0,1 ? * 1-7
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

export class ModifyCustomAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The callback feature configuration.
   */
  callbackConfig?: ModifyCustomAgentRequestCallbackConfig;
  /**
   * @remarks
   * The ID of the custom agent.
   * 
   * This parameter is required.
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
   * The specified data scope in **JSON character string format**.
   * - General metric descriptions
   *   - tableFlag: true indicates that the data scope is specified.
   *   - scope: personal is a fixed value.
   *   - personal: parameters for file and database types.
   * 
   * **File type**: Pass parameters in the following format:
   * - DataSourceType: remote_data_center is a fixed value.
   * - FileId: the file ID.
   * - Database: the database name returned by the ListDataCenterTable operation, which is usually the file name.
   * - Tables: the table names returned by the ListDataCenterTable operation.
   * - TableIds: the table IDs returned by the ListDataCenterTable operation.
   * - RegionId: the current region.
   * ```
   * {
   *   "tableFlag": true,
   *   "scope": "personal",
   *   "personal": {
   *     "DataSourceType": "remote_data_center",
   *     "FileId": "f-f0jksn001ibmkoo********6v2zn6",
   *     "Database": "diamonds.csv",
   *     "Tables": [
   *       "diamonds"
   *     ],
   *     "TableIds": [
   *       "35hfn94pxl********50pi"
   *     ],
   *     "RegionId": "cn-hangzhou"
   *   }
   * }
   * ```
   * 
   * **Database type**: Pass parameters in the following format:
   * - DataSourceType: database is a fixed value.
   * - DmsInstanceId: the DMS instance ID returned by the data center API.
   * - DmsDatabaseId: the DMS database ID returned by the data center API.
   * - FileId: **[Deprecated]** The instance name.
   * - DbName: the database name returned by the data center API.
   * - Database: the database name returned by the data center API.
   * - Tables: the table names returned by the data center API.
   * - TableIds: the table IDs returned by the data center API.
   * - Engine: the DPI engine type, such as mysql or postgresql.
   * - RegionId: the current region.
   * ```
   * {
   *   "tableFlag": true,
   *   "scope": "personal",
   *   "personal": {
   *     "DataSourceType": "database",
   *     "DmsInstanceId": "284***8",
   *     "DmsDatabaseId": "769***45",
   *     "FileId": "pgm-bp15095e*******6t",
   *     "DbName": "pg_catalog",
   *     "Database": "pg_catalog",
   *     "Tables": [
   *       "pg_aggregate"
   *     ],
   *     "TableIds": [
   *       "5263****31"
   *     ],
   *     "Engine": "postgresql",
   *     "RegionId": "cn-hangzhou"
   *   }
   * }
   * ```
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
   * Agent test description
   */
  description?: string;
  /**
   * @remarks
   * The execution configuration.
   */
  executionConfig?: ModifyCustomAgentRequestExecutionConfig;
  /**
   * @remarks
   * The instructions.
   * - Input limit: up to 10,000 characters.
   * 
   * @example
   * Analysis framework:
   * 1. Monitor core metrics (GMV, order volume, UV, conversion rate) on a daily, weekly, and monthly basis to analyze trend changes and year-over-year or month-over-month fluctuations.
   * 2. Segment by new and returning customers, channels, and regions to identify growth drivers and shortcomings.
   * 3. Conduct funnel analysis based on user behavior paths (browse -> add to cart -> pay) to locate churn points
   */
  instruction?: string;
  /**
   * @remarks
   * The knowledge.
   * - Input limit: up to 10,000 characters.
   * 
   * @example
   * Core metric definitions:
   * 1. GMV (Gross Merchandise Volume) refers to the total order amount, including both successfully paid and unpaid orders.
   * 2. Order volume is the number of valid orders placed per day.
   * 3. UV (Unique Visitors) refers to the number of deduplicated users visiting the website or app.
   * 4. Conversion rate = paid orders / UV, reflecting the traffic conversion efficiency
   */
  knowledge?: string;
  /**
   * @remarks
   * The external knowledge bases.
   */
  knowledgeConfigList?: ModifyCustomAgentRequestKnowledgeConfigList[];
  /**
   * @remarks
   * The knowledge semantic configuration list.
   */
  knowledgeSemanticConfigList?: ModifyCustomAgentRequestKnowledgeSemanticConfigList[];
  /**
   * @remarks
   * The name of the custom agent.
   * 
   * @example
   * Agent test name
   */
  name?: string;
  /**
   * @remarks
   * The list of recommended questions.
   * - You can configure up to 10 recommended questions.
   */
  recommendQuestionList?: string[];
  /**
   * @remarks
   * The ID of the referenced historical session.
   * 
   * @example
   * ski-sldk8v******3owd
   */
  relatedSessionId?: string;
  /**
   * @remarks
   * The scheduled task configuration.
   */
  scheduleTaskConfig?: ModifyCustomAgentRequestScheduleTaskConfig;
  /**
   * @remarks
   * The text report format.
   * - Input limit: up to 10,000 characters.
   * 
   * @example
   * For the text report, do not use Arabic numerals. Convert all numbers to Chinese numerals
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
   * - Input limit: up to 50,000 characters.
   * 
   * @example
   * For the web report, do not use Arabic numerals. Convert all numbers to Chinese numerals
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
      callbackConfig: 'CallbackConfig',
      customAgentId: 'CustomAgentId',
      DMSUnit: 'DMSUnit',
      dataJson: 'DataJson',
      description: 'Description',
      executionConfig: 'ExecutionConfig',
      instruction: 'Instruction',
      knowledge: 'Knowledge',
      knowledgeConfigList: 'KnowledgeConfigList',
      knowledgeSemanticConfigList: 'KnowledgeSemanticConfigList',
      name: 'Name',
      recommendQuestionList: 'RecommendQuestionList',
      relatedSessionId: 'RelatedSessionId',
      scheduleTaskConfig: 'ScheduleTaskConfig',
      textReportConfig: 'TextReportConfig',
      userSpecifiedSkillList: 'UserSpecifiedSkillList',
      webReportConfig: 'WebReportConfig',
      webReportTheme: 'WebReportTheme',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackConfig: ModifyCustomAgentRequestCallbackConfig,
      customAgentId: 'string',
      DMSUnit: 'string',
      dataJson: 'string',
      description: 'string',
      executionConfig: ModifyCustomAgentRequestExecutionConfig,
      instruction: 'string',
      knowledge: 'string',
      knowledgeConfigList: { 'type': 'array', 'itemType': ModifyCustomAgentRequestKnowledgeConfigList },
      knowledgeSemanticConfigList: { 'type': 'array', 'itemType': ModifyCustomAgentRequestKnowledgeSemanticConfigList },
      name: 'string',
      recommendQuestionList: { 'type': 'array', 'itemType': 'string' },
      relatedSessionId: 'string',
      scheduleTaskConfig: ModifyCustomAgentRequestScheduleTaskConfig,
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

