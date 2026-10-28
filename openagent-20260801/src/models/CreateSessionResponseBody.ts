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
   * The session status. The value is fixed to `IDLE` upon successful creation.
   * 
   * @example
   * IDLE
   */
  status?: string;
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
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      pinned: 'boolean',
      sessionId: 'string',
      status: 'string',
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
   * The session information of the created session.
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

