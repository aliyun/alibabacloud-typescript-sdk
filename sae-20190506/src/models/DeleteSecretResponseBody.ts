// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted secret.
   * 
   * @example
   * 16
   */
  secretId?: number;
  static names(): { [key: string]: string } {
    return {
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A request error.
   * 
   * - **5xx**: A server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DeleteSecretResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - The **ErrorCode** parameter is not returned if the request is successful.
   * 
   * - The **ErrorCode** parameter is returned if the request fails. For a list of error codes, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
   * 
   * - **success**: The request was successful.
   * 
   * - If the request fails, an error message is returned.
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
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the secret was successfully deleted. Valid values:
   * 
   * - **true**: The secret was deleted.
   * 
   * - **false**: The secret was not deleted.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID used to trace the request.
   * 
   * @example
   * 0a98a02315955564772843261e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteSecretResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

