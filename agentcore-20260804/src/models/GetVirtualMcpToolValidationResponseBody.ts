// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVirtualMcpToolValidationResponseBodyDataItemsSourcesToolsCurrentDefinition extends $dara.Model {
  /**
   * @remarks
   * The JSON Schema for input parameters.
   * 
   * @example
   * {"type":"object","properties":{}}
   */
  inputSchema?: string;
  /**
   * @remarks
   * The JSON Schema for output results.
   * 
   * @example
   * {"type":"object","properties":{"time":{"type":"string"}}}
   */
  outputSchema?: string;
  /**
   * @remarks
   * The tool description.
   * 
   * @example
   * Get the current time
   */
  toolDescription?: string;
  /**
   * @remarks
   * The tool name.
   * 
   * @example
   * get-current-time
   */
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      inputSchema: 'inputSchema',
      outputSchema: 'outputSchema',
      toolDescription: 'toolDescription',
      toolName: 'toolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputSchema: 'string',
      outputSchema: 'string',
      toolDescription: 'string',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVirtualMcpToolValidationResponseBodyDataItemsSourcesTools extends $dara.Model {
  /**
   * @remarks
   * The current definition. This field is not returned if the read operation fails or the tool does not exist.
   */
  currentDefinition?: GetVirtualMcpToolValidationResponseBodyDataItemsSourcesToolsCurrentDefinition;
  /**
   * @remarks
   * The digest of the current definition.
   * 
   * @example
   * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
   */
  currentDigest?: string;
  /**
   * @remarks
   * The name of the source tool.
   * 
   * @example
   * get-current-time
   */
  name?: string;
  /**
   * @remarks
   * The digest saved upon selection.
   * 
   * @example
   * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
   */
  savedDigest?: string;
  /**
   * @remarks
   * The tool status. Valid values: UNCHANGED, CHANGED, REMOVED, and UNKNOWN.
   * 
   * @example
   * UNCHANGED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentDefinition: 'currentDefinition',
      currentDigest: 'currentDigest',
      name: 'name',
      savedDigest: 'savedDigest',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentDefinition: GetVirtualMcpToolValidationResponseBodyDataItemsSourcesToolsCurrentDefinition,
      currentDigest: 'string',
      name: 'string',
      savedDigest: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.currentDefinition && typeof (this.currentDefinition as any).validate === 'function') {
      (this.currentDefinition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVirtualMcpToolValidationResponseBodyDataItemsSources extends $dara.Model {
  /**
   * @remarks
   * The IDs of the virtual MCPs that reference this source. This field is for display purposes only.
   */
  affectedVirtualMcps?: string[];
  /**
   * @remarks
   * The source check time in UTC ISO 8601 format.
   * 
   * @example
   * 2026-11-25T10:00:03Z
   */
  checkedAt?: string;
  /**
   * @remarks
   * The source MCP ID.
   * 
   * @example
   * mcp-server-source-1
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The reason code for an unreadable source. A read failure is not treated as tool deletion.
   * 
   * @example
   * SourceUnavailable
   */
  reasonCode?: string;
  /**
   * @remarks
   * The source read status. Valid values: AVAILABLE and UNKNOWN.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The validation results of the selected tools.
   */
  tools?: GetVirtualMcpToolValidationResponseBodyDataItemsSourcesTools[];
  static names(): { [key: string]: string } {
    return {
      affectedVirtualMcps: 'affectedVirtualMcps',
      checkedAt: 'checkedAt',
      mcpServerId: 'mcpServerId',
      reasonCode: 'reasonCode',
      status: 'status',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedVirtualMcps: { 'type': 'array', 'itemType': 'string' },
      checkedAt: 'string',
      mcpServerId: 'string',
      reasonCode: 'string',
      status: 'string',
      tools: { 'type': 'array', 'itemType': GetVirtualMcpToolValidationResponseBodyDataItemsSourcesTools },
    };
  }

  validate() {
    if(Array.isArray(this.affectedVirtualMcps)) {
      $dara.Model.validateArray(this.affectedVirtualMcps);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVirtualMcpToolValidationResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The revision number of this check.
   * 
   * @example
   * 3
   */
  checkedRevision?: number;
  /**
   * @remarks
   * The results returned by source.
   */
  sources?: GetVirtualMcpToolValidationResponseBodyDataItemsSources[];
  /**
   * @remarks
   * The ID of the checked virtual MCP.
   * 
   * @example
   * mcp-server-virtual-1
   */
  virtualMcpServerId?: string;
  static names(): { [key: string]: string } {
    return {
      checkedRevision: 'checkedRevision',
      sources: 'sources',
      virtualMcpServerId: 'virtualMcpServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkedRevision: 'number',
      sources: { 'type': 'array', 'itemType': GetVirtualMcpToolValidationResponseBodyDataItemsSources },
      virtualMcpServerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVirtualMcpToolValidationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The validation submission time in UTC ISO 8601 format.
   * 
   * @example
   * 2026-11-25T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Returned only when the status is FAILED. Workspace.NotFound indicates that the workspace no longer exists during execution. ValidationFailed indicates a task execution exception. Source MCP read failures are returned through items.sources.reasonCode, and the corresponding task status is PARTIAL_FAILED.
   * 
   * @example
   * ValidationFailed
   */
  failureCode?: string;
  /**
   * @remarks
   * The security reason description returned only when the status is FAILED. It does not contain internal exceptions, credentials, or upstream raw responses. When you query a failed task, the API operation itself still succeeds. You need to read data.status and this field.
   * 
   * @example
   * Failed to validate virtual MCP tools.
   */
  failureMessage?: string;
  /**
   * @remarks
   * The validation completion time in UTC ISO 8601 format.
   * 
   * @example
   * 2026-11-25T10:00:05Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The itemized validation report. It does not modify tool selection.
   */
  items?: GetVirtualMcpToolValidationResponseBodyDataItems[];
  /**
   * @remarks
   * The validation status. Valid values: PENDING, RUNNING, COMPLETED, PARTIAL_FAILED, and FAILED.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The validation task ID.
   * 
   * @example
   * val-1234567890
   */
  validationId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      failureCode: 'failureCode',
      failureMessage: 'failureMessage',
      finishedAt: 'finishedAt',
      items: 'items',
      status: 'status',
      validationId: 'validationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      failureCode: 'string',
      failureMessage: 'string',
      finishedAt: 'string',
      items: { 'type': 'array', 'itemType': GetVirtualMcpToolValidationResponseBodyDataItems },
      status: 'string',
      validationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVirtualMcpToolValidationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The validation result.
   */
  data?: GetVirtualMcpToolValidationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVirtualMcpToolValidationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

