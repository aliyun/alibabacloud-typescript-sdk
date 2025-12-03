// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryMemberWithInheritedResponseBodyResultInherited extends $dara.Model {
  /**
   * @remarks
   * id
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
   * codeup
   */
  path?: string;
  pathWithNamespace?: string;
  type?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      nameWithNamespace: 'nameWithNamespace',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      type: 'type',
      visibilityLevel: 'visibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      nameWithNamespace: 'string',
      path: 'string',
      pathWithNamespace: 'string',
      type: 'string',
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

export class ListRepositoryMemberWithInheritedResponseBodyResult extends $dara.Model {
  accessLevel?: number;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  email?: string;
  id?: number;
  inherited?: ListRepositoryMemberWithInheritedResponseBodyResultInherited;
  /**
   * @example
   * codeup
   */
  name?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * yunxiao
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      avatarUrl: 'avatarUrl',
      email: 'email',
      id: 'id',
      inherited: 'inherited',
      name: 'name',
      state: 'state',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      avatarUrl: 'string',
      email: 'string',
      id: 'number',
      inherited: ListRepositoryMemberWithInheritedResponseBodyResultInherited,
      name: 'string',
      state: 'string',
      username: 'string',
    };
  }

  validate() {
    if(this.inherited && typeof (this.inherited as any).validate === 'function') {
      (this.inherited as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryMemberWithInheritedResponseBody extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  requestId?: string;
  result?: ListRepositoryMemberWithInheritedResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListRepositoryMemberWithInheritedResponseBodyResult },
      success: 'boolean',
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

