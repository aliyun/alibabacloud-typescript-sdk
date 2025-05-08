// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayServiceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The value 200 indicates that the request is successfully processed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the gateway service.
   * 
   * @example
   * 330
   */
  data?: number;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BA4046B6-CFC6-583C-B608-DD75011A590F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
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
      code: 'number',
      data: 'number',
      httpStatusCode: 'number',
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

