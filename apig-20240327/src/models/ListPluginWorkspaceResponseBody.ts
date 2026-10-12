// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Codeup organization ID.
   * 
   * @example
   * 664f1e2xxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * The Codeup repository ID.
   * 
   * @example
   * 12345678
   */
  repoId?: string;
  /**
   * @remarks
   * The repository name (the English ID of the plugin).
   * 
   * @example
   * my-custom-plugin
   */
  repoName?: string;
  /**
   * @remarks
   * The workspace ID (prefixed with plw-).
   * 
   * @example
   * plw-xxxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'organizationId',
      repoId: 'repoId',
      repoName: 'repoName',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      repoId: 'string',
      repoName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListPluginWorkspaceResponseBodyData[];
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
   * Id of the request
   * 
   * @example
   * B690F39C-1BDA-55E0-9E94-5358E758C772
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPluginWorkspaceResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

