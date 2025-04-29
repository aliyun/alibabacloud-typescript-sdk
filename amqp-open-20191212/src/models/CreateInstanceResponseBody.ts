// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request is successful.
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
   * The returned message.
   * 
   * @example
   * xxx failed,xxxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues. This parameter is a common parameter.
   * 
   * @example
   * CCBB1225-C392-480E-8C7F-D09AB2CD2***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

