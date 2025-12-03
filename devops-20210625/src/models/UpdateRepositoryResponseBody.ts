// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRepositoryResponseBodyResultNamespace extends $dara.Model {
  /**
   * @example
   * https://xxx
   */
  avatar?: string;
  /**
   * @example
   * 2022-02-18 14:24:54
   */
  createdAt?: string;
  description?: string;
  /**
   * @example
   * 29322
   */
  id?: number;
  /**
   * @example
   * codeup
   */
  name?: string;
  /**
   * @example
   * 19238
   */
  ownerId?: number;
  path?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  updatedAt?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      createdAt: 'createdAt',
      description: 'description',
      id: 'id',
      name: 'name',
      ownerId: 'ownerId',
      path: 'path',
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
      updatedAt: 'string',
      visibilityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  archived?: boolean;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * false
   */
  buildsEnabled?: boolean;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * 19238
   */
  creatorId?: number;
  /**
   * @example
   * master
   */
  defaultBranch?: string;
  description?: string;
  /**
   * @example
   * https://codeup.aliyun.com/xxx/test/test.git
   */
  httpUrlToRepo?: string;
  /**
   * @example
   * 2825387
   */
  id?: number;
  /**
   * @example
   * true
   */
  issuesEnabled?: boolean;
  /**
   * @example
   * 2022-03-20 14:24:54
   */
  lastActivityAt?: string;
  /**
   * @example
   * true
   */
  mergeRequestsEnabled?: boolean;
  /**
   * @example
   * codeup
   */
  name?: string;
  nameWithNamespace?: string;
  namespace?: UpdateRepositoryResponseBodyResultNamespace;
  /**
   * @example
   * codeup
   */
  path?: string;
  /**
   * @example
   * codeup-test-org / codeup
   */
  pathWithNamespace?: string;
  /**
   * @example
   * false
   */
  snippetsEnabled?: boolean;
  /**
   * @example
   * git@codeup.aliyun.com:xxx/test/test.git
   */
  sshUrlToRepo?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: number;
  /**
   * @example
   * https://codeup.aliyun.com/xxx/test/test
   */
  webUrl?: string;
  /**
   * @example
   * true
   */
  wikiEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      archived: 'archived',
      avatarUrl: 'avatarUrl',
      buildsEnabled: 'buildsEnabled',
      createdAt: 'createdAt',
      creatorId: 'creatorId',
      defaultBranch: 'defaultBranch',
      description: 'description',
      httpUrlToRepo: 'httpUrlToRepo',
      id: 'id',
      issuesEnabled: 'issuesEnabled',
      lastActivityAt: 'lastActivityAt',
      mergeRequestsEnabled: 'mergeRequestsEnabled',
      name: 'name',
      nameWithNamespace: 'nameWithNamespace',
      namespace: 'namespace',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      snippetsEnabled: 'snippetsEnabled',
      sshUrlToRepo: 'sshUrlToRepo',
      visibilityLevel: 'visibilityLevel',
      webUrl: 'webUrl',
      wikiEnabled: 'wikiEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archived: 'boolean',
      avatarUrl: 'string',
      buildsEnabled: 'boolean',
      createdAt: 'string',
      creatorId: 'number',
      defaultBranch: 'string',
      description: 'string',
      httpUrlToRepo: 'string',
      id: 'number',
      issuesEnabled: 'boolean',
      lastActivityAt: 'string',
      mergeRequestsEnabled: 'boolean',
      name: 'string',
      nameWithNamespace: 'string',
      namespace: UpdateRepositoryResponseBodyResultNamespace,
      path: 'string',
      pathWithNamespace: 'string',
      snippetsEnabled: 'boolean',
      sshUrlToRepo: 'string',
      visibilityLevel: 'number',
      webUrl: 'string',
      wikiEnabled: 'boolean',
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

export class UpdateRepositoryResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * “”
   */
  errorMessage?: string;
  /**
   * @example
   * EAE03103-5497-58D1-9169-E524DDE8604C
   */
  requestId?: string;
  result?: UpdateRepositoryResponseBodyResult;
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
      result: UpdateRepositoryResponseBodyResult,
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

