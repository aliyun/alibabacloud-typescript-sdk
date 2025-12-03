// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepositoryResponseBodyRepositoryNamespace extends $dara.Model {
  /**
   * @example
   * https://xxx.jpg
   */
  avatar?: string;
  /**
   * @example
   * 2020-06-19T04:02:00.744Z
   */
  createdAt?: string;
  /**
   * @example
   * repo desc
   */
  description?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 100
   */
  id?: number;
  /**
   * @example
   * xxx
   */
  name?: string;
  /**
   * @example
   * 100
   */
  ownerId?: number;
  /**
   * @example
   * test
   */
  path?: string;
  /**
   * @example
   * 2020-06-19T04:02:00.744Z
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

export class GetRepositoryResponseBodyRepository extends $dara.Model {
  /**
   * @example
   * false
   */
  archive?: boolean;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * 2020-06-19T04:02:00.744Z
   */
  createdAt?: string;
  /**
   * @example
   * 19258
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
  demoProjectStatus?: boolean;
  /**
   * @example
   * repo desc
   */
  description?: string;
  /**
   * @example
   * https://codeup.aliyun.com/xxx/test/test.git
   */
  httpUrlToRepository?: string;
  /**
   * @example
   * 100
   */
  id?: number;
  /**
   * @example
   * 2020-06-19T04:02:00.744Z
   */
  lastActivityAt?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * test / test
   */
  nameWithNamespace?: string;
  namespace?: GetRepositoryResponseBodyRepositoryNamespace;
  /**
   * @example
   * test
   */
  path?: string;
  /**
   * @example
   * test/test
   */
  pathWithNamespace?: string;
  /**
   * @example
   * git@codeup.aliyun.com:xxx/test/test.git
   */
  sshUrlToRepository?: string;
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
  static names(): { [key: string]: string } {
    return {
      archive: 'archive',
      avatarUrl: 'avatarUrl',
      createdAt: 'createdAt',
      creatorId: 'creatorId',
      defaultBranch: 'defaultBranch',
      demoProjectStatus: 'demoProjectStatus',
      description: 'description',
      httpUrlToRepository: 'httpUrlToRepository',
      id: 'id',
      lastActivityAt: 'lastActivityAt',
      name: 'name',
      nameWithNamespace: 'nameWithNamespace',
      namespace: 'namespace',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      sshUrlToRepository: 'sshUrlToRepository',
      visibilityLevel: 'visibilityLevel',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archive: 'boolean',
      avatarUrl: 'string',
      createdAt: 'string',
      creatorId: 'number',
      defaultBranch: 'string',
      demoProjectStatus: 'boolean',
      description: 'string',
      httpUrlToRepository: 'string',
      id: 'number',
      lastActivityAt: 'string',
      name: 'string',
      nameWithNamespace: 'string',
      namespace: GetRepositoryResponseBodyRepositoryNamespace,
      path: 'string',
      pathWithNamespace: 'string',
      sshUrlToRepository: 'string',
      visibilityLevel: 'number',
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

export class GetRepositoryResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  repository?: GetRepositoryResponseBodyRepository;
  /**
   * @example
   * 37294673-00CA-5B8B-914F-A8B35511E90A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      repository: 'repository',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      repository: GetRepositoryResponseBodyRepository,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.repository && typeof (this.repository as any).validate === 'function') {
      (this.repository as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

