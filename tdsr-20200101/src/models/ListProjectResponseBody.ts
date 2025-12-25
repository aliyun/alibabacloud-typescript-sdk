// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBodyList extends $dara.Model {
  /**
   * @example
   * 5244****
   */
  businessId?: number;
  businessName?: string;
  /**
   * @example
   * 123123
   */
  createTime?: number;
  /**
   * @example
   * 1234****
   */
  id?: string;
  /**
   * @example
   * 123214
   */
  modifiedTime?: number;
  name?: string;
  /**
   * @remarks
   * Token
   * 
   * @example
   * d989623696ab4f87a80b8d5b0b0****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      createTime: 'CreateTime',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      createTime: 'number',
      id: 'string',
      modifiedTime: 'number',
      name: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBody extends $dara.Model {
  accessDeniedDetail?: ListProjectResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * count
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * true
   */
  hasNext?: boolean;
  list?: ListProjectResponseBodyList[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4F882EA7-3A1D-0113-94E4-70162C4B***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 5
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      count: 'Count',
      currentPage: 'CurrentPage',
      hasNext: 'HasNext',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ListProjectResponseBodyAccessDeniedDetail,
      code: 'number',
      count: 'number',
      currentPage: 'number',
      hasNext: 'boolean',
      list: { 'type': 'array', 'itemType': ListProjectResponseBodyList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

