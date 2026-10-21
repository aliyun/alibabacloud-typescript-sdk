// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyWorkspaceAcrRamAuthorizationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACR Enterprise instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-1234567890abcdef
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The current attachment status of the policy for the target repository.
   * 
   * This parameter is required.
   * 
   * @example
   * UNAUTHORIZED
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * The access prerequisite status, which does not indicate Secret Ready.
   * 
   * This parameter is required.
   * 
   * @example
   * ELIGIBLE
   */
  eligibilityStatus?: string;
  /**
   * @remarks
   * The stable reason code for unauthorized or unmet conditions. This field is omitted if no reason exists.
   * 
   * @example
   * AcrRamUnauthorized
   * 
   * **if can be null:**
   * true
   */
  reasonCode?: string;
  /**
   * @remarks
   * The user-readable reason. This field is omitted if no reason exists.
   * 
   * @example
   * Authorize the Workspace role for this ACR instance.
   * 
   * **if can be null:**
   * true
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The name of the shared role selected by the backend. This field is not editable on the frontend.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunAgentCoreWorkspace-ws-1234567890abcdef12345
   */
  roleName?: string;
  /**
   * @remarks
   * The source of the shared role. This does not indicate that authorization is complete.
   * 
   * This parameter is required.
   * 
   * @example
   * WORKSPACE_SHARED
   */
  roleSource?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-1234567890abcdef12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      authorizationStatus: 'authorizationStatus',
      eligibilityStatus: 'eligibilityStatus',
      reasonCode: 'reasonCode',
      reasonMessage: 'reasonMessage',
      roleName: 'roleName',
      roleSource: 'roleSource',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      authorizationStatus: 'string',
      eligibilityStatus: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
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

export class VerifyWorkspaceAcrRamAuthorizationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   * 
   * This parameter is required.
   */
  data?: VerifyWorkspaceAcrRamAuthorizationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789012
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * This parameter is required.
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
      data: VerifyWorkspaceAcrRamAuthorizationResponseBodyData,
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

