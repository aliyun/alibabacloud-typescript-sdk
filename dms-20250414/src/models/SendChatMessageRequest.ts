// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageRequestDataSourcePermissionTables extends $dara.Model {
  /**
   * @remarks
   * The list of columns that are allowed for querying in the current table. If this field is left empty, all columns can be queried. If specified, SQL statements that exceed the allowed scope are blocked. For example, syntax such as SELECT * is blocked. To ensure DataAgent analysis effectiveness, avoid specifying columns beyond the allowed scope in the DataAgent prompts, knowledge, or instructions modules. Otherwise, unauthorized SQL statements may be generated and blocked, which reduces DataAgent analysis speed and effectiveness.
   */
  allowedColumns?: string[];
  /**
   * @remarks
   * The list of columns that are not allowed for querying in the current table. If this field is left empty, all columns **can be queried**. If specified, SQL statements that exceed the allowed scope are blocked. For example, syntax such as SELECT * is blocked.  
   * 
   * If both the disallowed list and the allowed list are configured, the disallowed list takes higher priority. For example, if Table 1 has columns A, B, C, and D, and columns A and B are configured as not queryable while columns B and C are configured as queryable, the final result is that only column C is queryable.
   * 
   * To ensure DataAgent analysis effectiveness, avoid specifying columns beyond the allowed scope in the DataAgent prompts, knowledge, or instructions modules. Otherwise, unauthorized SQL statements may be generated and blocked, which reduces DataAgent analysis speed and effectiveness.
   */
  disallowedColumns?: string[];
  /**
   * @remarks
   * The required row filter condition for the current table. If this field is left empty, it is ignored. If specified, all SQL statements involving this table are validated to check whether they carry the filter field and whether the WHERE condition meets the constraints. SQL statements that do not meet the constraints are rejected. Ensure the validation condition format is correct.
   * 
   * @example
   * region = \\"east\\"
   */
  requiredRowFilter?: string;
  /**
   * @remarks
   * The table name to which the permission constraint rule applies.
   * 
   * @example
   * sample_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedColumns: 'AllowedColumns',
      disallowedColumns: 'DisallowedColumns',
      requiredRowFilter: 'RequiredRowFilter',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedColumns: { 'type': 'array', 'itemType': 'string' },
      disallowedColumns: { 'type': 'array', 'itemType': 'string' },
      requiredRowFilter: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedColumns)) {
      $dara.Model.validateArray(this.allowedColumns);
    }
    if(Array.isArray(this.disallowedColumns)) {
      $dara.Model.validateArray(this.disallowedColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequestDataSourcePermission extends $dara.Model {
  /**
   * @remarks
   * The table-level permission constraints for querying the current data source. Each item in the list represents the permission constraints for a table.
   */
  tables?: SendChatMessageRequestDataSourcePermissionTables[];
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: { 'type': 'array', 'itemType': SendChatMessageRequestDataSourcePermissionTables },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequestDataSource extends $dara.Model {
  /**
   * @remarks
   * Deprecated. You do not need to specify this field.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source type. Valid values: `[remote_data_center, database]`, indicating that the analysis is performed on a file or a database.
   * 
   * @example
   * remote_data_center
   */
  dataSourceType?: string;
  /**
   * @remarks
   * Deprecated. You do not need to specify this field.
   * 
   * @example
   * test_db
   */
  database?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * ******
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the database in Data Management.
   * 
   * @example
   * 23******
   */
  dmsDatabaseId?: string;
  /**
   * @remarks
   * The ID of the instance in Data Management.
   * 
   * @example
   * 12******
   */
  dmsInstanceId?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 35****
   */
  fileId?: string;
  /**
   * @remarks
   * Deprecated. You do not need to specify this field.
   * 
   * @example
   * localhost
   */
  location?: string;
  /**
   * @remarks
   * The permission constraints for querying the current data source. The permission constraint feature is available through a canary release. This field does not take effect for users who are not included in the canary release.
   */
  permission?: SendChatMessageRequestDataSourcePermission;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of table names to analyze.
   */
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      database: 'Database',
      dbName: 'DbName',
      dmsDatabaseId: 'DmsDatabaseId',
      dmsInstanceId: 'DmsInstanceId',
      engine: 'Engine',
      fileId: 'FileId',
      location: 'Location',
      permission: 'Permission',
      regionId: 'RegionId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceType: 'string',
      database: 'string',
      dbName: 'string',
      dmsDatabaseId: 'string',
      dmsInstanceId: 'string',
      engine: 'string',
      fileId: 'string',
      location: 'string',
      permission: SendChatMessageRequestDataSourcePermission,
      regionId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.permission && typeof (this.permission as any).validate === 'function') {
      (this.permission as any).validate();
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequestDataSourcesPermissionTables extends $dara.Model {
  /**
   * @remarks
   * The list of columns that are allowed for querying in the current table. If this field is left empty, all columns can be queried. If specified, SQL statements that exceed the allowed scope are blocked. For example, syntax such as SELECT * is blocked. To ensure DataAgent analysis effectiveness, avoid specifying columns beyond the allowed scope in the DataAgent prompts, knowledge, or instructions modules. Otherwise, unauthorized SQL statements may be generated and blocked, which reduces DataAgent analysis speed and effectiveness.
   */
  allowedColumns?: string[];
  /**
   * @remarks
   * The list of columns that are not allowed for querying in the current table. If this field is left empty, all columns **can be queried**. If specified, SQL statements that exceed the allowed scope are blocked. For example, syntax such as SELECT * is blocked.  
   * 
   * If both the disallowed list and the allowed list are configured, the disallowed list takes higher priority. For example, if Table 1 has columns A, B, C, and D, and columns A and B are configured as not queryable while columns B and C are configured as queryable, the final result is that only column C is queryable.
   * 
   * To ensure DataAgent analysis effectiveness, avoid specifying columns beyond the allowed scope in the DataAgent prompts, knowledge, or instructions modules. Otherwise, unauthorized SQL statements may be generated and blocked, which reduces DataAgent analysis speed and effectiveness.
   */
  disallowedColumns?: string[];
  /**
   * @remarks
   * The required row filter condition for the current table. If this field is left empty, it is ignored. If specified, all SQL statements involving this table are validated to check whether they carry the filter field and whether the WHERE condition meets the constraints. SQL statements that do not meet the constraints are rejected. Ensure the validation condition format is correct.
   * 
   * @example
   * region = \\"east\\"
   */
  requiredRowFilter?: string;
  /**
   * @remarks
   * The table name to which the permission constraint rule applies.
   * 
   * @example
   * sample_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedColumns: 'AllowedColumns',
      disallowedColumns: 'DisallowedColumns',
      requiredRowFilter: 'RequiredRowFilter',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedColumns: { 'type': 'array', 'itemType': 'string' },
      disallowedColumns: { 'type': 'array', 'itemType': 'string' },
      requiredRowFilter: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedColumns)) {
      $dara.Model.validateArray(this.allowedColumns);
    }
    if(Array.isArray(this.disallowedColumns)) {
      $dara.Model.validateArray(this.disallowedColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequestDataSourcesPermission extends $dara.Model {
  /**
   * @remarks
   * The table-level permission constraints for querying the current data source. Each item in the list represents the permission constraints for a table.
   */
  tables?: SendChatMessageRequestDataSourcesPermissionTables[];
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: { 'type': 'array', 'itemType': SendChatMessageRequestDataSourcesPermissionTables },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequestDataSources extends $dara.Model {
  /**
   * @remarks
   * Deprecated. You do not need to specify this field.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source type. Valid values: remote_data_center, database. These values indicate that the analysis is performed on a file or a database.
   * 
   * @example
   * remote_data_center
   */
  dataSourceType?: string;
  /**
   * @remarks
   * Deprecated. You do not need to specify this field.
   * 
   * @example
   * test_db
   */
  database?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * mydatabase
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the database in Data Management.
   * 
   * @example
   * 123****
   */
  dmsDatabaseId?: string;
  /**
   * @remarks
   * The ID of the instance in Data Management.
   * 
   * @example
   * 248*****
   */
  dmsInstanceId?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * f-4w*******
   */
  fileId?: string;
  /**
   * @remarks
   * Deprecated. You do not need to specify this field.
   * 
   * @example
   * localhost
   */
  location?: string;
  /**
   * @remarks
   * The permission constraints for querying the current data source. The permission constraint feature is available through a canary release. This field does not take effect for users who are not included in the canary release.
   */
  permission?: SendChatMessageRequestDataSourcesPermission;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The list of table names to analyze.
   */
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      database: 'Database',
      dbName: 'DbName',
      dmsDatabaseId: 'DmsDatabaseId',
      dmsInstanceId: 'DmsInstanceId',
      engine: 'Engine',
      fileId: 'FileId',
      location: 'Location',
      permission: 'Permission',
      regionId: 'RegionId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceType: 'string',
      database: 'string',
      dbName: 'string',
      dmsDatabaseId: 'string',
      dmsInstanceId: 'string',
      engine: 'string',
      fileId: 'string',
      location: 'string',
      permission: SendChatMessageRequestDataSourcesPermission,
      regionId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.permission && typeof (this.permission as any).validate === 'function') {
      (this.permission as any).validate();
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequestSessionConfigPermissionConfig extends $dara.Model {
  /**
   * @remarks
   * The default action for table-level permissions. This parameter controls whether tables that are not configured in DataSources.[item].Permission can be queried. Valid values: allow, deny.
   * 
   * - allow (default): works in blacklist mode. By default, all tables can be queried, and the actual permissions are subject to the permissions configured on the Data Management side. Row-level and column-level permissions are enforced only when you configure **row-level and column-level** permissions in DataSources.[item].Permission.
   * 
   * - deny (must be manually specified): works in whitelist mode. By default, no tables can be queried. A table can be queried only when you configure permissions for it in DataSources.[item].Permission. You can grant full access to a table by not configuring any row-level or column-level restrictions.
   * 
   * @example
   * allow
   */
  defaultAction?: string;
  static names(): { [key: string]: string } {
    return {
      defaultAction: 'DefaultAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequestSessionConfig extends $dara.Model {
  /**
   * @remarks
   * The custom agent ID. A custom agent is an entity used to customize the analysis process. You can create one in the DataAgent console or by calling the CreateCustomAgent operation. The custom agent ID is a string that starts with `ca-`.
   * 
   * @example
   * ca-asfkjhqwe***aesrfqa
   */
  customAgentId?: string;
  /**
   * @remarks
   * The stage of the custom agent.
   * 
   * @example
   * null
   */
  customAgentStage?: string;
  /**
   * @remarks
   * Specifies whether to enable web search.
   * 
   * @example
   * false
   */
  enableSearch?: boolean;
  /**
   * @remarks
   * The list of knowledge base IDs.
   * 
   * @example
   * dasd***cc211
   */
  kbUuidList?: string[];
  /**
   * @remarks
   * Currently only Chinese and English are supported. The default value is Chinese. Only uppercase values are supported.
   * 
   * @example
   * ENGLISH
   */
  language?: string;
  /**
   * @remarks
   * The MCP server IDs in the session configuration.
   * 
   * @example
   * 2q1tu90**********6uttu2nw
   */
  mcpServerIds?: string[];
  /**
   * @remarks
   * The mode. Valid values:
   *  - **ASK_DATA**: data query mode.
   *  - **ANALYSIS**: analysis mode.
   *  - **INSIGHT**: insight mode.
   * 
   * @example
   * ANALYSIS
   */
  mode?: string;
  /**
   * @remarks
   * The session level data permission settings. If this parameter is set multiple times across multiple turns within the same session, the last setting takes effect.
   */
  permissionConfig?: SendChatMessageRequestSessionConfigPermissionConfig;
  /**
   * @remarks
   * Specifies whether to enable the plan. Valid values: disable, enable, force. Default value: enable.
   * 
   * @example
   * disable
   */
  planMode?: string;
  /**
   * @remarks
   * The text of up to 64 characters that is used as a watermark in the generated PDF report.
   * 
   * @example
   * sample-watermark
   */
  reportWaterMark?: string;
  /**
   * @remarks
   * Specifies whether to disable user inquiries during the process.
   * 
   * @example
   * True
   */
  skipAskHuman?: boolean;
  /**
   * @remarks
   * Specifies whether to skip the plan confirmation step.
   * 
   * @example
   * True
   */
  skipPlan?: boolean;
  /**
   * @remarks
   * Specifies whether to skip all SQL confirmations.
   * 
   * @example
   * False
   */
  skipSqlConfirm?: boolean;
  /**
   * @remarks
   * Specifies whether to skip the web report generation confirmation.
   * 
   * @example
   * True
   */
  skipWebReportConfirm?: boolean;
  /**
   * @remarks
   * The list of user-specified skills.
   */
  userSpecifiedSkillList?: string[];
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      customAgentStage: 'CustomAgentStage',
      enableSearch: 'EnableSearch',
      kbUuidList: 'KbUuidList',
      language: 'Language',
      mcpServerIds: 'McpServerIds',
      mode: 'Mode',
      permissionConfig: 'PermissionConfig',
      planMode: 'PlanMode',
      reportWaterMark: 'ReportWaterMark',
      skipAskHuman: 'SkipAskHuman',
      skipPlan: 'SkipPlan',
      skipSqlConfirm: 'SkipSqlConfirm',
      skipWebReportConfirm: 'SkipWebReportConfirm',
      userSpecifiedSkillList: 'UserSpecifiedSkillList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      customAgentStage: 'string',
      enableSearch: 'boolean',
      kbUuidList: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      mcpServerIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      permissionConfig: SendChatMessageRequestSessionConfigPermissionConfig,
      planMode: 'string',
      reportWaterMark: 'string',
      skipAskHuman: 'boolean',
      skipPlan: 'boolean',
      skipSqlConfirm: 'boolean',
      skipWebReportConfirm: 'boolean',
      userSpecifiedSkillList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.kbUuidList)) {
      $dara.Model.validateArray(this.kbUuidList);
    }
    if(Array.isArray(this.mcpServerIds)) {
      $dara.Model.validateArray(this.mcpServerIds);
    }
    if(this.permissionConfig && typeof (this.permissionConfig as any).validate === 'function') {
      (this.permissionConfig as any).validate();
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

export class SendChatMessageRequestTaskConfigReportConfig extends $dara.Model {
  /**
   * @remarks
   * The prompt that the report must follow.
   * 
   * @example
   * generate a report
   */
  reportPrompt?: string;
  /**
   * @remarks
   * The report theme. Valid values: default, journal, legacy, and neobrutalism.
   * 
   * @example
   * default
   */
  reportTheme?: string;
  /**
   * @remarks
   * The service type. Valid values: TextReport and WebReport, which indicate that the task generates a text report or a web report. Currently, only WebReport is supported.
   * 
   * @example
   * WebReport
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      reportPrompt: 'ReportPrompt',
      reportTheme: 'ReportTheme',
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportPrompt: 'string',
      reportTheme: 'string',
      reportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequestTaskConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of the report rule. Only when MesageType is set to REPORT, a report task is executed based on this configuration.
   */
  reportConfig?: SendChatMessageRequestTaskConfigReportConfig;
  static names(): { [key: string]: string } {
    return {
      reportConfig: 'ReportConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportConfig: SendChatMessageRequestTaskConfigReportConfig,
    };
  }

  validate() {
    if(this.reportConfig && typeof (this.reportConfig as any).validate === 'function') {
      (this.reportConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequest extends $dara.Model {
  /**
   * @remarks
   * **[Optimized]** This field is now automatically obtained by the backend. You do not need to specify this field.
   * 
   * @example
   * agent_***
   */
  agentId?: string;
  /**
   * @remarks
   * **[Optimized]** This field is now automatically obtained by the backend. You do not need to specify this field when calling the API.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data source information. This parameter can be left empty. This parameter supports only one data source. Use the DataSources parameter instead.
   * 
   * @example
   * null
   */
  dataSource?: SendChatMessageRequestDataSource;
  /**
   * @remarks
   * The detailed data source information. This parameter can be left empty.
   */
  dataSources?: SendChatMessageRequestDataSources[];
  /**
   * @remarks
   * The message content to send to the Agent.
   * 
   * This parameter is required.
   * 
   * @example
   * what can you do?
   */
  message?: string;
  /**
   * @remarks
   * The message type. Default value: `[primary]`.  
   * 
   * - For regular interactions with the Agent, set the message type to `[primary]`.
   * 
   * - When the message is a response to the Agent\\"s Human-in-Loop question, set the type to `[additional]`.
   * 
   * - When the message is intended to trigger report generation, set the type to `[report]`.
   * 
   * - When the message is intended to cancel the current session, set the type to `[cancel]`.
   * 
   * @example
   * primary
   */
  messageType?: string;
  /**
   * @remarks
   * The parent session ID.
   * 
   * @example
   * 20qrliuoo7p2vlsfg*****
   */
  parentSessionId?: string;
  /**
   * @remarks
   * This field is required when the message type is `additional`. Specify the specific question that the Agent asks the user through Human-in-Loop.
   * 
   * @example
   * Provide the criteria for calculating GMV
   */
  question?: string;
  /**
   * @remarks
   * The quoted content. This is typically used during interactions with the Agent.
   * 
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @remarks
   * **Important**
   * 
   * When this message is a reply to an Agent message (for example, the Agent asks a clarifying question through ASK_HUMAN), set reply_to to the exact Checkpoint sequence number carried in that Agent message. If this message is not a targeted reply, such as requesting the Agent to perform further in-depth analysis after analysis is complete, you can leave reply_to empty or set it to "0".  
   * 
   * This field affects how the Agent decides to process the message. Incorrect values may lead to analysis results that do not meet expectations.
   * 
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * @remarks
   * The special configuration for the current session. For the same session, only the configuration included in the first SendMessage call takes effect.
   * 
   * **if can be null:**
   * true
   */
  sessionConfig?: SendChatMessageRequestSessionConfig;
  /**
   * @remarks
   * The session ID. This is an optional field used for multi-turn sessions.
   * - You can start a session without specifying this field. The response includes the SessionID of the current session.
   * - You can also manually create a session ID by calling the CreateDataAgentSession operation and include the ID when initiating a session.
   * - For multi-turn conversations (such as follow-up questions or confirming execution plans), specify the SessionID returned by the previous SendChatMessage call.
   * 
   * @example
   * sess_***
   */
  sessionId?: string;
  /**
   * @remarks
   * The configuration items that affect only the current task.
   */
  taskConfig?: SendChatMessageRequestTaskConfig;
  /**
   * @remarks
   * The OSS bucket of the user. If this parameter is not specified, the analysis data is securely stored in built-in storage.
   * 
   * @example
   * my-bucket
   */
  userOssBucket?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * c1p71ne***baexrt3o
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      DMSUnit: 'DMSUnit',
      dataSource: 'DataSource',
      dataSources: 'DataSources',
      message: 'Message',
      messageType: 'MessageType',
      parentSessionId: 'ParentSessionId',
      question: 'Question',
      quotedMessage: 'QuotedMessage',
      replyTo: 'ReplyTo',
      sessionConfig: 'SessionConfig',
      sessionId: 'SessionId',
      taskConfig: 'TaskConfig',
      userOssBucket: 'UserOssBucket',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      DMSUnit: 'string',
      dataSource: SendChatMessageRequestDataSource,
      dataSources: { 'type': 'array', 'itemType': SendChatMessageRequestDataSources },
      message: 'string',
      messageType: 'string',
      parentSessionId: 'string',
      question: 'string',
      quotedMessage: 'string',
      replyTo: 'string',
      sessionConfig: SendChatMessageRequestSessionConfig,
      sessionId: 'string',
      taskConfig: SendChatMessageRequestTaskConfig,
      userOssBucket: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.sessionConfig && typeof (this.sessionConfig as any).validate === 'function') {
      (this.sessionConfig as any).validate();
    }
    if(this.taskConfig && typeof (this.taskConfig as any).validate === 'function') {
      (this.taskConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

