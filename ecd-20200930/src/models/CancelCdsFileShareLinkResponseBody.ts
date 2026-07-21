// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCdsFileShareLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result. A value of `success` indicates success. Otherwise, an error message is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data information.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message. This parameter is not returned when Code is `success`.
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
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
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
      code: 'string',
      data: 'boolean',
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

