// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpRequestBodyAuthDirectProxy extends $dara.Model {
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

export class CreateMcpRequestBodyAuthHttpToMcp extends $dara.Model {
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

export class CreateMcpRequestBodyAuth extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration for direct proxy.
   */
  directProxy?: CreateMcpRequestBodyAuthDirectProxy;
  /**
   * @remarks
   * Specifies whether to enable authentication.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of HTTP_TO_MCP authentication configurations.
   */
  httpToMcp?: CreateMcpRequestBodyAuthHttpToMcp[];
  static names(): { [key: string]: string } {
    return {
      directProxy: 'directProxy',
      enabled: 'enabled',
      httpToMcp: 'httpToMcp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directProxy: CreateMcpRequestBodyAuthDirectProxy,
      enabled: 'boolean',
      httpToMcp: { 'type': 'array', 'itemType': CreateMcpRequestBodyAuthHttpToMcp },
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

export class CreateMcpRequestBody extends $dara.Model {
  /**
   * @remarks
   * The list of MCP service addresses.
   * 
   * This parameter is required.
   */
  addresses?: string[];
  /**
   * @remarks
   * The backend authentication configuration. When enabled is set to true: for DIRECT_PROXY, specify directProxy (name/value). For HTTP_TO_MCP, specify the httpToMcp array (each item contains id/type/credential. For apiKey, position/name are also required). Multiple authentication objects are supported, and the first one is used as the default upstream credential. HTTP_TO_MCP credentials are merged into the securitySchemes of the Swagger specification.
   */
  auth?: CreateMcpRequestBodyAuth;
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
   * The MCP name.
   * 
   * This parameter is required.
   * 
   * @example
   * my-mcp-server
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
   * The Swagger configuration. Specify this field if Type is set to HTTP_TO_MCP.
   * 
   * @example
   * {"type":"object"}
   */
  swaggerConfig?: string;
  /**
   * @remarks
   * The type.
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECT_PROXY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      auth: 'auth',
      description: 'description',
      name: 'name',
      protocol: 'protocol',
      swaggerConfig: 'swaggerConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      auth: CreateMcpRequestBodyAuth,
      description: 'string',
      name: 'string',
      protocol: 'string',
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

export class CreateMcpRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: CreateMcpRequestBody;
  /**
   * @remarks
   * The client idempotency token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateMcpRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

