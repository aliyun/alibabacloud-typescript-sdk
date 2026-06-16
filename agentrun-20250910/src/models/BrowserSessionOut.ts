// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BrowserSessionOut extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the browser.
   * 
   * @example
   * browser-1234567890abcdef
   */
  browserId?: string;
  /**
   * @remarks
   * The browser name.
   * 
   * @example
   * my-browser-session
   */
  browserName?: string;
  /**
   * @remarks
   * The time the session was created.
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The time the session was last updated.
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * The unique identifier for the session.
   * 
   * This parameter is required.
   * 
   * @example
   * bs-1234567890abcdef
   */
  sessionId?: string;
  /**
   * @remarks
   * The session idle timeout, in seconds.
   * 
   * @example
   * 3600
   */
  sessionIdleTimeoutSeconds?: number;
  /**
   * @remarks
   * The session status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      browserId: 'browserId',
      browserName: 'browserName',
      createdAt: 'createdAt',
      lastUpdatedAt: 'lastUpdatedAt',
      sessionId: 'sessionId',
      sessionIdleTimeoutSeconds: 'sessionIdleTimeoutSeconds',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserId: 'string',
      browserName: 'string',
      createdAt: 'string',
      lastUpdatedAt: 'string',
      sessionId: 'string',
      sessionIdleTimeoutSeconds: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

