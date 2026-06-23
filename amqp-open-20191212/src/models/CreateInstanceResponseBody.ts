// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the created instance.
   * 
   * @example
   * amqp-cn-xxxxx
   */
  data?: any;
  /**
   * @remarks
   * A message providing additional details about the response.
   * 
   * @example
   * xxx failed,xxxx
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request. This is a common parameter used for troubleshooting.
   * 
   * @example
   * CCBB1225-C392-480E-8C7F-D09AB2CD2***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: 'any',
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

