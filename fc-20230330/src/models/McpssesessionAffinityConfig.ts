// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MCPSSESessionAffinityConfig extends $dara.Model {
  /**
   * @example
   * 20
   */
  sessionConcurrencyPerInstance?: number;
  /**
   * @example
   * /sse
   */
  sseEndpointPath?: string;
  static names(): { [key: string]: string } {
    return {
      sessionConcurrencyPerInstance: 'sessionConcurrencyPerInstance',
      sseEndpointPath: 'sseEndpointPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionConcurrencyPerInstance: 'number',
      sseEndpointPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

