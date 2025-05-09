// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProxyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * InvalidParameterValid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * the instance proxy already exists.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the secure access proxy.
   * 
   * @example
   * 4**
   */
  proxyId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FFD154E-F57F-5374-B568-D6276F15****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      proxyId: 'ProxyId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      proxyId: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

