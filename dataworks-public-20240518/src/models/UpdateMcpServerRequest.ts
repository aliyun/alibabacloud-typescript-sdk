// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcpServerRequestVisibilityScope extends $dara.Model {
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

export class UpdateMcpServerRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  customHeaders?: { [key: string]: any };
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
   * SSE
   */
  transport?: string;
  /**
   * @example
   * https://example.com/mcp/sse
   */
  url?: string;
  /**
   * @example
   * TENANT
   */
  visibility?: string;
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

