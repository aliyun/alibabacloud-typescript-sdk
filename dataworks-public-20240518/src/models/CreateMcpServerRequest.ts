// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpServerRequestConfig extends $dara.Model {
  /**
   * @remarks
   * The custom request headers, specified as key-value pairs. You cannot override reserved headers.
   * 
   * @example
   * {}
   */
  customHeaders?: { [key: string]: any };
  /**
   * @remarks
   * The transport protocol.
   * 
   * @example
   * SSE
   */
  transport?: string;
  /**
   * @remarks
   * The service address of the MCP Server. It must start with `https://`.
   * 
   * @example
   * https://example.com/mcp/sse
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      customHeaders: 'CustomHeaders',
      transport: 'Transport',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      transport: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.customHeaders) {
      $dara.Model.validateMap(this.customHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpServerRequestVisibilityScope extends $dara.Model {
  /**
   * @remarks
   * The project IDs to which the MCP Server is visible. This parameter is required only when `Visibility` is set to `PROJECT`.
   */
  projectIds?: string[];
  /**
   * @remarks
   * The user IDs to which the MCP Server is visible. This parameter is required only when `Visibility` is set to `USER`.
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      projectIds: 'ProjectIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpServerRequest extends $dara.Model {
  /**
   * @remarks
   * The connection configuration for the MCP Server.
   * 
   * @example
   * -
   */
  config?: CreateMcpServerRequestConfig;
  /**
   * @remarks
   * The name of the MCP Server. The name must be unique at the tenant level. It must start with a lowercase letter and contain only characters from `a-z`, `0-9`, `_`, and `-`.
   * 
   * This parameter is required.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  /**
   * @remarks
   * The visibility level.
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The visibility scope. The required fields depend on the value of the `Visibility` parameter.
   */
  visibilityScope?: CreateMcpServerRequestVisibilityScope;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      visibility: 'Visibility',
      visibilityScope: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: CreateMcpServerRequestConfig,
      name: 'string',
      visibility: 'string',
      visibilityScope: CreateMcpServerRequestVisibilityScope,
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.visibilityScope && typeof (this.visibilityScope as any).validate === 'function') {
      (this.visibilityScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

