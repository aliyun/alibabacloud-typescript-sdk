// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAgentSessionResponseBodyDataChatHistoryLocations extends $dara.Model {
  /**
   * @remarks
   * The key of the session replay history item.
   * 
   * @example
   * testKey1
   */
  key?: string;
  /**
   * @remarks
   * The OSS download URL for the session replay history item.
   * 
   * @example
   * ****
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataAgentSessionResponseBodyDataSessionConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom agent.
   * 
   * @example
   * ca-e*******ckd
   */
  customAgentId?: string;
  /**
   * @remarks
   * The stage of the custom agent. Valid values:
   * 
   * - **debug**: The test stage.
   * 
   * - **prod**: The production stage.
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
   * True
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
   * - **ASK_DATA**: quick inquiry mode
   * 
   * - **ANALYSIS**: analysis mode
   * 
   * - **INSIGHT**: insight mode
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
   * - The service can upload analysis files and reports to this bucket.
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

export class DescribeDataAgentSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent.
   * 
   * @example
   * cu0cs*******mf
   */
  agentId?: string;
  /**
   * @remarks
   * The status of the agent.
   * 
   * @example
   * RUNNING
   */
  agentStatus?: string;
  /**
   * @remarks
   * The session replay history.
   */
  chatHistoryLocations?: DescribeDataAgentSessionResponseBodyDataChatHistoryLocations[];
  /**
   * @remarks
   * The timestamp indicating when the session was created.
   * 
   * @example
   * 1731645908000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the current user has favorited the session in the workspace.
   * 
   * @example
   * true
   */
  favoriteInWorkspace?: string;
  /**
   * @remarks
   * The ID of the file.
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
   * true
   */
  saved?: boolean;
  /**
   * @remarks
   * The configuration of the session.
   */
  sessionConfig?: DescribeDataAgentSessionResponseBodyDataSessionConfig;
  /**
   * @remarks
   * The ID of the agent session.
   * 
   * @example
   * 976*********p
   */
  sessionId?: string;
  /**
   * @remarks
   * The status of the session.
   * 
   * @example
   * RUNNING
   */
  sessionStatus?: string;
  /**
   * @remarks
   * The title of the session.
   * 
   * @example
   * 分析一下这份文件，给出报告。
   */
  title?: string;
  /**
   * @remarks
   * The ID of the session owner.
   * 
   * @example
   * 2096******
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentStatus: 'AgentStatus',
      chatHistoryLocations: 'ChatHistoryLocations',
      createTime: 'CreateTime',
      favoriteInWorkspace: 'FavoriteInWorkspace',
      file: 'File',
      saved: 'Saved',
      sessionConfig: 'SessionConfig',
      sessionId: 'SessionId',
      sessionStatus: 'SessionStatus',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentStatus: 'string',
      chatHistoryLocations: { 'type': 'array', 'itemType': DescribeDataAgentSessionResponseBodyDataChatHistoryLocations },
      createTime: 'number',
      favoriteInWorkspace: 'string',
      file: 'string',
      saved: 'boolean',
      sessionConfig: DescribeDataAgentSessionResponseBodyDataSessionConfig,
      sessionId: 'string',
      sessionStatus: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chatHistoryLocations)) {
      $dara.Model.validateArray(this.chatHistoryLocations);
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

export class DescribeDataAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeDataAgentSessionResponseBodyData;
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
   * The error message returned when the request fails.
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
   * 18****-*****-*******7A3122F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: DescribeDataAgentSessionResponseBodyData,
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

