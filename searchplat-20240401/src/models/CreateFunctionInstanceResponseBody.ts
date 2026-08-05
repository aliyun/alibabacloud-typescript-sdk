// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFunctionInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * not found
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the business request is successful. A non-empty value other than 200 indicates a business processing failure.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The latency score.
   * 
   * @example
   * 145.411
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BA0504F-B179-586D-8210-A7C7C09A9907
   */
  requestId?: string;
  /**
   * @remarks
   * The request status.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpCode: 'httpCode',
      latency: 'latency',
      message: 'message',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
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

