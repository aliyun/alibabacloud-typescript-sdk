// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceAllUserGroupResponseBodyDataUserGroupList extends $dara.Model {
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2020-05-12 17:12:37
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * dmjpxfdk
   */
  userGroupId?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * TestUserGroupName
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTime: 'ModifiedTime',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTime: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of user groups.
   * 
   * @example
   * 100
   */
  total?: number;
  /**
   * @remarks
   * The list of user group information.
   */
  userGroupList?: QueryFaceAllUserGroupResponseBodyDataUserGroupList[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
      userGroupList: 'UserGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
      userGroupList: { 'type': 'array', 'itemType': QueryFaceAllUserGroupResponseBodyDataUserGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupList)) {
      $dara.Model.validateArray(this.userGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceAllUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: QueryFaceAllUserGroupResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A13279A-5640-45E7-87AA-83750541AD0E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceAllUserGroupResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

