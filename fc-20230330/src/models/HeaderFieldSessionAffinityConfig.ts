// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HeaderFieldSessionAffinityConfig extends $dara.Model {
  affinityHeaderFieldName?: string;
  disableSessionIdReuse?: boolean;
  sessionConcurrencyPerInstance?: number;
  sessionIdleTimeoutInSeconds?: number;
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

