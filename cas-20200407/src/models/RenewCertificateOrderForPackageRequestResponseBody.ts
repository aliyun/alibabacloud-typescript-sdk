// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewCertificateOrderForPackageRequestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate application order that is renewed.
   * 
   * >  You can use the ID to query the status of the certificate application order. For more information, see [DescribeCertificateState](https://help.aliyun.com/document_detail/164111.html).
   * 
   * @example
   * 323451222
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 082FAB35-6AB9-4FD5-8750-D36673548E76
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

