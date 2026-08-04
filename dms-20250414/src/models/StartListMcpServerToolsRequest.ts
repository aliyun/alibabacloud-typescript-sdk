// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartListMcpServerToolsRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the Data Management unit that runs the Data Agent resources.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The language used for the detection session.
   * 
   * @example
   * CHINESE
   */
  language?: string;
  /**
   * @remarks
   * The ID of the MCP Server for which to detect connectivity and query the tool list. Only the service creator can trigger the detection.
   * 
   * @example
   * 44lg***z65
   */
  mcpServerUuid?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      language: 'Language',
      mcpServerUuid: 'McpServerUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      language: 'string',
      mcpServerUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

