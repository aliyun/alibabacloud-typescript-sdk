// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSessionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the session was created, in ISO 8601 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createdAt?: string;
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
   * The session status. The value is fixed to `IDLE` when the session is successfully created.
   * 
   * @example
   * IDLE
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether session UI enhancement is enabled. A value of true indicates that it is enabled, and a value of false indicates that it is disabled. Only common sessions support this feature. If this field is not returned, it is considered disabled.
   * 
   * @example
   * true
   */
  uiEnabled?: boolean;
  /**
   * @remarks
   * The time when the session was last updated, in ISO 8601 format.
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      pinned: 'pinned',
      sessionId: 'sessionId',
      status: 'status',
      uiEnabled: 'uiEnabled',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      pinned: 'boolean',
      sessionId: 'string',
      status: 'string',
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

export class CreateSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The created session information.
   */
  data?: CreateSessionResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: CreateSessionResponseBodyData,
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

