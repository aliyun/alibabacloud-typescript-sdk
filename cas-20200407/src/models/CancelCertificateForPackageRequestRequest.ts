// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCertificateForPackageRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * 
   * >  You can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123451222
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

