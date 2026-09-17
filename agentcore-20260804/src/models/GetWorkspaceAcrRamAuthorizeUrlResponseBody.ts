// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceAcrRamAuthorizeUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ACR Enterprise instance ID.
   * 
   * @example
   * cri-1234567890abcdef
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The RAM authorization URL used to create or append ACR permissions for the shared role on the target repository.
   * 
   * @example
   * https://ram.console.aliyun.com/authorize?request=%7B%22referrer%22%3A%22AgentCore%22%2C%22payloads%22%3A%5B%7B%22missionId%22%3A%22AgentCore.CustomRoleForOSSObjectRestore%22%2C%22roleName%22%3A%22AliyunAgentCoreWorkspace-ws-1234567890abcdef12345%22%2C%22rolePolicies%22%3A%5B%7B%22policyName%22%3A%22AgentCoreAcrPull-63373f3802583663d49465d8061e410a899d8f2936b8fc0cb9ec905b71f273c6%22%2C%22policyType%22%3A%22Custom%22%2C%22templateId%22%3A%22CrPullInstanceImage%22%2C%22templateValue%22%3A%7B%22crInstance%22%3A%22acs%3Acr%3Acn-hangzhou%3A1234567890123456%3Ainstance%2Fcri-1234567890abcdef%22%2C%22crRepository%22%3A%22acs%3Acr%3Acn-hangzhou%3A1234567890123456%3Arepository%2Fcri-1234567890abcdef%2Fexample%2Fagent-image%22%7D%7D%5D%7D%5D%7D
   */
  authorizeUrl?: string;
  /**
   * @remarks
   * The shared role name selected by the backend. This value is not editable on the frontend.
   * 
   * @example
   * AliyunAgentCoreWorkspace-ws-1234567890abcdef12345
   */
  roleName?: string;
  /**
   * @remarks
   * The source of the shared role. This value does not indicate that authorization is complete.
   * 
   * @example
   * WORKSPACE_SHARED
   */
  roleSource?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1234567890abcdef12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      authorizeUrl: 'authorizeUrl',
      roleName: 'roleName',
      roleSource: 'roleSource',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      authorizeUrl: 'string',
      roleName: 'string',
      roleSource: 'string',
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

export class GetWorkspaceAcrRamAuthorizeUrlResponseBody extends $dara.Model {
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
   * The response data.
   */
  data?: GetWorkspaceAcrRamAuthorizeUrlResponseBodyData;
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
   * 12345678-1234-1234-1234-123456789012
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
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
      data: GetWorkspaceAcrRamAuthorizeUrlResponseBodyData,
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

