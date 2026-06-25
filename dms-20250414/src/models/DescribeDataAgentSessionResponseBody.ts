// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAgentSessionResponseBodyDataArtifacts extends $dara.Model {
  /**
   * @remarks
   * The brief description of the artifact. This value may be empty.
   * 
   * @example
   * a simple report
   */
  description?: string;
  /**
   * @remarks
   * The time when the backend completed the artifact task. This is a UNIX timestamp accurate to the second.
   * 
   * @example
   * 1778743587
   */
  finishTime?: string;
  /**
   * @remarks
   * The globally unique artifact ID. If the report is produced by calling SendChatMessage with MessageType set to REPORT, the artifact ID is the same as the MessageId returned by the SendChatMessage operation.
   * 
   * @example
   * bab******33e1
   */
  id?: string;
  /**
   * @remarks
   * The artifact name. This is typically a string concatenated by the system. It is aligned with the name field in the ListFileUpload operation. You can use this field to query the download URL of the artifact file.
   * 
   * @example
   * report_****_2026****
   */
  name?: string;
  /**
   * @remarks
   * The time when the backend received the artifact request. This is a UNIX timestamp accurate to the second.
   * 
   * @example
   * 1778743587
   */
  receiveTime?: string;
  /**
   * @remarks
   * The time when the backend actually started running the artifact task. This is a UNIX timestamp accurate to the second.
   * 
   * @example
   * 1778743587
   */
  startTime?: string;
  /**
   * @remarks
   * The artifact status. Valid values:
   * 
   * - PENDING: The backend has received the task but has not started it.
   * 
   * - RUNNING: The backend has started the task but has not completed it.
   * 
   * - SUCCESS: The task succeeded. You can query the file information by calling the ListFileUpload operation.
   * 
   * - FAILED: The task failed.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The artifact type. Valid values: TextReport and WebReport.
   * 
   * @example
   * WebReport
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      finishTime: 'FinishTime',
      id: 'Id',
      name: 'Name',
      receiveTime: 'ReceiveTime',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      finishTime: 'string',
      id: 'string',
      name: 'string',
      receiveTime: 'string',
      startTime: 'string',
      status: 'string',
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

export class DescribeDataAgentSessionResponseBodyDataChatHistoryLocations extends $dara.Model {
  /**
   * @remarks
   * The key of the chat replay history.
   * 
   * @example
   * testKey1
   */
  key?: string;
  /**
   * @remarks
   * The OSS download URL of the chat replay history.
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

export class DescribeDataAgentSessionResponseBodyDataDataSources extends $dara.Model {
  /**
   * @remarks
   * The data source category. Valid values:
   * 
   * - **CHAT**: specified through the CreateDataAgentSession or SendChatMessage operation during a conversation.
   * 
   * - **CUSTOM_AGENT**: from the preset analysis data scope in a custom agent.
   * 
   * @example
   * CHAT
   */
  category?: string;
  /**
   * @remarks
   * The data source details.
   * 
   * When Category is CHAT or CUSTOM_AGENT, the structure of Detail is aligned with the structure of a single element in the DataSources parameter of the SendChatMessage operation.
   * 
   * @example
   * {}
   */
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      detail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataAgentSessionResponseBodyDataRecallResults extends $dara.Model {
  /**
   * @remarks
   * The content of the recalled knowledge chunk.
   * 
   * @example
   * sky is blue
   */
  content?: string;
  /**
   * @remarks
   * The similarity score of this data entry. The scoring algorithm is related to the algorithm (l2/ip/cosine) specified when the index was created.
   * 
   * @example
   * 0.65
   */
  score?: number;
  /**
   * @remarks
   * The type of recalled knowledge.
   * 
   * @example
   * memory
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      score: 'number',
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

export class DescribeDataAgentSessionResponseBodyDataSessionConfig extends $dara.Model {
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
   * - **debug**: the debugging stage.
   * - **prod**: the production stage.
   * 
   * @example
   * debug
   */
  customAgentStage?: string;
  /**
   * @remarks
   * Specifies whether to enable web search.
   * 
   * @example
   * True
   */
  enableSearch?: boolean;
  /**
   * @remarks
   * The encryption key for storing artifacts in OSS (including built-in and user-specified OSS). This is typically specified in CreateDataAgentSession.
   * 
   * @example
   * ay***1Te
   */
  encryptKey?: string;
  /**
   * @remarks
   * The encryption type for storing artifacts in OSS (including built-in and user-specified OSS).
   * 
   * @example
   * null
   */
  encryptType?: string;
  /**
   * @remarks
   * The list of knowledge base IDs for this session.
   */
  kbUuidList?: string[];
  /**
   * @remarks
   * The language. Valid values:
   * - **CHINESE**: Chinese.
   * - **ENGLISH**: English.
   * 
   * @example
   * CHINESE
   */
  language?: string;
  /**
   * @remarks
   * The list of MCP server IDs in the session configuration.
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
   * The report page width.
   * 
   * @example
   * 300mm
   */
  reportPageWidth?: number;
  /**
   * @remarks
   * The report watermark.
   * 
   * @example
   * ""
   */
  reportWaterMark?: string;
  /**
   * @remarks
   * The name of the user OSS bucket. Analysis process files and report artifacts can be uploaded to the user-specified OSS bucket.
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
   * The current agent ID.
   * 
   * @example
   * cu0cs*******mf
   */
  agentId?: string;
  /**
   * @remarks
   * The current agent status.
   * 
   * @example
   * RUNNING
   */
  agentStatus?: string;
  /**
   * @remarks
   * The list of artifacts produced by the session. Currently, only reports are included.
   */
  artifacts?: DescribeDataAgentSessionResponseBodyDataArtifacts[];
  /**
   * @remarks
   * The chat replay history.
   */
  chatHistoryLocations?: DescribeDataAgentSessionResponseBodyDataChatHistoryLocations[];
  /**
   * @remarks
   * The time when the session was created.
   * 
   * @example
   * 1731645908000
   */
  createTime?: number;
  /**
   * @remarks
   * The list of data sources used in the current session.
   */
  dataSources?: DescribeDataAgentSessionResponseBodyDataDataSources[];
  /**
   * @remarks
   * Indicates whether the session is saved to favorites in the workspace by the current user.
   * 
   * @example
   * true
   */
  favoriteInWorkspace?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * f-8*******01m
   */
  file?: string;
  /**
   * @remarks
   * The recall results from the knowledge base and memory for this session.
   */
  recallResults?: DescribeDataAgentSessionResponseBodyDataRecallResults[];
  /**
   * @remarks
   * Indicates whether the session is saved to favorites by the current user.
   * 
   * @example
   * true
   */
  saved?: boolean;
  /**
   * @remarks
   * The session configuration item.
   */
  sessionConfig?: DescribeDataAgentSessionResponseBodyDataSessionConfig;
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
   * The title.
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
      artifacts: 'Artifacts',
      chatHistoryLocations: 'ChatHistoryLocations',
      createTime: 'CreateTime',
      dataSources: 'DataSources',
      favoriteInWorkspace: 'FavoriteInWorkspace',
      file: 'File',
      recallResults: 'RecallResults',
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
      artifacts: { 'type': 'array', 'itemType': DescribeDataAgentSessionResponseBodyDataArtifacts },
      chatHistoryLocations: { 'type': 'array', 'itemType': DescribeDataAgentSessionResponseBodyDataChatHistoryLocations },
      createTime: 'number',
      dataSources: { 'type': 'array', 'itemType': DescribeDataAgentSessionResponseBodyDataDataSources },
      favoriteInWorkspace: 'string',
      file: 'string',
      recallResults: { 'type': 'array', 'itemType': DescribeDataAgentSessionResponseBodyDataRecallResults },
      saved: 'boolean',
      sessionConfig: DescribeDataAgentSessionResponseBodyDataSessionConfig,
      sessionId: 'string',
      sessionStatus: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    if(Array.isArray(this.chatHistoryLocations)) {
      $dara.Model.validateArray(this.chatHistoryLocations);
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(Array.isArray(this.recallResults)) {
      $dara.Model.validateArray(this.recallResults);
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
   * The response struct.
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
   * The error message returned if the call failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 18****-*****-*******7A3122F
   */
  requestId?: string;
  /**
   * @remarks
   * The return value. Valid values:
   * 
   * - **true**: The operation was successful.
   * - **false**: The operation failed.
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

