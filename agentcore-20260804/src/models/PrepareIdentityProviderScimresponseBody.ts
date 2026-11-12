// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepareIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
  /**
   * @remarks
   * The URL configured for the external provisioning system. The presence of a URL does not indicate that the external configuration is completed or that AgentCore synchronization is enabled.
   * 
   * @example
   * https://example.com/scim/v2
   */
  baseUrl?: string;
  /**
   * @remarks
   * The receiving status of AgentIdentity. A value of Enabled indicates that SCIM receiving is enabled. A value of Disabled indicates that SCIM receiving is disabled. This value is not equivalent to the expected value of syncEnabled in AgentCore.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'baseUrl',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepareIdentityProviderSCIMResponseBodyDataCredential extends $dara.Model {
  /**
   * @remarks
   * The creation time returned by AgentIdentity.
   * 
   * @example
   * 2026-10-26T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The credential ID. This parameter is required and cannot be empty when you delete a credential. Use the ID returned in the credential list, not the plaintext of the token.
   * 
   * @example
   * credential-example
   */
  credentialId?: string;
  /**
   * @remarks
   * The expiration time returned by AgentIdentity. Only credentials with the status of Enabled that have not expired are considered available.
   * 
   * @example
   * 2027-10-26T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The credential status of AgentIdentity. Only credentials with the status of Enabled that have not expired are considered available. This field is not the operationStatus of the SCIM task.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      credentialId: 'credentialId',
      expireTime: 'expireTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      credentialId: 'string',
      expireTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepareIdentityProviderSCIMResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AgentIdentity receiving configuration. The actual SAML configuration is read on demand only by calling GetIdentityProvider. SCIM query and preparation operations return the actual receiving status and URL.
   */
  configuration?: PrepareIdentityProviderSCIMResponseBodyDataConfiguration;
  /**
   * @remarks
   * The summary of the current credential, including credentialId, status, createTime, and expireTime. It does not include the token.
   */
  credential?: PrepareIdentityProviderSCIMResponseBodyDataCredential;
  /**
   * @remarks
   * The plaintext of the newly issued SCIM token, which is returned only in the current response. If an existing valid credential is reused, an empty string ("") is returned. In this case, use the saved token.
   * 
   * @example
   * example-scim-token
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      credential: 'credential',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: PrepareIdentityProviderSCIMResponseBodyDataConfiguration,
      credential: PrepareIdentityProviderSCIMResponseBodyDataCredential,
      token: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepareIdentityProviderSCIMResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business code. If the request fails, troubleshoot the issue based on the HTTP status code and the message.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The operation result. For the result structure, see the response parameters of this operation. For asynchronous write operations, the response indicates that the request is accepted and does not guarantee that the background task is completed.
   */
  data?: PrepareIdentityProviderSCIMResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the request. This code indicates the processing status of the current request and does not represent the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned when the request is accepted or a fault occurs. Verify the asynchronous node result by calling the corresponding query operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Retain this ID for troubleshooting if the request fails.
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates that the request was successful. For asynchronous write operations, you must continue to query the task results.
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
      data: PrepareIdentityProviderSCIMResponseBodyData,
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

