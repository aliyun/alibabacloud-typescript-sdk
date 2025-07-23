// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCsrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the CSR.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST----- ...... -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The unique identifier of the CSR. You can use this value to obtain the content of the CSR. For more information about the operation that you can call to obtain the content of a CSR, see [GetCsrDetail](https://help.aliyun.com/document_detail/2709720.html).
   * 
   * @example
   * 3365
   */
  csrId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      csrId: 'CsrId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      csrId: 'number',
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

