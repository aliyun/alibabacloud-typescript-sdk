// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetailSceneResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class DetailSceneResponseBodyCaptures extends $dara.Model {
  title?: string;
  /**
   * @example
   * http://www.aliyun.com/test1.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
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

export class DetailSceneResponseBodyFloorPlans extends $dara.Model {
  colorMapUrl?: string;
  floorLabel?: string;
  floorName?: string;
  miniMapUrl?: string;
  static names(): { [key: string]: string } {
    return {
      colorMapUrl: 'ColorMapUrl',
      floorLabel: 'FloorLabel',
      floorName: 'FloorName',
      miniMapUrl: 'MiniMapUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorMapUrl: 'string',
      floorLabel: 'string',
      floorName: 'string',
      miniMapUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailSceneResponseBody extends $dara.Model {
  accessDeniedDetail?: DetailSceneResponseBodyAccessDeniedDetail;
  captures?: DetailSceneResponseBodyCaptures[];
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * www.example.com/xxx/xxx.jpg
   */
  coverUrl?: string;
  floorPlans?: DetailSceneResponseBodyFloorPlans[];
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
   * d989623696ab4f87a80b8d5b0b0****
   */
  previewToken?: string;
  /**
   * @example
   * false
   */
  published?: boolean;
  /**
   * @example
   * 344794c32937474a9c59eb130936****
   */
  requestId?: string;
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
   * true
   */
  success?: boolean;
  /**
   * @example
   * MODEL_3D
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      captures: 'Captures',
      code: 'Code',
      coverUrl: 'CoverUrl',
      floorPlans: 'FloorPlans',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      previewToken: 'PreviewToken',
      published: 'Published',
      requestId: 'RequestId',
      sourceNum: 'SourceNum',
      status: 'Status',
      statusName: 'StatusName',
      subSceneNum: 'SubSceneNum',
      success: 'Success',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: DetailSceneResponseBodyAccessDeniedDetail,
      captures: { 'type': 'array', 'itemType': DetailSceneResponseBodyCaptures },
      code: 'number',
      coverUrl: 'string',
      floorPlans: { 'type': 'array', 'itemType': DetailSceneResponseBodyFloorPlans },
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      previewToken: 'string',
      published: 'boolean',
      requestId: 'string',
      sourceNum: 'number',
      status: 'string',
      statusName: 'string',
      subSceneNum: 'number',
      success: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(Array.isArray(this.captures)) {
      $dara.Model.validateArray(this.captures);
    }
    if(Array.isArray(this.floorPlans)) {
      $dara.Model.validateArray(this.floorPlans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

