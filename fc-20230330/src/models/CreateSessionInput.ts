// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NASConfig } from "./Nasconfig";


export class CreateSessionInput extends $dara.Model {
  disableSessionIdReuse?: boolean;
  nasConfig?: NASConfig;
  /**
   * @example
   * custom-test-session-id
   */
  sessionId?: string;
  /**
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @example
   * 21600
   */
  sessionTTLInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      disableSessionIdReuse: 'disableSessionIdReuse',
      nasConfig: 'nasConfig',
      sessionId: 'sessionId',
      sessionIdleTimeoutInSeconds: 'sessionIdleTimeoutInSeconds',
      sessionTTLInSeconds: 'sessionTTLInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableSessionIdReuse: 'boolean',
      nasConfig: NASConfig,
      sessionId: 'string',
      sessionIdleTimeoutInSeconds: 'number',
      sessionTTLInSeconds: 'number',
    };
  }

  validate() {
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

