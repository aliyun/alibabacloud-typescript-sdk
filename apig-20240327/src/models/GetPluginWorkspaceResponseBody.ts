// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPluginWorkspaceResponseBodyData extends $dara.Model {
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
   * The ID of the most recent pipeline run. This parameter is not returned if the plugin has never been built.
   * 
   * @example
   * 987654
   */
  pipelineRunId?: string;
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
   * The OSS download URL of the compiled WASM build output. This parameter is returned only when the pipeline status is SUCCESS.
   * 
   * @example
   * https://apigw-console-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/{uid}/plugin/plugin_1756262400.wasm
   */
  wasmUrl?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * plw-xxxxxxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'organizationId',
      pipelineRunId: 'pipelineRunId',
      repoId: 'repoId',
      repoName: 'repoName',
      wasmUrl: 'wasmUrl',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      pipelineRunId: 'string',
      repoId: 'string',
      repoName: 'string',
      wasmUrl: 'string',
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

export class GetPluginWorkspaceResponseBody extends $dara.Model {
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
  data?: GetPluginWorkspaceResponseBodyData;
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
   * 4AFA893B-A75B-5002-AACF-84CABE06197A
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
      data: GetPluginWorkspaceResponseBodyData,
      message: 'string',
      requestId: 'string',
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

