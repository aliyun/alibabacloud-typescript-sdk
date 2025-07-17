// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallManagedPrometheusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful. If another status code is returned, the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response content. The status of the Prometheus instance is returned.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The error message that is returned if the request fails.
   * 
   * @example
   * vpcId is blank
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A0CEDF1-06FE-44AC-8E21-21A5BE65****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the Prometheus instance was removed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
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

