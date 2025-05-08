// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNacosConfigResponseBodyConfiguration } from "./GetNacosConfigResponseBodyConfiguration";


export class GetNacosConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Configuration information.
   */
  configuration?: GetNacosConfigResponseBodyConfiguration;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * Message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B4EAB48C-BB4B-5B8D-B33B-35D69606C5AD
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request, with values as follows:
   * - `true`: The request was successful.
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: GetNacosConfigResponseBodyConfiguration,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

