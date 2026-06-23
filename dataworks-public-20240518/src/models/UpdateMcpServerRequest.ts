// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcpServerRequestVisibilityScope extends $dara.Model {
  /**
   * @remarks
   * The list of workspace IDs that can access the MCP Server. This parameter takes effect only when `Visibility` is set to `PROJECT`.
   */
  projectIds?: string[];
  /**
   * @remarks
   * The list of user IDs that can access the MCP Server. This parameter takes effect only when `Visibility` is set to `USER`.
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

export class UpdateMcpServerRequest extends $dara.Model {
  /**
   * @remarks
   * The new custom request headers, specified as key-value pairs.
   * 
   * @example
   * {}
   */
  customHeaders?: { [key: string]: any };
  /**
   * @remarks
   * The name of the MCP Server to update.
   * 
   * This parameter is required.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  /**
   * @remarks
   * The new transport protocol.
   * 
   * @example
   * SSE
   */
  transport?: string;
  /**
   * @remarks
   * The new service address. The address must start with`https://`.
   * 
   * @example
   * https://example.com/mcp/sse
   */
  url?: string;
  /**
   * @remarks
   * The new visibility level.
   * 
   * @example
   * TENANT
   */
  visibility?: string;
  /**
   * @remarks
   * The new visibility scope. The fields in this object depend on the value of the `Visibility` parameter.
   */
  visibilityScope?: UpdateMcpServerRequestVisibilityScope;
  static names(): { [key: string]: string } {
    return {
      customHeaders: 'CustomHeaders',
      name: 'Name',
      transport: 'Transport',
      url: 'Url',
      visibility: 'Visibility',
      visibilityScope: 'VisibilityScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      transport: 'string',
      url: 'string',
      visibility: 'string',
      visibilityScope: UpdateMcpServerRequestVisibilityScope,
    };
  }

  validate() {
    if(this.customHeaders) {
      $dara.Model.validateMap(this.customHeaders);
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

