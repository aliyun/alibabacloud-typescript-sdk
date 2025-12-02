// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsKafkaHudiJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * Same as HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returns the ID of the created task.
   * 
   * @example
   * xxx
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code returned.
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
   * The ID of the request.
   * 
   * @example
   * 1A943417-5B0E-1DB9-A8**-A566****C3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. true: The request is successful. false: The message group failed to be unmuted.
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

