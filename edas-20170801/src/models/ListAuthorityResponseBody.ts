// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorityResponseBodyAuthorityListAuthorityActionListAction extends $dara.Model {
  /**
   * @remarks
   * The code of the permission.
   * 
   * @example
   * 1
   */
  code?: string;
  /**
   * @remarks
   * The description of the permission.
   * 
   * @example
   * Create an application
   */
  description?: string;
  /**
   * @remarks
   * The ID of the permission group.
   * 
   * @example
   * 1
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * Create an application
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      groupId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityResponseBodyAuthorityListAuthorityActionList extends $dara.Model {
  action?: ListAuthorityResponseBodyAuthorityListAuthorityActionListAction[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': ListAuthorityResponseBodyAuthorityListAuthorityActionListAction },
    };
  }

  validate() {
    if(Array.isArray(this.action)) {
      $dara.Model.validateArray(this.action);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityResponseBodyAuthorityListAuthority extends $dara.Model {
  /**
   * @remarks
   * The set of permissions.
   */
  actionList?: ListAuthorityResponseBodyAuthorityListAuthorityActionList;
  /**
   * @remarks
   * The description of the permission group.
   * 
   * @example
   * Operations on applications
   */
  description?: string;
  /**
   * @remarks
   * The ID of the permission group.
   * 
   * @example
   * 1
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the permission group.
   * 
   * @example
   * Application management
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'ActionList',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: ListAuthorityResponseBodyAuthorityListAuthorityActionList,
      description: 'string',
      groupId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.actionList && typeof (this.actionList as any).validate === 'function') {
      (this.actionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityResponseBodyAuthorityList extends $dara.Model {
  authority?: ListAuthorityResponseBodyAuthorityListAuthority[];
  static names(): { [key: string]: string } {
    return {
      authority: 'Authority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: { 'type': 'array', 'itemType': ListAuthorityResponseBodyAuthorityListAuthority },
    };
  }

  validate() {
    if(Array.isArray(this.authority)) {
      $dara.Model.validateArray(this.authority);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permissions.
   */
  authorityList?: ListAuthorityResponseBodyAuthorityList;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 57609587-DFA2-41EC-****-*********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorityList: 'AuthorityList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityList: ListAuthorityResponseBodyAuthorityList,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.authorityList && typeof (this.authorityList as any).validate === 'function') {
      (this.authorityList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

