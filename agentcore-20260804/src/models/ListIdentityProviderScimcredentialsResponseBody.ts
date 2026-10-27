// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProviderSCIMCredentialsResponseBodyData extends $dara.Model {
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
   * The expiration time returned by AgentIdentity. Only credentials with a status of Enabled that have not expired are considered available.
   * 
   * @example
   * 2027-10-26T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The credential status of AgentIdentity. Only credentials with a status of Enabled that have not expired are considered available. This field is not the operationStatus of a SCIM task.
   * 
   * @example
   * READY
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

export class ListIdentityProviderSCIMCredentialsResponseBody extends $dara.Model {
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
   * The operation result. For the result structure, see the response fields of this operation. For asynchronous write operations, the response indicates that the request is accepted, but does not guarantee that the background task is completed.
   */
  data?: ListIdentityProviderSCIMCredentialsResponseBodyData[];
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
   * Task result message, which indicates that the request is accepted or contains an error message. For task results of asynchronous tasks, check the corresponding query operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to associate the current call with troubleshooting. Retain this ID if the request fails.
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current request is successful. A value of true indicates that the request is processed successfully. For asynchronous write operations, you still need to query the task results.
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
      data: { 'type': 'array', 'itemType': ListIdentityProviderSCIMCredentialsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

