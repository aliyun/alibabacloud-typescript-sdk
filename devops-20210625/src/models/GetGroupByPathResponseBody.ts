// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupByPathResponseBodyResult extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  description?: string;
  /**
   * @example
   * 30815
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
   * 19230
   */
  ownerId?: string;
  /**
   * @example
   * 26842
   */
  parentId?: string;
  /**
   * @example
   * test-group
   */
  path?: string;
  /**
   * @example
   * codeup-test-org/test-group
   */
  pathWithNamespace?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: number;
  /**
   * @example
   * xxx
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
      ownerId: 'string',
      parentId: 'string',
      path: 'string',
      pathWithNamespace: 'string',
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

export class GetGroupByPathResponseBody extends $dara.Model {
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
   * 6177543A-8D54-5736-A93B-E0195A1512CB
   */
  requestId?: string;
  result?: GetGroupByPathResponseBodyResult;
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
      result: GetGroupByPathResponseBodyResult,
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

