// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentSessionResponseBodyDataSessionConfig extends $dara.Model {
  /**
   * @remarks
   * Custom Agent ID
   * 
   * @example
   * ca-e*******ckd
   */
  customAgentId?: string;
  /**
   * @remarks
   * Custom Agent usage stage:
   * 
   * - **debug** Debug stage
   * 
   * - **prod** Production stage
   * 
   * @example
   * prod
   */
  customAgentStage?: string;
  /**
   * @remarks
   * Whether web search is enabled
   * 
   * @example
   * true
   */
  enableSearch?: boolean;
  /**
   * @remarks
   * Language
   * 
   * - **CHINESE** Chinese
   * 
   * - **ENGLISH** English
   * 
   * @example
   * CHINESE
   */
  language?: string;
  /**
   * @remarks
   * Mode:
   * 
   * - **ASK_DATA** Quick Inquiry Mode
   * 
   * - **ANALYSIS** Analysis mode
   * 
   * - **INSIGHT** Insight mode
   * 
   * @example
   * ANALYSIS
   */
  mode?: string;
  /**
   * @remarks
   * User OSS bucket name
   * 
   * - Files and reports generated during analysis can be uploaded to the user-specified OSS bucket.
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
   * Current Agent ID
   * 
   * @example
   * cu0cs*******mf
   */
  agentId?: string;
  /**
   * @remarks
   * Current Agent status
   * 
   * @example
   * RUNNING
   */
  agentStatus?: string;
  /**
   * @remarks
   * Session creation time
   * 
   * @example
   * 1731645908000
   */
  createTime?: number;
  /**
   * @remarks
   * Whether the session is saved by the current user in the workspace
   * 
   * @example
   * true
   */
  favoriteInWorkspace?: boolean;
  /**
   * @remarks
   * File ID
   * 
   * @example
   * f-8*******01m
   */
  file?: string;
  /**
   * @remarks
   * Whether the session is saved by the current user
   * 
   * @example
   * true
   */
  saved?: boolean;
  /**
   * @remarks
   * Session configuration
   */
  sessionConfig?: ListDataAgentSessionResponseBodyDataSessionConfig;
  /**
   * @remarks
   * Data Agent session ID
   * 
   * @example
   * h8r********4fch
   */
  sessionId?: string;
  /**
   * @remarks
   * Session status
   * 
   * @example
   * RUNNING
   */
  sessionStatus?: string;
  /**
   * @remarks
   * Title
   * 
   * @example
   * 分析一下这份文件，给出报告。
   */
  title?: string;
  /**
   * @remarks
   * Session owner ID
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
   * Response data
   */
  data?: ListDataAgentSessionResponseBodyData[];
  /**
   * @remarks
   * Error code. Returned when the request fails.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message returned when the call fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Current page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * E0D21075-CD3E-4D98-8264-****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request succeeded. Possible values:
   * 
   * - **true**: The request succeeded.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 3
   */
  total?: number;
  /**
   * @remarks
   * Total number of pages
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

