// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpResponseBodyDataAuthDirectProxy extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * mcp-example
   */
  name?: string;
  /**
   * @remarks
   * The authentication parameter value.
   * 
   * @example
   * example-credential
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpResponseBodyDataAuthHttpToMcp extends $dara.Model {
  /**
   * @remarks
   * The authentication credential.
   * 
   * @example
   * example-credential
   */
  credential?: string;
  /**
   * @remarks
   * The authentication scheme ID.
   * 
   * @example
   * mcp-1234567890abcdef
   */
  id?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * mcp-example
   */
  name?: string;
  /**
   * @remarks
   * The position of the credential.
   * 
   * @example
   * header
   */
  position?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      credential: 'credential',
      id: 'id',
      name: 'name',
      position: 'position',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credential: 'string',
      id: 'string',
      name: 'string',
      position: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpResponseBodyDataAuth extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration for direct proxy.
   */
  directProxy?: CreateMcpResponseBodyDataAuthDirectProxy;
  /**
   * @remarks
   * Specifies whether to enable authentication.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of HTTP_TO_MCP authentication configurations.
   */
  httpToMcp?: CreateMcpResponseBodyDataAuthHttpToMcp[];
  static names(): { [key: string]: string } {
    return {
      directProxy: 'directProxy',
      enabled: 'enabled',
      httpToMcp: 'httpToMcp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directProxy: CreateMcpResponseBodyDataAuthDirectProxy,
      enabled: 'boolean',
      httpToMcp: { 'type': 'array', 'itemType': CreateMcpResponseBodyDataAuthHttpToMcp },
    };
  }

  validate() {
    if(this.directProxy && typeof (this.directProxy as any).validate === 'function') {
      (this.directProxy as any).validate();
    }
    if(Array.isArray(this.httpToMcp)) {
      $dara.Model.validateArray(this.httpToMcp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of MCP service addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * The backend authentication configuration. enabled indicates whether authentication is enabled. directProxy specifies custom authentication headers for direct proxy. httpToMcp specifies the OpenAPI credential list for HTTP_TO_MCP.
   */
  auth?: CreateMcpResponseBodyDataAuth;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * A sample description that explains the purpose of the resource
   */
  description?: string;
  /**
   * @remarks
   * The MCP server configuration.
   * 
   * @example
   * {"type":"object"}
   */
  mcpServerConfig?: string;
  /**
   * @remarks
   * The MCP server ID.
   * 
   * @example
   * mcp-1234567890abcdef
   */
  mcpServerId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * mcp-example
   */
  name?: string;
  /**
   * @remarks
   * The MCP protocol.
   * 
   * @example
   * SSE
   */
  protocol?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The status reason.
   * 
   * @example
   * Resource processing completed
   */
  statusReason?: string;
  /**
   * @remarks
   * The Swagger configuration.
   * 
   * @example
   * {"type":"object"}
   */
  swaggerConfig?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      auth: 'auth',
      description: 'description',
      mcpServerConfig: 'mcpServerConfig',
      mcpServerId: 'mcpServerId',
      name: 'name',
      protocol: 'protocol',
      status: 'status',
      statusReason: 'statusReason',
      swaggerConfig: 'swaggerConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      auth: CreateMcpResponseBodyDataAuth,
      description: 'string',
      mcpServerConfig: 'string',
      mcpServerId: 'string',
      name: 'string',
      protocol: 'string',
      status: 'string',
      statusReason: 'string',
      swaggerConfig: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.auth && typeof (this.auth as any).validate === 'function') {
      (this.auth as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateMcpResponseBodyData;
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
   * Request processed successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: CreateMcpResponseBodyData,
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

