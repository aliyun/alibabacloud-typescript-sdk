// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CookieSessionAffinityConfig extends $dara.Model {
  /**
   * @remarks
   * The default value is \\`false\\`. When set to \\`false\\`, a request with the same session ID can be sent after the session expires. The system treats this as a new session and attaches it to a new instance. When set to \\`true\\`, the session ID cannot be reused after the session expires.
   * 
   * @example
   * false
   */
  disableSessionIdReuse?: boolean;
  /**
   * @remarks
   * The maximum number of sessions that a single instance can process at the same time. The value must be an integer from 1 to 200.
   * 
   * @example
   * 20
   */
  sessionConcurrencyPerInstance?: number;
  /**
   * @remarks
   * The duration in seconds that a session can remain idle. If a user is inactive for this period, the session is considered idle. The maximum duration is limited by the session\\"s lifecycle. The value must be between 0 and 21,600.
   * 
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * The total lifecycle of a session in seconds, from creation to destruction. After this period, Function Compute automatically destroys the session and no longer guarantees affinity. The value must be an integer from 1 to 21,600.
   * 
   * @example
   * 21600
   */
  sessionTTLInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      disableSessionIdReuse: 'disableSessionIdReuse',
      sessionConcurrencyPerInstance: 'sessionConcurrencyPerInstance',
      sessionIdleTimeoutInSeconds: 'sessionIdleTimeoutInSeconds',
      sessionTTLInSeconds: 'sessionTTLInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableSessionIdReuse: 'boolean',
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

