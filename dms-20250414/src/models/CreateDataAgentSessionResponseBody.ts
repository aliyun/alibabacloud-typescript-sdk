// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentSessionResponseBodyDataSessionConfig extends $dara.Model {
  /**
   * @remarks
   * The custom agent ID.
   * 
   * @example
   * ca-e*******ckd
   */
  customAgentId?: string;
  /**
   * @remarks
   * The stage of the custom agent. Valid values:
   * 
   * - **debug**: Debug stage
   * 
   * - **prod**: Production stage
   * 
   * @example
   * debug
   */
  customAgentStage?: string;
  /**
   * @remarks
   * Indicates whether web search is enabled.
   * 
   * @example
   * true
   */
  enableSearch?: boolean;
  encryptKey?: string;
  encryptType?: string;
  kbUuidList?: string[];
  /**
   * @remarks
   * The language. Valid values:
   * 
   * - **CHINESE**: Chinese
   * 
   * - **ENGLISH**: English
   * 
   * @example
   * CHINESE
   */
  language?: string;
  /**
   * @remarks
   * A list of MCP server IDs.
   */
  mcpServerIds?: string[];
  /**
   * @remarks
   * The mode. Valid values:
   * 
   * - **ASK_DATA**: Quick Inquiry Mode
   * 
   * - **ANALYSIS**: Analysis Mode
   * 
   * - **INSIGHT**: Insight Mode
   * 
   * @example
   * ANALYSIS
   */
  mode?: string;
  reportPageWidth?: number;
  reportWaterMark?: string;
  /**
   * @remarks
   * The name of the user\\"s OSS bucket.
   * 
   * - Analysis files and report artifacts can be uploaded to this OSS bucket.
   * 
   * @example
   * user-oss-bucket
   */
  userOssBucket?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      customAgentStage: 'CustomAgentStage',
      enableSearch: 'EnableSearch',
      encryptKey: 'EncryptKey',
      encryptType: 'EncryptType',
      kbUuidList: 'KbUuidList',
      language: 'Language',
      mcpServerIds: 'McpServerIds',
      mode: 'Mode',
      reportPageWidth: 'ReportPageWidth',
      reportWaterMark: 'ReportWaterMark',
      userOssBucket: 'UserOssBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      customAgentStage: 'string',
      enableSearch: 'boolean',
      encryptKey: 'string',
      encryptType: 'string',
      kbUuidList: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      mcpServerIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      reportPageWidth: 'number',
      reportWaterMark: 'string',
      userOssBucket: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kbUuidList)) {
      $dara.Model.validateArray(this.kbUuidList);
    }
    if(Array.isArray(this.mcpServerIds)) {
      $dara.Model.validateArray(this.mcpServerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAgentSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * cu0cs*******mf
   */
  agentId?: string;
  /**
   * @remarks
   * The agent status.
   * 
   * @example
   * RUNNING
   */
  agentStatus?: string;
  /**
   * @remarks
   * The time when the session was created, in Unix milliseconds.
   * 
   * @example
   * 1765262307992
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the associated file.
   * 
   * @example
   * f-8*******01m
   */
  file?: string;
  /**
   * @remarks
   * Indicates whether the current user has favorited the session.
   * 
   * @example
   * false
   */
  saved?: boolean;
  /**
   * @remarks
   * The session configuration.
   */
  sessionConfig?: CreateDataAgentSessionResponseBodyDataSessionConfig;
  /**
   * @remarks
   * The agent session ID.
   * 
   * @example
   * 976*********p
   */
  sessionId?: string;
  /**
   * @remarks
   * The session status.
   * 
   * @example
   * RUNNING
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The session title.
   * 
   * @example
   * 帮我分析一下这份数据，给出报告。
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentStatus: 'AgentStatus',
      createTime: 'CreateTime',
      file: 'File',
      saved: 'Saved',
      sessionConfig: 'SessionConfig',
      sessionId: 'SessionId',
      sessionStatus: 'SessionStatus',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentStatus: 'string',
      createTime: 'number',
      file: 'string',
      saved: 'boolean',
      sessionConfig: CreateDataAgentSessionResponseBodyDataSessionConfig,
      sessionId: 'string',
      sessionStatus: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.sessionConfig && typeof (this.sessionConfig as any).validate === 'function') {
      (this.sessionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response structure.
   */
  data?: CreateDataAgentSessionResponseBodyData;
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
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CB***********3F1A
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
      data: CreateDataAgentSessionResponseBodyData,
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

