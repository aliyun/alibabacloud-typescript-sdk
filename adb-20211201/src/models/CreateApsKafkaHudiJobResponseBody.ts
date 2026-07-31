// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsKafkaHudiJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The same as the HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the created task.
   * 
   * @example
   * xxx
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
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
   * 1A943417-5B0E-1DB9-A8**-A566****C3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * True: The request was successful. False: The request failed.
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

