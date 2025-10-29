// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BrowserSessionOut extends $dara.Model {
  /**
   * @example
   * browser-1234567890abcdef
   */
  browserId?: string;
  /**
   * @example
   * my-browser-session
   */
  browserName?: string;
  /**
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @example
   * 2025-01-10T11:45:00Z
   */
  lastUpdatedAt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bs-1234567890abcdef
   */
  sessionId?: string;
  /**
   * @remarks
   * 会话空闲超时时间，单位为秒
   * 
   * @example
   * 3600
   */
  sessionIdleTimeoutSeconds?: number;
  /**
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

