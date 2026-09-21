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
   * The artifact ID, which is globally unique. If the report is produced by calling SendChatMessage with MessageType set to REPORT, the artifact ID is the same as the MessageId in the response of the SendChatMessage operation.
   * 
   * @example
   * bab******33e1
   */
  id?: string;
  /**
   * @remarks
   * The artifact name, which is typically a string concatenated by the system. This value is aligned with the name field of the ListFileUpload operation. You can use this field to query the download URL of the artifact file.
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
   * The artifact type. Valid values: [TextReport, WebReport].
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

export class DescribeDataAgentSessionResponseBodyDataCapabilities extends $dara.Model {
  /**
   * @remarks
   * The ID of the mounted capability.
   * - If Type is set to skill, this value indicates the skill ID.
   * - If Type is set to dms_kb, this value indicates the knowledge base ID.
   * 
   * @example
   * kb-HZ-s3df*******ld08d
   */
  id?: string;
  /**
   * @remarks
   * The type. Valid values:
   * - skill: skill.
   * - dms_kb: knowledge base.
   * 
   * @example
   * dms_kb
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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
   * The key of the chat history replay record.
   * 
   * @example
   * testKey1
   */
  key?: string;
  /**
   * @remarks
   * The OSS download URL of the chat history replay record.
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
   * The source of the data source. Valid values:
   * 
   * - **CHAT**: Specified during a conversation by calling the CreateDataAgentSession or SendChatMessage operation.
   * 
   * - **CUSTOM_AGENT**: Derived from the preset analysis data scope in a custom agent.
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
   * The similarity score of this record. The scoring algorithm is related to the algorithm (l2/ip/cosine) specified when the index was created.
   * 
   * @example
   * 0.65
   */
  score?: number;
  /**
   * @remarks
   * The category of the recalled knowledge.
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
   * - **debug**: Test stage.
   * - **prod**: Production stage.
   * 
   * @example
   * debug
   */
  customAgentStage?: string;
  /**
   * @remarks
   * Specifies whether web search is enabled.
   * 
   * @example
   * True
   */
  enableSearch?: boolean;
  /**
   * @remarks
   * The encryption key used to store artifacts in OSS (including built-in and user-specified OSS). This is typically specified in CreateDataAgentSession.
   * 
   * @example
   * ay***1Te
   */
  encryptKey?: string;
  /**
   * @remarks
   * The encryption type used to store artifacts in OSS (including built-in and user-specified OSS).
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
   *  - **ASK_DATA**: Ask data mode.
   *  - **ANALYSIS**: Analysis mode.
   *  - **INSIGHT**: Insight mode.
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
   * The name of the user OSS bucket.
   * - Analysis process files and report artifacts can be uploaded to the user-specified OSS bucket.
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
   * The capabilities (knowledge bases, skills, and others) mounted to the session.
   */
  capabilities?: DescribeDataAgentSessionResponseBodyDataCapabilities[];
  /**
   * @remarks
   * The chat history replay records.
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
   * Indicates whether the session is favorited by the current user in the workspace.
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
   * The recall results from knowledge bases and memory in this session.
   */
  recallResults?: DescribeDataAgentSessionResponseBodyDataRecallResults[];
  /**
   * @remarks
   * Indicates whether the session is favorited by the current user.
   * 
   * @example
   * true
   */
  saved?: boolean;
  /**
   * @remarks
   * The session configuration items.
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
   * Analyze this file and generate a report
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
      capabilities: 'Capabilities',
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
      capabilities: { 'type': 'array', 'itemType': DescribeDataAgentSessionResponseBodyDataCapabilities },
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
    if(Array.isArray(this.capabilities)) {
      $dara.Model.validateArray(this.capabilities);
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
   * The error message returned when the call fails.
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
   * The return value description. Valid values:
   * 
   * - **true**: Succeeded.
   * - **false**: Failed.
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

