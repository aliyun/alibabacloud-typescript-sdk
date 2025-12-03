// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryGroupsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 40
   */
  accessLevel?: number;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  description?: string;
  /**
   * @example
   * 10
   */
  groupCount?: number;
  /**
   * @example
   * 19285
   */
  id?: number;
  /**
   * @example
   * test-codeup
   */
  name?: string;
  nameWithNamespace?: string;
  /**
   * @example
   * 19230
   */
  ownerId?: number;
  /**
   * @example
   * 26842
   */
  parentId?: number;
  /**
   * @example
   * test-codeup
   */
  path?: string;
  /**
   * @example
   * 60de7a6852743a5162b5f957/test-codeup
   */
  pathWithNamespace?: string;
  /**
   * @example
   * 10
   */
  projectCount?: number;
  /**
   * @example
   * Group
   */
  type?: string;
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
  /**
   * @example
   * ""
   */
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      avatarUrl: 'avatarUrl',
      createdAt: 'createdAt',
      description: 'description',
      groupCount: 'groupCount',
      id: 'id',
      name: 'name',
      nameWithNamespace: 'nameWithNamespace',
      ownerId: 'ownerId',
      parentId: 'parentId',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      projectCount: 'projectCount',
      type: 'type',
      updatedAt: 'updatedAt',
      visibilityLevel: 'visibilityLevel',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      createdAt: 'string',
      description: 'string',
      groupCount: 'number',
      id: 'number',
      name: 'string',
      nameWithNamespace: 'string',
      ownerId: 'number',
      parentId: 'number',
      path: 'string',
      pathWithNamespace: 'string',
      projectCount: 'number',
      type: 'string',
      updatedAt: 'string',
      visibilityLevel: 'number',
      webUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryGroupsResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * F7B85D1B-D1C2-140F-A039-341859F130B9
   */
  requestId?: string;
  result?: ListRepositoryGroupsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
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
      result: { 'type': 'array', 'itemType': ListRepositoryGroupsResponseBodyResult },
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

