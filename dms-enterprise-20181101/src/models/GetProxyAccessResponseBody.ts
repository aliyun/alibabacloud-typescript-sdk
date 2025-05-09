// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProxyAccessResponseBodyProxyAccess } from "./GetProxyAccessResponseBodyProxyAccess";


export class GetProxyAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UserNotExist
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The specified user not exists.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The authorization information about the secure access proxy feature.
   */
  proxyAccess?: GetProxyAccessResponseBodyProxyAccess;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3CDB8601-AD74-4A47-8114-08E08CD6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      proxyAccess: 'ProxyAccess',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      proxyAccess: GetProxyAccessResponseBodyProxyAccess,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.proxyAccess && typeof (this.proxyAccess as any).validate === 'function') {
      (this.proxyAccess as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

