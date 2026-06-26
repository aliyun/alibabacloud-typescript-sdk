// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HeaderFieldSessionAffinityConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the HTTP request header that passes the client session identity. The name must be 5 to 40 characters long, start with a letter, and contain only letters, numbers, hyphens (-), and underscores (_). The name cannot start with the x-fc- prefix.
   * 
   * @example
   * test-session-header1
   */
  affinityHeaderFieldName?: string;
  /**
   * @remarks
   * The default value is False. If set to False, a session ID can be reused in a new request after the original session expires. The system treats this as a new session and attaches it to a new instance. If set to True, an expired session ID cannot be reused.
   * 
   * @example
   * false
   */
  disableSessionIdReuse?: boolean;
  /**
   * @remarks
   * The maximum number of sessions that a single instance can process simultaneously. The value must be an integer from 1 to 200.
   * 
   * @example
   * 20
   */
  sessionConcurrencyPerInstance?: number;
  /**
   * @remarks
   * The idle timeout period for a session in seconds. A session becomes idle if no operations are performed within this period. The maximum value cannot exceed the session\\"s TTL. The value must be an integer from 0 to 21600.
   * 
   * @example
   * 1800
   */
  sessionIdleTimeoutInSeconds?: number;
  /**
   * @remarks
   * The session\\"s Time to Live (TTL) in seconds. This defines the entire lifecycle of a session, from creation to destruction. After this period expires, Function Compute automatically destroys the session and no longer guarantees affinity. The value must be an integer from 1 to 21600.
   * 
   * @example
   * 21600
   */
  sessionTTLInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      affinityHeaderFieldName: 'affinityHeaderFieldName',
      disableSessionIdReuse: 'disableSessionIdReuse',
      sessionConcurrencyPerInstance: 'sessionConcurrencyPerInstance',
      sessionIdleTimeoutInSeconds: 'sessionIdleTimeoutInSeconds',
      sessionTTLInSeconds: 'sessionTTLInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affinityHeaderFieldName: 'string',
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

