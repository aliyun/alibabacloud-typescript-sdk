// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPluginWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 664f1e2xxxx
   */
  organizationId?: string;
  /**
   * @example
   * 987654
   */
  pipelineRunId?: string;
  /**
   * @example
   * 12345678
   */
  repoId?: string;
  /**
   * @example
   * my-custom-plugin
   */
  repoName?: string;
  /**
   * @example
   * https://apigw-console-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/{uid}/plugin/plugin_1756262400.wasm
   */
  wasmUrl?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetPluginWorkspaceResponseBodyData;
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

