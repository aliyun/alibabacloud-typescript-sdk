// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSessionResponseBodyData extends $dara.Model {
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
   * The ID of the last run.
   * 
   * @example
   * run_example_001
   */
  lastRunId?: string;
  /**
   * @remarks
   * The status of the last run. Valid values:
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

