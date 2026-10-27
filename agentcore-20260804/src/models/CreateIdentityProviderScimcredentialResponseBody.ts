// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityProviderSCIMCredentialResponseBodyDataConfiguration extends $dara.Model {
  /**
   * @remarks
   * The URL configured for the external provisioning system. The presence of an address does not mean that the external configuration is completed or AC synchronization is enabled.
   * 
   * @example
   * https://example.com/scim/v2
   */
  baseUrl?: string;
  /**
   * @remarks
   * The AgentIdentity reception status. Enabled indicates that SCIM reception is enabled, and Disabled indicates that it is disabled. This is not equivalent to the expected value of syncEnabled in AC.
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

export class CreateIdentityProviderSCIMCredentialResponseBodyDataCredential extends $dara.Model {
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
   * The credential ID. It must be non-empty when deleting a credential. Use the ID returned in the credential list, not the plaintext token.
   * 
   * @example
   * credential-example
   */
  credentialId?: string;
  /**
   * @remarks
   * The expiration time returned by AgentIdentity. Only credentials that are Enabled and have not expired are considered available.
   * 
   * @example
   * 2027-10-26T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The AgentIdentity credential status. Only credentials that are Enabled and have not expired are considered available. This field is not the operationStatus of a SCIM task.
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

export class CreateIdentityProviderSCIMCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AgentIdentity reception configuration. The actual SAML configuration is read back on demand only in GetIdentityProvider. SCIM queries and preparations return the actual reception status and URL.
   */
  configuration?: CreateIdentityProviderSCIMCredentialResponseBodyDataConfiguration;
  /**
   * @remarks
   * The current credential summary, including credentialId, status, createTime, and expireTime. It does not include the token, which cannot be retrieved repeatedly.
   */
  credential?: CreateIdentityProviderSCIMCredentialResponseBodyDataCredential;
  /**
   * @remarks
   * The token. The plaintext is returned only when a new credential is created. It is null when prepare reuses a valid credential. It cannot be retrieved again from the list. If the response is lost, query the list first instead of automatically re-issuing it. Do not write it to logs or frontend persistent cache.
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
      configuration: CreateIdentityProviderSCIMCredentialResponseBodyDataConfiguration,
      credential: CreateIdentityProviderSCIMCredentialResponseBodyDataCredential,
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

export class CreateIdentityProviderSCIMCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business result code. Combine it with the HTTP status and message for handling upon failure.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The operation result. For the result structure, see the response fields of this operation. The response of an asynchronous write operation indicates that the request is accepted, but does not guarantee that the background task is completed.
   */
  data?: CreateIdentityProviderSCIMCredentialResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the current request. It is not equivalent to the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Task result message, indicating request acceptance or an error. For asynchronous tasks, check task results by using the corresponding query operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It is used to associate the current call with troubleshooting. Keep it when a failure occurs.
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current request is successful. A value of true indicates that the request is processed successfully. For asynchronous writes, you still need to continue querying the task results.
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
      data: CreateIdentityProviderSCIMCredentialResponseBodyData,
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

