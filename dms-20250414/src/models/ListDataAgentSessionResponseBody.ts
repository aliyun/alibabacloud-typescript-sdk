// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentSessionResponseBodyDataSessionConfig extends $dara.Model {
  /**
   * @example
   * ca-e*******ckd
   */
  customAgentId?: string;
  /**
   * @example
   * prod
   */
  customAgentStage?: string;
  /**
   * @example
   * true
   */
  enableSearch?: boolean;
  /**
   * @example
   * CHINESE
   */
  language?: string;
  /**
   * @example
   * ANALYSIS
   */
  mode?: string;
  /**
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
   * @example
   * cu0cs*******mf
   */
  agentId?: string;
  /**
   * @example
   * RUNNING
   */
  agentStatus?: string;
  /**
   * @example
   * 1731645908000
   */
  createTime?: number;
  /**
   * @example
   * true
   */
  favoriteInWorkspace?: boolean;
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
  sessionConfig?: ListDataAgentSessionResponseBodyDataSessionConfig;
  /**
   * @example
   * h8r********4fch
   */
  sessionId?: string;
  /**
   * @example
   * RUNNING
   */
  sessionStatus?: string;
  title?: string;
  /**
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
  data?: ListDataAgentSessionResponseBodyData[];
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3
   */
  total?: number;
  /**
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

