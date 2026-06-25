// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageRequestDataSource extends $dara.Model {
  /**
   * @remarks
   * Deprecated. You do not need to specify this parameter.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source type. Valid values: `[remote_data_center, database]`, which indicate whether the current analysis is for a file or a database respectively.
   * 
   * @example
   * remote_data_center
   */
  dataSourceType?: string;
  /**
   * @remarks
   * Deprecated. You do not need to specify this parameter.
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
   * The ID of the instance in DMS.
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
   * Deprecated. You do not need to specify this parameter.
   * 
   * @example
   * localhost
   */
  location?: string;
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
      regionId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
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
   * Deprecated. You do not need to specify this parameter.
   * 
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source type. Valid values: [remote_data_center, database], which indicate whether the current analysis is for a file or a database respectively.
   * 
   * @example
   * remote_data_center
   */
  dataSourceType?: string;
  /**
   * @remarks
   * Deprecated. You do not need to specify this parameter.
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
   * The ID of the database in DMS.
   * 
   * @example
   * 123****
   */
  dmsDatabaseId?: string;
  /**
   * @remarks
   * The ID of the instance in DMS.
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
   * Deprecated. You do not need to specify this parameter.
   * 
   * @example
   * localhost
   */
  location?: string;
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
      regionId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
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

export class SendChatMessageRequestSessionConfig extends $dara.Model {
  /**
   * @remarks
   * Deprecated. The value specified in CreateAgentSession takes precedence.
   * 
   * @example
   * null
   */
  customAgentId?: string;
  /**
   * @remarks
   * Deprecated. The value specified in CreateAgentSession takes precedence.
   * 
   * @example
   * null
   */
  customAgentStage?: string;
  /**
   * @remarks
   * Currently only Chinese and English are supported. The default is Chinese. Only uppercase values are supported.
   * 
   * @example
   * ENGLISH
   */
  language?: string;
  /**
   * @remarks
   * The mode:
   *  - **ASK_DATA**: Ask Data mode
   *  - **ANALYSIS**: Analysis mode
   *  - **INSIGHT**: Insight mode
   * 
   * @example
   * ANALYSIS
   */
  mode?: string;
  /**
   * @remarks
   * You can enter text of up to 64 characters, which will be used as a watermark in the generated PDF report.
   * 
   * @example
   * 示例水印
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
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      customAgentStage: 'CustomAgentStage',
      language: 'Language',
      mode: 'Mode',
      reportWaterMark: 'ReportWaterMark',
      skipAskHuman: 'SkipAskHuman',
      skipPlan: 'SkipPlan',
      skipSqlConfirm: 'SkipSqlConfirm',
      skipWebReportConfirm: 'SkipWebReportConfirm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      customAgentStage: 'string',
      language: 'string',
      mode: 'string',
      reportWaterMark: 'string',
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

export class SendChatMessageRequestTaskConfigReportConfig extends $dara.Model {
  /**
   * @remarks
   * The prompt that this report should follow.
   * 
   * @example
   * generate a report
   */
  reportPrompt?: string;
  /**
   * @remarks
   * The report theme. Currently supported values: [default, journal, legacy, neobrutalism].
   * 
   * @example
   * default
   */
  reportTheme?: string;
  /**
   * @remarks
   * The service type. Valid values: TextReport and WebReport, which indicate whether this task generates a text report or a web report. Currently, only the WebReport type is supported.
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
   * The report rule configuration. Only when MessageType is REPORT, a report task will be executed based on this configuration.
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
   * The agent ID. This is a required field. You can obtain the current AgentId from the return value of the CreateAgentSession operation. Agent resources have a lifecycle, so the AgentId you need to pass in each request may change.
   * 
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  agentId?: string;
  /**
   * @remarks
   * The DMS unit you are currently in. If you choose to analyze a database, this information will be used to correctly connect to your DMS instance through DMS. You can go to the DMS console to check your current DMS unit. If you are a China site user of Alibaba Cloud, you can directly enter cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data source information. This parameter can be left empty. Only one data source can be passed in through this parameter. We recommend that you use the DataSources parameter instead.
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
   * The content of the message to be sent to the Agent.
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
   * - In normal cases, when interacting with the Agent, the message type is `[primary]`.
   * 
   * - When the message is a response to the Agent\\"s Human-in-Loop question, the type should be `[additional]`.
   * 
   * - When the message is intended to trigger a report generation, the type should be `[report]`.
   * 
   * - When the message is intended to cancel the current session, the type should be `[cancel]`.
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
   * This field is required when the message type is `additional`. Pass in the specific question that the Agent asked the user through Human-in-Loop.
   * 
   * @example
   * 请提供计算GMV的口径。
   */
  question?: string;
  /**
   * @remarks
   * Pass in the current quoted content, typically used when interacting with the Agent.
   * 
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @remarks
   * **Important**
   * 
   * When this message is a reply to an Agent message (for example, when the Agent asks for clarification through ASK_HUMAN), reply_to must be set to the exact Checkpoint number carried in that Agent message. If this message is not a specific reply, such as requesting the Agent for further in-depth analysis after analysis is completed, reply_to can be left empty or set to "0".
   * 
   * This field affects how the Agent decides to process the message. Passing an incorrect value may lead to analysis results that do not meet expectations.
   * 
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * @remarks
   * The special configuration for this session. For the same session, only the configuration passed in the first SendMessage call takes effect.
   * 
   * **if can be null:**
   * true
   */
  sessionConfig?: SendChatMessageRequestSessionConfig;
  /**
   * @remarks
   * The session ID. This is a required field. You can obtain the SessionId by calling CreateAgentSession.
   * 
   * This parameter is required.
   * 
   * @example
   * sess_***
   */
  sessionId?: string;
  /**
   * @remarks
   * The configuration items that only affect the current task.
   */
  taskConfig?: SendChatMessageRequestTaskConfig;
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

