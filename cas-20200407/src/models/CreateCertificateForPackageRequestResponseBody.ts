// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCertificateForPackageRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate application order.
   * 
   * >  You can use the ID to query the status of the certificate application order. For more information, see [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html).
   * 
   * @example
   * 2021010
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5890029B-938A-589E-98B9-3DEC7BA7C400
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

