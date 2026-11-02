// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCertificateForPackageRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The order ID.
   * > You can obtain the ID by calling the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
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

