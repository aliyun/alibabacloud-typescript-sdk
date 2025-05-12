// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepoSourceCodeRepoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether image building is automatically triggered when source code is committed. Valid values:
   * 
   * *   `true`: Image building is automatically triggered when source code is committed.
   * *   `false`: Image building is not triggered when source code is committed.
   * 
   * @example
   * true
   */
  autoBuild?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The address of the source code repository.
   * 
   * @example
   * https://github.com
   */
  codeRepoDomain?: string;
  /**
   * @remarks
   * The name of the source code repository.
   * 
   * @example
   * repo
   */
  codeRepoName?: string;
  /**
   * @remarks
   * The namespace to which the source code repository belongs.
   * 
   * @example
   * namespace
   */
  codeRepoNamespaceName?: string;
  /**
   * @remarks
   * The type of the code hosting platform. Valid values: `GITHUB`, `GITLAB`, `GITEE`, `CODE`, and `CODEUP`.
   * 
   * @example
   * GITHUB
   */
  codeRepoType?: string;
  /**
   * @remarks
   * Indicates whether build cache is disabled. Valid values:
   * 
   * *   `true`: Build cache is disabled.
   * *   `false`: Build cache is enabled.
   * 
   * @example
   * false
   */
  disableCacheBuild?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * Indicates whether image building is accelerated for servers outside the Chinese mainland. Valid values:
   * 
   * *   `true`: Image building is accelerated for servers outside the Chinese mainland.
   * *   `false`: Image building is not accelerated for servers outside the Chinese mainland.
   * 
   * @example
   * false
   */
  overseaBuild?: string;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * @example
   * crr-gzsrlevmvoaq****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4CE1F661-75DD-4EBD-A4AD-057B26834ABB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      code: 'Code',
      codeRepoDomain: 'CodeRepoDomain',
      codeRepoName: 'CodeRepoName',
      codeRepoNamespaceName: 'CodeRepoNamespaceName',
      codeRepoType: 'CodeRepoType',
      disableCacheBuild: 'DisableCacheBuild',
      isSuccess: 'IsSuccess',
      overseaBuild: 'OverseaBuild',
      repoId: 'RepoId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'string',
      code: 'string',
      codeRepoDomain: 'string',
      codeRepoName: 'string',
      codeRepoNamespaceName: 'string',
      codeRepoType: 'string',
      disableCacheBuild: 'string',
      isSuccess: 'boolean',
      overseaBuild: 'string',
      repoId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

