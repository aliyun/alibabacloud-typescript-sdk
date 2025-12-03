// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepositoryResponseBodyResultNamespace extends $dara.Model {
  /**
   * @example
   * ""
   */
  avatar?: string;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  createdAt?: string;
  /**
   * @example
   * codeup repo description
   */
  description?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 3194
   */
  id?: number;
  /**
   * @example
   * codeup
   */
  name?: string;
  /**
   * @example
   * 123
   */
  ownerId?: number;
  /**
   * @example
   * codeup
   */
  path?: string;
  /**
   * @example
   * true
   */
  public?: boolean;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  updatedAt?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      createdAt: 'createdAt',
      description: 'description',
      id: 'id',
      name: 'name',
      ownerId: 'ownerId',
      path: 'path',
      public: 'public',
      updatedAt: 'updatedAt',
      visibilityLevel: 'visibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createdAt: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      ownerId: 'number',
      path: 'string',
      public: 'boolean',
      updatedAt: 'string',
      visibilityLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  importFromSvn?: boolean;
  /**
   * @example
   * false
   */
  archived?: boolean;
  /**
   * @example
   * ""
   */
  avatarUrl?: string;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  createdAt?: string;
  /**
   * @example
   * 1233
   */
  creatorId?: number;
  /**
   * @example
   * master
   */
  defaultBranch?: string;
  /**
   * @example
   * false
   */
  demoProject?: boolean;
  description?: string;
  /**
   * @example
   * ""
   */
  httpUrlToRepo?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 2959
   */
  id?: number;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  lastActivityAt?: string;
  /**
   * @example
   * codeupTest
   */
  name?: string;
  /**
   * @example
   * codeup-test-org / test-codeup
   */
  nameWithNamespace?: string;
  namespace?: CreateRepositoryResponseBodyResultNamespace;
  /**
   * @example
   * test-codeup
   */
  path?: string;
  /**
   * @example
   * codeup-test-org/test-codeup
   */
  pathWithNamespace?: string;
  /**
   * @example
   * ""
   */
  sshUrlToRepo?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: string;
  /**
   * @remarks
   * web url
   * 
   * @example
   * ""
   */
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      importFromSvn: 'Import_from_svn',
      archived: 'archived',
      avatarUrl: 'avatar_url',
      createdAt: 'createdAt',
      creatorId: 'creatorId',
      defaultBranch: 'defaultBranch',
      demoProject: 'demoProject',
      description: 'description',
      httpUrlToRepo: 'httpUrlToRepo',
      id: 'id',
      lastActivityAt: 'lastActivityAt',
      name: 'name',
      nameWithNamespace: 'nameWithNamespace',
      namespace: 'namespace',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      sshUrlToRepo: 'sshUrlToRepo',
      visibilityLevel: 'visibilityLevel',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importFromSvn: 'boolean',
      archived: 'boolean',
      avatarUrl: 'string',
      createdAt: 'string',
      creatorId: 'number',
      defaultBranch: 'string',
      demoProject: 'boolean',
      description: 'string',
      httpUrlToRepo: 'string',
      id: 'number',
      lastActivityAt: 'string',
      name: 'string',
      nameWithNamespace: 'string',
      namespace: CreateRepositoryResponseBodyResultNamespace,
      path: 'string',
      pathWithNamespace: 'string',
      sshUrlToRepo: 'string',
      visibilityLevel: 'string',
      webUrl: 'string',
    };
  }

  validate() {
    if(this.namespace && typeof (this.namespace as any).validate === 'function') {
      (this.namespace as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBody extends $dara.Model {
  /**
   * @example
   * 401
   */
  errorCode?: string;
  /**
   * @example
   * SYSTEM_UNAUTHORIZED_ERROR
   */
  errorMessage?: string;
  /**
   * @example
   * F590C9D8-E908-5B6C-95AC-56B7E8011FFA
   */
  requestId?: string;
  result?: CreateRepositoryResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: CreateRepositoryResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

