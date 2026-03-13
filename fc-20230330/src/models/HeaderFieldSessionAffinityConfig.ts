// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HeaderFieldSessionAffinityConfig extends $dara.Model {
  /**
   * @example
   * test-session-header1
   */
  affinityHeaderFieldName?: string;
  disableSessionIdReuse?: boolean;
  /**
   * @example
   * 20
   */
  sessionConcurrencyPerInstance?: number;
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

