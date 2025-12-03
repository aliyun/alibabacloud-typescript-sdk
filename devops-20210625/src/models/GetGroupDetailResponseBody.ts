// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupDetailResponseBodyResult extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  description?: string;
  /**
   * @example
   * 36612
   */
  id?: number;
  /**
   * @example
   * test-group-detail
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
   * test-group-detail
   */
  path?: string;
  /**
   * @example
   * codeup-test-org/test-group-detail
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

export class GetGroupDetailResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 4CA06B0B-5867-5DE6-A0FA-9F39C97B524C
   */
  requestId?: string;
  result?: GetGroupDetailResponseBodyResult;
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
      result: GetGroupDetailResponseBodyResult,
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

