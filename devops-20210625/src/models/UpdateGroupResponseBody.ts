// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupResponseBodyResult extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c4ef67f1bea827c4/w/100/h/100
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
   * codeup
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
   * codeup-test-org/test-codeup
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

export class UpdateGroupResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * InvalidParam.NoPermission
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: UpdateGroupResponseBodyResult;
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
      result: UpdateGroupResponseBodyResult,
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

