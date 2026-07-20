// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MCPStreamableSessionAffinityConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum number of sessions for simultaneous processing by a single instance. Valid values: 1 to 200.
   * 
   * @example
   * 20
   */
  sessionConcurrencyPerInstance?: number;
  /**
   * @remarks
   * The maximum idle time in seconds before a session enters an idle state due to user inactivity. The maximum duration is the upper limit of a single session lifecycle. Valid values: 0 to 21600.
   * 
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * The time-to-live of a session in seconds, covering the entire process from creation and usage to final destruction. If the time-to-live is exceeded, Function Compute automatically destroys the session and no longer guarantees affinity. Valid values: 1 to 21600.
   * 
   * @example
   * 21600
   */
  sessionTTLInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      sessionConcurrencyPerInstance: 'sessionConcurrencyPerInstance',
      sessionIdleTimeoutInSeconds: 'sessionIdleTimeoutInSeconds',
      sessionTTLInSeconds: 'sessionTTLInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionConcurrencyPerInstance: 'number',
      sessionIdleTimeoutInSeconds: 'number',
      sessionTTLInSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

