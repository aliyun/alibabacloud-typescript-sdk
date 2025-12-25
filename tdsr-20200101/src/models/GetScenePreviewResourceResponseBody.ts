// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScenePreviewResourceResponseBodyAccessDeniedDetail extends $dara.Model {
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

export class GetScenePreviewResourceResponseBodyDataResourceDirectory extends $dara.Model {
  /**
   * @example
   * hotspotTag.json
   */
  hotspotTagConfig?: string;
  /**
   * @example
   * config.json
   */
  modelConfig?: string;
  /**
   * @example
   * orthomap/orthomap.json
   */
  orthomapConfig?: string;
  /**
   * @example
   * A.e.YKPYuuYuituy****
   */
  rootPath?: string;
  static names(): { [key: string]: string } {
    return {
      hotspotTagConfig: 'HotspotTagConfig',
      modelConfig: 'ModelConfig',
      orthomapConfig: 'OrthomapConfig',
      rootPath: 'RootPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotspotTagConfig: 'string',
      modelConfig: 'string',
      orthomapConfig: 'string',
      rootPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewResourceResponseBodyData extends $dara.Model {
  name?: string;
  resourceDirectory?: GetScenePreviewResourceResponseBodyDataResourceDirectory;
  /**
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resourceDirectory: 'ResourceDirectory',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourceDirectory: GetScenePreviewResourceResponseBodyDataResourceDirectory,
      version: 'string',
    };
  }

  validate() {
    if(this.resourceDirectory && typeof (this.resourceDirectory as any).validate === 'function') {
      (this.resourceDirectory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewResourceResponseBody extends $dara.Model {
  accessDeniedDetail?: GetScenePreviewResourceResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 0：成功，其他：失败
   */
  code?: number;
  data?: GetScenePreviewResourceResponseBodyData;
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
   * A8CD0AD9-8A92-455A-A984-A7E4B76*****
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
      accessDeniedDetail: GetScenePreviewResourceResponseBodyAccessDeniedDetail,
      code: 'number',
      data: GetScenePreviewResourceResponseBodyData,
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

