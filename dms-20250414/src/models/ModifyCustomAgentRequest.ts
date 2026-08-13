// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomAgentRequestCallbackConfig extends $dara.Model {
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

export class ModifyCustomAgentRequestExecutionConfig extends $dara.Model {
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
   * Specifies whether to skip the web report rendering confirmation.
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
   * The access type.
   * 
   * @example
   * mcp
   */
  accessType?: string;
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

export class ModifyCustomAgentRequestScheduleTaskConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression for the time-based scheduling.
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
   * Analyze this data and provide a briefing
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
  callbackConfig?: ModifyCustomAgentRequestCallbackConfig;
  /**
   * @remarks
   * The custom agent ID.
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
   * The specified data scope in **JSON string format**.
   * - Common parameter description
   *   - tableFlag: true indicates a specified data scope
   *   - scope: personal is a fixed value
   *   - personal: pass parameters for file or database types
   * 
   * **File type**. Pass parameters in the following format:
   * - DataSourceType: remote_data_center is a fixed value
   * - FileId: the file ID
   * - Database: the database name returned by the ListDataCenterTable operation, which is usually the file name
   * - Tables: the table name returned by the ListDataCenterTable operation
   * - TableIds: the TableId returned by the ListDataCenterTable operation
   * - RegionId: the current region
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
   * **Database type**. Pass parameters in the following format:
   * - DataSourceType: database is a fixed value
   * - DmsInstanceId: the DMS instance ID returned by the data center operation
   * - DmsDatabaseId: the DMS database ID returned by the data center operation
   * - FileId: the instance name (deprecated)
   * - DbName: the database name returned by the data center operation
   * - Database: the database name returned by the data center operation
   * - Tables: the table name returned by the data center operation
   * - TableIds: the TableId returned by the data center operation
   * - Engine: the engine type (mysql or postgresql)
   * - RegionId: the current region
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
   *     "Database" : "TestTable******.xlsx",
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
   * AgentTestDescription
   */
  description?: string;
  /**
   * @remarks
   * The execution configuration.
   */
  executionConfig?: ModifyCustomAgentRequestExecutionConfig;
  /**
   * @remarks
   * The instruction.
   * 
   * @example
   * Analysis framework:
   */
  instruction?: string;
  /**
   * @remarks
   * The knowledge.
   * 
   * @example
   * Core metric definitions:
   * 1. GMV (Gross Merchandise Volume) refers to the total order amount, including both paid and unpaid orders.
   * 2. Order volume is the number of valid orders placed per day.
   * 3. UV (Unique Visitors) refers to the deduplicated number of users who visit the website or app.
   * 4. Conversion rate = number of paid orders / UV, reflecting traffic conversion efficiency.
   */
  knowledge?: string;
  /**
   * @remarks
   * The external knowledge bases.
   */
  knowledgeConfigList?: ModifyCustomAgentRequestKnowledgeConfigList[];
  knowledgeSemanticConfigList?: ModifyCustomAgentRequestKnowledgeSemanticConfigList[];
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
   * The ID of the referenced historical session.
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
   * 
   * @example
   * The text report requires all numbers to be written in Chinese characters instead of Arabic numerals
   */
  textReportConfig?: string;
  /**
   * @remarks
   * The web report format.
   * 
   * @example
   * The web report requires all numbers to be written in Chinese characters instead of Arabic numerals
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
      relatedSessionId: 'string',
      scheduleTaskConfig: ModifyCustomAgentRequestScheduleTaskConfig,
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

