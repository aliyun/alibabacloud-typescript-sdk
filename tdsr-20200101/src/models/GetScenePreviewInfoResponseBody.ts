// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScenePreviewInfoResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class GetScenePreviewInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * https://www.aliyundoc.com/sgm/A.e.QRQRLWYEHIUEYLYW/A.e.QRQRLWYEHIUEYLYW****.sgm
   */
  modelPath?: string;
  panoList?: string;
  textureModelPath?: string;
  texturePanoPath?: string;
  static names(): { [key: string]: string } {
    return {
      modelPath: 'ModelPath',
      panoList: 'PanoList',
      textureModelPath: 'TextureModelPath',
      texturePanoPath: 'TexturePanoPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelPath: 'string',
      panoList: 'string',
      textureModelPath: 'string',
      texturePanoPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewInfoResponseBody extends $dara.Model {
  accessDeniedDetail?: GetScenePreviewInfoResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 0：成功，其他：失败
   */
  code?: number;
  data?: GetScenePreviewInfoResponseBodyData;
  /**
   * @example
   * xxxxx
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4F882EA7-3A1D-0113-94E4-70162C4****
   */
  requestId?: string;
  /**
   * @example
   * true/false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetScenePreviewInfoResponseBodyAccessDeniedDetail,
      code: 'number',
      data: GetScenePreviewInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

