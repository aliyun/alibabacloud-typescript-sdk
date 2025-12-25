// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSceneResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class ListSceneResponseBodyList extends $dara.Model {
  /**
   * @example
   * www.example.com/xxxx/xxx.jpg
   */
  coverUrl?: string;
  /**
   * @example
   * 1621236933677
   */
  gmtCreate?: number;
  /**
   * @example
   * 1621236933677
   */
  gmtModified?: number;
  /**
   * @example
   * 1234****
   */
  id?: string;
  /**
   * @example
   * 厨房
   */
  name?: string;
  /**
   * @example
   * d989623696ab4f87a80b8d5b0b00****
   */
  previewToken?: string;
  /**
   * @example
   * false
   */
  published?: boolean;
  /**
   * @example
   * 20
   */
  sourceNum?: number;
  /**
   * @example
   * init
   */
  status?: string;
  statusName?: string;
  /**
   * @example
   * 20
   */
  subSceneNum?: number;
  /**
   * @example
   * MODEL_3D
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      previewToken: 'PreviewToken',
      published: 'Published',
      sourceNum: 'SourceNum',
      status: 'Status',
      statusName: 'StatusName',
      subSceneNum: 'SubSceneNum',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      name: 'string',
      previewToken: 'string',
      published: 'boolean',
      sourceNum: 'number',
      status: 'string',
      statusName: 'string',
      subSceneNum: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSceneResponseBody extends $dara.Model {
  accessDeniedDetail?: ListSceneResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
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
  list?: ListSceneResponseBodyList[];
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
      accessDeniedDetail: ListSceneResponseBodyAccessDeniedDetail,
      code: 'number',
      count: 'number',
      currentPage: 'number',
      hasNext: 'boolean',
      list: { 'type': 'array', 'itemType': ListSceneResponseBodyList },
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

