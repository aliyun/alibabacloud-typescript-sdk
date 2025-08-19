// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CookieSessionAffinityConfig extends $dara.Model {
  sessionConcurrencyPerInstance?: number;
  sessionIdleTimeoutInSeconds?: number;
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

