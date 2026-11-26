// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The number of successfully appended records.
   * 
   * @example
   * 10
   */
  data?: number;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
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
      data: 'number',
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

