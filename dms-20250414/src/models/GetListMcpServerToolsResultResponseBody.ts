// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListMcpServerToolsResultResponseBodyDataTools extends $dara.Model {
  /**
   * @remarks
   * The description of the MCP tool functionality.
   * 
   * @example
   * query user information by user ID
   */
  description?: string;
  /**
   * @remarks
   * The JSON Schema string of the tool input parameters.
   * 
   * @example
   * {"type":"object","properties":{"userId":{"type":"string"}}}
   */
  inputSchema?: string;
  /**
   * @remarks
   * The MCP tool name.
   * 
   * @example
   * query_user
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputSchema: 'InputSchema',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputSchema: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListMcpServerToolsResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the MCP Server is accessible. The value is true only when State is success.
   * 
   * @example
   * true
   */
  accessible?: boolean;
  /**
   * @remarks
   * The detection status. Valid values:
   * - pending: The detection is in progress.
   * - success: The detection succeeded.
   * - failed: The detection failed or timed out.
   * 
   * The top-level Success field can be true in all three business states.
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The list of detected MCP tools. A non-empty list is returned only when State is success.
   */
  tools?: GetListMcpServerToolsResultResponseBodyDataTools[];
  static names(): { [key: string]: string } {
    return {
      accessible: 'Accessible',
      state: 'State',
      tools: 'Tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessible: 'boolean',
      state: 'string',
      tools: { 'type': 'array', 'itemType': GetListMcpServerToolsResultResponseBodyDataTools },
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListMcpServerToolsResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The MCP Server connectivity detection result. The business status is distinguished by the State field.
   */
  data?: GetListMcpServerToolsResultResponseBodyData;
  /**
   * @remarks
   * The return code. The value success is returned if the request succeeds. An error code is returned if the request fails.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when a system-level request failure occurs.
   * 
   * @example
   * no mcp connect test record for session
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate this API call.
   * 
   * @example
   * 550***544
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetListMcpServerToolsResultResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

