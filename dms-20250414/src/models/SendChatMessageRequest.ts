// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageRequestDataSourcePermissionTables extends $dara.Model {
  /**
   * @remarks
   * The list of fields that are allowed to be queried in the current table. If you do not specify this parameter, all fields can be queried. If you specify this parameter, SQL statements that query fields beyond the allowed scope, such as the SELECT * syntax, will be blocked. To ensure the analysis performance of DataAgent, make sure that the prompts, knowledge, and instructions modules of DataAgent do not include fields beyond the allowed scope. Otherwise, unauthorized SQL statements may be generated and blocked, which reduces the analysis speed and performance of DataAgent.
   */
  allowedColumns?: string[];
  /**
   * @remarks
   * The list of fields that are prohibited from being queried in the current table. If you do not specify this parameter, all fields **can be queried**. If you specify this parameter, SQL statements that query fields beyond the allowed scope, such as the SELECT * syntax, will be blocked.  
   * 
   * If both the prohibited list and the allowed list are configured, the prohibited list takes precedence. For example, if Table 1 has columns A, B, C, and D, and columns A and B are configured as non-queryable while columns B and C are configured as queryable, only column C is ultimately queryable.
   * 
   * To ensure the analysis performance of DataAgent, make sure that the prompts, knowledge, and instructions modules of DataAgent do not include fields beyond the allowed scope. Otherwise, unauthorized SQL statements may be generated and blocked, which reduces the analysis speed and performance of DataAgent.
   */
  disallowedColumns?: string[];
  /**
   * @remarks
   * The row filter condition that must be included for the current table. If you do not specify this parameter, it is ignored. If you specify this parameter, the system checks whether the filter field is included and whether the WHERE condition meets the constraints in all SQL statements that involve this table. SQL statements that do not meet the constraints will be rejected. Pay attention to the format of the validation condition.
   * 
   * @example
   * region = \\"east\\"
   */
  requiredRowFilter?: string;
  /**
   * @remarks
   * The name of the table to which the permission constraint rules apply.
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
   * **[Deprecated]** This field is deprecated. You do not need to specify this field.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source type. Valid values: remote_data_center and database, which indicate that the analysis target is a file or a database.
   * 
   * @example
   * remote_data_center
   */
  dataSourceType?: string;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated. You do not need to specify this field.
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
   * The ID of the database in DMS.
   * 
   * @example
   * 23******
   */
  dmsDatabaseId?: string;
  /**
   * @remarks
   * The ID of the instance in Data Management (DMS).
   * 
   * @example
   * 12******
   */
  dmsInstanceId?: string;
  /**
   * @remarks
   * The database type.
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
   * **[Deprecated]** This field is deprecated. You do not need to specify this field.
   * 
   * @example
   * localhost
   */
  location?: string;
  /**
   * @remarks
   * The permission constraints for querying the current data source. The permission constraint feature is in canary release. If you are not in the canary release scope, specifying this field will not take effect.
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
   * The list of table names to be analyzed.
   */
  tables?: string[];
  /**
   * @remarks
   * The data source resource identifier.
   * 
   * @example
   * datalake://abc/def
   */
  uri?: string;
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
      uri: 'Uri',
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
      uri: 'string',
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
   * The list of fields that can be queried in the current table. If you leave this parameter empty, all fields can be queried. If you specify this parameter, SQL statements that query fields beyond the allowed scope are blocked. For example, syntax similar to SELECT * is blocked. To ensure optimal analysis results, make sure that the prompts, knowledge base, and instructions for DataAgent do not include fields beyond the allowed scope. Otherwise, unauthorized SQL statements may be generated and blocked, which degrades the analysis speed and effectiveness of DataAgent.
   */
  allowedColumns?: string[];
  /**
   * @remarks
   * The list of fields that are prohibited from being queried in the current table. If you do not specify this parameter, all fields **can be queried**. If you specify this parameter, SQL statements that query fields beyond the allowed scope, such as the SELECT * syntax, will be blocked.  
   * 
   * If both the prohibited list and the allowed list are configured, the prohibited list takes precedence. For example, if Table 1 has columns A, B, C, and D, and columns A and B are configured as non-queryable while columns B and C are configured as queryable, only column C is ultimately queryable.
   * 
   * To ensure the analysis performance of DataAgent, make sure that the prompts, knowledge, and instructions modules of DataAgent do not include fields beyond the allowed scope. Otherwise, unauthorized SQL statements may be generated and blocked, which reduces the analysis speed and performance of DataAgent.
   */
  disallowedColumns?: string[];
  /**
   * @remarks
   * The row filter condition that must be included for the current table. If you do not specify this parameter, it is ignored. If you specify this parameter, the system checks whether the filter field is included and whether the WHERE condition meets the constraints in all SQL statements that involve this table. SQL statements that do not meet the constraints will be rejected. Pay attention to the format of the validation condition.
   * 
   * @example
   * region = \\"east\\"
   */
  requiredRowFilter?: string;
  /**
   * @remarks
   * The name of the table to which the permission constraint rules apply.
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
   * **[Deprecated]** This field is deprecated. You do not need to specify this field.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source type. Valid values:
   * - remote_data_center: The current analysis is based on a file.
   * - database: The current analysis is based on a database.
   * 
   * @example
   * remote_data_center
   */
  dataSourceType?: string;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated. You do not need to specify this field.
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
   * The ID of the database in Data Management (DMS).
   * 
   * @example
   * 123****
   */
  dmsDatabaseId?: string;
  /**
   * @remarks
   * The ID of the instance in Data Management (DMS).
   * 
   * @example
   * 248*****
   */
  dmsInstanceId?: string;
  /**
   * @remarks
   * The database type.
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
   * **[Deprecated]** This field is deprecated. You do not need to specify this field.
   * 
   * @example
   * localhost
   */
  location?: string;
  /**
   * @remarks
   * The permission constraints for querying the current data source. The permission constraint feature is in canary release. If you are not in the canary release scope, specifying this field will not take effect.
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
   * The list of table names to be analyzed.
   */
  tables?: string[];
  /**
   * @remarks
   * The data source resource identifier.
   * 
   * @example
   * datalake://abc/def
   */
  uri?: string;
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
      uri: 'Uri',
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
      uri: 'string',
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
   * The default behavior for table-level permissions. This parameter controls whether tables that are not configured in DataSources.N.Permission can be queried. Valid values:
   * - allow: the default value. This value indicates that the blacklist mode is used. By default, all tables can be queried, and the actual permissions are subject to the permissions configured in DMS. Row-level and column-level permissions are enforced only when you configure **row-level and column-level** permissions in DataSources.N.Permission.
   * - deny: This value must be manually specified. This value indicates that the whitelist mode is used. By default, no tables can be queried. A table can be queried only when you configure permissions for the table in DataSources.N.Permission. You can grant full access to a table by not configuring any row-level or column-level restrictions.
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
   * The custom agent ID. A custom agent is an entity used to customize the analysis process. You can create a custom agent in the DataAgent console or by calling the CreateCustomAgent operation. A custom agent ID must be a string that starts with ca-.
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
   * The language. Only Chinese and English are supported. Default value: Chinese. Only uppercase values are supported.
   * 
   * @example
   * ENGLISH
   */
  language?: string;
  /**
   * @remarks
   * The MCP server IDs in the session configurations.
   * 
   * @example
   * 2q1tu90**********6uttu2nw
   */
  mcpServerIds?: string[];
  /**
   * @remarks
   * The mode. Valid values:
   * - **ASK_DATA**: the data query mode.
   * - **ANALYSIS**: the analysis mode.
   * - **INSIGHT**: the insight mode.
   * 
   * @example
   * ANALYSIS
   */
  mode?: string;
  /**
   * @remarks
   * The session level data permission settings. If this parameter is configured multiple times in multi-turn conversations within the same session, the last configuration prevails.
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
   * The text used to add a watermark to the generated PDF report. The text can be up to 64 characters in length.
   * 
   * @example
   * sample-watermark
   */
  reportWaterMark?: string;
  /**
   * @remarks
   * Specifies whether to prohibit user inquiries during the process.
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
  /**
   * @remarks
   * The default report theme ID for the current session.
   * 
   * @example
   * default
   */
  webReportTheme?: string;
  /**
   * @remarks
   * The interaction pattern. Valid values: ANALYSIS (data analytics, default) and CHAT (chat).
   * 
   * @example
   * ANALYSIS
   */
  workMode?: string;
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
      webReportTheme: 'WebReportTheme',
      workMode: 'WorkMode',
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
      webReportTheme: 'string',
      workMode: 'string',
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
   * The prompt that the current report must follow.
   * 
   * @example
   * generate a report
   */
  reportPrompt?: string;
  /**
   * @remarks
   * The report theme. System themes include default, journal, legacy, and neobrutalism, which are globally available theme IDs. You can call the ListDataAgentTheme operation to obtain other available theme IDs.
   * 
   * @example
   * default
   */
  reportTheme?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * - TextReport: The current task generates a text report.
   * - WebReport: The current task generates a web report.
   * Currently, only WebReport is supported.
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
   * The configuration of the report rule. A report task is executed based on this configuration only when MessageType is set to REPORT.
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
   * **[Optimized]** This field is now automatically retrieved in the background. You do not need to specify this field.
   * 
   * @example
   * agent_***
   */
  agentId?: string;
  /**
   * @remarks
   * **[Optimized]** This field is now automatically retrieved in the background. You do not need to specify this field when you call the API operation.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data source information. This parameter can be left empty. You can specify only one data source for this parameter. We recommend that you use the DataSources parameter instead.
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
   * The content of the message sent to the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * what can you do?
   */
  message?: string;
  /**
   * @remarks
   * The message type. Default value: primary.
   * 
   * - In normal interactions with the agent, the message type is primary.
   * - When the message responds to a human-in-the-loop question from the agent, the type must be additional.
   * - When the message triggers report generation, the type must be report.
   * - When the message cancels the current session, the type must be cancel.
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
   * The specific question asked by the agent to the user through human-in-the-loop. This field is required when the message type is additional.
   * 
   * @example
   * Provide the calculation criteria for GMV
   */
  question?: string;
  /**
   * @remarks
   * The current quoted content. This parameter is typically used during interactions with the agent.
   * 
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @remarks
   * **Important**
   * 
   * If this message is a reply to an agent message, such as an agent clarifying a question through ASK_HUMAN, you must accurately pass the checkpoint sequence number carried in the agent message to reply_to. If this message is not a targeted reply, such as requesting the agent to perform further in-depth analysis after the analysis is complete, you can leave reply_to empty or set it to 0.  
   * 
   * This field affects how the agent decides to process the message. Passing an incorrect value may lead to suboptimal analysis results.
   * 
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * @remarks
   * The special configurations for the current session. For the same session, only the configurations passed during the first SendMessage call take effect.
   * 
   * **if can be null:**
   * true
   */
  sessionConfig?: SendChatMessageRequestSessionConfig;
  /**
   * @remarks
   * The session ID. This field is optional and is used for multi-turn sessions.
   * - You can start a session without specifying this field. The response will contain the session ID of the current session.
   * - You can also manually create a session ID by calling the CreateDataAgentSession operation and include the ID when you initiate the session.
   * - If you need multi-turn conversations, such as follow-up questions or confirming execution plans, include the session ID returned by the previous SendChatMessage operation in this operation.
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
   * The OSS bucket of the user. If you leave this parameter empty, the analysis process is securely stored in the built-in storage.
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

