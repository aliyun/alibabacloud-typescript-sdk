// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubSceneTaskStatusResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class GetSubSceneTaskStatusResponseBodyList extends $dara.Model {
  /**
   * @example
   * 2001
   */
  errorCode?: string;
  /**
   * @example
   * xx
   */
  errorMsg?: string;
  /**
   * @example
   * 4638****
   */
  id?: string;
  /**
   * @example
   * 2345****
   */
  sceneId?: string;
  /**
   * @example
   * init
   */
  status?: string;
  /**
   * @example
   * 3456***
   */
  subSceneId?: string;
  /**
   * @example
   * cutimage
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      id: 'Id',
      sceneId: 'SceneId',
      status: 'Status',
      subSceneId: 'SubSceneId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      id: 'string',
      sceneId: 'string',
      status: 'string',
      subSceneId: 'string',
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

export class GetSubSceneTaskStatusResponseBody extends $dara.Model {
  accessDeniedDetail?: GetSubSceneTaskStatusResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  list?: GetSubSceneTaskStatusResponseBodyList[];
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
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      list: 'List',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetSubSceneTaskStatusResponseBodyAccessDeniedDetail,
      code: 'number',
      list: { 'type': 'array', 'itemType': GetSubSceneTaskStatusResponseBodyList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

