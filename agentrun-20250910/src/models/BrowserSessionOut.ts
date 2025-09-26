// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BrowserSessionOut extends $dara.Model {
  browserId?: string;
  browserName?: string;
  createdAt?: string;
  lastUpdatedAt?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sessionId?: string;
  /**
   * @remarks
   * 会话空闲超时时间，单位为秒
   */
  sessionIdleTimeoutSeconds?: number;
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

