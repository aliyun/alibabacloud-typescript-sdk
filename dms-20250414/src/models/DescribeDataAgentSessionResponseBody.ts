// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAgentSessionResponseBodyDataChatHistoryLocations extends $dara.Model {
  key?: string;
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
   * @example
   * ca-e*******ckd
   */
  customAgentId?: string;
  /**
   * @example
   * debug
   */
  customAgentStage?: string;
  /**
   * @example
   * True
   */
  enableSearch?: boolean;
  /**
   * @example
   * CHINESE
   */
  language?: string;
  mcpServerIds?: string[];
  /**
   * @example
   * ANALYSIS
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      customAgentStage: 'CustomAgentStage',
      enableSearch: 'EnableSearch',
      language: 'Language',
      mcpServerIds: 'McpServerIds',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      customAgentStage: 'string',
      enableSearch: 'boolean',
      language: 'string',
      mcpServerIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
    };
  }

  validate() {
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
   * @example
   * cu0cs*******mf
   */
  agentId?: string;
  agentStatus?: string;
  chatHistoryLocations?: DescribeDataAgentSessionResponseBodyDataChatHistoryLocations[];
  /**
   * @example
   * 1731645908000
   */
  createTime?: number;
  /**
   * @example
   * true
   */
  favoriteInWorkspace?: string;
  /**
   * @example
   * f-8*******01m
   */
  file?: string;
  /**
   * @example
   * true
   */
  saved?: boolean;
  sessionConfig?: DescribeDataAgentSessionResponseBodyDataSessionConfig;
  /**
   * @example
   * 976*********p
   */
  sessionId?: string;
  sessionStatus?: string;
  title?: string;
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
  data?: DescribeDataAgentSessionResponseBodyData;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
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

