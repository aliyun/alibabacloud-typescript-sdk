// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NASConfig } from "./Nasconfig";


export class CreateSessionInput extends $dara.Model {
  nasConfig?: NASConfig;
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
      nasConfig: 'nasConfig',
      sessionIdleTimeoutInSeconds: 'sessionIdleTimeoutInSeconds',
      sessionTTLInSeconds: 'sessionTTLInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nasConfig: NASConfig,
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

