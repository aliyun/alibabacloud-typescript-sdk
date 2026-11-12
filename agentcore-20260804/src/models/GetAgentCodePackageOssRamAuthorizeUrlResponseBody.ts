// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentCodePackageOssRamAuthorizeUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The RAM authorization URL.
   * 
   * @example
   * https://ram.console.aliyun.com/authorize?request=%7B%22referrer%22%3A%22AgentCore%22%2C%22payloads%22%3A%5B%7B%22missionId%22%3A%22AgentCore.CustomRoleForOSSObjectRestore%22%2C%22roleName%22%3A%22AliyunAgentCoreWorkspace-ws-a1b2c3d4e5f6%22%2C%22rolePolicies%22%3A%5B%7B%22policyName%22%3A%22agentcore-oss-mount-policy-my-agent-bucket%22%2C%22policyType%22%3A%22Custom%22%2C%22templateId%22%3A%22OSSObjectRestoreCustom%22%2C%22templateValue%22%3A%7B%22ossBucket%22%3A%22acs%3Aoss%3A%2A%3A1234567890123456%3Amy-agent-bucket%22%2C%22ossBucketObject%22%3A%22acs%3Aoss%3A%2A%3A1234567890123456%3Amy-agent-bucket%2F%2A%22%7D%7D%5D%7D%5D%7D
   */
  authorizeUrl?: string;
  /**
   * @remarks
   * The name of the authorized source OSS bucket.
   * 
   * @example
   * my-agent-bucket
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The name of the workspace role selected by the backend.
   * 
   * @example
   * AliyunAgentCoreWorkspace-ws-a1b2c3d4e5f6
   */
  roleName?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-a1b2c3d4e5f6
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeUrl: 'authorizeUrl',
      ossBucketName: 'ossBucketName',
      roleName: 'roleName',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeUrl: 'string',
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

export class GetAgentCodePackageOssRamAuthorizeUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: GetAgentCodePackageOssRamAuthorizeUrlResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
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
      data: GetAgentCodePackageOssRamAuthorizeUrlResponseBodyData,
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

