// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageRequestDataSource extends $dara.Model {
  /**
   * @example
   * 123
   */
  dataSourceId?: string;
  /**
   * @example
   * remote_data_center
   */
  dataSourceType?: string;
  /**
   * @example
   * test_db
   */
  database?: string;
  /**
   * @example
   * fsy_trial
   */
  dbName?: string;
  /**
   * @example
   * 11231
   */
  dmsDatabaseId?: string;
  /**
   * @example
   * 2310246
   */
  dmsInstanceId?: string;
  /**
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @example
   * 353676
   */
  fileId?: string;
  /**
   * @example
   * localhost
   */
  location?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * @example
   * null
   */
  customAgentId?: string;
  /**
   * @example
   * null
   */
  customAgentStage?: string;
  /**
   * @example
   * ENGLISH
   */
  language?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      customAgentStage: 'CustomAgentStage',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      customAgentStage: 'string',
      language: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent_12345
   */
  agentId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  dataSource?: SendChatMessageRequestDataSource;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * what can you do?
   */
  message?: string;
  /**
   * @example
   * primary
   */
  messageType?: string;
  question?: string;
  /**
   * @example
   * {"version":"v0"}
   */
  quotedMessage?: string;
  /**
   * @example
   * 0
   */
  replyTo?: string;
  /**
   * **if can be null:**
   * true
   */
  sessionConfig?: SendChatMessageRequestSessionConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sess_12345
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      DMSUnit: 'DMSUnit',
      dataSource: 'DataSource',
      message: 'Message',
      messageType: 'MessageType',
      question: 'Question',
      quotedMessage: 'QuotedMessage',
      replyTo: 'ReplyTo',
      sessionConfig: 'SessionConfig',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      DMSUnit: 'string',
      dataSource: SendChatMessageRequestDataSource,
      message: 'string',
      messageType: 'string',
      question: 'string',
      quotedMessage: 'string',
      replyTo: 'string',
      sessionConfig: SendChatMessageRequestSessionConfig,
      sessionId: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.sessionConfig && typeof (this.sessionConfig as any).validate === 'function') {
      (this.sessionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

