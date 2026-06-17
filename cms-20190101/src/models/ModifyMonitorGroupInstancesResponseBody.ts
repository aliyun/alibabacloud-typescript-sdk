// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMonitorGroupInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FEC7EDB3-9B08-4AC0-A42A-329F5D14B95A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. A value of true indicates a success. A value of false indicates a failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

