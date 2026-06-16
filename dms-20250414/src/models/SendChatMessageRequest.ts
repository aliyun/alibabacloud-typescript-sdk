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
   * The data source type. Valid values: `[remote_data_center, database]`, indicating that the analysis is performed on a file or a database respectively.
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
   * The data source type. Valid values: [remote_data_center, database], indicating that the analysis is performed on a file or a database respectively.
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
   * Deprecated. Use the input parameters of CreateAgentSession instead.
   * 
   * @example
   * null
   */
  customAgentId?: string;
  /**
   * @remarks
   * Deprecated. Use the input parameters of CreateAgentSession instead.
   * 
   * @example
   * null
   */
  customAgentStage?: string;
  /**
   * @remarks
   * Only Chinese and English are supported. The default value is Chinese. Only uppercase values are supported.
   * 
   * @example
   * ENGLISH
   */
  language?: string;
  mode?: string;
  /**
   * @remarks
   * The text of up to 64 characters that is used as a watermark in the generated PDF report.
   * 
   * @example
   * 示例水印
   */
  reportWaterMark?: string;
  skipAskHuman?: boolean;
  skipPlan?: boolean;
  skipSqlConfirm?: boolean;
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
  reportPrompt?: string;
  reportTheme?: string;
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
   * The agent ID. This parameter is required. You can obtain the current AgentId from the response of the CreateAgentSession operation. Agent resources have a lifecycle, so the AgentId you need to specify may change with each request.
   * 
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  agentId?: string;
  /**
   * @remarks
   * The Data Management unit you are currently in. If you choose to analyze a database, this information is used to correctly connect to your Data Management instance. You can go to the Data Management console to view your current Data Management unit. If you are a user of Alibaba Cloud China Website (www.aliyun.com), set this parameter to ap-southeast-1.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The data source information. This parameter is optional.
   */
  dataSource?: SendChatMessageRequestDataSource;
  /**
   * @remarks
   * The detailed data source information. This parameter is optional.
   */
  dataSources?: SendChatMessageRequestDataSources[];
  /**
   * @remarks
   * The message content to send to the Agent in this request.
   * 
   * This parameter is required.
   * 
   * @example
   * what can you do?
   */
  message?: string;
  /**
   * @remarks
   * The message type. Default value: `[primary]`. When the message is a response to the Agent\\"s human-in-the-loop question, set this parameter to `[additional]`. When the message is intended to cancel the current session, set this parameter to `[cancel]`.
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
   * The specific question that the Agent asks the user through human-in-the-loop. This parameter is required when the message type is `additional`.
   * 
   * @example
   * 请提供计算GMV的口径。
   */
  question?: string;
  /**
   * @remarks
   * The quoted content, typically used during interaction with the Agent.
   * 
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @remarks
   * Indicates which Agent message this message responds to. Set this parameter to the largest Checkpoint sequence number currently received. Set it to 0 for the first message. This field is used for message deduplication in case of occasional network issues or duplicate message delivery.
   * 
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * @remarks
   * The special configuration for this session. For the same session, only the configuration included in the first SendMessage call takes effect.
   * 
   * **if can be null:**
   * true
   */
  sessionConfig?: SendChatMessageRequestSessionConfig;
  /**
   * @remarks
   * The session ID. This parameter is required. You can obtain the SessionId by calling the CreateAgentSession operation.
   * 
   * This parameter is required.
   * 
   * @example
   * sess_***
   */
  sessionId?: string;
  taskConfig?: SendChatMessageRequestTaskConfig;
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

