// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVendorResponseBody extends $dara.Model {
  requestId?: string;
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

