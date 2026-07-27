// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service name of the MCP service.
   * 
   * @example
   * log-query
   */
  mcpServiceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mcpServiceName: 'mcpServiceName',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServiceName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

