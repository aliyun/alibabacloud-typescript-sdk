// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHealthCheckUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The health check URL.
   * 
   * @example
   * http://127.0.0.1:8080/_ehc.html
   */
  healthCheckURL?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D16979DC-4D42-*****************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      healthCheckURL: 'HealthCheckURL',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      healthCheckURL: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

