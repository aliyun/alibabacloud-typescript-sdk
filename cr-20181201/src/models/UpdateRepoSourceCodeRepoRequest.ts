// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRepoSourceCodeRepoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic image building when code is committed. Valid values:
   * 
   * *   `true`: enables automatic image building when code is committed.
   * *   `false`: disables automatic image building when code is committed.
   * 
   * @example
   * true
   */
  autoBuild?: string;
  /**
   * @remarks
   * The ID of the source code repository.
   * 
   * @example
   * crr-cp7d6sget5r****
   */
  codeRepoId?: string;
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
   * The type of the source code hosting platform. Valid values: GITHUB, GITLAB, GITEE, CODE, and CODEUP.
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
  disableCacheBuild?: string;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
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
   * *   `false`: disables Build With Servers Deployed Outside Chinese Mainland.
   * 
   * @example
   * false
   */
  overseaBuild?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-gzsrlevmvoa****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      codeRepoId: 'CodeRepoId',
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
      autoBuild: 'string',
      codeRepoId: 'string',
      codeRepoName: 'string',
      codeRepoNamespaceName: 'string',
      codeRepoType: 'string',
      disableCacheBuild: 'string',
      instanceId: 'string',
      overseaBuild: 'string',
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

