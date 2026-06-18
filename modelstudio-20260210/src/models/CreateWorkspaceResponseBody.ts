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
   * @remarks
   * The creation time.
   * 
   * @example
   * 1742785623772
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The service deployment scope. For more information, see [documentation](https://www.alibabacloud.com/help/zh/model-studio/regions/).
   * 
   * @example
   * global
   */
  serviceSite?: string;
  /**
   * @remarks
   * The business workspace ID.
   * 
   * @example
   * ws-ac3ef438bec22dc5
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the business workspace.
   * 
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
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
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
   * Id of the request
   * 
   * @example
   * BB521414-5D38-5E66-AA66-963B2B4200E2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The business workspace information.
   */
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

