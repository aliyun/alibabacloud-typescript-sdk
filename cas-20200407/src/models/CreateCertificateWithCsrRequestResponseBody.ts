// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCertificateWithCsrRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate application order.
   * 
   * >  You can use the ID to query the status of the certificate application. For more information, see [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html).
   * 
   * @example
   * 98987582437920968
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
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

