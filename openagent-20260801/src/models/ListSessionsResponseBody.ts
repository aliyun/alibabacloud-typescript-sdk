// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSessionsResponseBodyDataSessions extends $dara.Model {
  /**
   * @remarks
   * The time when the session was created, in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The ID of the most recent run.
   * 
   * @example
   * run_example_001
   */
  lastRunId?: string;
  /**
   * @remarks
   * The status of the most recent run. Valid values:
   * - `PENDING`: Pending.
   * - `RUNNING`: Running.
   * - `WAITING_USER`: Waiting for interrupt handling.
   * - `COMPLETED`: Completed.
   * - `FAILED`: Failed.
   * - `CANCELLED`: Cancelled.
   * - `REJECTED`: Rejected.
   * 
   * @example
   * COMPLETED
   */
  lastRunStatus?: string;
  /**
   * @remarks
   * Specifies whether the session is pinned.
   * 
   * @example
   * false
   */
  pinned?: boolean;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * session_example_001
   */
  sessionId?: string;
  /**
   * @remarks
   * The session status. Valid values:
   * - `IDLE`: Idle.
   * - `ACTIVE`: Active.
   * - `WAITING_USER_INPUT`: Waiting for user input.
   * - `WAITING_APPROVAL`: Waiting for user confirmation.
   * - `WAITING_OUT_OF_BAND_APPROVAL`: Waiting for out-of-band approval.
   * - `CLOSED`: Closed.
   * 
   * @example
   * IDLE
   */
  status?: string;
  /**
   * @remarks
   * The session title.
   * 
   * @example
   * Cloud resource inspection example
   */
  title?: string;
  /**
   * @remarks
   * The time when the session was last updated, in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:01:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      lastRunId: 'lastRunId',
      lastRunStatus: 'lastRunStatus',
      pinned: 'pinned',
      sessionId: 'sessionId',
      status: 'status',
      title: 'title',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      lastRunId: 'string',
      lastRunStatus: 'string',
      pinned: 'boolean',
      sessionId: 'string',
      status: 'string',
      title: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination token for the next page. A value of null indicates that no more data is available.
   * 
   * @example
   * example-next-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of sessions returned on the current page.
   */
  sessions?: ListSessionsResponseBodyDataSessions[];
  /**
   * @remarks
   * The number of sessions returned on the current page.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      sessions: 'sessions',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      sessions: { 'type': 'array', 'itemType': ListSessionsResponseBodyDataSessions },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of sessions and pagination information for the current page.
   */
  data?: ListSessionsResponseBodyData;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the request is successful. A value of true indicates success.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSessionsResponseBodyData,
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

