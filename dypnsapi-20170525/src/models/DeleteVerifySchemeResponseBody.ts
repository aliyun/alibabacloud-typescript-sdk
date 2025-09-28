// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVerifySchemeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request is successful. For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
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
   * E3754956-D0B1-5947-962A-AE767D354F01
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the operation. Valid values:
   * 
   * *   **true**: The verification service is deleted.
   * *   **false**: The verification service failed to be deleted.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

