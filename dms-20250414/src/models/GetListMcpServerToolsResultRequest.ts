// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListMcpServerToolsResultRequest extends $dara.Model {
  /**
   * @remarks
   * The DMS unit identifier. This is typically the same as the DMSUnit used in the request to start tool detection.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The MCP server ID used when starting the detection. It must match the detection record corresponding to SessionId.
   * 
   * @example
   * 44lg***z65
   */
  mcpServerUuid?: string;
  /**
   * @remarks
   * The temporary session ID returned by StartListMcpServerTools, which is used to locate this connectivity detection task.
   * 
   * @example
   * 1vwe***6wr
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      mcpServerUuid: 'McpServerUuid',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      mcpServerUuid: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

