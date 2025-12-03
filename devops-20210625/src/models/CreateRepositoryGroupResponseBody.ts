// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepositoryGroupResponseBodyResult extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  description?: string;
  /**
   * @example
   * 18685
   */
  id?: number;
  /**
   * @example
   * test-create-group
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
   * test-create-group
   */
  path?: string;
  /**
   * @example
   * codeup-test-org/test-create-group
   */
  pathWithNamespace?: string;
  /**
   * @example
   * Group
   */
  type?: string;
  /**
   * @example
   * 10
   */
  visibilityLevel?: number;
  /**
   * @example
   * ""
   */
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      description: 'description',
      id: 'id',
      name: 'name',
      nameWithNamespace: 'nameWithNamespace',
      ownerId: 'ownerId',
      parentId: 'parentId',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      type: 'type',
      visibilityLevel: 'visibilityLevel',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
      nameWithNamespace: 'string',
      ownerId: 'number',
      parentId: 'number',
      path: 'string',
      pathWithNamespace: 'string',
      type: 'string',
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

export class CreateRepositoryGroupResponseBody extends $dara.Model {
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
  /**
   * @example
   * F7B85D1B-D1C2-140F-A039-341859F130B9
   */
  requestId?: string;
  result?: CreateRepositoryGroupResponseBodyResult;
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
      result: CreateRepositoryGroupResponseBodyResult,
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

