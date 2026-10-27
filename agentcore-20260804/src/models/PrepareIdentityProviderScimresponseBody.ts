// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepareIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
  /**
   * @remarks
   * The URL configured for the external provisioning system. The presence of a URL does not indicate that the external configuration is completed or that AC synchronization is enabled.
   * 
   * @example
   * https://example.com/scim/v2
   */
  baseUrl?: string;
  /**
   * @remarks
   * The AgentIdentity receiving status. Enabled indicates that SCIM receiving is enabled, and Disabled indicates that it is disabled. This status is not equivalent to the expected value of syncEnabled in AC.
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
   * The credential ID. This parameter is required and cannot be empty when you delete a credential. Use the ID returned in the credential list, not the plaintext token.
   * 
   * @example
   * credential-example
   */
  credentialId?: string;
  /**
   * @remarks
   * The expiration time returned by AgentIdentity. Only credentials that are in the Enabled state and have not expired are considered available.
   * 
   * @example
   * 2027-10-26T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The AgentIdentity credential status. Only credentials that are in the Enabled state and have not expired are considered available. This field is not the operationStatus of a SCIM task.
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
   * The AgentIdentity receiving configuration. The actual SAML configuration is read on demand only by calling GetIdentityProvider. SCIM query and prepare operations return the actual receiving status and URL.
   */
  configuration?: PrepareIdentityProviderSCIMResponseBodyDataConfiguration;
  /**
   * @remarks
   * The current credential summary, including credentialId, status, createTime, and expireTime. It does not include the repeatedly retrievable token.
   */
  credential?: PrepareIdentityProviderSCIMResponseBodyDataCredential;
  /**
   * @remarks
   * The plaintext token returned only when a new credential is created. If the prepare operation reuses a valid credential, this value is null. The token cannot be retrieved again from the list. If the response is lost, query the list first. The token is not automatically reissued. Do not write the token to logs or persistent frontend caches.
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
   * The business result code. If the request fails, handle the error based on the HTTP status code and the message.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The operation result. For the result structure, see the response fields of this API operation. For asynchronous write API operations, the response indicates that the request is accepted and does not guarantee that the background task is completed.
   */
  data?: PrepareIdentityProviderSCIMResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the current request. This code indicates the processing status of the request and is not equivalent to the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The result message, which indicates that the request is accepted or contains an error message. For asynchronous tasks, check the task result by calling the corresponding query API operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It is used to associate the current call with troubleshooting. Retain this ID if the request fails.
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current request is successful. A value of true indicates that the request is processed successfully. For asynchronous write operations, you must continue to query the task result.
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

