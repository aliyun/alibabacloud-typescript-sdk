// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetailSubSceneResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class DetailSubSceneResponseBody extends $dara.Model {
  accessDeniedDetail?: DetailSubSceneResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * https://image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg
   */
  coverUrl?: string;
  /**
   * @example
   * https://image-demo.oss-cn-hangzhou.aliyuncs.com/cubemap/****
   */
  cubemapPath?: string;
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
   * 1234***
   */
  id?: string;
  /**
   * @example
   * http://www.aliyun.com/test1.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * {}
   */
  layoutData?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 测试
   */
  name?: string;
  /**
   * @example
   * http://www.aliyun.com/test.jpg
   */
  originUrl?: string;
  /**
   * @example
   * [-0.8928,-0.21467,0.39603]
   */
  position?: string;
  /**
   * @example
   * 4F882EA7-3A1D-0113-94E4-70162C4****
   */
  requestId?: string;
  /**
   * @example
   * 1234***
   */
  resourceId?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * IMAGE
   */
  type?: string;
  /**
   * @example
   * https://image-demo.oss-cn-hangzhou.aliyuncs.com/****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      coverUrl: 'CoverUrl',
      cubemapPath: 'CubemapPath',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      imageUrl: 'ImageUrl',
      layoutData: 'LayoutData',
      message: 'Message',
      name: 'Name',
      originUrl: 'OriginUrl',
      position: 'Position',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      status: 'Status',
      success: 'Success',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DetailSubSceneResponseBodyAccessDeniedDetail,
      code: 'number',
      coverUrl: 'string',
      cubemapPath: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      imageUrl: 'string',
      layoutData: 'string',
      message: 'string',
      name: 'string',
      originUrl: 'string',
      position: 'string',
      requestId: 'string',
      resourceId: 'string',
      status: 'number',
      success: 'boolean',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

