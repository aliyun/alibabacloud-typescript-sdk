// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of `OK` indicates that the request was successful. For more information about other error codes, see the [error code list](https://help.aliyun.com/document_detail/109196.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned by the operation.
   * 
   * @example
   * 1
   */
  data?: string;
  /**
   * @remarks
   * The response message.
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
   * 29E058D7-4B28-55EE-BE3B-61D5AE488A9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

