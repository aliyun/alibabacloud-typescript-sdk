// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAtiChangeLogsResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The unauthorized operation that was attempted.
   * 
   * @example
   * RemoveRspDomainServerHoldStatusForGateway
   */
  authAction?: string;
  /**
   * @remarks
   * The display name of the authorization principal.
   * 
   * @example
   * 2015555733387XXXX
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The owner ID of the authorization principal.
   * 
   * @example
   * 10469733312XXX
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The identity type.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encrypted diagnostic message.
   * 
   * @example
   * AQFohtp4aIbaeEXXXXQxNjFDLUIzMzgtNTXXXX05NkFCLUI2RkY5XXXXzAzQQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The reason for the authentication failure. Valid values:
   * - ExplicitDeny: explicit deny.
   * - ImplicitDeny: implicit deny.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAtiChangeLogsResponseBodyLogsLog extends $dara.Model {
  agentId?: string;
  agentStatus?: string;
  createTimestamp?: number;
  creatorSubType?: string;
  creatorType?: string;
  errorMessage?: string;
  logId?: string;
  operationName?: string;
  operationType?: string;
  operatorAccount?: string;
  result?: string;
  sourceIp?: string;
  timestamp?: number;
  updateTimestamp?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentStatus: 'AgentStatus',
      createTimestamp: 'CreateTimestamp',
      creatorSubType: 'CreatorSubType',
      creatorType: 'CreatorType',
      errorMessage: 'ErrorMessage',
      logId: 'LogId',
      operationName: 'OperationName',
      operationType: 'OperationType',
      operatorAccount: 'OperatorAccount',
      result: 'Result',
      sourceIp: 'SourceIp',
      timestamp: 'Timestamp',
      updateTimestamp: 'UpdateTimestamp',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentStatus: 'string',
      createTimestamp: 'number',
      creatorSubType: 'string',
      creatorType: 'string',
      errorMessage: 'string',
      logId: 'string',
      operationName: 'string',
      operationType: 'string',
      operatorAccount: 'string',
      result: 'string',
      sourceIp: 'string',
      timestamp: 'number',
      updateTimestamp: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAtiChangeLogsResponseBodyLogs extends $dara.Model {
  log?: ListAtiChangeLogsResponseBodyLogsLog[];
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: { 'type': 'array', 'itemType': ListAtiChangeLogsResponseBodyLogsLog },
    };
  }

  validate() {
    if(Array.isArray(this.log)) {
      $dara.Model.validateArray(this.log);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAtiChangeLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial. This field is returned only when RAM authentication fails.
   */
  accessDeniedDetail?: ListAtiChangeLogsResponseBodyAccessDeniedDetail;
  logs?: ListAtiChangeLogsResponseBodyLogs;
  /**
   * @remarks
   * The current page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the address list.
   * 
   * @example
   * 15
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 123
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ListAtiChangeLogsResponseBodyAccessDeniedDetail,
      logs: ListAtiChangeLogsResponseBodyLogs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.logs && typeof (this.logs as any).validate === 'function') {
      (this.logs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

