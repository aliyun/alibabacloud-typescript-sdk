// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceForModifyDesktopOversoldGroupSaleResponseBodyData extends $dara.Model {
  price?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceForModifyDesktopOversoldGroupSaleResponseBody extends $dara.Model {
  data?: DescribePriceForModifyDesktopOversoldGroupSaleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribePriceForModifyDesktopOversoldGroupSaleResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

