// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpServerRequestConfig extends $dara.Model {
  /**
   * @example
   * {}
   */
  customHeaders?: { [key: string]: any };
  /**
   * @example
   * SSE
   */
  transport?: string;
  /**
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
  projectIds?: string[];
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
   * @example
   * -
   */
  config?: CreateMcpServerRequestConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  /**
   * @example
   * TENANT
   */
  visibility?: string;
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

