// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSourceCodeRepoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to trigger image building when source code is committed. Valid values:
   * 
   * *   `true`: triggers image building when source code is committed.
   * *   `false`: does not trigger image building when source code is committed.
   * 
   * @example
   * true
   */
  autoBuild?: boolean;
  /**
   * @remarks
   * The name of the source code repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo
   */
  codeRepoName?: string;
  /**
   * @remarks
   * The namespace to which the source code repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace
   */
  codeRepoNamespaceName?: string;
  /**
   * @remarks
   * The type of the source code hosting platform. Valid values: `GITHUB`, `GITLAB`, `GITEE`, `CODE`, and `CODEUP`.
   * 
   * This parameter is required.
   * 
   * @example
   * GITHUB
   */
  codeRepoType?: string;
  /**
   * @remarks
   * Specifies whether to disable building caches. Valid values:
   * 
   * *   `true`: disables building caches.
   * *   `false`: enables building caches.
   * 
   * @example
   * false
   */
  disableCacheBuild?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable Build With Servers Deployed Outside Chinese Mainland. Valid values:
   * 
   * *   `true`: enables Build With Servers Deployed Outside Chinese Mainland.
   * *   `false`: does not enable Build With Servers Deployed Outside Chinese Mainland.
   * 
   * @example
   * false
   */
  overseaBuild?: boolean;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-gzsrlevmvoaq****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      codeRepoName: 'CodeRepoName',
      codeRepoNamespaceName: 'CodeRepoNamespaceName',
      codeRepoType: 'CodeRepoType',
      disableCacheBuild: 'DisableCacheBuild',
      instanceId: 'InstanceId',
      overseaBuild: 'OverseaBuild',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      codeRepoName: 'string',
      codeRepoNamespaceName: 'string',
      codeRepoType: 'string',
      disableCacheBuild: 'boolean',
      instanceId: 'string',
      overseaBuild: 'boolean',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

