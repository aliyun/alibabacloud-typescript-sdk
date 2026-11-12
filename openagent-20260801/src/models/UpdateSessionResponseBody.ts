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
   * The status of the last run. Valid values:
   * - `PENDING`: pending
   * - `RUNNING`: running
   * - `WAITING_USER`: waiting for interrupt handling
   * - `COMPLETED`: completed
   * - `FAILED`: failed
   * - `CANCELLED`: cancelled
   * - `REJECTED`: rejected
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
   * The ID of the session.
   * 
   * @example
   * session_example_001
   */
  sessionId?: string;
  /**
   * @remarks
   * The status of the session. Valid values:
   * - `IDLE`: idle
   * - `ACTIVE`: running
   * - `WAITING_USER_INPUT`: waiting for user input
   * - `WAITING_APPROVAL`: waiting for user confirmation
   * - `WAITING_OUT_OF_BAND_APPROVAL`: waiting for out-of-band approval
   * - `CLOSED`: closed
   * 
   * @example
   * IDLE
   */
  status?: string;
  /**
   * @remarks
   * The title of the session.
   * 
   * @example
   * Cloud resource inspection example
   */
  title?: string;
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
   * The ID of the request. You can use the ID to locate and troubleshoot issues.
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

