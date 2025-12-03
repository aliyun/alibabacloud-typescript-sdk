// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserResourcesResponseBodyResultGroupInfosGroupInfo extends $dara.Model {
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  createdAt?: string;
  /**
   * @example
   * test-group
   */
  description?: string;
  /**
   * @example
   * 35268
   */
  id?: number;
  /**
   * @example
   * test-group
   */
  name?: string;
  nameWithNamespace?: string;
  /**
   * @example
   * 1234
   */
  ownerId?: number;
  /**
   * @example
   * 1183319
   */
  parentId?: number;
  /**
   * @example
   * test-group
   */
  path?: string;
  /**
   * @example
   * test-org/test-group
   */
  pathWithNamespace?: string;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  updatedAt?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      id: 'id',
      name: 'name',
      nameWithNamespace: 'nameWithNamespace',
      ownerId: 'ownerId',
      parentId: 'parentId',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      updatedAt: 'updatedAt',
      visibilityLevel: 'visibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      nameWithNamespace: 'string',
      ownerId: 'number',
      parentId: 'number',
      path: 'string',
      pathWithNamespace: 'string',
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

export class ListUserResourcesResponseBodyResultGroupInfosGroupRole extends $dara.Model {
  /**
   * @example
   * 40
   */
  accessLevel?: number;
  cnRoleName?: string;
  /**
   * @example
   * Admin
   */
  enRoleName?: string;
  /**
   * @example
   * 35268
   */
  sourceId?: number;
  /**
   * @example
   * Namespace
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      cnRoleName: 'cnRoleName',
      enRoleName: 'enRoleName',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      cnRoleName: 'string',
      enRoleName: 'string',
      sourceId: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponseBodyResultGroupInfos extends $dara.Model {
  groupInfo?: ListUserResourcesResponseBodyResultGroupInfosGroupInfo;
  groupRole?: ListUserResourcesResponseBodyResultGroupInfosGroupRole;
  static names(): { [key: string]: string } {
    return {
      groupInfo: 'groupInfo',
      groupRole: 'groupRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInfo: ListUserResourcesResponseBodyResultGroupInfosGroupInfo,
      groupRole: ListUserResourcesResponseBodyResultGroupInfosGroupRole,
    };
  }

  validate() {
    if(this.groupInfo && typeof (this.groupInfo as any).validate === 'function') {
      (this.groupInfo as any).validate();
    }
    if(this.groupRole && typeof (this.groupRole as any).validate === 'function') {
      (this.groupRole as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponseBodyResultRepositoryInfosRepositoryInfo extends $dara.Model {
  /**
   * @example
   * 40
   */
  accessLevel?: number;
  /**
   * @example
   * false
   */
  archived?: boolean;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  createdAt?: string;
  /**
   * @example
   * 12679
   */
  creatorId?: number;
  description?: string;
  /**
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @example
   * 37229
   */
  id?: number;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  lastActivityAt?: string;
  /**
   * @example
   * test-repo
   */
  name?: string;
  nameWithNamespace?: string;
  /**
   * @example
   * 600002
   */
  namespaceId?: number;
  /**
   * @example
   * test-repo
   */
  path?: string;
  /**
   * @example
   * test-org/test-group/test-repo
   */
  pathWithNamespace?: string;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  updatedAt?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      archived: 'archived',
      createdAt: 'createdAt',
      creatorId: 'creatorId',
      description: 'description',
      encrypted: 'encrypted',
      id: 'id',
      lastActivityAt: 'lastActivityAt',
      name: 'name',
      nameWithNamespace: 'nameWithNamespace',
      namespaceId: 'namespaceId',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      updatedAt: 'updatedAt',
      visibilityLevel: 'visibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      archived: 'boolean',
      createdAt: 'string',
      creatorId: 'number',
      description: 'string',
      encrypted: 'boolean',
      id: 'number',
      lastActivityAt: 'string',
      name: 'string',
      nameWithNamespace: 'string',
      namespaceId: 'number',
      path: 'string',
      pathWithNamespace: 'string',
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

export class ListUserResourcesResponseBodyResultRepositoryInfosRepositoryRole extends $dara.Model {
  /**
   * @example
   * 40
   */
  accessLevel?: number;
  cnRoleName?: string;
  /**
   * @example
   * Admin
   */
  enRoleName?: string;
  /**
   * @example
   * 37229
   */
  sourceId?: number;
  /**
   * @example
   * Project
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      cnRoleName: 'cnRoleName',
      enRoleName: 'enRoleName',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      cnRoleName: 'string',
      enRoleName: 'string',
      sourceId: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponseBodyResultRepositoryInfos extends $dara.Model {
  repositoryInfo?: ListUserResourcesResponseBodyResultRepositoryInfosRepositoryInfo;
  repositoryRole?: ListUserResourcesResponseBodyResultRepositoryInfosRepositoryRole;
  static names(): { [key: string]: string } {
    return {
      repositoryInfo: 'repositoryInfo',
      repositoryRole: 'repositoryRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repositoryInfo: ListUserResourcesResponseBodyResultRepositoryInfosRepositoryInfo,
      repositoryRole: ListUserResourcesResponseBodyResultRepositoryInfosRepositoryRole,
    };
  }

  validate() {
    if(this.repositoryInfo && typeof (this.repositoryInfo as any).validate === 'function') {
      (this.repositoryInfo as any).validate();
    }
    if(this.repositoryRole && typeof (this.repositoryRole as any).validate === 'function') {
      (this.repositoryRole as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponseBodyResultUserInfo extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 19230
   */
  id?: number;
  /**
   * @example
   * test-codeup
   */
  name?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * test-codeup
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      email: 'email',
      id: 'id',
      name: 'name',
      state: 'state',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      id: 'number',
      name: 'string',
      state: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponseBodyResult extends $dara.Model {
  groupInfos?: ListUserResourcesResponseBodyResultGroupInfos[];
  repositoryInfos?: ListUserResourcesResponseBodyResultRepositoryInfos[];
  userInfo?: ListUserResourcesResponseBodyResultUserInfo;
  static names(): { [key: string]: string } {
    return {
      groupInfos: 'groupInfos',
      repositoryInfos: 'repositoryInfos',
      userInfo: 'userInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInfos: { 'type': 'array', 'itemType': ListUserResourcesResponseBodyResultGroupInfos },
      repositoryInfos: { 'type': 'array', 'itemType': ListUserResourcesResponseBodyResultRepositoryInfos },
      userInfo: ListUserResourcesResponseBodyResultUserInfo,
    };
  }

  validate() {
    if(Array.isArray(this.groupInfos)) {
      $dara.Model.validateArray(this.groupInfos);
    }
    if(Array.isArray(this.repositoryInfos)) {
      $dara.Model.validateArray(this.repositoryInfos);
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * A35869D5-BB29-5F84-A4DD-B09985EA2AFA
   */
  requestId?: string;
  result?: ListUserResourcesResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListUserResourcesResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

