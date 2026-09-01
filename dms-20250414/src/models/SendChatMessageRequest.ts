// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageRequestDataSourcePermissionTables extends $dara.Model {
  /**
   * @remarks
   * The list of columns that are allowed to be queried in the current table. If this field is left empty, all columns can be queried. If this field is specified, SQL statements that exceed the allowed scope are blocked. For example, syntax such as SELECT * is blocked. To ensure the effectiveness of DataAgent analysis, avoid specifying columns that exceed the allowed scope in the prompts, knowledge, or instructions modules of DataAgent. Otherwise, SQL statements without the required permissions are generated and blocked, which reduces the analysis speed and effectiveness of DataAgent.
   */
  allowedColumns?: string[];
  disallowedColumns?: string[];
  /**
   * @remarks
   * The required row filter condition for the current table. If this field is left empty, it is ignored. If this field is specified, all SQL statements involving this table are validated to check whether they carry the filter field and whether the WHERE condition meets the constraints. SQL statements that do not meet the constraints are rejected. Ensure the format of the validation conditions is correct.
   * 
   * @example
   * region = \\"east\\"
   */
  requiredRowFilter?: string;
  /**
   * @remarks
   * The name of the table to which the permission constraint rule applies.
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
   * The data source type. Valid values: `[remote_data_center, database]`, which indicate that the analysis is performed on a file or a database.
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
   * The list of columns that are allowed to be queried in the current table. If this field is left empty, all columns can be queried. If this field is specified, SQL statements that exceed the allowed scope are blocked. For example, syntax such as SELECT * is blocked. To ensure the effectiveness of DataAgent analysis, avoid specifying columns that exceed the allowed scope in the prompts, knowledge, or instructions modules of DataAgent. Otherwise, SQL statements without the required permissions are generated and blocked, which reduces the analysis speed and effectiveness of DataAgent.
   */
  allowedColumns?: string[];
  disallowedColumns?: string[];
  /**
   * @remarks
   * The required row filter condition for the current table. If this field is left empty, it is ignored. If this field is specified, all SQL statements involving this table are validated to check whether they carry the filter field and whether the WHERE condition meets the constraints. SQL statements that do not meet the constraints are rejected. Ensure the format of the validation conditions is correct.
   * 
   * @example
   * region = \\"east\\"
   */
  requiredRowFilter?: string;
  /**
   * @remarks
   * The name of the table to which the permission constraint rule applies.
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
   * The data source type. Valid values: remote_data_center and database, which indicate that the analysis is performed on a file or a database.
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
   * The default behavior for unconfigured tables. Valid values:
   * - allow: Allow. This is the default value.
   * - deny: Deny.
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
   * The custom Agent ID. A custom Agent is an entity used to customize the analysis process. You can create one in the DataAgent console or by calling the CreateCustomAgent operation. The custom Agent ID is a string that starts with `ca-`.
   * 
   * @example
   * ca-asfkjhqwe***aesrfqa
   */
  customAgentId?: string;
  /**
   * @remarks
   * The stage of the custom Agent.
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
  enableSearch?: string;
  /**
   * @remarks
   * The list of knowledge base IDs.
   * 
   * @example
   * dasd***cc211
   */
  kbUuidList?: string;
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
  mcpServerIds?: string;
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
   * The session-level permission configuration. This parameter specifies only the default behavior for unconfigured tables.
   */
  permissionConfig?: SendChatMessageRequestSessionConfigPermissionConfig;
  /**
   * @remarks
   * Specifies whether to enable the plan. Valid values: disable, enable, and force. Default value: enable.
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
      enableSearch: 'string',
      kbUuidList: 'string',
      language: 'string',
      mcpServerIds: 'string',
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
   * The service type. Valid values: TextReport and WebReport, which indicate that the task generates a text report or a web report. Currently only WebReport is supported.
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
   * The report rule configuration. Only when MessageType is REPORT, a report task is executed based on this configuration.
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
   * **[Deprecated]** This field is now automatically obtained by the backend. You do not need to specify this field.
   * 
   * @example
   * agent_***
   */
  agentId?: string;
  /**
   * @remarks
   * **[Deprecated]** This field is now automatically obtained by the backend. You do not need to specify this field when calling the API.
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
   * The content of the message to send to the Agent.
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
   * - When the message is a response to the Agent\\"s human-in-the-loop question, set the type to `[additional]`.
   * 
   * - When the message triggers a report generation, set the type to `[report]`.
   * 
   * - When the message cancels the current session, set the type to `[cancel]`.
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
   * This field is required when the message type is `additional`. Specify the specific question that the Agent asks the user through the human-in-the-loop mechanism.
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
   * When this message is a reply to an Agent message (for example, the Agent asks a clarifying question through ASK_HUMAN), set reply_to to the exact Checkpoint sequence number carried in that Agent message. If this message is not a targeted reply, such as requesting the Agent to perform further in-depth analysis after the analysis is complete, leave reply_to empty or set it to "0".  
   * 
   * This field affects how the Agent decides to process the message. Passing an incorrect value may cause the analysis results to be less effective than expected.
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
   * The session ID. This is an optional field used for multi-turn conversations.
   * - You can start a session without specifying this field. The response includes the SessionID for the current session.
   * - You can also manually create a session ID by calling the CreateDataAgentSession operation and include the ID when initiating a session.
   * - If you need multi-turn conversations (such as follow-up questions or confirming execution plans), include the SessionID returned by the previous SendChatMessage call.
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
   * The OSS bucket of the user. If this field is left empty, the analysis data is securely stored in the built-in storage.
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

