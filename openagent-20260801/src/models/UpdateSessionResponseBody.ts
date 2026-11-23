// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the session was created. The time is in RFC 3339 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The ID of the last run.
   * 
   * @example
   * run_example_001
   */
  lastRunId?: string;
  /**
   * @remarks
   * The status of the last run. Valid values: `PENDING` (pending), `RUNNING` (running), `WAITING_USER` (waiting for interrupt handling), `COMPLETED` (completed), `FAILED` (failed), `CANCELLED` (cancelled), and `REJECTED` (rejected).
   * 
   * @example
   * COMPLETED
   */
  lastRunStatus?: string;
  /**
   * @remarks
   * Indicates whether the session is pinned.
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
   * The session status. Valid values: `IDLE` (idle), `ACTIVE` (running), `WAITING_USER_INPUT` (waiting for user input), `WAITING_APPROVAL` (waiting for user confirmation), `WAITING_OUT_OF_BAND_APPROVAL` (waiting for out-of-band approval), and `CLOSED` (closed).
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
   * Indicates whether session UI enhancement is enabled. A value of true indicates that the feature is enabled, and a value of false indicates that the feature is disabled. This feature is supported only for common sessions. If this field is not returned, the feature is considered disabled.
   * 
   * @example
   * true
   */
  uiEnabled?: boolean;
  /**
   * @remarks
   * The time when the session was last updated. The time is in RFC 3339 format.
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
      uiEnabled: 'uiEnabled',
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
      uiEnabled: 'boolean',
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

export class UpdateSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The session information.
   */
  data?: UpdateSessionResponseBodyData;
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
   * Indicates whether the request is successful. A value of true indicates success.
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
      data: UpdateSessionResponseBodyData,
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

