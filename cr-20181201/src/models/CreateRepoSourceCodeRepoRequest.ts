// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoSourceCodeRepoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic building. Valid values:
   * 
   * - `true`: enables automatic building.
   * 
   * - `false`: disables automatic building.
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
   * The namespace name of the source code repository.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace
   */
  codeRepoNamespaceName?: string;
  /**
   * @remarks
   * The type of the source code platform. Valid values: `GITHUB`, `GITLAB`, `GITEE`, `CODE`, and `CODEUP`.
   * 
   * This parameter is required.
   * 
   * @example
   * GITHUB
   */
  codeRepoType?: string;
  /**
   * @remarks
   * Specifies whether to disable the build cache. Valid values:
   * 
   * - `true`: disables the build cache.
   * 
   * - `false`: enables the build cache.
   * 
   * @example
   * false
   */
  disableCacheBuild?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable intelligent build acceleration for overseas sources. Valid values:
   * 
   * - `true`: enables intelligent build acceleration for overseas sources.
   * 
   * - `false`: disables intelligent build acceleration for overseas sources.
   * 
   * @example
   * false
   */
  overseaBuild?: boolean;
  /**
   * @remarks
   * The image repository ID.
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

