// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVendorResponseBody extends $dara.Model {
  /**
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****。
   */
  requestId?: string;
  /**
   * @example
   * vd-qlsw5eocx94w9。
   */
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vendorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

