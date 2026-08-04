// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListMcpServerToolsResultRequest extends $dara.Model {
  /**
   * @remarks
   * The DMS unit identifier. This value is typically the same as the DMSUnit used in the request that started the tool detection.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The MCP Server ID used when the detection was started. This value must match the detection record associated with the SessionId.
   * 
   * @example
   * 44lg***z65
   */
  mcpServerUuid?: string;
  /**
   * @remarks
   * The temporary session ID returned by StartListMcpServerTools. This ID is used to locate the connectivity detection task.
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

