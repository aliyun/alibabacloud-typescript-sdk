// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepositoryRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  description?: string;
  /**
   * @example
   * Java
   */
  gitignoreType?: string;
  /**
   * @example
   * codeup-test
   */
  importAccount?: string;
  /**
   * @example
   * true
   */
  importDemoProject?: boolean;
  /**
   * @example
   * GIT
   */
  importRepoType?: string;
  /**
   * @example
   * xxxxx
   */
  importToken?: string;
  /**
   * @example
   * text
   */
  importTokenEncrypted?: string;
  /**
   * @example
   * https://github.com/a/b.git
   */
  importUrl?: string;
  /**
   * @example
   * true
   */
  initStandardService?: boolean;
  /**
   * @example
   * false
   */
  isCryptoEnabled?: boolean;
  /**
   * @example
   * ""
   */
  localImportUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  namespaceId?: number;
  path?: string;
  /**
   * @example
   * USER_GUIDE
   */
  readmeType?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: number;
  /**
   * @example
   * true
   */
  createParentPath?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  /**
   * @example
   * false
   */
  sync?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      avatarUrl: 'avatarUrl',
      description: 'description',
      gitignoreType: 'gitignoreType',
      importAccount: 'importAccount',
      importDemoProject: 'importDemoProject',
      importRepoType: 'importRepoType',
      importToken: 'importToken',
      importTokenEncrypted: 'importTokenEncrypted',
      importUrl: 'importUrl',
      initStandardService: 'initStandardService',
      isCryptoEnabled: 'isCryptoEnabled',
      localImportUrl: 'localImportUrl',
      name: 'name',
      namespaceId: 'namespaceId',
      path: 'path',
      readmeType: 'readmeType',
      visibilityLevel: 'visibilityLevel',
      createParentPath: 'createParentPath',
      organizationId: 'organizationId',
      sync: 'sync',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      avatarUrl: 'string',
      description: 'string',
      gitignoreType: 'string',
      importAccount: 'string',
      importDemoProject: 'boolean',
      importRepoType: 'string',
      importToken: 'string',
      importTokenEncrypted: 'string',
      importUrl: 'string',
      initStandardService: 'boolean',
      isCryptoEnabled: 'boolean',
      localImportUrl: 'string',
      name: 'string',
      namespaceId: 'number',
      path: 'string',
      readmeType: 'string',
      visibilityLevel: 'number',
      createParentPath: 'boolean',
      organizationId: 'string',
      sync: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

