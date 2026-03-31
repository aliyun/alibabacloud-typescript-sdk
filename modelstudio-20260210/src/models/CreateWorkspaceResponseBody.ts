// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceResponseBodyWorkspace extends $dara.Model {
  /**
   * @remarks
   * API Host。
   * 
   * @example
   * llm-34o9ts1dai60z5sf.cn-beijing.maas.aliyuncs.com
   */
  apiHost?: string;
  /**
   * @example
   * 1742785623772
   */
  gmtCreate?: number;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * global
   */
  serviceSite?: string;
  /**
   * @example
   * ws-ac3ef438bec22dc5
   */
  workspaceId?: string;
  /**
   * @example
   * default
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      apiHost: 'apiHost',
      gmtCreate: 'gmtCreate',
      region: 'region',
      serviceSite: 'serviceSite',
      workspaceId: 'workspaceId',
      workspaceName: 'workspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHost: 'string',
      gmtCreate: 'number',
      region: 'string',
      serviceSite: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BB521414-5D38-5E66-AA66-963B2B4200E2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  workspace?: CreateWorkspaceResponseBodyWorkspace;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      workspace: CreateWorkspaceResponseBodyWorkspace,
    };
  }

  validate() {
    if(this.workspace && typeof (this.workspace as any).validate === 'function') {
      (this.workspace as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

