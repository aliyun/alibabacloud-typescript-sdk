// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyAgentCodePackageOssRamAuthorizationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AUTHORIZED 仅表示对应策略已绑定。
   * 
   * @example
   * AUTHORIZED
   */
  authorizationStatus?: string;
  /**
   * @example
   * my-agent-bucket
   */
  ossBucketName?: string;
  /**
   * @remarks
   * 客户端不能指定或覆盖该角色。
   * 
   * @example
   * AliyunAgentCoreWorkspace-ws-a1b2c3d4e5f6
   */
  roleName?: string;
  /**
   * @example
   * ws-a1b2c3d4e5f6
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationStatus: 'authorizationStatus',
      ossBucketName: 'ossBucketName',
      roleName: 'roleName',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      ossBucketName: 'string',
      roleName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAgentCodePackageOssRamAuthorizationResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: VerifyAgentCodePackageOssRamAuthorizationResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: VerifyAgentCodePackageOssRamAuthorizationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

