// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsHiveJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The data returned for the workload.
   * 
   * @example
   * -
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The additional information about the result. Valid values:
   * - If the request was successful, **Success** is returned.
   * - If the request failed, the specific error code is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2895BB82-B2C1-408E-AA73-DB8D59******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - **True**: The request was successful.
   * - **False**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'string',
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

