// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotSceneDataResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class GetHotspotSceneDataResponseBodyData extends $dara.Model {
  /**
   * @example
   * A.e.QRQRLWYEHIUE****
   */
  modelToken?: string;
  previewData?: string;
  /**
   * @example
   * 344794c32937474a9c59eb130936****
   */
  previewToken?: string;
  /**
   * @example
   * MODEL_3D
   */
  sceneType?: string;
  static names(): { [key: string]: string } {
    return {
      modelToken: 'ModelToken',
      previewData: 'PreviewData',
      previewToken: 'PreviewToken',
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelToken: 'string',
      previewData: 'string',
      previewToken: 'string',
      sceneType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotSceneDataResponseBody extends $dara.Model {
  accessDeniedDetail?: GetHotspotSceneDataResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetHotspotSceneDataResponseBodyData;
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
   * A8CD0AD9-8A92-455A-A984-A7E4B76****
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
      accessDeniedDetail: GetHotspotSceneDataResponseBodyAccessDeniedDetail,
      code: 'number',
      data: GetHotspotSceneDataResponseBodyData,
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

