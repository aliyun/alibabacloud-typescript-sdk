// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentSessionResponseBodyDataSessionConfig extends $dara.Model {
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
   * The usage stage of the custom agent. Valid values:
   * - **debug**: Debug stage.
   * - **prod**: Production stage.
   * 
   * @example
   * prod
   */
  customAgentStage?: string;
  /**
   * @remarks
   * Specifies whether to enable web search.
   * 
   * @example
   * true
   */
  enableSearch?: boolean;
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
   * The name of the user OSS bucket.
   * 
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
      language: 'Language',
      mode: 'Mode',
      userOssBucket: 'UserOssBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      customAgentStage: 'string',
      enableSearch: 'boolean',
      language: 'string',
      mode: 'string',
      userOssBucket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAgentSessionResponseBodyData extends $dara.Model {
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
   * The session creation time.
   * 
   * @example
   * 1731645908000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the session is favorited by the current logged-in user in the workspace.
   * 
   * @example
   * true
   */
  favoriteInWorkspace?: boolean;
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
   * Indicates whether the session is favorited by the current logged-in user.
   * 
   * @example
   * true
   */
  saved?: boolean;
  /**
   * @remarks
   * The session configuration item.
   */
  sessionConfig?: ListDataAgentSessionResponseBodyDataSessionConfig;
  /**
   * @remarks
   * The Data Agent session ID.
   * 
   * @example
   * h8r********4fch
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
      createTime: 'number',
      favoriteInWorkspace: 'boolean',
      file: 'string',
      saved: 'boolean',
      sessionConfig: ListDataAgentSessionResponseBodyDataSessionConfig,
      sessionId: 'string',
      sessionStatus: 'string',
      title: 'string',
      userId: 'string',
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

export class ListDataAgentSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: ListDataAgentSessionResponseBodyData[];
  /**
   * @remarks
   * The error code returned if the request fails.
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
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The current page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E0D21075-CD3E-4D98-8264-****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 3
   */
  total?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataAgentSessionResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

