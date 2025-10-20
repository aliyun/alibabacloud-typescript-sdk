// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBrandResponseBody extends $dara.Model {
  /**
   * @example
   * brand_xxxx
   */
  brandId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      brandId: 'BrandId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandId: 'string',
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

