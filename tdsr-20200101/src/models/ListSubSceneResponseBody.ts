// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubSceneResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class ListSubSceneResponseBodyList extends $dara.Model {
  /**
   * @example
   * https:/image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg
   */
  baseImageUrl?: string;
  /**
   * @example
   * https:/image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg
   */
  coverUrl?: string;
  cubemapPath?: string;
  /**
   * @example
   * true
   */
  deleted?: boolean;
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
   * xsfwsddd==
   */
  id?: string;
  /**
   * @example
   * {}
   */
  layoutData?: string;
  /**
   * @example
   * c俄式
   */
  name?: string;
  /**
   * @example
   * https:/image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg
   */
  originUrl?: string;
  /**
   * @example
   * 2345****
   */
  resourceId?: string;
  /**
   * @example
   * xxxx.jpg
   */
  resourceName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * IMAGE
   */
  type?: string;
  /**
   * @example
   * https:/image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      baseImageUrl: 'BaseImageUrl',
      coverUrl: 'CoverUrl',
      cubemapPath: 'CubemapPath',
      deleted: 'Deleted',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      layoutData: 'LayoutData',
      name: 'Name',
      originUrl: 'OriginUrl',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      status: 'Status',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseImageUrl: 'string',
      coverUrl: 'string',
      cubemapPath: 'string',
      deleted: 'boolean',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      layoutData: 'string',
      name: 'string',
      originUrl: 'string',
      resourceId: 'string',
      resourceName: 'string',
      status: 'number',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubSceneResponseBody extends $dara.Model {
  accessDeniedDetail?: ListSubSceneResponseBodyAccessDeniedDetail;
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
  list?: ListSubSceneResponseBodyList[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4F882EA7-3A1D-0113-94E4-70162C4****
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
      accessDeniedDetail: ListSubSceneResponseBodyAccessDeniedDetail,
      code: 'number',
      count: 'number',
      currentPage: 'number',
      hasNext: 'boolean',
      list: { 'type': 'array', 'itemType': ListSubSceneResponseBodyList },
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

