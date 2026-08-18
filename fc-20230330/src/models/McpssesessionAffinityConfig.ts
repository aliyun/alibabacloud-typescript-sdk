// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MCPSSESessionAffinityConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum number of sessions that a single instance can handle through simultaneous processing. Valid values: 1 to 200.
   * 
   * @example
   * 20
   */
  sessionConcurrencyPerInstance?: number;
  /**
   * @remarks
   * The SSE path.
   * 
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

